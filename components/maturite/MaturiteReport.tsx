'use client';
import { useEffect, useRef, useState } from 'react';
import { ArrowRight, ArrowUpRight, Check, Link2, LockKeyhole, Printer, TriangleAlert } from 'lucide-react';
import { DIMENSIONS, QUESTIONS, QUESTION_IDS, ROLES, SIZES, UNKNOWN_LABEL, nextOption, questionText, sectorLabel, type Answers, type DimensionId, type Profile } from '@/lib/maturite/questions';
import { FREE_SIGNALS, MIN_ANSWERS, STAGES, encodeShare, freeDimensions, nextStage, type Result } from '@/lib/maturite/model';
import { ACTION_TEXTS, DIMENSION_TEXTS, DISCUSSION_QUESTIONS, OFFER_TEXTS, SIGNAL_TEXTS, STAGE_TEXTS, STRENGTH_TEXTS, actionLink, monthPlan } from '@/lib/maturite/report-content';
import { Logo } from '@/components/ui/brand/Logo';
import { brand, contact as althoce } from '@/lib/brand-content';
import { PlanGate, PlanGateDialog } from './MaturitePlanGate';
import type { Contact } from './sendMaturite';
import s from '@/components/roi/Calculator.module.css';
import m from './Maturite.module.css';

/** Repères d’un secteur, repris de sa page : exemples d’usages, limites, guides et cas client. */
export type SectorNote = {
  name: string; href: string; boundaries: string;
  examples: { title: string; output: string; review: string }[];
  guides: { title: string; href: string }[];
  caseStudy?: { label: string; href: string };
};

/** Radar à cinq axes. Décoratif : les mêmes valeurs sont lisibles dans la liste voisine. */
function Radar({ dims }: { dims: Result['dims'] }) {
  const cx = 180, cy = 140, radius = 96;
  const point = (index: number, ratio: number) => {
    const angle = -Math.PI / 2 + index * 2 * Math.PI / DIMENSIONS.length;
    return [cx + Math.cos(angle) * radius * ratio, cy + Math.sin(angle) * radius * ratio];
  };
  const ring = (ratio: number) => DIMENSIONS.map((_, i) => point(i, ratio).map(n => n.toFixed(1)).join(',')).join(' ');
  const shape = DIMENSIONS.map((dimension, i) => point(i, (dims[dimension.id] ?? 0) / 100).map(n => n.toFixed(1)).join(',')).join(' ');
  return <svg className={m.radar} viewBox="0 0 360 270" aria-hidden="true" focusable="false">
    {[1 / 3, 2 / 3, 1].map(ratio => <polygon key={ratio} points={ring(ratio)} fill="none" stroke="#d5e0f2" strokeWidth="1" />)}
    {DIMENSIONS.map((dimension, i) => { const [x, y] = point(i, 1); return <line key={dimension.id} x1={cx} y1={cy} x2={x} y2={y} stroke="#e3e9f3" strokeWidth="1" />; })}
    <polygon points={shape} fill="#2563eb" fillOpacity=".16" stroke="#2563eb" strokeWidth="2" strokeLinejoin="round" />
    {DIMENSIONS.map((dimension, i) => { const [x, y] = point(i, (dims[dimension.id] ?? 0) / 100); return <circle key={dimension.id} cx={x} cy={y} r="3.5" fill="#2563eb" />; })}
    {DIMENSIONS.map((dimension, i) => { const [x, y] = point(i, 1.2); return <text key={dimension.id} x={x} y={y + 4} textAnchor={Math.abs(x - cx) < 8 ? 'middle' : x > cx ? 'start' : 'end'}>{dimension.name}</text>; })}
  </svg>;
}
const ARTICLES: Record<DimensionId, string> = { cap: 'le cap', usages: 'les usages', cadre: 'le cadre', competences: 'les compétences', integration: 'l’intégration' };
/** Logo et nom, tels qu’ils apparaissent dans la navigation du site. */
function BrandMark() {
  return <span className={m.brandMark}><Logo size={30} /><b>althoce<i>.</i></b></span>;
}
/** Quatre crans : où en est une réponse sur l’échelle de la question. */
function Steps({ value }: { value: number }) {
  return <span className={m.steps} aria-hidden="true">{[0, 1, 2, 3].map(i => <i key={i} data-on={i <= value} />)}</span>;
}

export function Report({ profile, answers, result, sector, shared, unlocked, contact, heading, onReady, onUnlocked, onContact, onRestart }: {
  profile: Profile; answers: Answers; result: Result; sector?: SectorNote; shared: boolean; unlocked: boolean; contact: Contact;
  heading: React.RefObject<HTMLHeadingElement | null>; onReady: () => void; onUnlocked: (contact: Contact) => void; onContact: () => void; onRestart: () => void;
}) {
  const [copied, setCopied] = useState<'idle' | 'done' | 'failed'>('idle');
  // Le rapport est chargé à la demande : on signale son arrivée pour placer le focus sur son titre.
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(onReady, []);
  const sectorName = sectorLabel(profile);
  // L’aperçu est libre. Le résultat complet s’affiche une fois ouvert, ou quand il a été partagé par lien.
  const open = unlocked || shared;
  const sizeLabel = SIZES.find(size => size.id === profile.size)?.label;
  const roleLabel = ROLES.find(role => role.id === profile.role)?.label;
  const stage = result.stage;
  // Sans aucune dimension lisible, il n’y a ni lecture ni priorité à proposer.
  const readable = DIMENSIONS.some(dimension => result.dims[dimension.id] !== null);
  // Avant l’ouverture du plan : trois dimensions sur cinq et le premier signal.
  const locked = !open && readable;
  const freeDims = freeDimensions(result.dims);
  const signals = locked ? result.signals.slice(0, FREE_SIGNALS) : result.signals;
  const hiddenSignals = result.signals.length - signals.length;
  // La demande d’email s’ouvre d’elle-même, une seule fois, quand le défilement atteint la première partie verrouillée.
  const [gateOpen, setGateOpen] = useState(false);
  const proposed = useRef(false);
  const firstLock = useRef<HTMLLIElement>(null);
  useEffect(() => {
    if (!locked) return;
    const onScroll = () => {
      if (proposed.current || document.querySelector('dialog[open]')) return;
      const top = firstLock.current?.getBoundingClientRect().top;
      if (top !== undefined && top < innerHeight * 0.8) { proposed.current = true; setGateOpen(true); }
    };
    addEventListener('scroll', onScroll, { passive: true });
    return () => removeEventListener('scroll', onScroll);
  }, [locked]);
  async function copyLink() {
    const link = `${location.origin}${location.pathname}#resultat=${encodeShare(profile, answers)}`;
    try { await navigator.clipboard.writeText(link); setCopied('done'); } catch { setCopied('failed'); }
  }

  // Éléments du résultat complet.
  const ranked = DIMENSIONS.filter(dimension => result.dims[dimension.id] !== null).sort((a, b) => result.dims[a.id]! - result.dims[b.id]!);
  const weakest = ranked[0], strongest = ranked[ranked.length - 1];
  const first = ACTION_TEXTS[result.priorities[0]];
  const progress = nextStage(result, answers);
  const today = new Date().toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' });
  const meta = [sectorName, sizeLabel, roleLabel].filter(Boolean).join(' · ');

  return <div data-maturite-report>
    {open && <div className={m.cover}>
      <div className={m.coverTop}><BrandMark /><p>{althoce.site}<br />{althoce.email}</p></div>
      <span>Test de maturité IA</span>
      <strong>Résultat et plan d’action</strong>
      <p>{meta} · {today}</p>
    </div>}
    <header className={m.reportHeading}>
      <h2 ref={heading} tabIndex={-1}>Votre résultat</h2>
      <p className={m.reportMeta}>{meta}</p>
    </header>
    {shared && <div className={m.sharedNotice}><span>Ce résultat vous a été partagé.</span><button type="button" className={s.textButton} onClick={onRestart}>Faire le test pour ma structure</button></div>}

    {stage !== null && result.total !== null ? <>
      <div className={m.scoreHero}>
        <div>
          <span className={m.scoreLabel}>Stade {stage + 1} sur 4</span>
          <p className={m.scoreNumber}>{result.total}<span> / 100</span></p>
          <p className={m.scoreStage}>{STAGES[stage].name}</p>
          <p className={m.scoreTagline}>{STAGES[stage].tagline}</p>
        </div>
        <ol className={m.scale} aria-label="Les quatre stades de maturité">{STAGES.map((item, i) => <li key={item.name} data-current={i === stage} data-done={i < stage} aria-current={i === stage ? 'step' : undefined}>{item.name}<small>{item.min} à {item.max}</small></li>)}</ol>
      </div>
      <p className={m.diagnostic}>{STAGE_TEXTS[stage].diagnostic}</p>
      <dl className={m.stageNotes}>
        <div><dt>Ce qui se passe ensuite, en général</dt><dd>{STAGE_TEXTS[stage].next}</dd></div>
        <div><dt>La priorité à ce stade</dt><dd>{STAGE_TEXTS[stage].priority}</dd></div>
      </dl>
    </> : <div className={s.notice} role="status"><strong>Score non établi</strong>Vous avez répondu « Je ne sais pas » à {QUESTION_IDS.length - result.answered} questions sur {QUESTION_IDS.length}. Il en faut au moins {MIN_ANSWERS} renseignées, sur quatre dimensions, pour établir un score. C’est déjà un enseignement : faites préciser ces points par un associé ou un responsable d’équipe.</div>}
    {result.scored && result.unknown.length > 0 && <p className={s.hint}>Score établi sur {result.answered} réponses sur {QUESTION_IDS.length}. {result.unknown.length > 1 ? `Les ${result.unknown.length} questions sans réponse ne sont pas comptées : les faire préciser` : 'La question sans réponse n’est pas comptée : la faire préciser'} affinera le résultat.</p>}

    {open && stage !== null && weakest && <section className={`${m.block} ${m.keep}`} aria-labelledby="maturite-summary-title">
      <h3 id="maturite-summary-title">L’essentiel en trois messages</h3>
      <p className={m.blockLead}>À reprendre tel quel avec vos associés ou votre équipe.</p>
      <ol className={m.summary}>
        <li><strong>Où vous en êtes</strong><p>Stade {stage + 1} sur 4 : {STAGES[stage].name}. {STAGES[stage].tagline}</p></li>
        <li><strong>Ce qui tient, ce qui manque</strong><p>{result.dims[strongest.id] === result.dims[weakest.id]
          ? `Vos dimensions évaluées sont au même niveau (${result.dims[weakest.id]} sur 100) : aucune ne tire les autres.`
          : `Votre point le plus solide : ${ARTICLES[strongest.id]} (${result.dims[strongest.id]} sur 100). Le plus fragile : ${ARTICLES[weakest.id]} (${result.dims[weakest.id]} sur 100). ${DIMENSION_TEXTS[weakest.id][result.bands[weakest.id]!].reading}`}</p></li>
        <li><strong>Par où commencer</strong><p>{first.title}. {first.why}</p></li>
      </ol>
    </section>}

    {readable && <>
    <section className={m.block} aria-labelledby="maturite-dims-title">
      <h3 id="maturite-dims-title">Cinq dimensions</h3>
      <div className={locked ? undefined : m.dimLayout} style={locked ? { marginTop: 20 } : undefined}>
        {!locked && <Radar dims={result.dims} />}
        <ul className={m.dimList}>{DIMENSIONS.map((dimension, i) => {
          const score = result.dims[dimension.id], band = result.bands[dimension.id];
          if (locked && !freeDims.includes(dimension.id)) return <li key={dimension.id} ref={DIMENSIONS.findIndex(item => !freeDims.includes(item.id)) === i ? firstLock : undefined} className={m.dimLocked}>
            <div className={m.dimTop}><strong>{dimension.name}<small>{dimension.label}</small></strong><span className={m.lockTag}><LockKeyhole size={13} strokeWidth={2} aria-hidden="true" />Dans votre plan</span></div>
            <div className={m.dimBar} aria-hidden="true" />
          </li>;
          return <li key={dimension.id}>
            <div className={m.dimTop}><strong>{dimension.name}<small>{dimension.label}</small></strong><span>{score === null ? <small>Non évalué</small> : <>{score}<small> / 100</small></>}</span></div>
            <div className={m.dimBar} role="img" aria-label={score === null ? `${dimension.name} : non évalué` : `${dimension.name} : ${score} sur 100`}><i style={{ width: `${score ?? 0}%` }} /></div>
            {band ? <><p>{DIMENSION_TEXTS[dimension.id as DimensionId][band].reading}</p>{open && <p className={m.dimStep}><b>Prochain pas.</b> {DIMENSION_TEXTS[dimension.id as DimensionId][band].step}</p>}</> : <p>Trop peu de réponses pour lire cette dimension.</p>}
          </li>;
        })}</ul>
      </div>
      {locked && <button type="button" className={`${s.secondary} ${m.unlock} ${s.noPrint}`} onClick={() => setGateOpen(true)}><LockKeyhole size={15} strokeWidth={2} aria-hidden="true" />Voir mes cinq dimensions</button>}
    </section>

    {open && progress && progress.levers.length > 0 && <section className={m.block} aria-labelledby="maturite-levers-title">
      <h3 id="maturite-levers-title">{progress.target !== null ? 'Ce qui vous sépare du stade suivant' : 'Ce qu’il reste à consolider'}</h3>
      <p className={m.blockLead}>{progress.target !== null
        ? `Il vous manque ${progress.gap} point${progress.gap > 1 ? 's' : ''} pour atteindre le stade ${progress.target + 1}, « ${STAGES[progress.target].name} ». Les évolutions qui comptent le plus :`
        : 'Vous êtes au dernier stade. Les évolutions qui restent à votre portée :'}</p>
      <ol className={m.levers}>{progress.levers.map(lever => { const question = QUESTIONS.find(item => item.id === lever.id)!, shown = questionText(question, profile.size); return <li key={lever.id}>
        <strong>{question.topic}</strong>
        <div className={m.leverMove}><p><small>Aujourd’hui</small>{shown.opts[lever.from]}</p><ArrowRight size={16} aria-hidden="true" /><p><small>Étape suivante</small>{shown.opts[lever.to]}</p></div>
      </li>; })}</ol>
      <p className={s.hint}>Ensemble, ces évolutions représentent environ {progress.gain} point{progress.gain > 1 ? 's' : ''}.{(result.bands.cadre === 'low' || result.bands.usages === 'low') ? ' Relier l’IA à vos outils viendra ensuite : le cadre et les usages passent d’abord.' : ''}</p>
    </section>}

    <section className={m.block} aria-labelledby="maturite-signals-title">
      <h3 id="maturite-signals-title">Ce que vos réponses révèlent</h3>
      {signals.length > 0 ? <div className={m.signals}>{signals.map(id => { const item = SIGNAL_TEXTS[id]; return <article key={id} className={m.signal}>
        <h4><TriangleAlert size={17} strokeWidth={2} aria-hidden="true" />{item.title}</h4>
        <p>{item.finding} {item.effect}</p>
        {open && <p className={m.signalStep}><b>Premier pas.</b> {item.step}</p>}
      </article>; })}</div> : <p className={m.noSignal}>Aucun déséquilibre marqué entre vos dimensions.</p>}
      {hiddenSignals > 0 && <p className={m.lockedLine}><LockKeyhole size={14} strokeWidth={2} aria-hidden="true" />{hiddenSignals > 1 ? `${hiddenSignals} autres points relevés` : 'Un autre point relevé'} dans votre plan d’action.</p>}
      {result.strengths.length > 0 && <ul className={m.strengths} aria-label="Vos points d’appui">{result.strengths.map(id => <li key={id}><Check size={16} strokeWidth={2.5} aria-hidden="true" /><div><strong>{STRENGTH_TEXTS[id].title}</strong><span>{STRENGTH_TEXTS[id].text}</span></div></li>)}</ul>}
    </section>

    {!open && <PlanGate profile={profile} answers={answers} result={result} contact={contact} onUnlocked={onUnlocked} onContact={onContact} />}
    {locked && gateOpen && <PlanGateDialog profile={profile} answers={answers} result={result} contact={contact} onUnlocked={onUnlocked} onClose={() => setGateOpen(false)} />}
    {open && <>
    <section className={m.block} aria-labelledby="maturite-priorities-title">
      <h3 id="maturite-priorities-title">Vos trois priorités</h3>
      <p className={m.blockLead}>Dans l’ordre. Chaque fiche se déplie : quatre étapes, le résultat attendu et le piège à éviter.</p>
      <div className={m.sheets}>{result.priorities.map((id, i) => { const item = ACTION_TEXTS[id], link = actionLink(id, profile.size, result.sensitive); return <details key={id} className={m.sheet} open={i === 0}>
        <summary><span className={m.sheetNumber} aria-hidden="true">{i + 1}</span><span><strong>{item.title}</strong><small>{item.text}</small></span><span className={m.sheetToggle} aria-hidden="true">+</span></summary>
        <div>
          <p className={m.sheetWhy}>{item.why}</p>
          <ol className={m.sheetSteps}>{item.steps.map(step => <li key={step}>{step}</li>)}</ol>
          <dl className={m.sheetFacts}>
            <div><dt>Résultat attendu</dt><dd>{item.outcome}</dd></div>
            <div><dt>Délai indicatif</dt><dd>{item.horizon}</dd></div>
            <div><dt>Piège à éviter</dt><dd>{item.pitfall}</dd></div>
          </dl>
          <a className={m.inlineLink} href={link.href}>{link.label}<ArrowUpRight size={15} aria-hidden="true" /></a>
        </div>
      </details>; })}</div>
    </section>

    <section className={m.block} aria-labelledby="maturite-month-title">
      <h3 id="maturite-month-title">Vos 30 premiers jours</h3>
      <p className={m.blockLead}>Un rythme indicatif, à adapter à votre activité.</p>
      <ol className={m.month}>{monthPlan(result.priorities).map(week => <li key={week.week}>
        <small>Semaine {week.week}</small><strong>{week.title}</strong>
        <ul>{week.items.map(item => <li key={item}>{item}</li>)}</ul>
      </li>)}</ol>
      <p className={s.hint}>Au-delà de ce premier mois, une feuille de route se construit avec vos équipes, vos outils et vos contraintes.</p>
    </section>

    <section className={m.block} aria-labelledby="maturite-offers-title">
      <h3 id="maturite-offers-title">L’accompagnement adapté</h3>
      <div className={m.offers}>{result.offers.map((id, i) => { const offer = OFFER_TEXTS[id]; return <a key={id} className={m.offer} data-primary={i === 0} href={offer.href}>
        {i === 0 && <span className={m.offerTag}>Recommandé pour vous</span>}
        <strong>{offer.title}</strong><p>{offer.text}</p><small>{offer.format}</small>
        <span className={m.offerLink}>Découvrir<ArrowUpRight size={15} aria-hidden="true" /></span>
      </a>; })}</div>
      <p className={s.hint}>Chaque accompagnement est indépendant : une formation peut être engagée directement, sans diagnostic préalable.</p>
    </section>
    </>}

    </>}

    {open && sector && <section className={m.sector} aria-labelledby="maturite-sector-title">
      <h3 id="maturite-sector-title">Dans votre secteur : {sector.name}</h3>
      <p className={m.blockLead}>Trois usages à étudier, avec ce que prépare l’agent et ce qui reste entre vos mains.</p>
      <ul className={m.sectorExamples}>{sector.examples.map(example => <li key={example.title}>
        <strong>{example.title}</strong>
        <p>{example.output}</p>
        <p className={m.sectorReview}><b>Contrôle humain.</b> {example.review}</p>
      </li>)}</ul>
      <p>{sector.boundaries}</p>
      <div className={m.sectorLinks}>
        <a className={m.inlineLink} href={sector.href}>Voir les usages de l’IA dans votre secteur<ArrowUpRight size={15} aria-hidden="true" /></a>
        {sector.caseStudy && <a className={m.inlineLink} href={sector.caseStudy.href}>{sector.caseStudy.label}<ArrowUpRight size={15} aria-hidden="true" /></a>}
        {sector.guides.map(guide => <a key={guide.href} className={m.inlineLink} href={guide.href} target="_blank" rel="noopener noreferrer">Guide : {guide.title}<ArrowUpRight size={15} aria-hidden="true" /></a>)}
      </div>
    </section>}

    {open && <details className={`${s.formula} ${m.answers}`}>
      <summary>Vos réponses, point par point <span aria-hidden="true">+</span></summary>
      <div>
        <p className={s.hint}>Pour chaque sujet : votre situation aujourd’hui, et l’étape à viser ensuite.</p>
        {DIMENSIONS.map(dimension => <section key={dimension.id} className={m.answerGroup} aria-label={dimension.name}>
          <h4>{dimension.name}<small>{dimension.label}</small></h4>
          <ul>{QUESTIONS.filter(question => question.dim === dimension.id).map(question => { const value = answers[question.id] ?? -1, shown = questionText(question, profile.size); return <li key={question.id}>
            <div className={m.answerTop}><strong>{question.topic}</strong>{value >= 0 && <Steps value={value} />}</div>
            <div className={m.answerMove}>
              <p><small>Aujourd’hui</small>{value === -1 ? UNKNOWN_LABEL : shown.opts[value]}</p>
              <p className={m.answerNext}><small>Étape suivante</small>{value === -1 ? 'À faire préciser en interne.' : value === 3 ? 'Vous êtes au cran le plus avancé sur ce point.' : shown.opts[nextOption(question, value)]}</p>
            </div>
          </li>; })}</ul>
        </section>)}
      </div>
    </details>}

    {open && readable && <section className={m.block} aria-labelledby="maturite-questions-title">
      <h3 id="maturite-questions-title">Cinq questions à vous poser en interne</h3>
      <p className={m.blockLead}>En commençant par vos dimensions les plus fragiles.</p>
      <ol className={m.questions}>{[...ranked, ...DIMENSIONS.filter(dimension => result.dims[dimension.id] === null)].map(dimension => <li key={dimension.id}><small>{dimension.name}</small>{DISCUSSION_QUESTIONS[dimension.id]}</li>)}</ol>
    </section>}

    <details className={`${s.formula} ${m.method}`}>
      <summary>Comment ce résultat est-il calculé ? <span aria-hidden="true">+</span></summary>
      <div>
        <dl>
          <dt>Quatre situations par question</dt><dd>De la moins avancée à la plus avancée, notées de 0 à 3. « Je ne sais pas » n’est pas compté.</dd>
          <dt>Cinq dimensions sur 100</dt><dd>Chaque dimension est la moyenne de ses trois questions. Elle se lit sur au moins deux réponses.</dd>
          <dt>Pondération</dt><dd>{DIMENSIONS.map(dimension => `${dimension.name} ${result.weights[dimension.id]} %`).join(' · ')}.{result.sensitive ? ' Dans votre secteur, le cadre pèse davantage que l’intégration.' : ''}</dd>
          <dt>Quatre stades</dt><dd>{STAGES.map(item => `${item.name} : ${item.min} à ${item.max}`).join(' · ')}.</dd>
        </dl>
        <p className={s.hint}>Cette auto-évaluation repose sur vos déclarations. Elle situe et ouvre la discussion ; elle ne remplace pas un diagnostic mené avec vos équipes et vos outils.</p>
      </div>
    </details>

    {!shared && (open || !readable) && <section className={`${s.contactCta} ${s.noPrint}`}>
      <div><h3>Confrontons ce résultat<br />à votre réalité.</h3><p>Ensemble, vérifions vos priorités, vos contraintes de confidentialité et le premier pas utile pour votre équipe.</p></div>
      <button className={s.primary} type="button" onClick={onContact}>Parler de mon résultat <ArrowUpRight size={18} aria-hidden="true" /></button>
      <span>Premier échange de 30 minutes offert. Sans engagement.</span>
    </section>}
    {open && <>
    {/* Coordonnées : toujours dans le PDF ; à l’écran pour qui a reçu le résultat par lien et n’a pas le bouton d’échange. */}
    <section className={m.contactCard} data-screen={shared} aria-label="Contacter Althoce">
      <div><BrandMark /><p>{brand.title}</p></div>
      <div><strong>Parlons de votre résultat.</strong><p>Un premier échange de 30 minutes, offert et sans engagement, pour confronter ce résultat à votre réalité.</p></div>
      <address>
        <a href={`mailto:${althoce.email}`}>{althoce.email}</a>
        <a href="/contact/">{althoce.site}/contact</a>
        <span>{althoce.company} · {althoce.street}, {althoce.city}</span>
        <span>{althoce.hours}</span>
      </address>
      <p className={`${m.printOnly} ${m.contactDate}`}>Auto-évaluation réalisée le {today} sur althoce.com/test-maturite-ia/.</p>
    </section>
    <div className={`${m.actions} ${s.noPrint}`}>
      <button type="button" onClick={() => window.print()}><Printer size={16} aria-hidden="true" />Imprimer ou enregistrer en PDF</button>
      <button type="button" onClick={copyLink}><Link2 size={16} aria-hidden="true" />{copied === 'done' ? 'Lien copié' : 'Copier le lien du résultat'}</button>
    </div>
    </>}
    <p className={`${s.srOnly}`} role="status">{copied === 'done' ? 'Le lien de votre résultat est copié.' : copied === 'failed' ? 'La copie a échoué. Utilisez l’impression pour partager votre résultat.' : ''}</p>
    {copied === 'failed' && <p className={`${s.error} ${s.noPrint}`} style={{ textAlign: 'center' }}>La copie a échoué. Utilisez l’impression pour partager votre résultat.</p>}
  </div>;
}

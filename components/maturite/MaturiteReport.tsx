'use client';
import { useEffect, useState } from 'react';
import { ArrowUpRight, Check, Link2, Printer, TriangleAlert } from 'lucide-react';
import { DIMENSIONS, QUESTION_IDS, ROLES, SIZES, sectorLabel, type Answers, type DimensionId, type Profile } from '@/lib/maturite/questions';
import { MIN_ANSWERS, STAGES, encodeShare, type Result } from '@/lib/maturite/model';
import { ACTION_TEXTS, DIMENSION_TEXTS, OFFER_TEXTS, SIGNAL_TEXTS, STAGE_TEXTS, STRENGTH_TEXTS, actionLink } from '@/lib/maturite/report-content';
import { PlanGate } from './MaturitePlanGate';
import type { Contact } from './sendMaturite';
import s from '@/components/roi/Calculator.module.css';
import m from './Maturite.module.css';

export type SectorNote = { name: string; href: string; boundaries: string; examples: string[] };

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

export function Report({ profile, answers, result, sector, shared, unlocked, contact, heading, onReady, onUnlocked, onContact, onRestart }: {
  profile: Profile; answers: Answers; result: Result; sector?: SectorNote; shared: boolean; unlocked: boolean; contact: Contact;
  heading: React.RefObject<HTMLHeadingElement | null>; onReady: () => void; onUnlocked: (contact: Contact) => void; onContact: () => void; onRestart: () => void;
}) {
  const [copied, setCopied] = useState<'idle' | 'done' | 'failed'>('idle');
  // Le rapport est chargé à la demande : on signale son arrivée pour placer le focus sur son titre.
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(onReady, []);
  const sectorName = sectorLabel(profile);
  // Le constat est libre. Le plan d’action s’affiche une fois ouvert, ou quand le résultat a été partagé par lien.
  const open = unlocked || shared;
  const sizeLabel = SIZES.find(size => size.id === profile.size)?.label;
  const roleLabel = ROLES.find(role => role.id === profile.role)?.label;
  const stage = result.stage;
  // Sans aucune dimension lisible, il n’y a ni lecture ni priorité à proposer.
  const readable = DIMENSIONS.some(dimension => result.dims[dimension.id] !== null);
  async function copyLink() {
    const link = `${location.origin}${location.pathname}#resultat=${encodeShare(profile, answers)}`;
    try { await navigator.clipboard.writeText(link); setCopied('done'); } catch { setCopied('failed'); }
  }
  return <div data-maturite-report>
    <header className={m.reportHeading}>
      <h2 ref={heading} tabIndex={-1}>Votre résultat</h2>
      <p className={m.reportMeta}>{[sectorName, sizeLabel, roleLabel].filter(Boolean).join(' · ')}</p>
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

    {readable && <>
    <section className={m.block} aria-labelledby="maturite-dims-title">
      <h3 id="maturite-dims-title">Cinq dimensions</h3>
      <div className={m.dimLayout}>
        <Radar dims={result.dims} />
        <ul className={m.dimList}>{DIMENSIONS.map(dimension => {
          const score = result.dims[dimension.id], band = result.bands[dimension.id];
          return <li key={dimension.id}>
            <div className={m.dimTop}><strong>{dimension.name}<small>{dimension.label}</small></strong><span>{score === null ? <small>Non évalué</small> : <>{score}<small> / 100</small></>}</span></div>
            <div className={m.dimBar} role="img" aria-label={score === null ? `${dimension.name} : non évalué` : `${dimension.name} : ${score} sur 100`}><i style={{ width: `${score ?? 0}%` }} /></div>
            {band ? <><p>{DIMENSION_TEXTS[dimension.id as DimensionId][band].reading}</p>{open && <p className={m.dimStep}><b>Prochain pas.</b> {DIMENSION_TEXTS[dimension.id as DimensionId][band].step}</p>}</> : <p>Trop peu de réponses pour lire cette dimension.</p>}
          </li>;
        })}</ul>
      </div>
    </section>

    <section className={m.block} aria-labelledby="maturite-signals-title">
      <h3 id="maturite-signals-title">Ce que vos réponses révèlent</h3>
      {result.signals.length > 0 ? <div className={m.signals}>{result.signals.map(id => { const item = SIGNAL_TEXTS[id]; return <article key={id} className={m.signal}>
        <h4><TriangleAlert size={17} strokeWidth={2} aria-hidden="true" />{item.title}</h4>
        <p>{item.finding} {item.effect}</p>
        {open && <p className={m.signalStep}><b>Premier pas.</b> {item.step}</p>}
      </article>; })}</div> : <p className={m.noSignal}>Aucun déséquilibre marqué entre vos dimensions.</p>}
      {result.strengths.length > 0 && <ul className={m.strengths} aria-label="Vos points d’appui">{result.strengths.map(id => <li key={id}><Check size={16} strokeWidth={2.5} aria-hidden="true" /><div><strong>{STRENGTH_TEXTS[id].title}</strong><span>{STRENGTH_TEXTS[id].text}</span></div></li>)}</ul>}
    </section>

    {!open && <PlanGate profile={profile} answers={answers} result={result} contact={contact} onUnlocked={onUnlocked} onContact={onContact} />}
    {open && <>
    <section className={m.block} aria-labelledby="maturite-priorities-title">
      <h3 id="maturite-priorities-title">Vos trois priorités</h3>
      <ol className={m.priorities}>{result.priorities.map(id => { const item = ACTION_TEXTS[id], link = actionLink(id, profile.size, result.sensitive); return <li key={id}><div>
        <strong>{item.title}</strong><p>{item.text}</p>
        <a className={m.inlineLink} href={link.href}>{link.label}<ArrowUpRight size={15} aria-hidden="true" /></a>
      </div></li>; })}</ol>
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
      <p className={m.blockLead}>Trois exemples d’usages à étudier.</p>
      <ul>{sector.examples.map(example => <li key={example}>{example}</li>)}</ul>
      <p>{sector.boundaries}</p>
      <a className={m.inlineLink} href={sector.href}>Voir les usages de l’IA dans votre secteur<ArrowUpRight size={15} aria-hidden="true" /></a>
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
    <p className={m.printOnly}>Auto-évaluation réalisée le {new Date().toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })} sur althoce.com/test-maturite-ia/.</p>
    <div className={`${m.actions} ${s.noPrint}`}>
      <button type="button" onClick={() => window.print()}><Printer size={16} aria-hidden="true" />Imprimer ou enregistrer en PDF</button>
      <button type="button" onClick={copyLink}><Link2 size={16} aria-hidden="true" />{copied === 'done' ? 'Lien copié' : 'Copier le lien du résultat'}</button>
    </div>
    </>}
    <p className={`${s.srOnly}`} role="status">{copied === 'done' ? 'Le lien de votre résultat est copié.' : copied === 'failed' ? 'La copie a échoué. Utilisez l’impression pour partager votre résultat.' : ''}</p>
    {copied === 'failed' && <p className={`${s.error} ${s.noPrint}`} style={{ textAlign: 'center' }}>La copie a échoué. Utilisez l’impression pour partager votre résultat.</p>}
  </div>;
}

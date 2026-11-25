import Image from 'next/image';
import { ArrowUpRight, Check } from 'lucide-react';
import TrustStrip from '@/components/brand/TrustStrip';
import { TextLink, PreAuditCTA, FaqSection } from '@/components/brand/Sections';
import Funding from './Funding';
import { toolTrainings, toolTrainingUrl, type ToolTraining } from '@/lib/formations-outils';
import b from '../brand/Brand.module.css';
import f from './Formation.module.css';
import s from './ToolTraining.module.css';

const facts = [
  { label: 'Parcours', value: 'Trois niveaux, du débutant à la construction' },
  { label: 'Format', value: 'En présentiel ou en visioconférence' },
  { label: 'Groupe', value: 'Jusqu’à 12 participants aux niveaux 1 et 2' },
  { label: 'Suivi', value: 'Un point à J+30 après les niveaux 1 et 2' },
];

/** Gabarit commun des pages Formation Claude, Formation ChatGPT et Formation Copilot. */
export default function ToolTrainingPage({ training: t }: { training: ToolTraining }) {
  return <main className={b.page}>
    <section className={f.hero}><div className={`${b.container} ${f.grid}`}>
      <div>
        <nav className={b.breadcrumb} aria-label="Fil d’Ariane"><a href="/">Accueil</a><span>/</span><a href="/services/formation-ia/">Formation IA</a><span>/</span><span aria-current="page">{t.title}</span></nav>
        <h1>{t.title}.<br /><span>{t.heroSpan}</span></h1>
        <p className={b.lead}>{t.chapo}</p>
        <div className={s.heroActions}>
          <a className={b.primary} href="/contact/">{t.cta.label}<ArrowUpRight size={18} aria-hidden="true" /></a>
          <a className={s.secondary} href="#niveaux">Voir les trois niveaux</a>
        </div>
      </div>
      <div className={f.photo}><Image src={t.image.src} alt={t.image.alt} fill priority sizes="(max-width:900px) 90vw, 50vw" /></div>
    </div></section>

    <TrustStrip className={b.container} />
    <div className={`${b.container} ${f.facts}`}>{facts.map(item => <div key={item.label}><strong>{item.label}</strong><p>{item.value}</p></div>)}</div>

    <section className={b.section} aria-labelledby="public-title"><div className={b.container}>
      <div className={b.sectionHeading}><h2 id="public-title">Une formation<br /><span>pour chaque rôle.</span></h2><p>Du premier usage à la construction d’agents : chacun avance à son niveau, sur des tâches de son poste.</p></div>
      <div className={s.audiences}>{t.audiences.map(a => <article key={a.title}><h3>{a.title}</h3><p>{a.text}</p></article>)}</div>
    </div></section>

    <section className={`${b.section} ${f.soft}`} id="niveaux" aria-labelledby="niveaux-title"><div className={b.container}>
      <div className={b.sectionHeading}><h2 id="niveaux-title">Trois niveaux.<br /><span>Un parcours progressif.</span></h2><p>Commencez là où en est votre équipe. Chaque niveau se suit séparément ; les deux premiers reprennent nos formats de formation métier.</p></div>
      <ol className={s.levels}>{t.levels.map((level, i) => <li key={level.title}>
        <span className={s.levelTag}>Niveau {i + 1} · {level.name}</span>
        <h3>{level.title}</h3>
        <p>{level.text}</p>
        <ul className={s.skills}>{level.skills.map(x => <li key={x}><Check size={18} aria-hidden="true" /><span>{x}</span></li>)}</ul>
        <dl className={s.levelFacts}><div><dt>Prérequis</dt><dd>{level.prereq}</dd></div><div><dt>Format</dt><dd>{level.format}</dd></div></dl>
        <a className={s.levelLink} href={level.link.href}>{level.link.label}<ArrowUpRight size={18} aria-hidden="true" /></a>
      </li>)}</ol>
    </div></section>

    <section className={b.section} aria-labelledby="cas-title"><div className={b.container}>
      <div className={b.sectionHeading}><h2 id="cas-title">Des cas pratiques<br /><span>tirés de votre métier.</span></h2><p>{t.casesIntro}</p></div>
      <div className={s.cases}>{t.cases.map(c => <article key={c.title}><div className={s.caseMeta}><span>{c.field}</span><span className={s.feature}>{c.feature}</span></div><h3>{c.title}</h3><p>{c.text}</p></article>)}</div>
      <p className={f.note}>Ces exemples sont des exercices de formation, adaptés à votre profession lors de la préparation.</p>
    </div></section>

    <section className={`${b.section} ${f.soft}`} aria-labelledby="donnees-title"><div className={`${b.container} ${f.grid}`}>
      <div className={f.photo}><Image src="/images/services/metiers-collaboration.webp" alt="Trois collègues annotent des documents imprimés autour d’une table, à côté d’un ordinateur portable." fill sizes="(max-width:900px) 90vw, 50vw" /></div>
      <div>
        <h2 id="donnees-title">Vos données.<br /><span>Vos règles.</span></h2>
        <p className={b.lead}>{t.dataIntro}</p>
        <ul className={s.dataList}>{t.dataPoints.map(x => <li key={x}><Check size={18} aria-hidden="true" /><span>{x}</span></li>)}</ul>
        <p className={f.note}>Pour comparer les offres sous l’angle du RGPD, lisez notre <a href="/blog/chatgpt-claude-mistral-rgpd-guide-2026/">grille ChatGPT, Claude et Mistral</a>. Pour les données les plus sensibles, découvrez <a href="/ia-souveraine/">La Centrale</a>, notre plateforme d’IA souveraine.</p>
      </div>
    </div></section>

    <section className={b.section} aria-labelledby="comparer-title"><div className={b.container}>
      <div className={b.sectionHeading}><h2 id="comparer-title">Claude, ChatGPT<br /><span>ou Copilot ?</span></h2><p>Notre conseil : partir de l’outil que vos équipes utilisent déjà, puis choisir selon la tâche. Le niveau 1 peut comparer les outils sur les mêmes exercices.</p></div>
      <div className={s.compare}>{toolTrainings.map(o => o.slug === t.slug
        ? <div key={o.slug} className={s.current}><span className={s.here}>Cette page</span><h3>{o.name}</h3><p>{o.choose}</p></div>
        : <a key={o.slug} href={toolTrainingUrl(o.slug)}><h3>{o.name}</h3><p>{o.choose}</p><span className={s.compareLink}>{o.title}<ArrowUpRight size={18} aria-hidden="true" /></span></a>)}
      </div>
      <p className={f.note}>Claude est un produit d’Anthropic, ChatGPT et Codex sont des produits d’OpenAI, Copilot est un produit de Microsoft. Althoce n’est affilié à aucune de ces sociétés.</p>
    </div></section>

    <section className={`${b.section} ${f.soft}`} aria-labelledby="session-title"><div className={`${b.container} ${f.grid}`}>
      <div><h2 id="session-title">Préparons une session<br /><span>adaptée à votre équipe.</span></h2><p className={b.lead}>Pour les niveaux 1 et 2 : évaluation des acquis et attestation de réalisation selon les modalités de l’organisme porteur. Les besoins d’accessibilité sont étudiés avant la session. Licences, abonnements et frais éventuels sont précisés séparément.</p></div>
      <div>
        <Funding />
        <p className={f.note}>Vous dirigez l’entreprise ? <a href="/services/formation-ia/coaching-dirigeant/">Découvrez la Formation IA Dirigeant & Associés.</a> Vous êtes indépendant ? <a href="/services/formation-ia/coaching-independant/">Le Coaching IA Solo</a> se suit en individuel, en visio.</p>
        <TextLink href="/services/formation-ia/">Découvrir tous les parcours</TextLink>
      </div>
    </div></section>

    <FaqSection id="faq" title={`Vos questions sur la ${t.title.charAt(0).toLowerCase()}${t.title.slice(1)}.`} description="Abonnement, niveaux, données et financement : les réponses pour préparer votre formation." items={t.faq} />
    <PreAuditCTA title={t.cta.title} description={t.cta.text} ctaLabel={t.cta.label} />
  </main>;
}

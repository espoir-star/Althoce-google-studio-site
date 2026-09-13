import TrustStrip from './brand/TrustStrip';
import Image from 'next/image';
import { ArrowUpRight, ArrowRight, Check } from 'lucide-react';
import { PhotoHero, TextLink, FaqSection } from './brand/Sections';
import { homeMethod } from '@/lib/home-content';
import { aboutFaqs } from '@/lib/cabinet-content';
import team from '@/public/images/home/equipe-cabinet-v2.webp';
import work from '@/public/images/home/collaboration-bureau.webp';
import b from './brand/Brand.module.css';
import s from './AboutStory.module.css';

export default function AProposPageClient() {
  return <main className={b.page}>
    <PhotoHero label="À propos" title={<>Un cabinet IA.<br /><span>Des personnes engagées.</span></>} description="Conseil, formations IA, agents IA et automatisation : Althoce accompagne les PME de A à Z, pour faire de l’IA un atout entre les mains de leurs équipes." image={team} alt="Espoir Mwami au sein d’un groupe dans un espace de travail convivial."><TextLink href="/contact/">Faisons connaissance</TextLink></PhotoHero>
    <TrustStrip className={b.container} />

    <section className={`${b.section} ${s.origin}`} aria-labelledby="histoire-title">
      <div className={`${b.container} ${s.originGrid}`}>
        <div className={s.originCopy}>
          <h2 id="histoire-title">Tout commence<br />par <span>vous écouter.</span></h2>
          <p>Un document à reprendre. Une information à chercher. Une équipe qui manque de temps.</p>
          <p>Né à Bordeaux en 2025, Althoce part de là : votre quotidien. Puis nous choisissons ensemble où l’IA peut vraiment vous aider.</p>
          <TextLink href="/services/">Trouver votre point de départ</TextLink>
        </div>
        <div className={s.listeningScene}>
          <div className={s.listeningPhoto}><Image src={work} alt="Deux collègues prennent le temps de travailler ensemble sur un sujet." fill sizes="(max-width: 900px) 90vw, 560px" placeholder="blur" /></div>
          <div className={s.questionNote}><span aria-hidden="true">“</span><p>Qu’est-ce qui vous<br />prend trop de temps ?</p></div>
        </div>
      </div>
    </section>

    <section className={s.transformation} aria-labelledby="equipes-title">
      <div className={`${b.container} ${s.trainingGrid}`}>
        <div className={s.trainingCopy}>
          <h2 id="equipes-title">Faire de vos équipes<br /><span>le moteur de la transformation.</span></h2>
          <p>L’IA prend sa place quand chacun ose s’en servir. Nos formations IA partent de vos cas réels, pour apprendre ensemble et gagner en autonomie.</p>
          <a className={s.lightLink} href="/services/formation-ia/">Découvrir nos formations IA<ArrowUpRight size={20} aria-hidden="true" /></a>
        </div>
        <div className={s.workshopPhoto}><Image src="/images/home/atelier-equipes.webp" alt="Quatre collègues apprennent ensemble autour d’un ordinateur et d’un carnet dans un bureau." fill sizes="(max-width: 900px) 100vw, 60vw" /></div>
      </div>
      <div className={`${b.container} ${s.learningPath}`} aria-label="La progression des équipes">
        <div><span>Comprendre</span><p>Des repères simples.</p></div><ArrowRight aria-hidden="true" />
        <div><span>Essayer</span><p>Vos situations réelles.</p></div><ArrowRight aria-hidden="true" />
        <div><span>S’approprier</span><p>Des équipes autonomes.</p></div>
      </div>
    </section>

    <section className={`${b.section} ${s.journey}`} aria-labelledby="methode-title">
      <div className={b.container}>
        <div className={s.journeyHeading}><h2 id="methode-title">De la première question<br /><span>aux habitudes qui restent.</span></h2><p>Un même fil conducteur,<br />du début à la suite.</p></div>
        <ol className={s.journeySteps}>{homeMethod.map(step=><li key={step.n}><span className={s.stepNumber}>{step.n}</span><h3>{step.title}</h3><p>{step.purpose}</p></li>)}</ol>
        <TextLink href="/services/">Découvrir nos accompagnements</TextLink>
      </div>
    </section>

    <section className={`${b.section} ${s.choices}`} aria-labelledby="engagements-title">
      <div className={b.container}>
        <div className={s.choicesHeading}><h2 id="engagements-title">Ce qui guide nos choix.</h2><p>Quatre exigences. À chaque projet.</p></div>
        <div className={s.values}>
          <article className={s.useful}><div className={s.focusMark} aria-hidden="true"><i /><i /><Check size={32} /></div><h3>Utile.</h3><p>La bonne solution répond à un vrai besoin. Parfois, elle est déjà dans vos outils.</p></article>
          <article className={s.clear}><div className={s.clearMark} aria-hidden="true"><span /><span /><span /></div><h3>Clair.</h3><p>Un cap partagé, un périmètre défini. Vous savez où nous allons, et pourquoi.</p></article>
          <article className={s.reliable}><div className={s.reliableMark} aria-hidden="true"><span /><span /><span /></div><h3>Fiable.</h3><p>Vos données, vos contraintes et votre cadre réglementaire guident le choix des outils.</p></article>
          <article className={s.durable}><span className={s.durationMark} aria-hidden="true">↗</span><h3>Durable.</h3><p>Nous restons à vos côtés après le déploiement : transfert, maintenance et points de suivi à 30 et 90 jours.</p></article>
        </div>
      </div>
    </section>

    <section className={`${b.section} ${s.territory}`} aria-labelledby="ancrage-title">
      <div className={`${b.container} ${s.territoryGrid}`}>
        <h2 id="ancrage-title">Bordelais d’origine.<br /><span>À vos côtés,<br />partout en France.</span></h2>
        <div className={s.territoryCopy}>
          <div className={s.reach}><span>Bordeaux</span><span className={s.reachLine} aria-hidden="true"><ArrowRight size={20} /></span><strong>Partout en France</strong></div>
          <p>Notre point d’ancrage est à Bordeaux. Nous accompagnons vos équipes sur l’ensemble du territoire français.</p>
          <div className={s.presence}><span>À distance, au quotidien.</span><span>Sur place, selon vos besoins.</span></div>
          <TextLink href="/agences/">Découvrir notre présence en France</TextLink><a className={s.bordeauxLink} href="/agence-ia-bordeaux/">Notre ancrage à Bordeaux</a>
        </div>
      </div>
      <div className={`${b.container} ${s.recognition}`}><Image src="/logos/Althoce-Activateur-francenum.png" alt="Althoce, Activateur France Num" width={66} height={60} /><p>Engagés dans la transformation<br />numérique des entreprises.</p><a href="https://www.francenum.gouv.fr/activateurs/althoce-conseil" target="_blank" rel="noopener noreferrer">Activateur France Num<ArrowUpRight size={18} aria-hidden="true" /></a></div>
    </section>
    <FaqSection id="faq-cabinet" title="Quelques repères sur Althoce." description="Le cabinet, les personnes et la suite." items={aboutFaqs} />
  </main>;
}

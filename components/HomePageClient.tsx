import TrustStrip from './brand/TrustStrip';
import { MethodSection, PreAuditCTA, FaqItem as SharedFaqItem } from './brand/Sections';
import Image from 'next/image';
import { ArrowUpRight, ArrowRight, Check, Plus } from 'lucide-react';
import {
  statsV2, agentMetiers, caseStudies,
} from '@/lib/data';
import { homeOffers, homeMethod, homeFaqs } from '@/lib/home-content';
import meetingImage from '@/public/images/home/reunion-bureau.webp';
import workingImage from '@/public/images/home/collaboration-bureau.webp';
import teamImage from '@/public/images/home/equipe-cabinet-v2.webp';
import AgentMarquee from './AgentMarquee';
import caseImage from '@/public/images/home/cas-client-bureau.webp';
import s from './HomePage.module.css';

// Server rendering and native disclosures keep content and FAQ available without JS.
function TextLink({ href, children }: { href: string; children: React.ReactNode }) {
  return <a className={s.textLink} href={href}>{children}<ArrowUpRight size={18} aria-hidden="true" /></a>;
}
function Hero() {
  return (
    <section className={s.hero} aria-labelledby="hero-h1">
      <div className={`${s.container} ${s.heroGrid}`}>
        <div className={s.heroCopy}>

          <h1 id="hero-h1">Faites de l’IA<br />un atout pour<br /><span>toute votre équipe.</span></h1>
          <p className={s.lead}>Althoce est un cabinet IA pour les PME. Nous proposons des formations IA, concevons des agents IA et automatisons vos tâches répétitives. Vos équipes gagnent en compétences, en autonomie et en temps pour leur métier.</p>
          <div className={s.actions}>
            <a className={s.primary} href="/contact/">Réserver mon pré-audit offert<ArrowUpRight size={18} aria-hidden="true" /></a>
            <a className={s.secondary} href="#method">Découvrir notre méthode<ArrowRight size={17} aria-hidden="true" /></a>
          </div>
          <p className={s.heroNote}><Check size={16} aria-hidden="true" />30 min offertes<span aria-hidden="true">·</span>Sans engagement</p>
        </div>
        <figure className={s.heroFigure}>
          <div className={s.heroPhoto}>
            <Image src={meetingImage} alt="Trois collègues échangent autour d’un projet dans un bureau lumineux." fill priority sizes="(max-width: 900px) calc(100vw - 40px), (max-width: 1280px) 48vw, 576px" placeholder="blur" />
            <div className={s.photoMessage}><p>La technologie avance.<br /><strong>Vos équipes aussi.</strong></p></div>
          </div>

        </figure>
      </div>
      <TrustStrip className={s.container} inset />
    </section>
  );
}

function Approach() {
  return (
    <section id="approche" className={s.approach} aria-labelledby="approach-title">
      <div className={`${s.container} ${s.approachGrid}`}>
        <h2 id="approach-title">Moins de tâches répétitives.<br /><span>Plus de place pour votre métier.</span></h2>
        <div><p>L’IA devient utile quand elle change vraiment votre quotidien. Nous partons de vos besoins pour construire des solutions simples, que vos équipes ont envie d’utiliser.</p><p className={s.approachSignature}>Votre façon de travailler, notre point de départ.</p></div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className={`${s.section} ${s.dark}`} aria-labelledby="services-title">
      <div className={s.container}>
        <div className={s.sectionHeading}>
          <div><h2 id="services-title">Nos services IA,<br /><span>de l’audit à l’adoption.</span></h2></div>
          <div><p>Conseil, formations IA et automatisation : un accompagnement pour faire progresser vos équipes, du premier pas au suivi quotidien.</p><TextLink href="/services/">Explorer tous nos services</TextLink></div>
        </div>
        <div className={s.offers}>{homeOffers.map((item, i) => (
          <article key={item.title} className={s.offer}>
            <span className={s.index}>0{i + 1}</span>
            <div>
              <h3>{item.title}</h3>

              <p>{item.desc}</p>

              <TextLink href={item.href}>{item.linkLabel}</TextLink>

            </div>
          </article>
        ))}</div>
      </div>
    </section>
  );
}
function AgentByJob() {
  return (
    <section id="agents" className={s.expertiseSection} aria-labelledby="jobs-title">
      <div className={s.container}>
        <div className={s.expertiseHeading}>
          <h2 id="jobs-title">Des agents IA adaptés à vos métiers.</h2>
          <TextLink href="/agent-ia/">Voir tous les agents IA</TextLink>
        </div>
        <nav className={s.expertiseLinks} aria-label="Agents IA par métier">
          {agentMetiers.map(item => <a href={item.href} key={item.href}>{item.title}<ArrowUpRight size={14} aria-hidden="true" /></a>)}
        </nav>
        <AgentMarquee />
      </div>
    </section>
  );
}
function Methodology() {
  return <MethodSection title="Comment se passe une mission avec Althoce ?" description="On avance avec vous, étape par étape. Les formations IA et la prise en main des outils donnent à vos équipes les moyens d’avancer en autonomie." steps={homeMethod} image={workingImage} alt="Deux collègues étudient un projet sur ordinateur dans un bureau." />;
}
function CaseStudies() {
  const [featured, ...others] = caseStudies;
  return (
    <section id="cases" className={s.section} aria-labelledby="cases-title"><div className={s.container}>
      <div className={s.sectionHeading}><div><h2 id="cases-title">L’IA prend tout son sens<br />sur le terrain.</h2></div><div><p>Du temps retrouvé, des équipes qui avancent. Découvrez ce qui a changé dans leur quotidien.</p><TextLink href="/cas-clients/">Voir tous les cas</TextLink></div></div>
      <div className={s.cases}><a href={featured.href} className={s.featuredCase}>
          <div className={s.casePhoto}><Image src={caseImage} alt="Deux collègues échangent sur un dossier dans un bureau comptable." fill sizes="(max-width: 600px) calc(100vw - 40px), 48vw" placeholder="blur" /></div>
          <div className={s.featuredBody}><div className={s.caseResult}><strong>×2</strong><span>de capacité,<br />à effectif constant</span></div><h3>{featured.client}</h3><p>{featured.desc}</p><span className={s.caseLink}>Découvrir leur projet<ArrowUpRight size={20} aria-hidden="true" /></span></div>
        </a>
        <div className={s.caseList}>{others.map(item => <a key={item.href} href={item.href} className={s.case}><div><span>{item.tag}</span><h3>{item.client}</h3><p>{item.desc}</p></div><ArrowUpRight size={21} aria-hidden="true" /></a>)}</div>
      </div>
      <div className={s.caseStats} aria-label="Résultats de nos accompagnements">{statsV2.map(stat => <div key={stat.label}><strong>{stat.value}</strong><span>{stat.label}</span></div>)}</div>
    </div></section>
  );
}
function Pricing() { return <PreAuditCTA id="pricing" />; }
function Cabinet() {
  return (
    <section id="cabinet" className={`${s.section} ${s.cabinet}`} aria-labelledby="cabinet-title">
      <div className={`${s.container} ${s.cabinetGrid}`}>
        <div><h2 id="cabinet-title">Un projet de A à Z.<br /><span>Une équipe à vos côtés.</span></h2><p className={s.lead}>Derrière Althoce, des personnes qui s’impliquent dans votre quotidien. Nous prenons en main votre projet, du premier échange à la mise en place et à la formation de vos équipes.</p><p className={s.lead}>Et après&nbsp;? Nous restons présents pour que les usages durent et évoluent avec vous.</p><TextLink href="/a-propos/">Découvrir le cabinet</TextLink></div>
        <div className={s.teamPhoto}><Image src={teamImage} alt="Portrait de groupe : Espoir Mwami et neuf collègues dans un espace de travail convivial." fill sizes="(max-width: 900px) calc(100vw - 40px), (max-width: 1280px) 48vw, 576px" placeholder="blur" /></div>
      </div>
    </section>
  );
}
function FaqItem({ index }: { index: number }) {
  return <SharedFaqItem item={homeFaqs[index]} id={`faq-question-${index}`} group="home-faq" />;
}
function FAQ() {
  return (
    <section id="faq" className={s.section} aria-labelledby="faq-title"><div className={`${s.container} ${s.faqGrid}`}>
      <div><h2 id="faq-title">Vos questions,<br />nos réponses directes.</h2><p className={s.lead}>Quelques repères pour faire le premier pas sereinement.</p><TextLink href="/contact/">Parlons de votre projet</TextLink></div>
      <div className={s.faqList}>
        {[2, 3, 4, 5, 8, 10].map(i => <FaqItem key={i} index={i} />)}
        <details className={s.moreFaq}><summary>Toutes les questions sur l’IA en entreprise<Plus size={18} aria-hidden="true" /></summary>{[0, 1, 6, 7, 9, 11].map(i => <FaqItem key={i} index={i} />)}</details>
      </div>
    </div></section>
  );
}
export default function HomePageClient() {
  return <main id="home-content" className={s.home}>
    <a href="#approche" className={s.skipLink}>Aller au contenu</a>
    <Hero /><Approach /><Services /><Methodology /><CaseStudies /><Cabinet /><FAQ /><Pricing /><AgentByJob />
  </main>;
}

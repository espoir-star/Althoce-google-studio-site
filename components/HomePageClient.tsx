import Image from 'next/image';
import { ArrowUpRight, ArrowRight, Check, Compass, GraduationCap, Layers3, Plus, RefreshCw } from 'lucide-react';
import TrustStrip from './brand/TrustStrip';
import { PreAuditCTA, FaqItem as SharedFaqItem } from './brand/Sections';
import { agentMetiers, caseStudies } from '@/lib/data';
import { homeOffers, homeMethod, homeFaqs } from '@/lib/home-content';
import { caseStories, caseDetails } from '@/lib/cases-content';
import { brand } from '@/lib/brand-content';
import { centrale } from '@/lib/centrale-content';
import { centraleLinks } from '@/lib/centrale-links';
import meetingImage from '@/public/images/home/reunion-bureau.webp';
import workingImage from '@/public/images/home/collaboration-bureau.webp';
import caseImage from '@/public/images/home/cas-client-bureau.webp';
import s from './HomePage.module.css';

// Summaries are specific to the homepage; the detailed service catalogue is unchanged.
const offerOverview = [
  { index: 0, Icon: Compass, purpose: 'Clarifier vos priorités', text: 'Identifier les usages utiles, les données sensibles et les priorités de votre projet.', label: 'Découvrir l’audit IA', tone: 'paper' },
  { index: 3, Icon: GraduationCap, purpose: 'Rendre vos équipes autonomes', text: 'Pratiquer sur vos situations métier, apprendre à vérifier les réponses et protéger les données.', label: 'Explorer les formations IA', tone: 'ice' },
  { index: 1, Icon: Layers3, purpose: 'Alléger le travail quotidien', text: 'Créer des agents IA et des automatisations sur mesure, reliés à vos outils et validés avec vous.', label: 'Voir les solutions sur mesure', tone: 'blue' },
  { index: 2, Icon: RefreshCw, purpose: 'Faire durer les usages', text: 'Entretenir vos solutions et ajuster les usages avec vos équipes, selon le suivi convenu.', label: 'Découvrir le pilotage IA', tone: 'paper' },
];
const methodOverview = [
  'Écouter vos équipes, vos priorités et vos exigences.',
  'Choisir les outils, les accès et les données autorisées.',
  'Tester sur vos cas et former les personnes qui les utilisent.',
  'Faire le bilan et définir ensemble les évolutions utiles.',
];

function TextLink({ href, children }: { href: string; children: React.ReactNode }) {
  return <a className={s.textLink} href={href}>{children}<ArrowUpRight size={18} aria-hidden="true" /></a>;
}

function Hero() {
  return <section className={s.hero} aria-labelledby="hero-h1">
    <div className={`${s.container} ${s.heroGrid}`}>
      <div className={s.heroCopy}>
        <h1 id="hero-h1">L’IA au service<br /><span>de votre expertise.</span></h1>
        <p className={s.heroAudience}>{brand.audience}</p>
        <p className={s.lead}>{brand.description}</p>
        <div className={s.actions}>
          <a className={s.primary} href="/contact/">Réserver mon pré-audit offert<ArrowUpRight size={18} aria-hidden="true" /></a>
          <a className={s.secondary} href="#services">Découvrir nos accompagnements<ArrowRight size={17} aria-hidden="true" /></a>
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
    <TrustStrip className={`${s.container} ${s.trustStrip}`} inset />
  </section>;
}

function Services() {
  return <section id="services" className={s.section} aria-labelledby="services-title">
    <div className={s.container}>
      <div id="approche" className={s.sectionHeading}>
        <div><h2 id="services-title">Nos services IA.<br /><span>Votre point de départ.</span></h2></div>
        <div><p>Former, cadrer, intégrer : nous choisissons avec vous ce qui aide votre équipe, selon vos outils et vos responsabilités.</p><TextLink href="/services/">Explorer tous nos services</TextLink></div>
      </div>
      <div className={s.offers}>{offerOverview.map(({ index, Icon, purpose, text, label, tone }) => {
        const item = homeOffers[index];
        return <a key={item.href} className={s.offer} data-tone={tone} href={item.href}>
          <div className={s.offerTop}><span className={s.offerIcon}><Icon size={25} strokeWidth={1.6} aria-hidden="true" /></span><span className={s.offerPurpose}>{purpose}</span></div>
          <h3>{item.title}</h3><p>{text}</p>
          <span className={s.offerLink}>{label}<span className={s.cardArrow}><ArrowUpRight size={19} aria-hidden="true" /></span></span>
        </a>;
      })}</div>
      <aside id="decouvrir-la-centrale" className={s.centrale} aria-labelledby="decouvrir-la-centrale-title">
        <div className={s.centraleCopy}><Layers3 size={25} aria-hidden="true" /><div><h3 id="decouvrir-la-centrale-title">{centraleLinks.home.title}</h3><p>{centraleLinks.home.description}</p></div></div>
        <TextLink href={centrale.path}>Découvrir La Centrale</TextLink>
      </aside>
      <details id="agents" className={s.directory}>
        <summary>Explorer les agents IA par métier<Plus size={19} aria-hidden="true" /></summary>
        <nav aria-label="Agents IA par métier">{agentMetiers.map(item => <a href={item.href} key={item.href}>{item.title}<ArrowUpRight size={16} aria-hidden="true" /></a>)}</nav>
        <TextLink href="/agent-ia/">Tous les usages par métier</TextLink>
      </details>
    </div>
  </section>;
}

function CaseStudies() {
  const [featured, ...others] = caseStudies;
  return <section id="cases" className={`${s.section} ${s.soft}`} aria-labelledby="cases-title">
    <div className={s.container}>
      <div className={s.sectionHeading}><h2 id="cases-title">Ce que l’IA change,<br /><span>sur le terrain.</span></h2><div><p>Des projets concrets, à l’échelle de chaque équipe.</p><TextLink href="/cas-clients/">Découvrir nos cas clients</TextLink></div></div>
      <a href={featured.href} className={s.featuredCase}>
        <div className={s.casePhoto}><Image src={caseImage} alt="Deux collègues échangent sur un dossier dans un bureau comptable." fill sizes="(max-width: 800px) calc(100vw - 40px), (max-width: 1280px) 50vw, 624px" placeholder="blur" /><span className={s.caseName}>{featured.client}</span></div>
        <div className={s.featuredBody}>
          <h3>Plus de dossiers.<br />La même attention aux clients.</h3>
          <p>La préparation des factures et des rapprochements laisse davantage de place à la vérification et au conseil.</p>
          <div className={s.caseResult}><strong>×2</strong><span>de capacité, à effectif constant<small>Résultat observé dans ce cabinet.</small></span></div>
          <span className={s.caseLink}>Découvrir leur projet<span className={s.cardArrow}><ArrowUpRight size={20} aria-hidden="true" /></span></span>
        </div>
      </a>
      <nav className={s.otherCases} aria-label="Autres cas clients">{others.map(item => {
        const story = caseStories.find(story => `/cas-clients/${story.slug}/` === item.href);
        if (!story) return null;
        const evidence = caseDetails[story.metier];
        return <a href={item.href} key={item.href} className={s.otherCase}>
          <div className={s.otherCasePhoto}><Image src={`/images/services/${evidence.image}.webp`} alt={evidence.alt} fill sizes="(max-width: 700px) 88px, (max-width: 1280px) 30vw, 384px" /></div>
          <div className={s.otherCaseBody}><p>{item.client}</p><h3>{story.title}</h3><span className={s.otherCaseLink}>Lire le cas<ArrowUpRight size={18} aria-hidden="true" /></span></div>
        </a>;
      })}</nav>
    </div>
  </section>;
}

function Methodology() {
  return <section id="method" className={s.section} aria-labelledby="method-title">
    <div className={`${s.container} ${s.methodGrid}`}>
      <div id="cabinet" className={s.methodFigure}>
        <div className={s.methodPhoto}><Image src={workingImage} alt="Deux collègues étudient un projet sur ordinateur dans un bureau." fill sizes="(max-width: 900px) calc(100vw - 40px), 44vw" placeholder="blur" /></div>
        <TextLink href="/a-propos/">Découvrir le cabinet Althoce</TextLink>
      </div>
      <div><h2 id="method-title">Un projet de A à Z.<br /><span>Une équipe à vos côtés.</span></h2><p className={s.lead}>Vos dossiers sont sensibles. Vos décisions engagent votre responsabilité. Nous construisons avec vous, puis transmettons les bons réflexes à votre équipe.</p>
        <ol className={s.methodSteps}>{homeMethod.map((step, i) => <li key={step.n}><span className={s.stepNumber} aria-hidden="true">{step.n}</span><div><h3>{step.title}</h3><p>{methodOverview[i]}</p></div></li>)}</ol>
      </div>
    </div>
  </section>;
}

function FaqItem({ index }: { index: number }) {
  return <SharedFaqItem item={homeFaqs[index]} id={`faq-question-${index}`} group="home-faq" />;
}
function FAQ() {
  return <section id="faq" className={`${s.section} ${s.faqSection}`} aria-labelledby="faq-title">
    <div className={`${s.container} ${s.faqGrid}`}>
      <div><h2 id="faq-title">Avant de<br /><span>faire le premier pas.</span></h2><p className={s.lead}>L’accompagnement, les données et le budget : quelques réponses pour vous situer.</p></div>
      <div className={s.faqList}>
        {[8, 5, 2, 4].map(i => <FaqItem key={i} index={i} />)}
        <details className={s.moreFaq}><summary>D’autres questions sur l’IA en entreprise<Plus size={18} aria-hidden="true" /></summary>{[0, 1, 3, 6, 7, 9, 10, 11].map(i => <FaqItem key={i} index={i} />)}</details>
      </div>
    </div>
  </section>;
}

export default function HomePageClient() {
  return <main id="home-content" className={s.home}>
    <a href="#approche" className={s.skipLink}>Aller au contenu</a>
    <Hero /><Services /><CaseStudies /><Methodology /><FAQ /><PreAuditCTA id="pricing" />
  </main>;
}

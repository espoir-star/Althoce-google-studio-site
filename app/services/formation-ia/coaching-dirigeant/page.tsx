import type { Metadata } from 'next';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import TrustStrip from '@/components/brand/TrustStrip';
import Program from '@/components/formation/Program';
import Funding from '@/components/formation/Funding';
import Footer from '@/components/Footer';
import { FaqSection, PreAuditCTA, TextLink } from '@/components/brand/Sections';
import { formationDirigeant as f } from '@/lib/coaching-dirigeant';
import b from '@/components/brand/Brand.module.css';
import s from '@/components/formation/Formation.module.css';

const socialImage = { url: '/images/services/coaching-dirigeant.webp', alt: 'Une dirigeante travaille avec un formateur dans un bureau' };
export const metadata: Metadata = {
  title: f.metaTitle,
  description: f.description,
  alternates: { canonical: f.url },
  openGraph: { title: f.title + ' | Althoce', description: f.description, url: f.url, type: 'website', locale: 'fr_FR', images: [socialImage] },
  twitter: { card: 'summary_large_image', title: f.title + ' | Althoce', description: f.description, images: [socialImage.url] },
};

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Course', name: f.title, description: f.description, url: f.url,
      provider: { '@type': 'Organization', name: 'Althoce', '@id': 'https://althoce.com/#organization' },
      inLanguage: 'fr-FR', teaches: f.objectifs,
      hasCourseInstance: { '@type': 'CourseInstance', courseMode: ['Onsite', 'Online'], courseWorkload: 'PT7H' },
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { name: 'Accueil', item: 'https://althoce.com/' },
        { name: 'Formation IA', item: 'https://althoce.com/services/formation-ia/' },
        { name: f.title, item: f.url },
      ].map((x, i) => ({ '@type': 'ListItem', position: i + 1, ...x })),
    },
    { '@type': 'FAQPage', mainEntity: f.faq.map(x => ({ '@type': 'Question', name: x.q, acceptedAnswer: { '@type': 'Answer', text: x.a } })) },
  ],
};

const facts = [
  { label: 'Votre journée', value: '7 heures · en présentiel ou en visio' },
  { label: 'Vos participants', value: 'Vous seul, ou jusqu’à 5 décideurs' },
  { label: 'Votre préparation', value: '45 minutes d’entretien en amont' },
  { label: 'Votre suivi', value: 'Un point à J+30 sur vos premiers usages' },
];

export default function FormationDirigeantPage() {
  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, '\\u003c') }} />
    <main className={b.page}>
      <section className={s.hero}>
        <div className={[b.container, s.grid].join(' ')}>
          <div>
            <nav className={b.breadcrumb} aria-label="Fil d’Ariane"><a href="/">Accueil</a><span>/</span><a href="/services/formation-ia/">Formation IA</a><span>/</span><span aria-current="page">Dirigeant & associés</span></nav>
            <h1>Formation IA<br />Dirigeant & Associés.<br /><span>Vous donnez le cap.</span></h1>
            <p className={b.lead}>Une journée pour utiliser l’IA dans vos décisions, encadrer les usages et choisir où agir. Seul ou avec vos associés, partez de vos enjeux et construisez une feuille de route à 90 jours, adaptée aux exigences de votre profession.</p>
            <a className={b.primary} href="#programme">Découvrir la journée<ArrowUpRight size={18} aria-hidden="true" /></a>
          </div>
          <div className={s.photo}><Image src={socialImage.url} alt="Une dirigeante et un formateur travaillent ensemble sur ses dossiers dans un bureau." fill priority sizes="(max-width:900px) 90vw, 50vw" /></div>
        </div>
      </section>
      <TrustStrip className={b.container} />
      <div className={[b.container, s.facts].join(' ')}>{facts.map(x => <div key={x.label}><strong>{x.label}</strong><p>{x.value}</p></div>)}</div>

      <section className={b.section}>
        <div className={[b.container, s.grid].join(' ')}>
          <div><h2>Pratiquer vous-même.<br /><span>Décider avec méthode.</span></h2><p className={b.lead}>Dirigeants, associés et responsables de cabinet : les exercices relient votre quotidien aux choix à faire pour votre structure.</p><p className={s.note}>Le parcours est conçu pour vous seul. Vous pouvez inviter jusqu’à quatre associés ou décideurs pour partager ce travail.</p></div>
          <ul className={s.checks}>{f.objectifs.map(x => <li key={x}>{x}</li>)}</ul>
        </div>
      </section>

      <section id="programme" className={[b.section, s.soft].join(' ')}>
        <div className={[b.container, s.programGrid].join(' ')}>
          <div>
            <h2>Une journée.<br /><span>Des choix qui prennent forme.</span></h2>
            <p className={b.lead}>Six modules pour pratiquer, poser vos règles d’usage et préparer vos prochaines actions.</p>
            <p className={s.note}><strong>Avant la journée : 45 minutes ensemble.</strong><br />Nous précisons vos priorités, vos outils et deux situations pratiques. Cet entretien en visio est inclus, en dehors des 7 heures pédagogiques.</p>
            <p className={s.note}>De 9 h à 17 h, avec une pause déjeuner de 12 h 30 à 13 h 30, hors temps de formation.</p>
            <TextLink href="/contact/">Préparer ma formation</TextLink>
          </div>
          <Program name="dirigeant-programme" steps={f.sessions} />
        </div>
      </section>

      <section className={b.section}>
        <div className={[b.container, s.grid].join(' ')}>
          <div className={s.photo}><Image src="/images/services/pilotage.webp" alt="Des professionnels examinent ensemble les prochaines étapes de leur projet IA." fill sizes="(max-width:900px) 90vw, 50vw" /></div>
          <div>
            <h2>Des outils pour agir.<br /><span>Un cadre pour avancer.</span></h2>
            <ul className={s.checks}>{f.livrables.map(x => <li key={x.title}><span><strong>{x.title}.</strong> {x.text}</span></li>)}</ul>
            <p className={s.note}>Les ateliers utilisent des données fictives, anonymisées ou autorisées. Les réalisations sont pédagogiques ; une intégration en production fait l’objet d’une mission distincte.</p>
          </div>
        </div>
      </section>

      <section className={[b.section, s.soft].join(' ')}>
        <div className={[b.container, s.grid].join(' ')}>
          <div><h2>Un premier pas.<br /><span>Puis un point à J+30.</span></h2><p className={b.lead}>Vous repartez avec vos supports, votre bilan des acquis et une action à engager. Un mois après, nous faisons le point sur les usages essayés et les obstacles rencontrés.</p></div>
          <div><h3>Préparer la suite avec vos équipes.</h3><p className={s.note}>Votre feuille de route donne des repères pour leur montée en compétence. Les formations métier peuvent prolonger ce travail, selon vos priorités.</p><TextLink href="/services/formation-ia/ia-fondamentaux/">Formation IA métier pour vos équipes</TextLink><br /><TextLink href="/services/formation-ia/ia-avancee/">Découvrir la formation personnalisée</TextLink></div>
        </div>
      </section>
      <section className={b.section}><div className={b.container}><Funding /></div></section>
      <FaqSection id="faq-coaching" title="Avant votre journée de formation." description="Participants, préparation et suivi : les repères utiles." items={f.faq} />
      <PreAuditCTA title="Quelle priorité aimeriez-vous faire avancer ?" description="Prenons 30 minutes pour parler de vos usages, de vos responsabilités et du parcours adapté. Ce premier échange est offert." />
    </main>
    <Footer showCta={false} />
  </>;
}

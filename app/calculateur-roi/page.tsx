import type { Metadata } from 'next';
import Image from 'next/image';
import { Check } from 'lucide-react';
import CalculateurROIPageClient from '@/components/CalculateurROIPageClient';
import Footer from '@/components/Footer';
import { Breadcrumb, FaqSection } from '@/components/brand/Sections';
import { ROI_FAQ } from '@/lib/roi/data';
import s from '@/components/roi/Calculator.module.css';
import b from '@/components/brand/Brand.module.css';

const title = 'Calculateur ROI IA : temps gagné et rentabilité';
const description = 'Estimez le temps que l’IA peut libérer dans votre équipe et son retour sur investissement. Vos tâches, vos coûts, des hypothèses ajustables. Résultats sans inscription.';
const url = 'https://althoce.com/calculateur-roi/';
export const metadata: Metadata = {
  title, description, alternates: { canonical: url },
  openGraph: { title: title + ' | Althoce', description, url, type: 'website', locale: 'fr_FR', images: [{ url: '/images/services/diagnostic.webp', alt: 'Des professionnels étudient leurs processus de travail.' }] },
  twitter: { card: 'summary_large_image', title: title + ' | Althoce', description, images: ['/images/services/diagnostic.webp'] },
};
const schema = { '@context': 'https://schema.org', '@graph': [
  { '@type': 'WebApplication', name: 'Calculateur ROI IA Althoce', url, description, applicationCategory: 'BusinessApplication', operatingSystem: 'Web', inLanguage: 'fr-FR', publisher: { '@id': 'https://althoce.com/#organization' } },
  { '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://althoce.com/' }, { '@type': 'ListItem', position: 2, name: 'Calculateur ROI IA', item: url }] },
  { '@type': 'FAQPage', mainEntity: ROI_FAQ.map(x => ({ '@type': 'Question', name: x.q, acceptedAnswer: { '@type': 'Answer', text: x.a } })) },
] };
export default function CalculateurROIPage() {
  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, '\\u003c') }} />
    <main className={s.page}>
      <section className={s.hero}><div className={s.container}>
        <Breadcrumb label="Calculateur ROI IA" />
        <div className={s.heroGrid}><div><h1>Quel temps retrouver<br /><span>avec l’IA ?</span></h1><p>Partez de vos tâches, estimez le temps à libérer et voyez ce qu’un projet IA pourrait apporter à votre équipe.</p><ul className={s.heroBenefits}>{['3 étapes', 'Hypothèses ajustables', 'Sans inscription'].map(x => <li key={x}><Check size={15} aria-hidden="true" />{x}</li>)}</ul></div><div className={s.heroPhoto}><Image src="/images/services/diagnostic.webp" alt="Deux collègues examinent ensemble leurs documents et leurs méthodes de travail." fill priority sizes="(max-width:700px) 0px, 35vw" /><span>Votre métier comme point de départ.</span></div></div>
      </div></section>
      <CalculateurROIPageClient />
      <div className={`${b.page} ${s.faq}`}><FaqSection id="faq-roi" title="Comprendre votre estimation." description="La méthode, les hypothèses et les limites de votre estimation." items={ROI_FAQ} /></div>
    </main>
    <Footer showCta={false} />
  </>;
}

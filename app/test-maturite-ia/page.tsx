import type { Metadata } from 'next';
import Image from 'next/image';
import { Check, Compass, GraduationCap, MessagesSquare, ShieldCheck, Workflow } from 'lucide-react';
import MaturiteTestClient from '@/components/MaturiteTestClient';
import type { SectorNote } from '@/components/maturite/MaturiteReport';
import Footer from '@/components/Footer';
import { Breadcrumb, FaqSection } from '@/components/brand/Sections';
import { DIMENSIONS, SECTOR_OPTIONS, type DimensionId } from '@/lib/maturite/questions';
import { STAGES } from '@/lib/maturite/model';
import { MATURITE_FAQ } from '@/lib/maturite/report-content';
import { sectorStories } from '@/lib/sectors-content';
import s from '@/components/roi/Calculator.module.css';
import m from '@/components/maturite/Maturite.module.css';
import b from '@/components/brand/Brand.module.css';

const title = 'Test de maturité IA : situez votre structure';
const description = 'Quinze questions pour situer votre cabinet ou votre entreprise parmi quatre stades de maturité IA. Score sans inscription, puis plan d’action personnalisé.';
const url = 'https://althoce.com/test-maturite-ia/';
const image = '/images/services/pilotage.webp';
export const metadata: Metadata = {
  title, description, alternates: { canonical: url },
  openGraph: { title: title + ' | Althoce', description, url, type: 'website', locale: 'fr_FR', images: [{ url: image, alt: 'Trois professionnels font le point autour d’un ordinateur et de documents de suivi.' }] },
  twitter: { card: 'summary_large_image', title: title + ' | Althoce', description, images: [image] },
};
const schema = { '@context': 'https://schema.org', '@graph': [
  { '@type': 'WebApplication', name: 'Test de maturité IA Althoce', url, description, applicationCategory: 'BusinessApplication', operatingSystem: 'Web', inLanguage: 'fr-FR', isAccessibleForFree: true, publisher: { '@id': 'https://althoce.com/#organization' } },
  { '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://althoce.com/' }, { '@type': 'ListItem', position: 2, name: 'Test de maturité IA', item: url }] },
  { '@type': 'FAQPage', mainEntity: MATURITE_FAQ.map(x => ({ '@type': 'Question', name: x.q, acceptedAnswer: { '@type': 'Answer', text: x.a } })) },
] };
// Repères sectoriels repris des pages /secteurs/ : une seule source pour les exemples et les limites.
const sectorNotes: Record<string, SectorNote> = Object.fromEntries(SECTOR_OPTIONS.flatMap(option => {
  const story = sectorStories.find(item => item.slug === option.slug);
  return story ? [[option.slug, { name: option.name, href: `/secteurs/${story.slug}/`, boundaries: story.boundaries, examples: story.scenarios.slice(0, 3).map(scenario => scenario.title) }]] : [];
}));
const icons: Record<DimensionId, typeof Compass> = { cap: Compass, usages: MessagesSquare, cadre: ShieldCheck, competences: GraduationCap, integration: Workflow };

export default function TestMaturiteIAPage() {
  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, '\\u003c') }} />
    <main className={s.page}>
      <section className={s.hero}><div className={s.container}>
        <Breadcrumb label="Test de maturité IA" />
        <div className={s.heroGrid}><div><h1>Où en êtes-vous<br /><span>avec l’IA ?</span></h1><p>Quinze situations concrètes pour situer votre structure, repérer ce qui manque et choisir vos trois priorités.</p><ul className={s.heroBenefits}>{['5 minutes', 'Score sans inscription', 'Plan d’action personnalisé'].map(x => <li key={x}><Check size={15} aria-hidden="true" />{x}</li>)}</ul></div><div className={s.heroPhoto}><Image src={image} alt="Trois professionnels font le point autour d’un ordinateur et de documents de suivi." fill priority sizes="(max-width:700px) 0px, 35vw" /><span>Vos pratiques réelles comme point de départ.</span></div></div>
      </div></section>
      <MaturiteTestClient sectorNotes={sectorNotes} />
      <div className={`${b.page} ${m.afterTool}`}>
        <section className={b.section} aria-labelledby="dimensions-title"><div className={b.container}>
          <div className={b.sectionHeading}><h2 id="dimensions-title">Cinq dimensions, <span>une vue d’ensemble.</span></h2><p>La maturité ne se résume pas au nombre d’outils. Le test regarde ce qui fait qu’un usage tient dans la durée.</p></div>
          <ul className={m.dimCards}>{DIMENSIONS.map(dimension => { const Icon = icons[dimension.id]; return <li key={dimension.id}><Icon size={22} strokeWidth={1.6} aria-hidden="true" /><strong>{dimension.name}</strong><span>{dimension.label}</span><p>{dimension.description}</p></li>; })}</ul>
        </div></section>
        <section className={`${b.section} ${b.soft}`} aria-labelledby="stades-title"><div className={b.container}>
          <div className={b.sectionHeading}><h2 id="stades-title">Quatre stades, <span>décrits simplement.</span></h2><p>Chaque question propose quatre situations, de la moins avancée à la plus avancée. Votre score vous place sur la même échelle.</p></div>
          <ol className={m.stageCards}>{STAGES.map((stage, i) => <li key={stage.name}><small>Stade {i + 1} · {stage.min} à {stage.max}</small><strong>{stage.name}</strong><p>{stage.tagline}</p></li>)}</ol>
        </div></section>
        <FaqSection id="faq-maturite" title="Comprendre le test." description="La méthode, ses limites et ce que deviennent vos réponses." items={MATURITE_FAQ} />
      </div>
    </main>
    <Footer showCta={false} />
  </>;
}

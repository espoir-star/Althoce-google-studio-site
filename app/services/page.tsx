import type { Metadata } from 'next';
import Footer from '@/components/Footer';
import ServiceSchema from '@/components/services/ServiceSchema';
import ServicesHubPageClient from '@/components/ServicesHubPageClient';

export const metadata: Metadata = {
  title: 'Tous nos services IA pour PME et ETI : agents, automatisation, employé IA, audit',
  description: "Services IA Althoce : diagnostic, formations IA, agents et automatisation. Un cabinet aux côtés des PME, du premier échange au suivi des usages.",
  keywords: ['services IA', 'agence IA services', 'automatisation IA services', 'solutions IA entreprise', 'prestations IA', 'services IA PME'],
  openGraph: {
    title: "Services IA | Althoce",
    description: "Services IA Althoce : diagnostic, formations IA, agents et automatisation. Un cabinet aux côtés des PME, du premier échange au suivi des usages.",
    type: 'website',
    locale: 'fr_FR',
    url: 'https://althoce.com/services/',
    images: [
      {
        url: '/og-default.png',
        width: 1200,
        height: 630,
        alt: 'Althoce — Agents IA & Automatisation pour PME et ETI françaises',
      },
    ],
},
  twitter: {
    card: 'summary_large_image',
    title: "Services IA | Althoce",
    description: "Services IA Althoce : diagnostic, formations IA, agents et automatisation. Un cabinet aux côtés des PME, du premier échange au suivi des usages.",
  },
  alternates: {
    canonical: 'https://althoce.com/services/',
  },
};

export default function Page() { return <><ServiceSchema /><ServicesHubPageClient /><Footer showCta={true} /></>; }

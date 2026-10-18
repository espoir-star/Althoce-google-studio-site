import type { Metadata } from 'next';
import Footer from '@/components/Footer';
import ServiceSchema from '@/components/services/ServiceSchema';
import ServicesHubPageClient from '@/components/ServicesHubPageClient';

export const metadata: Metadata = {
  title: 'Services IA : conseil, formation et intégration sur mesure',
  description: "Conseil, formations et intégration IA pour les professions réglementées et les entreprises exigeantes. Des solutions adaptées à vos outils et vos obligations.",
  keywords: ['services IA', 'agence IA services', 'automatisation IA services', 'solutions IA entreprise', 'prestations IA', 'services IA PME'],
  openGraph: {
    title: "Services IA | Althoce",
    description: "Conseil, formations et intégration IA pour les professions réglementées et les entreprises exigeantes. Des solutions adaptées à vos outils et vos obligations.",
    type: 'website',
    locale: 'fr_FR',
    url: 'https://althoce.com/services/',
    images: [
      {
        url: '/og-default.png',
        width: 1200,
        height: 630,
        alt: 'Althoce, cabinet de conseil et intégration IA',
      },
    ],
},
  twitter: {
    card: 'summary_large_image',
    title: "Services IA | Althoce",
    description: "Conseil, formations et intégration IA pour les professions réglementées et les entreprises exigeantes. Des solutions adaptées à vos outils et vos obligations.",
  },
  alternates: {
    canonical: 'https://althoce.com/services/',
  },
};

export default function Page() { return <><ServiceSchema /><ServicesHubPageClient /><Footer showCta={true} /></>; }

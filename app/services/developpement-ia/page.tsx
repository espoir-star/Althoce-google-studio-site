import type { Metadata } from 'next';
import Footer from '@/components/Footer';
import ServiceSchema from '@/components/services/ServiceSchema';
import ServicePage from '@/components/services/ServicePage';
import { serviceStories } from '@/lib/services-content';

export const metadata: Metadata = {
  title: 'Développement IA sur mesure',
  description: "Développement IA sur mesure pour PME : applications métier, agents et intégrations. Une solution construite avec vos équipes, documentée et accompagnée.",
  keywords: ['développement IA', 'agence développement IA', 'développeur IA', 'IA sur-mesure', 'MLOps', 'intégration LLM', 'agent IA custom', 'IA Python', 'IA TypeScript'],
  openGraph: {
    title: "Développement IA | Althoce",
    description: "Développement IA sur mesure pour PME : applications métier, agents et intégrations. Une solution construite avec vos équipes, documentée et accompagnée.",
    type: 'article',
    locale: 'fr_FR',
    url: 'https://althoce.com/services/developpement-ia/',
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
    title: "Développement IA | Althoce",
    description: "Développement IA sur mesure pour PME : applications métier, agents et intégrations. Une solution construite avec vos équipes, documentée et accompagnée.",
  },
  alternates: {
    canonical: 'https://althoce.com/services/developpement-ia/',
  },
};

const service = serviceStories.find(item => item.slug === 'developpement-ia')!;
export default function Page() { return <><ServiceSchema service={service} /><ServicePage service={service} /><Footer showCta={true} /></>; }

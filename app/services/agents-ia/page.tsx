import type { Metadata } from 'next';
import Footer from '@/components/Footer';
import ServiceSchema from '@/components/services/ServiceSchema';
import ServicePage from '@/components/services/ServicePage';
import { serviceStories } from '@/lib/services-content';

export const metadata: Metadata = {
  title: 'Agents IA sur mesure pour PME',
  description: "Agents IA sur mesure pour PME : traitement des demandes, documents et actions dans vos outils. Althoce accompagne le déploiement et la prise en main.",
  keywords: ['agents IA', 'agent IA', 'création agent IA', 'développement agent IA', 'agence agent IA', 'agent IA entreprise', 'agent IA autonome', 'automatisation agentique', 'employé IA'],
  openGraph: {
    title: "Agents IA | Althoce",
    description: "Agents IA sur mesure pour PME : traitement des demandes, documents et actions dans vos outils. Althoce accompagne le déploiement et la prise en main.",
    type: 'article',
    locale: 'fr_FR',
    url: 'https://althoce.com/services/agents-ia/',
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
    title: "Agents IA | Althoce",
    description: "Agents IA sur mesure pour PME : traitement des demandes, documents et actions dans vos outils. Althoce accompagne le déploiement et la prise en main.",
  },
  alternates: {
    canonical: 'https://althoce.com/services/agents-ia/',
  },
};

const service = serviceStories.find(item => item.slug === 'agents-ia')!;
export default function Page() { return <><ServiceSchema service={service} /><ServicePage service={service} /><Footer showCta={true} /></>; }

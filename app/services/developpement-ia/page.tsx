import type { Metadata } from 'next';
import Footer from '@/components/Footer';
import ServiceSchema from '@/components/services/ServiceSchema';
import ServicePage from '@/components/services/ServicePage';
import { serviceStories } from '@/lib/services-content';

const service = serviceStories.find(item => item.slug === 'developpement-ia')!;

export const metadata: Metadata = {
  title: 'Développement IA sur mesure',
  description: service.metaDescription,
  keywords: ['développement IA', 'agence développement IA', 'développeur IA', 'IA sur-mesure', 'MLOps', 'intégration LLM', 'agent IA custom', 'IA Python', 'IA TypeScript'],
  openGraph: {
    title: "Développement IA | Althoce",
    description: service.metaDescription,
    type: 'article',
    locale: 'fr_FR',
    url: 'https://althoce.com/services/developpement-ia/',
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
    title: "Développement IA | Althoce",
    description: service.metaDescription,
  },
  alternates: {
    canonical: 'https://althoce.com/services/developpement-ia/',
  },
};


export default function Page() { return <><ServiceSchema service={service} /><ServicePage service={service} /><Footer showCta={true} /></>; }

import type { Metadata } from 'next';
import Footer from '@/components/Footer';
import ServiceSchema from '@/components/services/ServiceSchema';
import ServicePage from '@/components/services/ServicePage';
import { serviceStories } from '@/lib/services-content';

const service = serviceStories.find(item => item.slug === 'automatisation-ia')!;

export const metadata: Metadata = {
  title: 'Automatisation IA des processus métier',
  description: service.metaDescription,
  keywords: ['automatisation IA', 'automatisation intelligente', 'agence automatisation IA', 'automatisation entreprise', 'automatiser avec l\'IA', 'automatisation processus', 'automatisation agentique', 'automatisation PME'],
  openGraph: {
    title: "Automatisation IA | Althoce",
    description: service.metaDescription,
    type: 'article',
    locale: 'fr_FR',
    url: 'https://althoce.com/services/automatisation-ia/',
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
    title: "Automatisation IA | Althoce",
    description: service.metaDescription,
  },
  alternates: {
    canonical: 'https://althoce.com/services/automatisation-ia/',
  },
};


export default function Page() { return <><ServiceSchema service={service} /><ServicePage service={service} /><Footer showCta={true} /></>; }

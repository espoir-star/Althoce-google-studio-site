import type { Metadata } from 'next';
import Footer from '@/components/Footer';
import ServiceSchema from '@/components/services/ServiceSchema';
import ServicePage from '@/components/services/ServicePage';
import { serviceStories } from '@/lib/services-content';

const service = serviceStories.find(item => item.slug === 'employe-ia')!;

export const metadata: Metadata = {
  title: 'Employé IA : collaborateur virtuel',
  description: service.metaDescription,
  keywords: ['employé IA', 'salarié IA', 'agent IA temps plein', 'collaborateur virtuel IA', 'assistant IA dédié', 'employé IA SDR', 'employé IA comptable', 'employé IA RH', 'créer un employé IA', 'employé IA PME'],
  openGraph: {
    title: "Employé IA | Althoce",
    description: service.metaDescription,
    type: 'article',
    locale: 'fr_FR',
    url: 'https://althoce.com/services/employe-ia/',
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
    title: "Employé IA | Althoce",
    description: service.metaDescription,
  },
  alternates: {
    canonical: 'https://althoce.com/services/employe-ia/',
  },
};


export default function Page() { return <><ServiceSchema service={service} /><ServicePage service={service} /><Footer showCta={true} /></>; }

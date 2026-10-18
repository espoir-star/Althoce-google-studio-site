import type { Metadata } from 'next';
import Footer from '@/components/Footer';
import ServiceSchema from '@/components/services/ServiceSchema';
import ServicePage from '@/components/services/ServicePage';
import { serviceStories } from '@/lib/services-content';

const service = serviceStories.find(item => item.slug === 'integration-ia')!;

export const metadata: Metadata = {
  title: 'Intégration IA dans vos outils',
  description: service.metaDescription,
  keywords: ['intégration IA', 'intégration LLM', 'connecteur IA CRM', 'IA Salesforce', 'IA HubSpot', 'IA Sage', 'gouvernance IA', 'IA RGPD'],
  openGraph: {
    title: "Intégration IA | Althoce",
    description: service.metaDescription,
    type: 'article',
    locale: 'fr_FR',
    url: 'https://althoce.com/services/integration-ia/',
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
    title: "Intégration IA | Althoce",
    description: service.metaDescription,
  },
  alternates: {
    canonical: 'https://althoce.com/services/integration-ia/',
  },
};


export default function Page() { return <><ServiceSchema service={service} /><ServicePage service={service} /><Footer showCta={true} /></>; }

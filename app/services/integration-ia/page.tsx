import type { Metadata } from 'next';
import Footer from '@/components/Footer';
import ServiceSchema from '@/components/services/ServiceSchema';
import ServicePage from '@/components/services/ServicePage';
import { serviceStories } from '@/lib/services-content';

export const metadata: Metadata = {
  title: 'Intégration IA dans vos outils',
  description: "Intégration IA dans vos outils : CRM, ERP, documents et messagerie. Des connexions, des accès et une prise en main adaptés à votre entreprise.",
  keywords: ['intégration IA', 'intégration LLM', 'connecteur IA CRM', 'IA Salesforce', 'IA HubSpot', 'IA Sage', 'gouvernance IA', 'IA RGPD'],
  openGraph: {
    title: "Intégration IA | Althoce",
    description: "Intégration IA dans vos outils : CRM, ERP, documents et messagerie. Des connexions, des accès et une prise en main adaptés à votre entreprise.",
    type: 'article',
    locale: 'fr_FR',
    url: 'https://althoce.com/services/integration-ia/',
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
    title: "Intégration IA | Althoce",
    description: "Intégration IA dans vos outils : CRM, ERP, documents et messagerie. Des connexions, des accès et une prise en main adaptés à votre entreprise.",
  },
  alternates: {
    canonical: 'https://althoce.com/services/integration-ia/',
  },
};

const service = serviceStories.find(item => item.slug === 'integration-ia')!;
export default function Page() { return <><ServiceSchema service={service} /><ServicePage service={service} /><Footer showCta={true} /></>; }

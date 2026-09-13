import type { Metadata } from 'next';
import Footer from '@/components/Footer';
import ServiceSchema from '@/components/services/ServiceSchema';
import ServicePage from '@/components/services/ServicePage';
import { serviceStories } from '@/lib/services-content';

export const metadata: Metadata = {
  title: 'Automatisation IA des processus métier',
  description: "Automatisation IA des processus métier : mails, documents, CRM et reporting. Althoce simplifie les tâches répétitives avec vos équipes.",
  keywords: ['automatisation IA', 'automatisation intelligente', 'agence automatisation IA', 'automatisation entreprise', 'automatiser avec l\'IA', 'automatisation processus', 'automatisation agentique', 'automatisation PME'],
  openGraph: {
    title: "Automatisation IA | Althoce",
    description: "Automatisation IA des processus métier : mails, documents, CRM et reporting. Althoce simplifie les tâches répétitives avec vos équipes.",
    type: 'article',
    locale: 'fr_FR',
    url: 'https://althoce.com/services/automatisation-ia/',
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
    title: "Automatisation IA | Althoce",
    description: "Automatisation IA des processus métier : mails, documents, CRM et reporting. Althoce simplifie les tâches répétitives avec vos équipes.",
  },
  alternates: {
    canonical: 'https://althoce.com/services/automatisation-ia/',
  },
};

const service = serviceStories.find(item => item.slug === 'automatisation-ia')!;
export default function Page() { return <><ServiceSchema service={service} /><ServicePage service={service} /><Footer showCta={true} /></>; }

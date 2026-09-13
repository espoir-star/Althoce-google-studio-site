import type { Metadata } from 'next';
import Footer from '@/components/Footer';
import ServiceSchema from '@/components/services/ServiceSchema';
import ServicePage from '@/components/services/ServicePage';
import { serviceStories } from '@/lib/services-content';

export const metadata: Metadata = {
  title: 'Employé IA : collaborateur virtuel',
  description: "Employé IA pour PME : un assistant dédié aux tâches récurrentes d’un rôle, intégré à vos outils avec supervision et formation des équipes.",
  keywords: ['employé IA', 'salarié IA', 'agent IA temps plein', 'collaborateur virtuel IA', 'assistant IA dédié', 'employé IA SDR', 'employé IA comptable', 'employé IA RH', 'créer un employé IA', 'employé IA PME'],
  openGraph: {
    title: "Employé IA | Althoce",
    description: "Employé IA pour PME : un assistant dédié aux tâches récurrentes d’un rôle, intégré à vos outils avec supervision et formation des équipes.",
    type: 'article',
    locale: 'fr_FR',
    url: 'https://althoce.com/services/employe-ia/',
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
    title: "Employé IA | Althoce",
    description: "Employé IA pour PME : un assistant dédié aux tâches récurrentes d’un rôle, intégré à vos outils avec supervision et formation des équipes.",
  },
  alternates: {
    canonical: 'https://althoce.com/services/employe-ia/',
  },
};

const service = serviceStories.find(item => item.slug === 'employe-ia')!;
export default function Page() { return <><ServiceSchema service={service} /><ServicePage service={service} /><Footer showCta={true} /></>; }

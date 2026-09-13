import type { Metadata } from 'next';
import Footer from '@/components/Footer';
import ServiceSchema from '@/components/services/ServiceSchema';
import ServicePage from '@/components/services/ServicePage';
import { serviceStories } from '@/lib/services-content';

export const metadata: Metadata = {
  title: 'Audit IA pour PME : 30 min offertes',
  description: "Audit IA pour PME : usages prioritaires, impact estimé et feuille de route. Althoce vous aide à décider. Premier échange de pré-audit offert, 30 min.",
  keywords: ['audit IA', 'audit IA entreprise', 'cartographie IA', 'stratégie IA PME', 'feuille de route IA', 'diagnostic IA', 'maturité IA', 'roadmap IA'],
  openGraph: {
    title: "Audit IA | Althoce",
    description: "Audit IA pour PME : usages prioritaires, impact estimé et feuille de route. Althoce vous aide à décider. Premier échange de pré-audit offert, 30 min.",
    type: 'article',
    locale: 'fr_FR',
    url: 'https://althoce.com/services/audit-ia/',
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
    title: "Audit IA | Althoce",
    description: "Audit IA pour PME : usages prioritaires, impact estimé et feuille de route. Althoce vous aide à décider. Premier échange de pré-audit offert, 30 min.",
  },
  alternates: {
    canonical: 'https://althoce.com/services/audit-ia/',
  },
};

const service = serviceStories.find(item => item.slug === 'audit-ia')!;
export default function Page() { return <><ServiceSchema service={service} /><ServicePage service={service} /><Footer showCta={true} /></>; }

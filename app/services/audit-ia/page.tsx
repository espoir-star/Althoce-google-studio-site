import type { Metadata } from 'next';
import Footer from '@/components/Footer';
import ServiceSchema from '@/components/services/ServiceSchema';
import ServicePage from '@/components/services/ServicePage';
import { serviceStories } from '@/lib/services-content';

const service = serviceStories.find(item => item.slug === 'audit-ia')!;

export const metadata: Metadata = {
  title: 'Audit IA : diagnostic organisationnel et technique',
  description: service.metaDescription,
  keywords: ['audit IA', 'audit IA entreprise', 'cartographie IA', 'stratégie IA PME', 'feuille de route IA', 'diagnostic IA', 'maturité IA', 'roadmap IA'],
  openGraph: {
    title: "Audit IA | Althoce",
    description: service.metaDescription,
    type: 'article',
    locale: 'fr_FR',
    url: 'https://althoce.com/services/audit-ia/',
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
    title: "Audit IA | Althoce",
    description: service.metaDescription,
  },
  alternates: {
    canonical: 'https://althoce.com/services/audit-ia/',
  },
};


export default function Page() { return <><ServiceSchema service={service} /><ServicePage service={service} /><Footer showCta={true} /></>; }

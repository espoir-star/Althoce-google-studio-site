import type { Metadata } from 'next';
import CasClientNegoceVinsBordelaisPageClient from '@/components/CasClientNegoceVinsBordelaisPageClient';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: "Négoce de vins bordelais : +200 % RDV qualifiés en 4 mois avec un agent SDR multilingue | Cas client Althoce",
  description: "Comment un négoce de vins bordelais de 28 collaborateurs a triplé son volume de RDV qualifiés export en 4 mois avec un agent IA SDR multilingue (français, anglais, mandarin, japonais), sans embaucher.",
  keywords: [
    'cas client agent IA SDR',
    'ROI agent IA prospection',
    'agent IA prospection multilingue',
    'cas concret automatisation commerciale export',
    'agent IA LinkedIn mandarin',
    'Althoce négoce vins Bordeaux',
  ],
  openGraph: {
    title: '+200 % RDV qualifiés en 4 mois : cas client négoce de vins bordelais | Althoce',
    description: "Agent IA SDR multilingue (4 langues), prospection 24/7, time-to-first-touch lead 18h → 4 min. Comment un négoce bordelais a triplé son volume de RDV export sans embaucher.",
    type: 'article',
    locale: 'fr_FR',
    url: 'https://althoce.com/cas-clients/negoce-vins-bordelais-agent-ia-sdr/',
  },
  twitter: {
    card: 'summary_large_image',
    title: '+200 % RDV qualifiés : négoce vins bordelais × agent IA SDR multilingue | Althoce',
    description: "×5 prospects/semaine · 18h → 4 min lead inbound · 4 langues 24/7 · 0 embauche.",
  },
  alternates: {
    canonical: 'https://althoce.com/cas-clients/negoce-vins-bordelais-agent-ia-sdr/',
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": "https://althoce.com/cas-clients/negoce-vins-bordelais-agent-ia-sdr/#article",
      "headline": "+200 % RDV qualifiés en 4 mois pour un négoce de vins bordelais grâce à un agent IA SDR multilingue",
      "description": "Cas client Althoce : comment un négoce de vins bordelais de 28 collaborateurs a triplé son volume de RDV qualifiés export en 4 mois avec un agent IA SDR multilingue (français, anglais, mandarin, japonais).",
      "datePublished": "2026-05-08",
      "dateModified": "2026-05-08",
      "author": {
        "@type": "Organization",
        "@id": "https://althoce.com/#organization",
        "name": "Althoce",
        "url": "https://althoce.com/"
      },
      "publisher": {
        "@type": "Organization",
        "@id": "https://althoce.com/#organization",
        "name": "Althoce",
        "url": "https://althoce.com/"
      },
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://althoce.com/cas-clients/negoce-vins-bordelais-agent-ia-sdr/"
      },
      "about": {
        "@type": "Service",
        "name": "Agent IA SDR multilingue pour PME export",
        "provider": { "@type": "Organization", "name": "Althoce" }
      },
      "keywords": "agent IA SDR, prospection multilingue, agent IA commercial export, ROI agent IA prospection, automatisation commerciale"
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://althoce.com/" },
        { "@type": "ListItem", "position": 2, "name": "Cas clients", "item": "https://althoce.com/cas-clients/" },
        { "@type": "ListItem", "position": 3, "name": "Négoce de vins bordelais", "item": "https://althoce.com/cas-clients/negoce-vins-bordelais-agent-ia-sdr/" }
      ]
    }
  ]
};

export default function CasClientNegoceVinsBordelaisPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <CasClientNegoceVinsBordelaisPageClient />
      <Footer showCta={true} />
    </>
  );
}

import type { Metadata } from 'next';
import CasClientEtiAgroalimentaireJuridiquePageClient from '@/components/CasClientEtiAgroalimentaireJuridiquePageClient';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: "ETI agroalimentaire : agent IA juridique",
  description: "600 contrats fournisseurs analysés par an grâce à un agent IA juridique Althoce. ETI agroalimentaire française. Cas client détaillé.",
  keywords: [
    'cas client agent IA juridique',
    'ROI agent IA analyse contractuelle ETI',
    'automatisation contrats souveraineté France',
    'cas concret IA juriste interne PME',
    'témoignage agent IA Mistral France RGPD',
  ],
  openGraph: {
    title: 'ETI agroalimentaire : agent IA juridique | Althoce',
    description: "600 contrats/an pré-analysés par un agent IA 100 % France. Le juriste interne passe de 3h à 30 min par contrat — et retrouve 4 jours/mois pour la stratégie.",
    type: 'article',
    locale: 'fr_FR',
    url: 'https://althoce.com/cas-clients/eti-agroalimentaire-agent-ia-juridique/',
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
    title: '3h → 30 min · 4j libérés/mois · 97,3 % concordance : ETI agro × agent IA juridique France | Althoce',
    description: "600 contrats/an · 12 clauses analysées · 100 % hébergement France · zéro transfert hors territoire · 5 semaines de déploiement.",
  },
  alternates: {
    canonical: 'https://althoce.com/cas-clients/eti-agroalimentaire-agent-ia-juridique/',
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": "https://althoce.com/cas-clients/eti-agroalimentaire-agent-ia-juridique/#article",
      "headline": "ETI agroalimentaire : 600 contrats/an pré-analysés et 4 jours libérés/mois pour le juriste interne grâce à un agent IA d'analyse contractuelle hébergé en France",
      "description": "Cas client Althoce : ETI agroalimentaire 280 collaborateurs. Agent IA pré-analyse contractuelle déployé en 5 semaines avec Mistral hébergé OVH Bordeaux. 3h → 30 min par contrat, 4 jours/mois libérés, 97,3 % concordance POC, zéro transfert hors territoire France.",
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
        "@id": "https://althoce.com/cas-clients/eti-agroalimentaire-agent-ia-juridique/"
      },
      "about": {
        "@type": "Service",
        "name": "Agent IA analyse contractuelle souverain France pour ETI agroalimentaire",
        "provider": { "@type": "Organization", "name": "Althoce" }
      },
      "keywords": "agent IA juridique, analyse contractuelle IA, souveraineté données France, Mistral OVH France, pré-analyse contrats ETI, RGPD agent IA"
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://althoce.com/" },
        { "@type": "ListItem", "position": 2, "name": "Cas clients", "item": "https://althoce.com/cas-clients/" },
        { "@type": "ListItem", "position": 3, "name": "ETI agroalimentaire juridique", "item": "https://althoce.com/cas-clients/eti-agroalimentaire-agent-ia-juridique/" }
      ]
    }
  ]
};

export default function CasClientEtiAgroalimentaireJuridiquePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <CasClientEtiAgroalimentaireJuridiquePageClient />
      <Footer showCta={true} />
    </>
  );
}

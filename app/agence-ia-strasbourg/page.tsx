import type { Metadata } from 'next';
import AgenceIAStrasbourgPageClient from '@/components/AgenceIAStrasbourgPageClient';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: "Agence IA à Strasbourg : agents IA, automatisation et formation pour PME et ETI alsaciennes | Althoce",
  description: "Althoce, agence IA française qui accompagne les PME et ETI à Strasbourg et en Grand Est. Expertise pharma, transfrontalier, services européens. Présentiel à Strasbourg, distanciel, formation IA, souveraineté France. 30 min offertes avec un expert.",
  keywords: [
    'agence IA Strasbourg',
    'agence IA Grand Est',
    'consultant IA Strasbourg',
    'automatisation Strasbourg',
    'IA PME Strasbourg',
    'agent IA Strasbourg',
    'formation IA Strasbourg',
    'IA pharma Alsace',
    'IA transfrontalier Strasbourg',
  ],
  openGraph: {
    title: "Agence IA à Strasbourg : agents IA pour PME alsaciennes | Althoce",
    description: "L'agence IA française qui accompagne les PME alsaciennes. Pharma, transfrontalier, services européens. Présentiel + distanciel + formation, souveraineté France.",
    type: 'website',
    locale: 'fr_FR',
    url: 'https://althoce.com/agence-ia-strasbourg/',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Agence IA Strasbourg · Agents IA & Automatisation PME alsaciennes | Althoce",
    description: "Expertise pharma Alsace, transfrontalier FR/DE, services européens · Multilingue FR/DE/EN · Souveraineté France garantie.",
  },
  alternates: {
    canonical: 'https://althoce.com/agence-ia-strasbourg/',
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": "https://althoce.com/agence-ia-strasbourg/#localbusiness",
      "name": "Althoce — Agence IA à Strasbourg",
      "description": "Agence IA française qui accompagne les PME et ETI à Strasbourg et en Grand Est. Expertise pharma alsacienne, marchés transfrontaliers FR/DE, services européens et institutions. Présentiel à Strasbourg, distanciel, formation IA, souveraineté France.",
      "url": "https://althoce.com/agence-ia-strasbourg/",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Strasbourg",
        "addressRegion": "Grand Est",
        "addressCountry": "FR"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "48.5734",
        "longitude": "7.7521"
      },
      "areaServed": [
        { "@type": "City", "name": "Strasbourg" },
        { "@type": "City", "name": "Illkirch-Graffenstaden" },
        { "@type": "City", "name": "Mulhouse" },
        { "@type": "City", "name": "Colmar" },
        { "@type": "AdministrativeArea", "name": "Eurométropole de Strasbourg" },
        { "@type": "AdministrativeArea", "name": "Grand Est" },
        { "@type": "Country", "name": "France" }
      ],
      "serviceType": "Agence IA, agents IA, automatisation et formation pour PME et ETI"
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://althoce.com/" },
        { "@type": "ListItem", "position": 2, "name": "Agences", "item": "https://althoce.com/agences/" },
        { "@type": "ListItem", "position": 3, "name": "Strasbourg", "item": "https://althoce.com/agence-ia-strasbourg/" }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Présentiel ou distanciel à Strasbourg : quelle différence ?",
          "acceptedAnswer": { "@type": "Answer", "text": "Aucune différence qualité ni délais. Présentiel pertinent à Strasbourg (Neustadt, Wacken, Robertsau, Illkirch) pour le cadrage et les ateliers. Build en distanciel structuré avec points hebdomadaires." }
        },
        {
          "@type": "Question",
          "name": "Avez-vous un bureau permanent à Strasbourg ?",
          "acceptedAnswer": { "@type": "Answer", "text": "Pas de bureau permanent. Espaces partenaires sur la Neustadt et à Illkirch-Graffenstaden pour les RDV présentiels. Déplacements réguliers dans l'Eurométropole et en Grand Est." }
        },
        {
          "@type": "Question",
          "name": "Vos agents gèrent le multilingue FR/DE/EN pour les marchés transfrontaliers ?",
          "acceptedAnswer": { "@type": "Answer", "text": "Oui. Notre chatbot RAG et notre agent téléphonique gèrent le français, l'allemand et l'anglais nativement. Adapté aux PME alsaciennes avec clientèle ou fournisseurs côté Baden-Württemberg et Rhénanie-Palatinat." }
        },
        {
          "@type": "Question",
          "name": "Quelle est votre expertise sur la pharma Grand Est (GMP, EMA, ANSM) ?",
          "acceptedAnswer": { "@type": "Answer", "text": "Cas signature : laboratoire pharma alsacien, 400 contrats pré-analysés par agent IA juridique, validation juriste réduite de 3h à 30 min, 6 jours libérés par mois. Conformité GMP, EMA, ANSM et Swissmedic. Données hébergées Mistral OVH France, aucun transfert hors territoire." }
        },
        {
          "@type": "Question",
          "name": "Mes données pharma restent-elles en France ?",
          "acceptedAnswer": { "@type": "Answer", "text": "Oui par défaut et sans exception pour pharma. Mistral hébergé OVH/Scaleway France. Données de recherche clinique, dossiers AMM, contrats fournisseurs critiques : aucune fuite hors territoire. Documentation conformité RGPD + GMP livrée à votre Qualified Person." }
        },
        {
          "@type": "Question",
          "name": "Avez-vous des clients en Grand Est ?",
          "acceptedAnswer": { "@type": "Answer", "text": "Oui. Laboratoires pharma alsaciens, cabinets juridiques transfrontaliers, distributeurs B2B Grand Est, cabinets d'expertise comptable Strasbourg. Notre cas signature pharma (400 contrats, 3h à 30 min) est directement transposable au tissu industriel et professionnel alsacien." }
        }
      ]
    }
  ]
};

export default function AgenceIAStrasbourgPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <AgenceIAStrasbourgPageClient />
      <Footer showCta={false} />
    </>
  );
}

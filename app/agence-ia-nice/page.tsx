import type { Metadata } from 'next';
import AgenceIANicePageClient from '@/components/AgenceIANicePageClient';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: "Agence IA à Nice : agents IA, automatisation et formation pour PME et ETI azuréennes | Althoce",
  description: "Althoce, agence IA française qui accompagne les PME et ETI à Nice et sur la Côte d'Azur. Expertise hôtellerie luxe, biotech Sophia Antipolis, finance privée, immobilier. Présentiel à Nice, distanciel, formation IA, souveraineté France. 30 min offertes avec un expert.",
  keywords: [
    'agence IA Nice',
    "agence IA Côte d'Azur",
    'consultant IA Nice',
    'automatisation Nice',
    'IA PME Nice',
    'agent IA Nice',
    'formation IA Nice',
    'IA hôtellerie luxe',
    'IA Sophia Antipolis',
  ],
  openGraph: {
    title: "Agence IA à Nice : agents IA pour PME azuréennes | Althoce",
    description: "L'agence IA française qui accompagne les PME azuréennes. Hôtellerie luxe, biotech Sophia, finance privée. Présentiel + distanciel + formation, souveraineté France.",
    type: 'website',
    locale: 'fr_FR',
    url: 'https://althoce.com/agence-ia-nice/',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Agence IA Nice · Agents IA & Automatisation PME azuréennes | Althoce",
    description: "Expertise hôtellerie luxe Côte d'Azur, biotech Sophia Antipolis, finance privée · Multilingue 9 langues · Souveraineté France garantie.",
  },
  alternates: {
    canonical: 'https://althoce.com/agence-ia-nice/',
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": "https://althoce.com/agence-ia-nice/#localbusiness",
      "name": "Althoce — Agence IA à Nice",
      "description": "Agence IA française qui accompagne les PME et ETI azuréennes. Expertise hôtellerie haut de gamme, biotech Sophia Antipolis, finance privée, immobilier de prestige. Présentiel à Nice, Cannes, Sophia Antipolis, distanciel, formation IA, souveraineté France.",
      "url": "https://althoce.com/agence-ia-nice/",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Nice",
        "addressRegion": "Provence-Alpes-Côte d'Azur",
        "addressCountry": "FR"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "43.7102",
        "longitude": "7.2620"
      },
      "areaServed": [
        { "@type": "City", "name": "Nice" },
        { "@type": "City", "name": "Cannes" },
        { "@type": "City", "name": "Antibes" },
        { "@type": "City", "name": "Saint-Tropez" },
        { "@type": "AdministrativeArea", "name": "Métropole Nice Côte d'Azur" },
        { "@type": "AdministrativeArea", "name": "Provence-Alpes-Côte d'Azur" },
        { "@type": "Country", "name": "France" }
      ],
      "serviceType": "Agence IA, agents IA, automatisation et formation pour PME et ETI"
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://althoce.com/" },
        { "@type": "ListItem", "position": 2, "name": "Agences", "item": "https://althoce.com/agences/" },
        { "@type": "ListItem", "position": 3, "name": "Nice", "item": "https://althoce.com/agence-ia-nice/" }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Présentiel ou distanciel à Nice : quelle différence ?",
          "acceptedAnswer": { "@type": "Answer", "text": "Aucune différence qualité ni délais. Présentiel pertinent à Nice (Promenade des Anglais, Carré d'Or), Cannes (Croisette), Antibes-Sophia Antipolis pour le cadrage et les ateliers. Build en distanciel structuré avec points hebdomadaires." }
        },
        {
          "@type": "Question",
          "name": "Votre agent gère le multilingue VIP pour la clientèle internationale Côte d'Azur ?",
          "acceptedAnswer": { "@type": "Answer", "text": "Oui. Notre chatbot RAG gère 9 langues standard (FR, EN, IT, DE, ES, NL, PT, mandarin, japonais). Notre agent téléphonique est en voix naturelle française et anglaise par défaut, avec l'italien et le mandarin en option sur cadrage. Particulièrement adapté à l'hôtellerie 4-5 étoiles, l'immobilier prestige et la conciergerie privée." }
        },
        {
          "@type": "Question",
          "name": "Avez-vous une expertise hôtellerie haut de gamme Côte d'Azur ?",
          "acceptedAnswer": { "@type": "Answer", "text": "Oui. Agent IA téléphonique multilingue 24/7, chatbot RAG multilingue intégré aux PMS hôteliers (Mews, Cloudbeds, Oracle Opera), agent service client tourisme. Adapté aux pics saisonniers (Festival de Cannes, Grand Prix Monaco, été Côte d'Azur)." }
        },
        {
          "@type": "Question",
          "name": "Souveraineté France pour finance privée et immobilier HNW ?",
          "acceptedAnswer": { "@type": "Answer", "text": "Oui par défaut. Mistral hébergé France (OVH, Scaleway). Données clients HNW, transactions immobilières prestige, gestion patrimoniale confidentielle : aucune fuite hors territoire. Documentation conformité RGPD livrée à votre DPO." }
        },
        {
          "@type": "Question",
          "name": "Avez-vous un bureau permanent à Nice ?",
          "acceptedAnswer": { "@type": "Answer", "text": "Pas de bureau permanent. Déplacements réguliers et espaces partenaires (Sophia Antipolis pour le tech, Carré d'Or pour le luxe). Présentiel sur l'ensemble de la Côte d'Azur selon le projet." }
        },
        {
          "@type": "Question",
          "name": "Avez-vous des clients sur la Côte d'Azur ?",
          "acceptedAnswer": { "@type": "Answer", "text": "Oui. Hôtellerie haut de gamme Nice / Cannes / Saint-Tropez, cabinets professionnels azuréens, scale-up tech Sophia Antipolis, biotech Sophia. Cas signature téléphonique directement transposable au tissu hôtelier et professionnel azuréen." }
        }
      ]
    }
  ]
};

export default function AgenceIANicePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <AgenceIANicePageClient />
      <Footer showCta={false} />
    </>
  );
}

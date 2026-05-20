import type { Metadata } from 'next';
import AgenceIAToulonPageClient from '@/components/AgenceIAToulonPageClient';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: "Agence IA à Toulon : agents IA, automatisation et formation pour PME et ETI varoises | Althoce",
  description: "Althoce, agence IA française qui accompagne les PME et ETI à Toulon et dans le Var. Expertise sous-traitance défense Marine Nationale, Pôle Mer Méditerranée, tourisme Côte d'Azur ouest. Souveraineté France obligatoire. 30 min offertes avec un expert.",
  keywords: [
    'agence IA Toulon',
    'agence IA Var',
    'consultant IA Toulon',
    'automatisation Toulon',
    'IA PME Toulon',
    'agent IA Toulon',
    'formation IA Toulon',
    'IA défense Toulon',
    'IA Marine Nationale',
    'IA Pôle Mer Méditerranée',
  ],
  openGraph: {
    title: "Agence IA à Toulon : agents IA pour PME varoises et défense | Althoce",
    description: "L'agence IA française qui accompagne les PME varoises. Sous-traitance défense, Pôle Mer, tourisme. Souveraineté France, présentiel + distanciel + formation.",
    type: 'website',
    locale: 'fr_FR',
    url: 'https://althoce.com/agence-ia-toulon/',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Agence IA Toulon · Agents IA & Automatisation défense et tourisme Var | Althoce",
    description: "Expertise Naval Group La Seyne, Pôle Mer Méditerranée, tourisme Côte d'Azur ouest · Sourcing ×6 · 0 donnée défense hors France · Souveraineté France garantie.",
  },
  alternates: {
    canonical: 'https://althoce.com/agence-ia-toulon/',
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": "https://althoce.com/agence-ia-toulon/#localbusiness",
      "name": "Althoce — Agence IA à Toulon",
      "description": "Agence IA française qui accompagne les PME et ETI varoises. Expertise sous-traitance défense Marine Nationale (Naval Group La Seyne-sur-Mer), Pôle Mer Méditerranée, tourisme Côte d'Azur ouest. Souveraineté France obligatoire pour le secteur défense.",
      "url": "https://althoce.com/agence-ia-toulon/",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Toulon",
        "addressRegion": "Provence-Alpes-Côte d'Azur",
        "addressCountry": "FR"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "43.1242",
        "longitude": "5.9280"
      },
      "areaServed": [
        { "@type": "City", "name": "Toulon" },
        { "@type": "City", "name": "La Seyne-sur-Mer" },
        { "@type": "City", "name": "Hyères" },
        { "@type": "City", "name": "La Garde" },
        { "@type": "AdministrativeArea", "name": "Métropole Toulon-Provence-Méditerranée" },
        { "@type": "AdministrativeArea", "name": "Var" },
        { "@type": "Country", "name": "France" }
      ],
      "serviceType": "Agence IA, agents IA, automatisation et formation pour PME et ETI varoises"
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://althoce.com/" },
        { "@type": "ListItem", "position": 2, "name": "Agences", "item": "https://althoce.com/agences/" },
        { "@type": "ListItem", "position": 3, "name": "Toulon", "item": "https://althoce.com/agence-ia-toulon/" }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Présentiel à Toulon ou distanciel : quelle différence ?",
          "acceptedAnswer": { "@type": "Answer", "text": "Aucune différence qualité ni délais. Présentiel à Toulon (centre-ville, port, Mourillon), La Seyne-sur-Mer, La Garde ou Hyères pour le cadrage et les ateliers. Build en distanciel structuré avec points hebdomadaires de 30 minutes." }
        },
        {
          "@type": "Question",
          "name": "Avez-vous un bureau permanent à Toulon ?",
          "acceptedAnswer": { "@type": "Answer", "text": "Pas de bureau permanent. Déplacements réguliers et espaces partenaires centre-ville pour les RDV présentiels. Déplacements réguliers dans le Var (Brignoles, Draguignan sur demande)." }
        },
        {
          "@type": "Question",
          "name": "Proposez-vous des formations IA pour mes équipes varoises ?",
          "acceptedAnswer": { "@type": "Answer", "text": "Oui. Ateliers de formation IA en présentiel à Toulon ou en distanciel synchrone. Formats 4h à 21h, adaptés aux équipes sous-traitance défense, industrie portuaire et tourisme haut de gamme." }
        },
        {
          "@type": "Question",
          "name": "La souveraineté France est-elle garantie pour la sous-traitance défense (Naval Group) ?",
          "acceptedAnswer": { "@type": "Answer", "text": "Oui, obligatoire et c'est notre standard. Mistral hébergé France (OVH, Scaleway), infrastructure auto-hébergeable possible. Aucune donnée défense ne quitte le territoire français. Documentation conformité fournisseur livrée pour vos donneurs d'ordre défense." }
        },
        {
          "@type": "Question",
          "name": "Avez-vous une expertise tourisme haut de gamme Côte d'Azur ouest ?",
          "acceptedAnswer": { "@type": "Answer", "text": "Oui. Chatbot IA multilingue (9 langues), agent téléphonique multilingue, intégration PMS hôteliers. Adapté aux pics saisonniers estivaux et à la clientèle premium européenne et asiatique de Hyères, Saint-Tropez et Bandol." }
        },
        {
          "@type": "Question",
          "name": "Avez-vous des clients dans le Var ?",
          "acceptedAnswer": { "@type": "Answer", "text": "Oui. Sous-traitants défense Naval Group, hôteliers haut de gamme Côte d'Azur ouest, cabinets juridiques spécialisés droit maritime. Notre cas signature achats (sourcing ×6, 50 % temps libéré, 0 donnée hors France) est directement transposable au tissu sous-traitance défense toulonnais." }
        }
      ]
    }
  ]
};

export default function AgenceIAToulonPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <AgenceIAToulonPageClient />
      <Footer showCta={false} />
    </>
  );
}

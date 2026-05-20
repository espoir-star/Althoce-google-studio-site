import type { Metadata } from 'next';
import AgenceIAToulousePageClient from '@/components/AgenceIAToulousePageClient';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: "Agence IA à Toulouse : agents IA, automatisation et formation pour PME et ETI aéronautiques | Althoce",
  description: "Althoce, agence IA française qui accompagne les PME et ETI de la métropole toulousaine et d'Occitanie. Expertise aéronautique Airbus Blagnac, spatial, SaaS Labège, cabinets toulousains. Présentiel à Toulouse, distanciel sans contrainte, formation IA, souveraineté France. 30 min offertes avec un expert.",
  keywords: [
    'agence IA Toulouse',
    'agence IA Occitanie',
    'consultant IA Toulouse',
    'automatisation Toulouse',
    'IA PME Toulouse',
    'agent IA aéronautique',
    'formation IA Toulouse',
    'IA sous-traitance Airbus',
    'IA SaaS Labège',
  ],
  openGraph: {
    title: "Agence IA à Toulouse : agents IA, automatisation et formation pour PME aéronautiques | Althoce",
    description: "L'agence IA française qui accompagne les PME toulousaines. Expertise sous-traitance Airbus, spatial, SaaS Labège. Présentiel + distanciel + formation, souveraineté France.",
    type: 'website',
    locale: 'fr_FR',
    url: 'https://althoce.com/agence-ia-toulouse/',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Agence IA Toulouse · Agents IA & Automatisation PME aéronautiques | Althoce",
    description: 'Expertise Airbus Blagnac, spatial, SaaS Labège · Présentiel possible · Premier agent en 1 semaine · Souveraineté France garantie.',
  },
  alternates: {
    canonical: 'https://althoce.com/agence-ia-toulouse/',
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": "https://althoce.com/agence-ia-toulouse/#localbusiness",
      "name": "Althoce — Agence IA à Toulouse",
      "description": "Agence IA française qui accompagne les PME et ETI toulousaines et occitanes. Expertise sous-traitance aéronautique Airbus Blagnac, spatial, SaaS Labège, cabinets toulousains. Présentiel à Toulouse, distanciel, formation IA, souveraineté France.",
      "url": "https://althoce.com/agence-ia-toulouse/",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Toulouse",
        "addressRegion": "Occitanie",
        "addressCountry": "FR"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "43.6047",
        "longitude": "1.4442"
      },
      "areaServed": [
        { "@type": "City", "name": "Toulouse" },
        { "@type": "City", "name": "Blagnac" },
        { "@type": "AdministrativeArea", "name": "Métropole Toulouse Métropole" },
        { "@type": "AdministrativeArea", "name": "Occitanie" },
        { "@type": "Country", "name": "France" }
      ],
      "serviceType": "Agence IA, agents IA, automatisation et formation pour PME et ETI"
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://althoce.com/" },
        { "@type": "ListItem", "position": 2, "name": "Agences", "item": "https://althoce.com/agences/" },
        { "@type": "ListItem", "position": 3, "name": "Toulouse", "item": "https://althoce.com/agence-ia-toulouse/" }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Avez-vous une expertise spécifique sur la filière aéronautique toulousaine ?",
          "acceptedAnswer": { "@type": "Answer", "text": "Oui. Automatisation sourcing sous-traitants tier 1/2 Airbus, gestion documentaire qualité AS9100, agents IA conformité fournisseurs. Connaisseurs de l'écosystème Blagnac, Saint-Martin-du-Touch et Labège." }
        },
        {
          "@type": "Question",
          "name": "Présentiel ou distanciel à Toulouse : quelle différence ?",
          "acceptedAnswer": { "@type": "Answer", "text": "Aucune différence qualité ni délais. Présentiel pertinent en cadrage à Toulouse ou Blagnac. Build en distanciel structuré avec points hebdomadaires." }
        },
        {
          "@type": "Question",
          "name": "Proposez-vous des formations IA pour mes équipes toulousaines ?",
          "acceptedAnswer": { "@type": "Answer", "text": "Oui. Ateliers 4h à 21h, présentiel Toulouse, Blagnac ou distanciel synchrone, programme adapté par métier : achats aéro, finance, service client SaaS." }
        },
        {
          "@type": "Question",
          "name": "La souveraineté des données est-elle critique pour mes clients Airbus et Safran ?",
          "acceptedAnswer": { "@type": "Answer", "text": "Oui, et c'est notre standard par défaut. Mistral hébergé France (OVH, Scaleway). Aucune donnée sur serveurs américains. Indispensable pour les sous-traitants soumis aux exigences de confidentialité Airbus Defence & Space et Safran." }
        },
        {
          "@type": "Question",
          "name": "Avez-vous un bureau permanent à Toulouse ?",
          "acceptedAnswer": { "@type": "Answer", "text": "Pas de bureau permanent. Espaces partenaires à Toulouse et Blagnac pour les RDV présentiels. Déplacements réguliers dans la métropole et en Occitanie." }
        },
        {
          "@type": "Question",
          "name": "Mes données restent-elles en France ?",
          "acceptedAnswer": { "@type": "Answer", "text": "Oui par défaut. Mistral hébergé France (OVH, Scaleway). Particulièrement strict pour sous-traitance aéronautique, spatial et SaaS B2B Labège." }
        }
      ]
    }
  ]
};

export default function AgenceIAToulousePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <AgenceIAToulousePageClient />
      <Footer showCta={false} />
    </>
  );
}

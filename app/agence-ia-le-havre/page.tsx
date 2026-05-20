import type { Metadata } from 'next';
import AgenceIALeHavrePageClient from '@/components/AgenceIALeHavrePageClient';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: "Agence IA au Havre : agents IA, automatisation et formation pour PME et ETI havraises | Althoce",
  description: "Althoce, agence IA française qui accompagne les PME et ETI au Havre et en Normandie. Expertise logistique portuaire HAROPA, transitaires maritimes, raffineries, droit maritime. Présentiel au Havre, distanciel, formation IA, souveraineté France. 30 min offertes avec un expert.",
  keywords: [
    'agence IA Le Havre',
    'agence IA Normandie',
    'consultant IA Le Havre',
    'automatisation Le Havre',
    'IA PME Le Havre',
    'agent IA Le Havre',
    'formation IA Le Havre',
    'IA logistique portuaire',
    'IA transitaire maritime',
    'IA HAROPA',
  ],
  openGraph: {
    title: "Agence IA au Havre : agents IA pour PME havraises et logistique portuaire | Althoce",
    description: "L'agence IA française qui accompagne les PME havraises, transitaires HAROPA et industriels normands. Automatisation DAU/BL, souveraineté France, formation IA.",
    type: 'website',
    locale: 'fr_FR',
    url: 'https://althoce.com/agence-ia-le-havre/',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Agence IA Le Havre · Agents IA & Automatisation logistique portuaire | Althoce",
    description: "Expertise HAROPA, transitaires maritimes, raffineries TotalEnergies · 200 manifestes/mois automatisés · 0 retard DAU · Souveraineté France garantie.",
  },
  alternates: {
    canonical: 'https://althoce.com/agence-ia-le-havre/',
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": "https://althoce.com/agence-ia-le-havre/#localbusiness",
      "name": "Althoce — Agence IA au Havre",
      "description": "Agence IA française qui accompagne les PME, ETI et opérateurs portuaires au Havre et en Normandie. Expertise ops/back-office transitaires HAROPA (manifestes DAU, BL maritimes), achats sous-traitance portuaire et raffineries, service client multilingue, droit maritime. Présentiel au Havre, distanciel, formation IA, souveraineté France.",
      "url": "https://althoce.com/agence-ia-le-havre/",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Le Havre",
        "addressRegion": "Normandie",
        "addressCountry": "FR"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "49.4944",
        "longitude": "0.1079"
      },
      "areaServed": [
        { "@type": "City", "name": "Le Havre" },
        { "@type": "City", "name": "Gonfreville-l'Orcher" },
        { "@type": "City", "name": "Rouen" },
        { "@type": "AdministrativeArea", "name": "Seine-Maritime" },
        { "@type": "AdministrativeArea", "name": "Normandie" },
        { "@type": "Country", "name": "France" }
      ],
      "serviceType": "Agence IA, agents IA, automatisation et formation pour PME et ETI"
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://althoce.com/" },
        { "@type": "ListItem", "position": 2, "name": "Agences", "item": "https://althoce.com/agences/" },
        { "@type": "ListItem", "position": 3, "name": "Le Havre", "item": "https://althoce.com/agence-ia-le-havre/" }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Présentiel au Havre ou distanciel : quelle différence ?",
          "acceptedAnswer": { "@type": "Answer", "text": "Aucune différence qualité ni délais. Présentiel pertinent au Havre (centre-ville, zone portuaire HAROPA, Saint-Nicolas) pour le cadrage, les ateliers et les visites terrain. Build en distanciel structuré avec points hebdomadaires de 30 minutes." }
        },
        {
          "@type": "Question",
          "name": "Avez-vous un bureau permanent au Havre ?",
          "acceptedAnswer": { "@type": "Answer", "text": "Pas de bureau permanent. Déplacements réguliers, espaces partenaires centre-ville et zone portuaire pour les RDV présentiels. Déplacements réguliers en Seine-Maritime et Normandie (Rouen, Gonfreville sur demande)." }
        },
        {
          "@type": "Question",
          "name": "Proposez-vous des formations IA pour mes équipes havraises ?",
          "acceptedAnswer": { "@type": "Answer", "text": "Oui. Ateliers de formation IA en présentiel au Havre ou en distanciel synchrone. Formats 4h à 21h, adaptés par métier. Particulièrement utiles pour les équipes ops transitaires (automatisation DAU/BL), achats sous-traitance portuaire et service client multilingue." }
        },
        {
          "@type": "Question",
          "name": "Avez-vous une expertise sur la logistique portuaire et les transitaires HAROPA ?",
          "acceptedAnswer": { "@type": "Answer", "text": "Oui. Cas types : agent IA ops back-office (traitement manifestes DAU, BL maritimes, relances fournisseurs), automatisation achats sous-traitance portuaire, service client multilingue transitaires (FR/EN/ZH/AR). Données hébergées Mistral France, confidentialité commerciale garantie." }
        },
        {
          "@type": "Question",
          "name": "Mes données restent-elles en France ?",
          "acceptedAnswer": { "@type": "Answer", "text": "Oui par défaut. Mistral hébergé France (OVH, Scaleway). Critique pour les transitaires (secret commercial : allocations conteneurs, tarifs armateurs, marges), les raffineries (données process industriels) et le droit maritime (confidentialité client)." }
        },
        {
          "@type": "Question",
          "name": "Avez-vous des clients au Havre et en Normandie ?",
          "acceptedAnswer": { "@type": "Answer", "text": "Oui. Transitaires portuaires HAROPA, sous-traitants industriels, cabinets droit maritime havrais. Notre cas signature ops transitaire (200 manifestes/mois automatisés, 0 retard DAU, ×3 mails absorbés, turnover stoppé en 6 semaines) est directement transposable au tissu portuaire havrais." }
        }
      ]
    }
  ]
};

export default function AgenceIALeHavrePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <AgenceIALeHavrePageClient />
      <Footer showCta={false} />
    </>
  );
}

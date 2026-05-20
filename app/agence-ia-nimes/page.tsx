import type { Metadata } from 'next';
import AgenceIANimesPageClient from '@/components/AgenceIANimesPageClient';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: "Agence IA à Nîmes : agents IA, automatisation et formation pour PME et ETI nîmoises | Althoce",
  description: "Althoce, agence IA française qui accompagne les PME et ETI à Nîmes et dans le Gard. Expertise vins Costières de Nîmes, agroalimentaire, tourisme patrimonial romain, services régionaux. Présentiel à Nîmes, distanciel, formation IA, souveraineté France. 30 min offertes.",
  keywords: [
    'agence IA Nîmes',
    'agence IA Gard',
    'consultant IA Nîmes',
    'automatisation Nîmes',
    'IA PME Nîmes',
    'agent IA Nîmes',
    'formation IA Nîmes',
    'IA Costières de Nîmes',
    'IA tourisme romain',
    'IA agroalimentaire Gard',
  ],
  openGraph: {
    title: "Agence IA à Nîmes : agents IA pour PME nîmoises | Althoce",
    description: "L'agence IA française qui accompagne les PME nîmoises. Vins Costières, agroalimentaire, tourisme romain. Présentiel + distanciel + formation.",
    type: 'website',
    locale: 'fr_FR',
    url: 'https://althoce.com/agence-ia-nimes/',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Agence IA Nîmes · Agents IA & Automatisation vins Costières et tourisme patrimonial | Althoce",
    description: "Expertise vins Costières de Nîmes, tourisme romain, agroalimentaire Gard · +150 % RDV importateurs · 3 comptes export · Souveraineté France garantie.",
  },
  alternates: {
    canonical: 'https://althoce.com/agence-ia-nimes/',
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": "https://althoce.com/agence-ia-nimes/#localbusiness",
      "name": "Althoce — Agence IA à Nîmes",
      "description": "Agence IA française qui accompagne les PME et ETI nîmoises et gardoises. Expertise vins Costières de Nîmes, agroalimentaire méditerranéen, tourisme patrimonial romain. Souveraineté France par défaut.",
      "url": "https://althoce.com/agence-ia-nimes/",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Nîmes",
        "addressRegion": "Occitanie",
        "addressCountry": "FR"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "43.8367",
        "longitude": "4.3601"
      },
      "areaServed": [
        { "@type": "City", "name": "Nîmes" },
        { "@type": "City", "name": "Alès" },
        { "@type": "City", "name": "Bagnols-sur-Cèze" },
        { "@type": "AdministrativeArea", "name": "Gard" },
        { "@type": "AdministrativeArea", "name": "Occitanie" },
        { "@type": "Country", "name": "France" }
      ],
      "serviceType": "Agence IA, agents IA, automatisation et formation pour PME et ETI nîmoises"
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://althoce.com/" },
        { "@type": "ListItem", "position": 2, "name": "Agences", "item": "https://althoce.com/agences/" },
        { "@type": "ListItem", "position": 3, "name": "Nîmes", "item": "https://althoce.com/agence-ia-nimes/" }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Présentiel à Nîmes ou distanciel : quelle différence ?",
          "acceptedAnswer": { "@type": "Answer", "text": "Aucune différence qualité ni délais. Présentiel à Nîmes (centre-ville Écusson, Hoche, Marché Gare), Alès ou dans le Gard pour le cadrage et les ateliers. Build en distanciel structuré avec points hebdomadaires de 30 minutes." }
        },
        {
          "@type": "Question",
          "name": "Avez-vous un bureau permanent à Nîmes ?",
          "acceptedAnswer": { "@type": "Answer", "text": "Pas de bureau permanent. Déplacements réguliers et espaces partenaires Marché Gare pour les RDV présentiels. Déplacements réguliers dans le Gard et l'arc méditerranéen Occitanie (Montpellier, Avignon sur demande)." }
        },
        {
          "@type": "Question",
          "name": "Proposez-vous des formations IA pour mes équipes nîmoises ?",
          "acceptedAnswer": { "@type": "Answer", "text": "Oui. Ateliers de formation IA en présentiel à Nîmes ou en distanciel synchrone. Formats 4h à 21h, adaptés aux équipes viticoles Costières, agroalimentaire gardois et tourisme patrimonial." }
        },
        {
          "@type": "Question",
          "name": "Avez-vous une expertise tourisme patrimonial romain (Arènes, Maison Carrée, Pont du Gard) ?",
          "acceptedAnswer": { "@type": "Answer", "text": "Oui. Cas types : chatbot RAG multilingue en 9 langues pour visiteurs internationaux, agent IA téléphonique multilingue, intégration aux systèmes de billetterie et réservation. Adapté aux pics saisonniers, festivals et ferias." }
        },
        {
          "@type": "Question",
          "name": "Mes données restent-elles en France ?",
          "acceptedAnswer": { "@type": "Answer", "text": "Oui par défaut. Mistral hébergé France (OVH, Scaleway). Critique pour les vins Costières de Nîmes (secret commercial, allocations), l'agroalimentaire premium (normes sanitaires européennes) et les données clients tourisme international." }
        },
        {
          "@type": "Question",
          "name": "Avez-vous des clients dans le Gard ?",
          "acceptedAnswer": { "@type": "Answer", "text": "Oui. Vignobles Costières de Nîmes, acteurs agroalimentaires gardois, cabinets pro nîmois. Notre cas signature commercial export (+150 % RDV importateurs européens, 3 nouveaux comptes en 6 mois) est directement transposable au tissu viticole gardois." }
        }
      ]
    }
  ]
};

export default function AgenceIANimesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <AgenceIANimesPageClient />
      <Footer showCta={false} />
    </>
  );
}

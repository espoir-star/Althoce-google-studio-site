import type { Metadata } from 'next';
import AgenceIADijonPageClient from '@/components/AgenceIADijonPageClient';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: "Agence IA à Dijon : agents IA, automatisation et formation pour PME et ETI bourguignonnes | Althoce",
  description: "Althoce, agence IA française qui accompagne les PME et ETI à Dijon et en Bourgogne-Franche-Comté. Expertise agroalimentaire premium (moutarde, vins de Bourgogne), pharma régionale, services aux entreprises. Présentiel à Dijon, distanciel, formation IA, souveraineté France. 30 min offertes.",
  keywords: [
    'agence IA Dijon',
    'agence IA Bourgogne-Franche-Comté',
    'consultant IA Dijon',
    'automatisation Dijon',
    'IA PME Dijon',
    'agent IA Dijon',
    'formation IA Dijon',
    'IA agroalimentaire Bourgogne',
    'IA vins de Bourgogne',
    'IA pharma Dijon',
  ],
  openGraph: {
    title: "Agence IA à Dijon : agents IA pour PME bourguignonnes | Althoce",
    description: "L'agence IA française qui accompagne les PME bourguignonnes. Agroalimentaire premium, vins de Bourgogne, pharma. Présentiel + distanciel + formation.",
    type: 'website',
    locale: 'fr_FR',
    url: 'https://althoce.com/agence-ia-dijon/',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Agence IA Dijon · Agents IA & Automatisation négoces vins et agroalimentaire Bourgogne | Althoce",
    description: "Expertise négoces vins de Beaune, agroalimentaire premium dijonnais · +180 % RDV asiatiques · 5 comptes grands crus · Souveraineté France garantie.",
  },
  alternates: {
    canonical: 'https://althoce.com/agence-ia-dijon/',
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": "https://althoce.com/agence-ia-dijon/#localbusiness",
      "name": "Althoce — Agence IA à Dijon",
      "description": "Agence IA française qui accompagne les PME, ETI et négoces de vins de Bourgogne. Expertise agroalimentaire premium (moutarde, vins de Bourgogne), pharma régionale, services aux entreprises dijonnaises. Souveraineté France par défaut.",
      "url": "https://althoce.com/agence-ia-dijon/",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Dijon",
        "addressRegion": "Bourgogne-Franche-Comté",
        "addressCountry": "FR"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "47.3220",
        "longitude": "5.0415"
      },
      "areaServed": [
        { "@type": "City", "name": "Dijon" },
        { "@type": "City", "name": "Beaune" },
        { "@type": "City", "name": "Chenôve" },
        { "@type": "AdministrativeArea", "name": "Côte-d'Or" },
        { "@type": "AdministrativeArea", "name": "Bourgogne-Franche-Comté" },
        { "@type": "Country", "name": "France" }
      ],
      "serviceType": "Agence IA, agents IA, automatisation et formation pour PME et ETI bourguignonnes"
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://althoce.com/" },
        { "@type": "ListItem", "position": 2, "name": "Agences", "item": "https://althoce.com/agences/" },
        { "@type": "ListItem", "position": 3, "name": "Dijon", "item": "https://althoce.com/agence-ia-dijon/" }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Présentiel à Dijon ou distanciel : quelle différence ?",
          "acceptedAnswer": { "@type": "Answer", "text": "Aucune différence qualité ni délais. Présentiel à Dijon (centre-ville Ducal, Toison d'Or, technopôle Mazen-Sully), Beaune (négoces) ou Chenôve pour le cadrage et les ateliers. Build en distanciel structuré avec points hebdomadaires de 30 minutes." }
        },
        {
          "@type": "Question",
          "name": "Avez-vous un bureau permanent à Dijon ?",
          "acceptedAnswer": { "@type": "Answer", "text": "Pas de bureau permanent. Déplacements réguliers et espaces partenaires centre-ville pour les RDV présentiels. Déplacements réguliers en Côte-d'Or et Bourgogne-Franche-Comté (Mâcon, Besançon sur demande)." }
        },
        {
          "@type": "Question",
          "name": "Proposez-vous des formations IA pour mes équipes bourguignonnes ?",
          "acceptedAnswer": { "@type": "Answer", "text": "Oui. Ateliers de formation IA en présentiel à Dijon ou en distanciel synchrone. Formats 4h à 21h, adaptés aux équipes agroalimentaire premium, négoces de vins de Bourgogne et pharma régionale." }
        },
        {
          "@type": "Question",
          "name": "Avez-vous une expertise négoces de vins de Bourgogne (Beaune, Nuits-Saint-Georges) ?",
          "acceptedAnswer": { "@type": "Answer", "text": "Oui. Agent IA SDR multilingue (FR, EN, mandarin, japonais) pour les marchés asiatiques premium, chatbot RAG multilingue pour relations importateurs B2B internationaux, automatisation ADV export. Souveraineté France obligatoire — secret commercial sur allocations premiers crus et grands crus garanti." }
        },
        {
          "@type": "Question",
          "name": "Mes données restent-elles en France ?",
          "acceptedAnswer": { "@type": "Answer", "text": "Oui par défaut. Mistral hébergé France (OVH, Scaleway). Critique pour les négoces de vins (secret commercial sur allocations), l'agroalimentaire premium (normes sanitaires européennes) et la pharma régionale." }
        },
        {
          "@type": "Question",
          "name": "Avez-vous des clients en Bourgogne-Franche-Comté ?",
          "acceptedAnswer": { "@type": "Answer", "text": "Oui. Négoces de vins de Bourgogne, acteurs agroalimentaires premium dijonnais, cabinets d'expertise comptable. Notre cas signature commercial export (+180 % RDV importateurs asiatiques, 5 nouveaux comptes grands crus) est directement transposable au tissu négoce bourguignon." }
        }
      ]
    }
  ]
};

export default function AgenceIADijonPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <AgenceIADijonPageClient />
      <Footer showCta={false} />
    </>
  );
}

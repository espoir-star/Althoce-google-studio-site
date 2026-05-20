import type { Metadata } from 'next';
import AgenceIAReimsPageClient from '@/components/AgenceIAReimsPageClient';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: "Agence IA à Reims : agents IA, automatisation et formation pour PME et ETI rémoises | Althoce",
  description: "Althoce, agence IA française qui accompagne les PME et ETI à Reims et dans la Marne. Expertise champagne (LVMH Moët, Veuve Clicquot, Pommery), agroalimentaire premium, pharma. Présentiel à Reims, distanciel, formation IA, souveraineté France. 30 min offertes avec un expert.",
  keywords: [
    'agence IA Reims',
    'agence IA Champagne-Ardenne',
    'consultant IA Reims',
    'automatisation Reims',
    'IA PME Reims',
    'agent IA Reims',
    'formation IA Reims',
    'IA champagne',
    'IA agroalimentaire Reims',
  ],
  openGraph: {
    title: "Agence IA à Reims : agents IA pour PME rémoises et maisons de champagne | Althoce",
    description: "L'agence IA française qui accompagne les PME rémoises et maisons de champagne. Export multilingue, souveraineté France, formation IA.",
    type: 'website',
    locale: 'fr_FR',
    url: 'https://althoce.com/agence-ia-reims/',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Agence IA Reims · Agents IA & Automatisation maisons de champagne | Althoce",
    description: "Expertise champagne export multilingue FR/EN/ZH/JA, agroalimentaire Marne, pharma · Premier agent en 1 semaine · Souveraineté France garantie.",
  },
  alternates: {
    canonical: 'https://althoce.com/agence-ia-reims/',
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": "https://althoce.com/agence-ia-reims/#localbusiness",
      "name": "Althoce — Agence IA à Reims",
      "description": "Agence IA française qui accompagne les PME, ETI et maisons de champagne rémoises. Expertise commercial export multilingue (FR/EN/ZH/JA), agroalimentaire premium Marne, pharma régionale. Présentiel à Reims et Épernay, distanciel, formation IA, souveraineté France.",
      "url": "https://althoce.com/agence-ia-reims/",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Reims",
        "addressRegion": "Grand Est",
        "addressCountry": "FR"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "49.2583",
        "longitude": "4.0317"
      },
      "areaServed": [
        { "@type": "City", "name": "Reims" },
        { "@type": "City", "name": "Épernay" },
        { "@type": "City", "name": "Châlons-en-Champagne" },
        { "@type": "AdministrativeArea", "name": "Marne" },
        { "@type": "AdministrativeArea", "name": "Grand Est" },
        { "@type": "Country", "name": "France" }
      ],
      "serviceType": "Agence IA, agents IA, automatisation et formation pour PME, ETI et maisons de champagne"
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://althoce.com/" },
        { "@type": "ListItem", "position": 2, "name": "Agences", "item": "https://althoce.com/agences/" },
        { "@type": "ListItem", "position": 3, "name": "Reims", "item": "https://althoce.com/agence-ia-reims/" }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Présentiel à Reims ou distanciel : quelle différence ?",
          "acceptedAnswer": { "@type": "Answer", "text": "Aucune différence qualité ni délais. Présentiel pertinent à Reims (centre-ville, Henri Farman), Épernay côté maisons de champagne, et plus largement dans la Marne pour le cadrage et les ateliers. Build en distanciel structuré avec points hebdomadaires de 30 minutes." }
        },
        {
          "@type": "Question",
          "name": "Avez-vous un bureau permanent à Reims ?",
          "acceptedAnswer": { "@type": "Answer", "text": "Pas de bureau permanent. Déplacements réguliers, espaces partenaires centre-ville Reims pour les RDV présentiels. Déplacements réguliers dans la Marne et Champagne-Ardenne (Épernay, Châlons-en-Champagne sur demande)." }
        },
        {
          "@type": "Question",
          "name": "Proposez-vous des formations IA pour mes équipes rémoises ?",
          "acceptedAnswer": { "@type": "Answer", "text": "Oui. Ateliers de formation IA en présentiel à Reims ou en distanciel synchrone. Formats 4h à 21h, adaptés par métier. Particulièrement utiles pour les équipes export champagne (multilingue obligatoire), agroalimentaire premium (conformité IFS/BRC) et pharma." }
        },
        {
          "@type": "Question",
          "name": "Avez-vous une expertise sur les maisons de champagne et l'export multilingue ?",
          "acceptedAnswer": { "@type": "Answer", "text": "Oui. Cas types : agent IA SDR multilingue (FR, EN, mandarin, japonais, allemand, italien), chatbot RAG multilingue pour relations B2B internationales (importateurs, cavistes, sommeliers), automatisation ADV export. Données hébergées Mistral France, secret commercial garanti." }
        },
        {
          "@type": "Question",
          "name": "Mes données restent-elles en France ?",
          "acceptedAnswer": { "@type": "Answer", "text": "Oui par défaut. Mistral hébergé France (OVH, Scaleway). Critique pour les maisons de champagne (secret commercial : allocations primeurs, conditions importateurs, marges fournisseurs), l'agroalimentaire premium (normes sanitaires européennes) et la pharma régionale." }
        },
        {
          "@type": "Question",
          "name": "Avez-vous des clients à Reims et en Champagne ?",
          "acceptedAnswer": { "@type": "Answer", "text": "Oui. Maisons de champagne familiales, agroalimentaire premium régional, cabinets d'expertise comptable rémois. Notre cas signature commercial export (agent SDR multilingue, +180 % RDV asiatiques, 4 nouveaux comptes en 6 mois) est directement transposable au tissu des maisons de champagne rémoises." }
        }
      ]
    }
  ]
};

export default function AgenceIAReimsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <AgenceIAReimsPageClient />
      <Footer showCta={false} />
    </>
  );
}

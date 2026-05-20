import type { Metadata } from 'next';
import AgenceIAMarseillePageClient from '@/components/AgenceIAMarseillePageClient';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: "Agence IA à Marseille : agents IA, automatisation et formation pour PME et ETI provençales | Althoce",
  description: "Althoce, agence IA française qui accompagne les PME et ETI de la métropole Aix-Marseille-Provence et de la région PACA. Expertise logistique portuaire, agroalimentaire méditerranéen, tourisme Côte d'Azur. Présentiel à Marseille, distanciel sans contrainte, formation IA, souveraineté France. 30 min offertes avec un expert.",
  keywords: [
    'agence IA Marseille',
    'agence IA Provence',
    'consultant IA Marseille',
    'automatisation Marseille',
    'IA PME Marseille',
    'agent IA Aix-en-Provence',
    'formation IA Marseille',
    'IA logistique portuaire',
    'IA agroalimentaire Provence',
  ],
  openGraph: {
    title: "Agence IA à Marseille : agents IA, automatisation et formation pour PME provençales | Althoce",
    description: "L'agence IA française qui accompagne les PME provençales. Expertise logistique portuaire, agro méditerranéen, tourisme PACA. Présentiel + distanciel + formation, souveraineté France.",
    type: 'website',
    locale: 'fr_FR',
    url: 'https://althoce.com/agence-ia-marseille/',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Agence IA Marseille · Agents IA & Automatisation PME provençales | Althoce",
    description: 'Expertise GPMM, agroalimentaire, tourisme PACA · Présentiel possible · Premier agent en 1 semaine · Souveraineté France garantie.',
  },
  alternates: {
    canonical: 'https://althoce.com/agence-ia-marseille/',
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": "https://althoce.com/agence-ia-marseille/#localbusiness",
      "name": "Althoce — Agence IA à Marseille",
      "description": "Agence IA française qui accompagne les PME et ETI provençales. Expertise logistique portuaire GPMM, agroalimentaire méditerranéen, tourisme Côte d'Azur. Présentiel à Marseille, distanciel, formation IA, souveraineté France.",
      "url": "https://althoce.com/agence-ia-marseille/",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Marseille",
        "addressRegion": "Provence-Alpes-Côte d'Azur",
        "addressCountry": "FR"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "43.2965",
        "longitude": "5.3698"
      },
      "areaServed": [
        { "@type": "City", "name": "Marseille" },
        { "@type": "City", "name": "Aix-en-Provence" },
        { "@type": "AdministrativeArea", "name": "Métropole Aix-Marseille-Provence" },
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
        { "@type": "ListItem", "position": 3, "name": "Marseille", "item": "https://althoce.com/agence-ia-marseille/" }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Présentiel ou distanciel à Marseille : quelle différence ?",
          "acceptedAnswer": { "@type": "Answer", "text": "Aucune différence qualité ni délais. Présentiel pertinent en cadrage à Euroméditerranée, Aix-en-Provence ou la métropole. Build en distanciel structuré avec points hebdomadaires." }
        },
        {
          "@type": "Question",
          "name": "Avez-vous un bureau permanent à Marseille ?",
          "acceptedAnswer": { "@type": "Answer", "text": "Pas de bureau permanent. Espaces partenaires à Euroméditerranée pour les RDV présentiels. Déplacements réguliers dans la métropole et en région PACA." }
        },
        {
          "@type": "Question",
          "name": "Proposez-vous des formations IA pour mes équipes provençales ?",
          "acceptedAnswer": { "@type": "Answer", "text": "Oui. Ateliers 4h à 21h, présentiel Marseille, Aix-en-Provence ou distanciel synchrone, programme adapté par métier." }
        },
        {
          "@type": "Question",
          "name": "Avez-vous une expertise spécifique sur la logistique portuaire GPMM ?",
          "acceptedAnswer": { "@type": "Answer", "text": "Oui. Automatisation suivi BL fournisseurs, gestion documentaire douanière, vigilance sous-traitants industriels GPMM. Souveraineté Mistral France standard." }
        },
        {
          "@type": "Question",
          "name": "Pour le tourisme et l'hôtellerie haut de gamme Côte d'Azur, que proposez-vous ?",
          "acceptedAnswer": { "@type": "Answer", "text": "Chatbot IA RAG multilingue 9 langues, agent téléphonique voix naturelle, intégration PMS hôteliers (Mews, Cloudbeds, Oracle Opera). Adapté aux pics saisonniers Cannes, Nice, Saint-Tropez." }
        },
        {
          "@type": "Question",
          "name": "Mes données restent-elles en France ?",
          "acceptedAnswer": { "@type": "Answer", "text": "Oui par défaut. Mistral hébergé France (OVH, Scaleway). Particulièrement strict pour logistique portuaire, énergie Fos-sur-Mer, agroalimentaire premium et tourisme haut de gamme." }
        }
      ]
    }
  ]
};

export default function AgenceIAMarseillePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <AgenceIAMarseillePageClient />
      <Footer showCta={false} />
    </>
  );
}

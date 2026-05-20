import type { Metadata } from 'next';
import AgenceIALillePageClient from '@/components/AgenceIALillePageClient';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: "Agence IA à Lille : agents IA, automatisation et formation pour PME et ETI nordistes | Althoce",
  description: "Althoce, agence IA française qui accompagne les PME et ETI à Lille et dans les Hauts-de-France. Expertise retail, e-commerce, logistique transfrontalière. Présentiel à Lille, distanciel, formation IA, souveraineté France. 30 min offertes avec un expert.",
  keywords: [
    'agence IA Lille',
    'agence IA Hauts-de-France',
    'consultant IA Lille',
    'automatisation Lille',
    'IA PME Lille',
    'agent IA Lille',
    'formation IA Lille',
    'IA e-commerce Nord',
    'IA retail Lille',
  ],
  openGraph: {
    title: "Agence IA à Lille : agents IA pour PME nordistes | Althoce",
    description: "L'agence IA française qui accompagne les PME nordistes. Retail, e-commerce, logistique transfrontalière. Présentiel + distanciel + formation, souveraineté France.",
    type: 'website',
    locale: 'fr_FR',
    url: 'https://althoce.com/agence-ia-lille/',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Agence IA Lille · Agents IA & Automatisation PME nordistes | Althoce",
    description: 'Expertise retail, e-commerce Roubaix, logistique transfrontalière · Présentiel possible · Premier agent en 1 semaine · Souveraineté France garantie.',
  },
  alternates: {
    canonical: 'https://althoce.com/agence-ia-lille/',
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": "https://althoce.com/agence-ia-lille/#localbusiness",
      "name": "Althoce — Agence IA à Lille",
      "description": "Agence IA française qui accompagne les PME et ETI à Lille et dans les Hauts-de-France. Expertise retail historique, e-commerce nordiste, logistique transfrontalière. Présentiel à Lille, distanciel, formation IA, souveraineté France.",
      "url": "https://althoce.com/agence-ia-lille/",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Lille",
        "addressRegion": "Hauts-de-France",
        "addressCountry": "FR"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "50.6292",
        "longitude": "3.0573"
      },
      "areaServed": [
        { "@type": "City", "name": "Lille" },
        { "@type": "City", "name": "Roubaix" },
        { "@type": "City", "name": "Tourcoing" },
        { "@type": "AdministrativeArea", "name": "Métropole Européenne de Lille" },
        { "@type": "AdministrativeArea", "name": "Hauts-de-France" },
        { "@type": "Country", "name": "France" }
      ],
      "serviceType": "Agence IA, agents IA, automatisation et formation pour PME et ETI"
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://althoce.com/" },
        { "@type": "ListItem", "position": 2, "name": "Agences", "item": "https://althoce.com/agences/" },
        { "@type": "ListItem", "position": 3, "name": "Lille", "item": "https://althoce.com/agence-ia-lille/" }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Présentiel ou distanciel à Lille : quelle différence ?",
          "acceptedAnswer": { "@type": "Answer", "text": "Aucune différence qualité ni délais. Présentiel pertinent à Lille (Euralille, Vieux-Lille), Roubaix, Tourcoing, Villeneuve-d'Ascq pour le cadrage et les ateliers. Build en distanciel structuré avec points hebdomadaires." }
        },
        {
          "@type": "Question",
          "name": "Avez-vous un bureau permanent à Lille ?",
          "acceptedAnswer": { "@type": "Answer", "text": "Pas de bureau permanent. Espaces partenaires Euralille pour les RDV présentiels. Déplacements réguliers dans la métropole et en Hauts-de-France." }
        },
        {
          "@type": "Question",
          "name": "Proposez-vous des formations IA pour mes équipes nordistes ?",
          "acceptedAnswer": { "@type": "Answer", "text": "Oui. Ateliers 4h à 21h, présentiel Lille, Hauts-de-France ou distanciel synchrone, programme adapté par métier : e-commerce, support client multilingue, retail, logistique." }
        },
        {
          "@type": "Question",
          "name": "Votre chatbot gère le multilingue pour notre clientèle transfrontalière ?",
          "acceptedAnswer": { "@type": "Answer", "text": "Oui par défaut. Notre chatbot RAG gère 9 langues standard incluant français, anglais, néerlandais et allemand. Particulièrement adapté au marché transfrontalier nordiste (clientèle belge, luxembourgeoise, allemande)." }
        },
        {
          "@type": "Question",
          "name": "Mes données restent-elles en France ?",
          "acceptedAnswer": { "@type": "Answer", "text": "Oui par défaut. Mistral hébergé France (OVH, Scaleway). Particulièrement strict pour le retail et l'e-commerce traitant des données clients européennes (RGPD renforcé pour la clientèle belge, néerlandaise, allemande)." }
        },
        {
          "@type": "Question",
          "name": "Avez-vous des clients dans les Hauts-de-France ?",
          "acceptedAnswer": { "@type": "Answer", "text": "Oui. E-commerces Roubaix, retailers nordistes, scale-up tech Villeneuve-d'Ascq, logistique transfrontalière. Notre cas signature service client est directement transposable au tissu régional nordiste." }
        }
      ]
    }
  ]
};

export default function AgenceIALillePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <AgenceIALillePageClient />
      <Footer showCta={false} />
    </>
  );
}

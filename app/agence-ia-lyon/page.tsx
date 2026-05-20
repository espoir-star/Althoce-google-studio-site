import type { Metadata } from 'next';
import AgenceIALyonPageClient from '@/components/AgenceIALyonPageClient';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: "Agence IA à Lyon : agents IA, automatisation et formation pour PME et ETI lyonnaises | Althoce",
  description: "Althoce, agence IA française qui accompagne les PME et ETI à Lyon et en région Auvergne-Rhône-Alpes. Cas client cabinet comptable lyonnais : ×2 capacité en 4 mois. Présentiel à Lyon, distanciel sans contrainte, formation IA pour vos équipes, souveraineté France garantie. 30 min offertes avec un expert.",
  keywords: [
    'agence IA Lyon',
    'agence IA Auvergne-Rhône-Alpes',
    'consultant IA Lyon',
    'automatisation Lyon',
    'IA PME Lyon',
    'agent IA Lyon',
    'formation IA Lyon',
    'IA biotech Lyon',
  ],
  openGraph: {
    title: "Agence IA à Lyon : agents IA, automatisation et formation pour PME lyonnaises | Althoce",
    description: "L'agence IA française qui accompagne les PME lyonnaises. Cas signature cabinet comptable Lyon : ×2 capacité. Présentiel à Lyon + distanciel, souveraineté France.",
    type: 'website',
    locale: 'fr_FR',
    url: 'https://althoce.com/agence-ia-lyon/',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Agence IA Lyon · Agents IA & Automatisation PME lyonnaises | Althoce',
    description: '×2 capacité cabinet comptable lyonnais · Présentiel possible · Premier agent en 1 semaine · Souveraineté France garantie.',
  },
  alternates: {
    canonical: 'https://althoce.com/agence-ia-lyon/',
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": "https://althoce.com/agence-ia-lyon/#localbusiness",
      "name": "Althoce — Agence IA à Lyon",
      "description": "Agence IA française qui accompagne les PME et ETI à Lyon et en Auvergne-Rhône-Alpes. Cas signature cabinet comptable lyonnais ×2 capacité. Présentiel à Lyon, distanciel, formation IA, souveraineté France.",
      "url": "https://althoce.com/agence-ia-lyon/",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Lyon",
        "addressRegion": "Auvergne-Rhône-Alpes",
        "addressCountry": "FR"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "45.7640",
        "longitude": "4.8357"
      },
      "areaServed": [
        { "@type": "City", "name": "Lyon" },
        { "@type": "AdministrativeArea", "name": "Métropole de Lyon" },
        { "@type": "AdministrativeArea", "name": "Auvergne-Rhône-Alpes" },
        { "@type": "Country", "name": "France" }
      ],
      "serviceType": "Agence IA, agents IA, automatisation et formation pour PME et ETI"
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://althoce.com/" },
        { "@type": "ListItem", "position": 2, "name": "Agences", "item": "https://althoce.com/agences/" },
        { "@type": "ListItem", "position": 3, "name": "Lyon", "item": "https://althoce.com/agence-ia-lyon/" }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Présentiel ou distanciel à Lyon : différence pour mon projet ?",
          "acceptedAnswer": { "@type": "Answer", "text": "Aucune sur qualité et délais. Présentiel pertinent en cadrage à Part-Dieu, Confluence ou métropole. Build en distanciel structuré avec points hebdomadaires." }
        },
        {
          "@type": "Question",
          "name": "Avez-vous un bureau permanent à Lyon ?",
          "acceptedAnswer": { "@type": "Answer", "text": "Pas de bureau permanent. Espaces partenaires Part-Dieu ou Confluence pour RDV présentiels. Déplacements réguliers dans la métropole et en Auvergne-Rhône-Alpes." }
        },
        {
          "@type": "Question",
          "name": "Proposez-vous des formations IA pour mes équipes lyonnaises ?",
          "acceptedAnswer": { "@type": "Answer", "text": "Oui. Ateliers 4h à 21h, présentiel à Lyon ou distanciel synchrone, programme adapté par métier." }
        },
        {
          "@type": "Question",
          "name": "Mes données restent-elles en France si je travaille avec Althoce à Lyon ?",
          "acceptedAnswer": { "@type": "Answer", "text": "Oui par défaut. Mistral hébergé France (OVH). Particulièrement strict pour biotech Gerland, pharma (Sanofi Pasteur, BioMérieux), banque et industrie chimique." }
        },
        {
          "@type": "Question",
          "name": "Quelle est la différence avec les cabinets de conseil lyonnais ?",
          "acceptedAnswer": { "@type": "Answer", "text": "Délai (1 semaine vs mois), livrable (code de production, pas un PowerPoint), souveraineté France standard par défaut." }
        },
        {
          "@type": "Question",
          "name": "Avez-vous des clients à Lyon et en Auvergne-Rhône-Alpes ?",
          "acceptedAnswer": { "@type": "Answer", "text": "Oui. Cas signature cabinet comptable lyonnais (×2 capacité). Avocats Part-Dieu, ETI industrielles régionales, biotech Gerland, SaaS Confluence et Vaise." }
        }
      ]
    }
  ]
};

export default function AgenceIALyonPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <AgenceIALyonPageClient />
      <Footer showCta={false} />
    </>
  );
}

import type { Metadata } from 'next';
import AgenceIAGrenoblePageClient from '@/components/AgenceIAGrenoblePageClient';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: "Agence IA à Grenoble : agents IA, automatisation et formation pour PME et ETI grenobloises | Althoce",
  description: "Althoce, agence IA française qui accompagne les PME et ETI à Grenoble et en Isère. Expertise scale-up Inovallée, deep tech, micro-électronique (STMicroelectronics, Soitec), recherche (CEA, CNRS). Présentiel à Grenoble, distanciel, formation IA, souveraineté France. 30 min offertes.",
  keywords: [
    'agence IA Grenoble',
    'agence IA Isère',
    'consultant IA Grenoble',
    'automatisation Grenoble',
    'IA PME Grenoble',
    'agent IA Grenoble',
    'formation IA Grenoble',
    'IA micro-électronique',
    'IA Inovallée',
    'IA deep tech Grenoble',
  ],
  openGraph: {
    title: "Agence IA à Grenoble : agents IA pour PME grenobloises | Althoce",
    description: "L'agence IA française qui accompagne les PME grenobloises. Inovallée, deep tech, micro-électronique. Présentiel + distanciel + formation.",
    type: 'website',
    locale: 'fr_FR',
    url: 'https://althoce.com/agence-ia-grenoble/',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Agence IA Grenoble · Agents IA & Automatisation deep tech et micro-électronique | Althoce",
    description: "Expertise Inovallée, STMicroelectronics, Soitec, CEA-Leti · 70 % N1 absorbé · 3 embauches annulées · Souveraineté France garantie.",
  },
  alternates: {
    canonical: 'https://althoce.com/agence-ia-grenoble/',
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": "https://althoce.com/agence-ia-grenoble/#localbusiness",
      "name": "Althoce — Agence IA à Grenoble",
      "description": "Agence IA française qui accompagne les PME et ETI grenobloises. Expertise scale-up deep tech Inovallée, micro-électronique (STMicroelectronics Crolles, Soitec), recherche CEA-Leti et CNRS, énergie Schneider Electric. Souveraineté France par défaut.",
      "url": "https://althoce.com/agence-ia-grenoble/",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Grenoble",
        "addressRegion": "Auvergne-Rhône-Alpes",
        "addressCountry": "FR"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "45.1885",
        "longitude": "5.7245"
      },
      "areaServed": [
        { "@type": "City", "name": "Grenoble" },
        { "@type": "City", "name": "Meylan" },
        { "@type": "City", "name": "Crolles" },
        { "@type": "City", "name": "Échirolles" },
        { "@type": "AdministrativeArea", "name": "Métropole de Grenoble" },
        { "@type": "AdministrativeArea", "name": "Isère" },
        { "@type": "Country", "name": "France" }
      ],
      "serviceType": "Agence IA, agents IA, automatisation et formation pour PME et ETI grenobloises"
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://althoce.com/" },
        { "@type": "ListItem", "position": 2, "name": "Agences", "item": "https://althoce.com/agences/" },
        { "@type": "ListItem", "position": 3, "name": "Grenoble", "item": "https://althoce.com/agence-ia-grenoble/" }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Présentiel à Grenoble ou distanciel : quelle différence ?",
          "acceptedAnswer": { "@type": "Answer", "text": "Aucune différence qualité ni délais. Présentiel à Grenoble (Polygone scientifique, Europole), Meylan (Inovallée), Crolles ou Échirolles pour le cadrage et les ateliers. Build en distanciel structuré avec points hebdomadaires de 30 minutes." }
        },
        {
          "@type": "Question",
          "name": "Avez-vous un bureau permanent à Grenoble ?",
          "acceptedAnswer": { "@type": "Answer", "text": "Pas de bureau permanent. Déplacements réguliers et espaces partenaires à Inovallée pour les RDV présentiels. Déplacements réguliers en Isère et dans les Alpes (Chambéry, Annecy sur demande)." }
        },
        {
          "@type": "Question",
          "name": "Proposez-vous des formations IA pour mes équipes grenobloises ?",
          "acceptedAnswer": { "@type": "Answer", "text": "Oui. Ateliers de formation IA en présentiel à Grenoble ou en distanciel synchrone. Formats 4h à 21h, adaptés aux équipes scale-up deep tech, micro-électronique et R&D pharma." }
        },
        {
          "@type": "Question",
          "name": "Avez-vous une expertise micro-électronique (STMicroelectronics, Soitec) ?",
          "acceptedAnswer": { "@type": "Answer", "text": "Oui. Sous-traitance micro-électronique, conformité industrie semi-conducteurs, vigilance fournisseurs critiques, gestion documentaire qualité fab. Souveraineté Mistral France obligatoire — secret industriel et propriété intellectuelle garantis." }
        },
        {
          "@type": "Question",
          "name": "La souveraineté France est-elle garantie pour le deep tech et la R&D ?",
          "acceptedAnswer": { "@type": "Answer", "text": "Oui par défaut. Mistral hébergé France (OVH, Scaleway). Critique pour la propriété intellectuelle des scale-up deep tech Inovallée, les brevets, le secret industriel micro-électronique et la recherche CEA-Leti / CNRS." }
        },
        {
          "@type": "Question",
          "name": "Avez-vous des clients à Grenoble et en Isère ?",
          "acceptedAnswer": { "@type": "Answer", "text": "Oui. Scale-up Inovallée, ETI micro-électronique Crolles, cabinets pro grenoblois. Notre cas signature service client (70 % N1 absorbé, CSAT +12 pts, 3 embauches annulées soit 180k€/an) est directement transposable au tissu deep tech régional." }
        }
      ]
    }
  ]
};

export default function AgenceIAGrenooblePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <AgenceIAGrenoblePageClient />
      <Footer showCta={false} />
    </>
  );
}

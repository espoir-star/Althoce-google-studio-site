import type { Metadata } from 'next';
import AgenceIARennesPageClient from '@/components/AgenceIARennesPageClient';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: "Agence IA à Rennes : agents IA, automatisation et formation pour PME et ETI bretonnes | Althoce",
  description: "Althoce, agence IA française qui accompagne les PME et ETI à Rennes et en Bretagne. Expertise numérique (FrenchTech Rennes Saint-Malo, IRT b-com), agroalimentaire (Lactalis, Bridor), industrie automobile. Présentiel à Rennes, distanciel, formation IA, souveraineté France. 30 min offertes avec un expert.",
  keywords: [
    'agence IA Rennes',
    'agence IA Bretagne',
    'consultant IA Rennes',
    'automatisation Rennes',
    'IA PME Rennes',
    'agent IA Rennes',
    'formation IA Rennes',
    'IA agroalimentaire Bretagne',
    'IA FrenchTech Rennes',
  ],
  openGraph: {
    title: "Agence IA à Rennes : agents IA pour PME bretonnes | Althoce",
    description: "L'agence IA française qui accompagne les PME bretonnes. Numérique FrenchTech, agroalimentaire, industrie. Présentiel + distanciel + formation.",
    type: 'website',
    locale: 'fr_FR',
    url: 'https://althoce.com/agence-ia-rennes/',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Agence IA Rennes · Agents IA & Automatisation PME bretonnes | Althoce",
    description: "Expertise FrenchTech Atalante, agroalimentaire IFS/BRC, sous-traitance auto La Janais · Premier agent en 1 semaine · Souveraineté France garantie.",
  },
  alternates: {
    canonical: 'https://althoce.com/agence-ia-rennes/',
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": "https://althoce.com/agence-ia-rennes/#localbusiness",
      "name": "Althoce — Agence IA à Rennes",
      "description": "Agence IA française qui accompagne les PME et ETI bretonnes. Expertise numérique FrenchTech Rennes Saint-Malo (IRT b-com, Atalante Champeaux), agroalimentaire (Lactalis, Bridor, Brocéliande — conformité IFS/BRC), sous-traitance automobile (La Janais). Présentiel à Rennes, distanciel, formation IA, souveraineté France.",
      "url": "https://althoce.com/agence-ia-rennes/",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Rennes",
        "addressRegion": "Bretagne",
        "addressCountry": "FR"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "48.1173",
        "longitude": "-1.6778"
      },
      "areaServed": [
        { "@type": "City", "name": "Rennes" },
        { "@type": "City", "name": "Cesson-Sévigné" },
        { "@type": "City", "name": "Saint-Malo" },
        { "@type": "AdministrativeArea", "name": "Rennes Métropole" },
        { "@type": "AdministrativeArea", "name": "Bretagne" },
        { "@type": "Country", "name": "France" }
      ],
      "serviceType": "Agence IA, agents IA, automatisation et formation pour PME et ETI"
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://althoce.com/" },
        { "@type": "ListItem", "position": 2, "name": "Agences", "item": "https://althoce.com/agences/" },
        { "@type": "ListItem", "position": 3, "name": "Rennes", "item": "https://althoce.com/agence-ia-rennes/" }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Présentiel à Rennes ou distanciel : quelle différence ?",
          "acceptedAnswer": { "@type": "Answer", "text": "Aucune différence qualité ni délais. Présentiel pertinent à Rennes (Atalante Champeaux, La Courrouze, Beauregard, centre-ville), Cesson-Sévigné, Saint-Malo pour le cadrage et les ateliers. Build en distanciel structuré avec points hebdomadaires de 30 minutes." }
        },
        {
          "@type": "Question",
          "name": "Avez-vous un bureau permanent à Rennes ?",
          "acceptedAnswer": { "@type": "Answer", "text": "Pas de bureau permanent. Espaces partenaires à Atalante Champeaux pour les RDV présentiels. Déplacements réguliers dans Rennes Métropole et en Bretagne (Cesson-Sévigné, Saint-Malo, Lorient sur demande)." }
        },
        {
          "@type": "Question",
          "name": "Proposez-vous des formations IA pour mes équipes bretonnes ?",
          "acceptedAnswer": { "@type": "Answer", "text": "Oui. Ateliers de formation IA en présentiel à Rennes ou en distanciel synchrone. Formats 4h à 21h, adaptés par métier. Particulièrement utiles pour les scale-up FrenchTech, l'agroalimentaire (conformité IFS/BRC, traçabilité) et la sous-traitance automobile (IATF)." }
        },
        {
          "@type": "Question",
          "name": "Avez-vous une expertise sur l'agroalimentaire breton (Lactalis, Bridor, IFS/BRC) ?",
          "acceptedAnswer": { "@type": "Answer", "text": "Oui. Sous-traitance agroalimentaire bretonne, conformité IFS/BRC, traçabilité documentaire fournisseurs. Cas types : agents IA gestion documentaire conformité, vigilance fournisseurs critiques, automatisation ADV grands donneurs d'ordre. Données hébergées Mistral France (OVH), aucun transfert hors territoire." }
        },
        {
          "@type": "Question",
          "name": "Mes données restent-elles en France ?",
          "acceptedAnswer": { "@type": "Answer", "text": "Oui par défaut. Mistral hébergé France (OVH, Scaleway). Particulièrement strict pour l'agroalimentaire premium (secret recettes, conformité IFS/BRC), la sous-traitance automobile (compliance constructeurs PSA/Stellantis) et la recherche numérique IRT b-com." }
        },
        {
          "@type": "Question",
          "name": "Avez-vous des clients en Bretagne ?",
          "acceptedAnswer": { "@type": "Answer", "text": "Oui. Scale-up FrenchTech Atalante, agroalimentaire régional, cabinets d'expertise comptable rennais. Notre cas signature marketing (content ×4, trafic +140 %, 60 k€/an économisés) est directement transposable au tissu FrenchTech breton." }
        }
      ]
    }
  ]
};

export default function AgenceIARennesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <AgenceIARennesPageClient />
      <Footer showCta={false} />
    </>
  );
}

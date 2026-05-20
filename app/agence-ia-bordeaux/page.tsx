import type { Metadata } from 'next';
import AgenceIABordeauxPageClient from '@/components/AgenceIABordeauxPageClient';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: "Agence IA à Bordeaux : agents IA, automatisation et formation pour PME et ETI girondines | Althoce",
  description: "Althoce, agence IA française qui accompagne les PME et ETI à Bordeaux et en Gironde. Expertise viticulture et négoce bordelais, aéronautique sous-traitance Airbus, agroalimentaire premium. Présentiel à Bordeaux, distanciel, formation IA, souveraineté France. 30 min offertes avec un expert.",
  keywords: [
    'agence IA Bordeaux',
    'agence IA Gironde',
    'consultant IA Bordeaux',
    'automatisation Bordeaux',
    'IA PME Bordeaux',
    'agent IA Bordeaux',
    'formation IA Bordeaux',
    'IA viticulture Bordeaux',
    'IA aéronautique Bordeaux',
    'IA négoce vins Bordeaux',
    'IA Nouvelle-Aquitaine',
  ],
  openGraph: {
    title: "Agence IA à Bordeaux : agents IA pour PME girondines | Althoce",
    description: "L'agence IA française qui accompagne les PME bordelaises. Viticulture négoce export, aéronautique sous-traitance Airbus, agroalimentaire premium. Présentiel + distanciel + formation, souveraineté France.",
    type: 'website',
    locale: 'fr_FR',
    url: 'https://althoce.com/agence-ia-bordeaux/',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Agence IA Bordeaux · Agents IA & Automatisation PME girondines | Althoce",
    description: "Expertise négoce viticole FR/EN/ZH/JA, aéronautique Mérignac, agroalimentaire premium · Premier agent en 1 semaine · Souveraineté France garantie.",
  },
  alternates: {
    canonical: 'https://althoce.com/agence-ia-bordeaux/',
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": "https://althoce.com/agence-ia-bordeaux/#localbusiness",
      "name": "Althoce — Agence IA à Bordeaux",
      "description": "Agence IA française qui accompagne les PME et ETI bordelaises. Expertise viticulture et négoce bordelais (export FR/EN/ZH/JA), aéronautique et sous-traitance Airbus (EN 9100, Mérignac, Bordeaux Aéroparc), agroalimentaire premium Gironde. Présentiel à Bordeaux, distanciel, formation IA, souveraineté France.",
      "url": "https://althoce.com/agence-ia-bordeaux/",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Bordeaux",
        "addressRegion": "Nouvelle-Aquitaine",
        "addressCountry": "FR"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "44.8378",
        "longitude": "-0.5792"
      },
      "areaServed": [
        { "@type": "City", "name": "Bordeaux" },
        { "@type": "City", "name": "Mérignac" },
        { "@type": "City", "name": "Pessac" },
        { "@type": "City", "name": "Libourne" },
        { "@type": "AdministrativeArea", "name": "Bordeaux Métropole" },
        { "@type": "AdministrativeArea", "name": "Gironde" },
        { "@type": "AdministrativeArea", "name": "Nouvelle-Aquitaine" },
        { "@type": "Country", "name": "France" }
      ],
      "serviceType": "Agence IA, agents IA, automatisation et formation pour PME et ETI"
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://althoce.com/" },
        { "@type": "ListItem", "position": 2, "name": "Agences", "item": "https://althoce.com/agences/" },
        { "@type": "ListItem", "position": 3, "name": "Bordeaux", "item": "https://althoce.com/agence-ia-bordeaux/" }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Présentiel ou distanciel à Bordeaux : quelle différence ?",
          "acceptedAnswer": { "@type": "Answer", "text": "Aucune différence qualité ni délais. Présentiel pertinent à Bordeaux (Chartrons, Mériadeck, Bordeaux Lake, Aéroparc) et en Gironde (Mérignac, Pessac, Libourne) pour le cadrage et les ateliers. Build en distanciel structuré avec points hebdomadaires de 30 minutes." }
        },
        {
          "@type": "Question",
          "name": "Avez-vous un bureau permanent à Bordeaux ?",
          "acceptedAnswer": { "@type": "Answer", "text": "Pas de bureau permanent. Espaces partenaires à Bordeaux Aéroparc et à Mériadeck pour les RDV présentiels. Déplacements réguliers dans la métropole bordelaise et en Gironde (Mérignac, Libourne, Arcachon sur demande)." }
        },
        {
          "@type": "Question",
          "name": "Vos agents gèrent le multilingue FR/EN/ZH/JA pour l'export viticole ?",
          "acceptedAnswer": { "@type": "Answer", "text": "Oui. Notre agent de service client gère le français, l'anglais, le mandarin et le japonais nativement. Adapté aux négociants bordelais avec importateurs en Asie (Chine, Japon, Corée) et en Amérique du Nord. L'agent escalade automatiquement aux commerciaux pour les négociations complexes." }
        },
        {
          "@type": "Question",
          "name": "Avez-vous une expertise sur l'aéronautique bordelaise (sous-traitance Airbus, EN 9100) ?",
          "acceptedAnswer": { "@type": "Answer", "text": "Oui. Cas signature : ETI aéronautique Mérignac, 1,4 M€ d'économies achats, 120 fournisseurs surveillés. Conformité EN 9100, Nadcap, réglementations EASA. Données hébergées Mistral OVH France, confidentialité plans et données techniques clients garantie." }
        },
        {
          "@type": "Question",
          "name": "Mes données restent-elles en France ?",
          "acceptedAnswer": { "@type": "Answer", "text": "Oui par défaut. Mistral hébergé France (OVH, Scaleway). Particulièrement strict pour l'aéronautique (données clients Airbus, plans sous-traitance), la viticulture (accords distribution export, recettes propriétaires) et l'agroalimentaire premium (procédés et secrets commerciaux)." }
        },
        {
          "@type": "Question",
          "name": "Avez-vous des clients en Nouvelle-Aquitaine ?",
          "acceptedAnswer": { "@type": "Answer", "text": "Oui. Négociants en vins Chartrons, sous-traitants aéronautiques Mérignac et Bordeaux Aéroparc, cabinets d'expertise comptable Mériadeck, agroalimentaire premium Gironde. Notre cas signature négoce viticole (70 % autonomie FR/EN/ZH/JA, −60 % temps support, ROI 4 mois) est directement transposable." }
        }
      ]
    }
  ]
};

export default function AgenceIABordeauxPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <AgenceIABordeauxPageClient />
      <Footer showCta={false} />
    </>
  );
}

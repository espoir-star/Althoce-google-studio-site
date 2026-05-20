import type { Metadata } from 'next';
import AgenceIAMontpellierPageClient from '@/components/AgenceIAMontpellierPageClient';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: "Agence IA à Montpellier : agents IA, automatisation et formation pour PME et ETI montpelliéraines | Althoce",
  description: "Althoce, agence IA française qui accompagne les PME et ETI à Montpellier et en Occitanie. Expertise santé / biotech (CHU, Institut Méditerranéen de Cancérologie), numérique FrenchTech, viticulture Languedoc. Présentiel à Montpellier, distanciel, formation IA, souveraineté France. 30 min offertes avec un expert.",
  keywords: [
    'agence IA Montpellier',
    'agence IA Occitanie',
    'consultant IA Montpellier',
    'automatisation Montpellier',
    'IA PME Montpellier',
    'agent IA Montpellier',
    'formation IA Montpellier',
    'IA santé Montpellier',
    'IA biotech Languedoc',
    'IA FrenchTech Méditerranée',
  ],
  openGraph: {
    title: "Agence IA à Montpellier : agents IA pour PME montpelliéraines | Althoce",
    description: "L'agence IA française qui accompagne les PME montpelliéraines. Santé, biotech, FrenchTech, viticulture Languedoc. Présentiel + distanciel + formation, souveraineté France.",
    type: 'website',
    locale: 'fr_FR',
    url: 'https://althoce.com/agence-ia-montpellier/',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Agence IA Montpellier · Agents IA & Automatisation PME montpelliéraines | Althoce",
    description: "Expertise santé Languedoc, FrenchTech Méditerranée, viticulture premium · Premier agent en 1 semaine · Souveraineté France garantie.",
  },
  alternates: {
    canonical: 'https://althoce.com/agence-ia-montpellier/',
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": "https://althoce.com/agence-ia-montpellier/#localbusiness",
      "name": "Althoce — Agence IA à Montpellier",
      "description": "Agence IA française qui accompagne les PME et ETI montpelliéraines. Expertise santé et biotech (CHU Montpellier, Institut Méditerranéen de Cancérologie), FrenchTech Méditerranée (Cap Alpha), viticulture Languedoc premium. Présentiel à Montpellier, distanciel, formation IA, souveraineté France.",
      "url": "https://althoce.com/agence-ia-montpellier/",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Montpellier",
        "addressRegion": "Occitanie",
        "addressCountry": "FR"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "43.6108",
        "longitude": "3.8767"
      },
      "areaServed": [
        { "@type": "City", "name": "Montpellier" },
        { "@type": "City", "name": "Lattes" },
        { "@type": "City", "name": "Pérols" },
        { "@type": "City", "name": "Nîmes" },
        { "@type": "AdministrativeArea", "name": "Montpellier Méditerranée Métropole" },
        { "@type": "AdministrativeArea", "name": "Occitanie" },
        { "@type": "Country", "name": "France" }
      ],
      "serviceType": "Agence IA, agents IA, automatisation et formation pour PME et ETI"
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://althoce.com/" },
        { "@type": "ListItem", "position": 2, "name": "Agences", "item": "https://althoce.com/agences/" },
        { "@type": "ListItem", "position": 3, "name": "Montpellier", "item": "https://althoce.com/agence-ia-montpellier/" }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Présentiel ou distanciel à Montpellier : quelle différence ?",
          "acceptedAnswer": { "@type": "Answer", "text": "Aucune différence qualité ni délais. Présentiel pertinent à Montpellier (Antigone, Comédie, Cap Alpha, Port Marianne), Pérols-Lattes pour le cadrage et les ateliers. Build en distanciel structuré avec points hebdomadaires de 30 minutes." }
        },
        {
          "@type": "Question",
          "name": "Avez-vous un bureau permanent à Montpellier ?",
          "acceptedAnswer": { "@type": "Answer", "text": "Pas de bureau permanent. Espaces partenaires à Cap Alpha et sur l'Antigone pour les RDV présentiels. Déplacements réguliers dans la métropole et en Occitanie côté Méditerranée." }
        },
        {
          "@type": "Question",
          "name": "Proposez-vous des formations IA pour mes équipes montpelliéraines ?",
          "acceptedAnswer": { "@type": "Answer", "text": "Oui. Ateliers 4h à 21h, présentiel Montpellier (Cap Alpha ou vos locaux), Occitanie Méditerranée ou distanciel synchrone. Programme adapté par métier : scale-up FrenchTech, biotech, agences digitales, cabinets comptables." }
        },
        {
          "@type": "Question",
          "name": "Avez-vous une expertise sur la biotech montpelliéraine (CHU, Institut Méditerranéen de Cancérologie) ?",
          "acceptedAnswer": { "@type": "Answer", "text": "Oui. Conformité réglementaire HAS, ANSM, EMA. Souveraineté Mistral hébergé France obligatoire pour les données de recherche clinique et patients. Cas types : agents IA gestion documentaire pharma, veille réglementaire, vigilance fournisseurs critiques." }
        },
        {
          "@type": "Question",
          "name": "Mes données restent-elles en France ?",
          "acceptedAnswer": { "@type": "Answer", "text": "Oui par défaut. Mistral hébergé France (OVH, Scaleway). Particulièrement strict pour biotech (données patients, secret recherche), viticulture Languedoc premium (secret commercial) et agroalimentaire méditerranéen (normes sanitaires européennes)." }
        },
        {
          "@type": "Question",
          "name": "Avez-vous des clients en Occitanie côté Méditerranée ?",
          "acceptedAnswer": { "@type": "Answer", "text": "Oui. Scale-up FrenchTech Méditerranée, biotech Cap Alpha, cabinets d'expertise comptable centre-ville, agences digitales, viticulture Languedoc premium. Notre cas signature service client (CSAT +12 points, 70 % N1 absorbé) est directement transposable au tissu régional montpelliérain." }
        }
      ]
    }
  ]
};

export default function AgenceIAMontpellierPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <AgenceIAMontpellierPageClient />
      <Footer showCta={false} />
    </>
  );
}

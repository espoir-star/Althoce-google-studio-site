import type { Metadata } from 'next';
import AgenceIANantesPageClient from '@/components/AgenceIANantesPageClient';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: "Agence IA à Nantes : agents IA, automatisation et formation pour PME et ETI nantaises | Althoce",
  description: "Althoce, agence IA française qui accompagne les PME et ETI à Nantes et en Pays de la Loire. Expertise numérique, biotech, agroalimentaire. Présentiel à Nantes, distanciel, formation IA, souveraineté France. 30 min offertes avec un expert.",
  keywords: [
    'agence IA Nantes',
    'agence IA Pays de la Loire',
    'consultant IA Nantes',
    'automatisation Nantes',
    'IA PME Nantes',
    'agent IA Nantes',
    'formation IA Nantes',
    'IA numérique Nantes',
    'IA biotech Nantes',
  ],
  openGraph: {
    title: "Agence IA à Nantes : agents IA pour PME nantaises | Althoce",
    description: "L'agence IA française qui accompagne les PME nantaises. Numérique, biotech, agroalimentaire. Présentiel + distanciel + formation, souveraineté France.",
    type: 'website',
    locale: 'fr_FR',
    url: 'https://althoce.com/agence-ia-nantes/',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Agence IA Nantes · Agents IA & Automatisation PME nantaises | Althoce",
    description: 'Expertise numérique Île de Nantes, biotech Atlanpole, agroalimentaire · Présentiel possible · Premier agent en 1 semaine · Souveraineté France garantie.',
  },
  alternates: {
    canonical: 'https://althoce.com/agence-ia-nantes/',
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": "https://althoce.com/agence-ia-nantes/#localbusiness",
      "name": "Althoce — Agence IA à Nantes",
      "description": "Agence IA française qui accompagne les PME et ETI à Nantes et en Pays de la Loire. Expertise numérique Île de Nantes, biotech Atlanpole, agroalimentaire régional. Présentiel à Nantes, distanciel, formation IA, souveraineté France.",
      "url": "https://althoce.com/agence-ia-nantes/",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Nantes",
        "addressRegion": "Pays de la Loire",
        "addressCountry": "FR"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "47.2184",
        "longitude": "-1.5536"
      },
      "areaServed": [
        { "@type": "City", "name": "Nantes" },
        { "@type": "City", "name": "Saint-Herblain" },
        { "@type": "City", "name": "Rezé" },
        { "@type": "AdministrativeArea", "name": "Nantes Métropole" },
        { "@type": "AdministrativeArea", "name": "Pays de la Loire" },
        { "@type": "Country", "name": "France" }
      ],
      "serviceType": "Agence IA, agents IA, automatisation et formation pour PME et ETI"
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://althoce.com/" },
        { "@type": "ListItem", "position": 2, "name": "Agences", "item": "https://althoce.com/agences/" },
        { "@type": "ListItem", "position": 3, "name": "Nantes", "item": "https://althoce.com/agence-ia-nantes/" }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Présentiel ou distanciel à Nantes : quelle différence ?",
          "acceptedAnswer": { "@type": "Answer", "text": "Aucune différence qualité ni délais. Présentiel pertinent à Nantes (Île de Nantes, Quartier de la Création, centre-ville, Bouffay), Saint-Herblain pour le cadrage et les ateliers. Build en distanciel structuré avec points hebdomadaires." }
        },
        {
          "@type": "Question",
          "name": "Avez-vous un bureau permanent à Nantes ?",
          "acceptedAnswer": { "@type": "Answer", "text": "Pas de bureau permanent. Espaces partenaires sur l'Île de Nantes pour les RDV présentiels. Déplacements réguliers dans la métropole et en Pays de la Loire." }
        },
        {
          "@type": "Question",
          "name": "Proposez-vous des formations IA pour mes équipes nantaises ?",
          "acceptedAnswer": { "@type": "Answer", "text": "Oui. Ateliers 4h à 21h, présentiel Nantes, Pays de la Loire ou distanciel synchrone, programme adapté par métier : numérique, biotech, agences digitales, scale-up tech." }
        },
        {
          "@type": "Question",
          "name": "Avez-vous une expertise spécifique sur la biotech ouest (Atlanpole, CHU Nantes) ?",
          "acceptedAnswer": { "@type": "Answer", "text": "Oui. Conformité réglementaire HAS, ANSM, souveraineté Mistral hébergé France obligatoire pour les données de recherche clinique. Cas types : agents IA gestion documentaire pharma, veille réglementaire, vigilance fournisseurs critiques. Données patients sur infrastructure France uniquement." }
        },
        {
          "@type": "Question",
          "name": "Mes données restent-elles en France ?",
          "acceptedAnswer": { "@type": "Answer", "text": "Oui par défaut. Mistral hébergé France (OVH, Scaleway). Particulièrement strict pour biotech (données patients, secret recherche), agroalimentaire premium et sous-traitance navale (Chantiers de l'Atlantique Saint-Nazaire)." }
        },
        {
          "@type": "Question",
          "name": "Avez-vous des clients en Pays de la Loire ?",
          "acceptedAnswer": { "@type": "Answer", "text": "Oui. Scale-up tech Île de Nantes, biotech Atlanpole, cabinets d'expertise comptable centre-ville, agences digitales Quartier de la Création. Notre cas signature marketing (content ×4, trafic +140 %) est directement transposable au tissu régional nantais." }
        }
      ]
    }
  ]
};

export default function AgenceIANantesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <AgenceIANantesPageClient />
      <Footer showCta={false} />
    </>
  );
}

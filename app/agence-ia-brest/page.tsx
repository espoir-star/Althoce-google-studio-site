import type { Metadata } from 'next';
import AgenceIABrestPageClient from '@/components/AgenceIABrestPageClient';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: "Agence IA à Brest : agents IA, automatisation et formation pour PME et ETI brestoises | Althoce",
  description: "Althoce, agence IA française qui accompagne les PME et ETI à Brest et dans le Finistère. Expertise défense navale Naval Group, recherche maritime IFREMER, agroalimentaire breton. Souveraineté France absolue, auto-hébergement on-premise pour clients secret défense. Présentiel à Brest, distanciel, formation IA. 30 min offertes.",
  keywords: [
    'agence IA Brest',
    'agence IA Finistère',
    'consultant IA Brest',
    'automatisation Brest',
    'IA PME Brest',
    'agent IA Brest',
    'formation IA Brest',
    'IA Naval Group Brest',
    'IA défense maritime',
    'IA agroalimentaire breton',
  ],
  openGraph: {
    title: "Agence IA à Brest : agents IA pour PME brestoises | Althoce",
    description: "L'agence IA française qui accompagne les PME brestoises. Défense navale Naval Group, IFREMER, agroalimentaire breton. Souveraineté absolue + auto-hébergement on-premise.",
    type: 'website',
    locale: 'fr_FR',
    url: 'https://althoce.com/agence-ia-brest/',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Agence IA Brest · Agents IA & Automatisation défense navale et agroalimentaire breton | Althoce",
    description: "Expertise Naval Group Brest, IFREMER, agroalimentaire breton · Sourcing ×6 · 50 % temps libéré · Auto-hébergement on-premise secret défense · Souveraineté France absolue.",
  },
  alternates: {
    canonical: 'https://althoce.com/agence-ia-brest/',
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": "https://althoce.com/agence-ia-brest/#localbusiness",
      "name": "Althoce — Agence IA à Brest",
      "description": "Agence IA française qui accompagne les PME et ETI brestoises et finistériennes. Expertise défense navale Naval Group, recherche maritime IFREMER/IUEM, agroalimentaire breton. Souveraineté France absolue, auto-hébergement Mistral on-premise pour clients secret défense.",
      "url": "https://althoce.com/agence-ia-brest/",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Brest",
        "addressRegion": "Bretagne",
        "addressCountry": "FR"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "48.3905",
        "longitude": "-4.4860"
      },
      "areaServed": [
        { "@type": "City", "name": "Brest" },
        { "@type": "City", "name": "Plouzané" },
        { "@type": "City", "name": "Le Relecq-Kerhuon" },
        { "@type": "City", "name": "Plougastel-Daoulas" },
        { "@type": "AdministrativeArea", "name": "Finistère" },
        { "@type": "AdministrativeArea", "name": "Bretagne" },
        { "@type": "Country", "name": "France" }
      ],
      "serviceType": "Agence IA, agents IA, automatisation et formation pour PME et ETI brestoises"
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://althoce.com/" },
        { "@type": "ListItem", "position": 2, "name": "Agences", "item": "https://althoce.com/agences/" },
        { "@type": "ListItem", "position": 3, "name": "Brest", "item": "https://althoce.com/agence-ia-brest/" }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Présentiel à Brest ou distanciel : quelle différence ?",
          "acceptedAnswer": { "@type": "Answer", "text": "Aucune différence qualité ni délais. Présentiel à Brest (centre-ville, Technopôle Brest-Iroise, Naval Group) ou Plougastel-Daoulas pour le cadrage et les ateliers. Build en distanciel structuré avec points hebdomadaires de 30 minutes." }
        },
        {
          "@type": "Question",
          "name": "Avez-vous un bureau permanent à Brest ?",
          "acceptedAnswer": { "@type": "Answer", "text": "Pas de bureau permanent. Déplacements réguliers et espaces partenaires Technopôle Brest-Iroise pour les RDV présentiels. Déplacements réguliers dans le Finistère et le Pays de Brest." }
        },
        {
          "@type": "Question",
          "name": "Proposez-vous des formations IA pour mes équipes brestoises ?",
          "acceptedAnswer": { "@type": "Answer", "text": "Oui. Ateliers de formation IA en présentiel à Brest ou en distanciel synchrone. Formats 4h à 21h, adaptés aux équipes défense (conformité secret), recherche maritime (IFREMER, IUEM) et agroalimentaire breton." }
        },
        {
          "@type": "Question",
          "name": "Quelle est votre approche pour les clients avec secret défense ?",
          "acceptedAnswer": { "@type": "Answer", "text": "Auto-hébergement Mistral on-premise dans votre infrastructure, zéro donnée qui sort de votre SI. Pour les niveaux Diffusion Restreinte à Secret, nous déployons le modèle chez vous. Aucun appel API externe. Conformité secret défense garantie." }
        },
        {
          "@type": "Question",
          "name": "Mes données restent-elles en France ?",
          "acceptedAnswer": { "@type": "Answer", "text": "Oui, souveraineté absolue. Mistral hébergé France (OVH, Scaleway) par défaut. Auto-hébergement on-premise pour les clients Naval Group et secret défense. Critique pour le secret industriel naval, la propriété intellectuelle recherche maritime et les données utilisateurs export." }
        },
        {
          "@type": "Question",
          "name": "Avez-vous des clients dans le Finistère et le Pays de Brest ?",
          "acceptedAnswer": { "@type": "Answer", "text": "Oui. Sous-traitants Naval Group, acteurs agroalimentaires bretons, cabinets pro brestois. Notre cas signature achats défense (sourcing ×6, 50 % temps libéré, auto-hébergement on-premise, 8 semaines) est directement transposable au tissu industriel naval breton." }
        }
      ]
    }
  ]
};

export default function AgenceIABrestPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <AgenceIABrestPageClient />
      <Footer showCta={false} />
    </>
  );
}

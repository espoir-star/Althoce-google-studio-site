import type { Metadata } from 'next';
import AgenceIASaintEtiennePageClient from '@/components/AgenceIASaintEtiennePageClient';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: "Agence IA à Saint-Étienne : agents IA, automatisation et formation pour PME et ETI ligériennes | Althoce",
  description: "Althoce, agence IA française qui accompagne les PME et ETI à Saint-Étienne et dans la Loire. Expertise sous-traitance mécanique, design (Cité du Design), Saint-Étienne French Tech, pharma régionale. Présentiel à Saint-Étienne, distanciel, formation IA, souveraineté France. 30 min offertes avec un expert.",
  keywords: [
    'agence IA Saint-Étienne',
    'agence IA Loire',
    'consultant IA Saint-Étienne',
    'automatisation Saint-Étienne',
    'IA PME Saint-Étienne',
    'agent IA Saint-Étienne',
    'formation IA Saint-Étienne',
    'IA design Saint-Étienne',
    'IA sous-traitance mécanique',
    'IA French Tech Saint-Étienne',
  ],
  openGraph: {
    title: "Agence IA à Saint-Étienne : agents IA pour PME ligériennes | Althoce",
    description: "L'agence IA française qui accompagne les PME ligériennes. Sous-traitance mécanique, design, French Tech. Présentiel + distanciel + formation IA.",
    type: 'website',
    locale: 'fr_FR',
    url: 'https://althoce.com/agence-ia-saint-etienne/',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Agence IA Saint-Étienne · Agents IA & Automatisation sous-traitance mécanique et design | Althoce",
    description: "Expertise IATF/AS9100, Cité du Design, French Tech Saint-Étienne · Sourcing ×6 rapide · Compliance constructeurs documentée · Souveraineté France garantie.",
  },
  alternates: {
    canonical: 'https://althoce.com/agence-ia-saint-etienne/',
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": "https://althoce.com/agence-ia-saint-etienne/#localbusiness",
      "name": "Althoce — Agence IA à Saint-Étienne",
      "description": "Agence IA française qui accompagne les PME et ETI ligériennes. Expertise sous-traitance mécanique (IATF, AS9100), design (Cité du Design, Manufacture Plaine Achille), scale-up French Tech Saint-Étienne, pharma régionale. Présentiel à Saint-Étienne, distanciel, formation IA, souveraineté France.",
      "url": "https://althoce.com/agence-ia-saint-etienne/",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Saint-Étienne",
        "addressRegion": "Auvergne-Rhône-Alpes",
        "addressCountry": "FR"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "45.4397",
        "longitude": "4.3872"
      },
      "areaServed": [
        { "@type": "City", "name": "Saint-Étienne" },
        { "@type": "City", "name": "Saint-Chamond" },
        { "@type": "City", "name": "Andrézieux-Bouthéon" },
        { "@type": "AdministrativeArea", "name": "Loire" },
        { "@type": "AdministrativeArea", "name": "Auvergne-Rhône-Alpes" },
        { "@type": "Country", "name": "France" }
      ],
      "serviceType": "Agence IA, agents IA, automatisation et formation pour PME et ETI ligériennes"
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://althoce.com/" },
        { "@type": "ListItem", "position": 2, "name": "Agences", "item": "https://althoce.com/agences/" },
        { "@type": "ListItem", "position": 3, "name": "Saint-Étienne", "item": "https://althoce.com/agence-ia-saint-etienne/" }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Présentiel à Saint-Étienne ou distanciel : quelle différence ?",
          "acceptedAnswer": { "@type": "Answer", "text": "Aucune différence qualité ni délais. Présentiel à Saint-Étienne (Manufacture Plaine Achille, centre-ville), Saint-Chamond, Andrézieux-Bouthéon, ou dans la Loire plus largement pour le cadrage et les ateliers. Build en distanciel structuré avec points hebdomadaires de 30 minutes." }
        },
        {
          "@type": "Question",
          "name": "Avez-vous un bureau permanent à Saint-Étienne ?",
          "acceptedAnswer": { "@type": "Answer", "text": "Pas de bureau permanent. Déplacements réguliers et espaces partenaires à la Manufacture Plaine Achille pour les RDV présentiels. Déplacements réguliers dans la Loire et le Sud Auvergne-Rhône-Alpes (Roanne, Le Puy-en-Velay sur demande)." }
        },
        {
          "@type": "Question",
          "name": "Proposez-vous des formations IA pour mes équipes ligériennes ?",
          "acceptedAnswer": { "@type": "Answer", "text": "Oui. Ateliers de formation IA en présentiel à Saint-Étienne ou en distanciel synchrone. Formats 4h à 21h, adaptés aux métiers industrie sous-traitance (IATF, AS9100) et aux équipes design et scale-up French Tech." }
        },
        {
          "@type": "Question",
          "name": "Avez-vous une expertise sur la sous-traitance industrie auto (IATF) et aéro (AS9100) ?",
          "acceptedAnswer": { "@type": "Answer", "text": "Oui. Cas types : automatisation ADV grands donneurs d'ordre (Renault, PSA Stellantis, Alstom), documentation conformité IATF 16949 et AS9100/EN9100, vigilance financière fournisseurs critiques, gestion documentaire qualité. Données hébergées Mistral OVH France — secret industriel garanti." }
        },
        {
          "@type": "Question",
          "name": "Mes données restent-elles en France ?",
          "acceptedAnswer": { "@type": "Answer", "text": "Oui par défaut. Mistral hébergé France (OVH, Scaleway). Critique pour le secret industriel mécanique (plans, tolérances, conditions constructeurs), le design (propriété intellectuelle créative, prototypes confidentiels) et les scale-up French Tech (données utilisateurs)." }
        },
        {
          "@type": "Question",
          "name": "Avez-vous des clients à Saint-Étienne et dans la Loire ?",
          "acceptedAnswer": { "@type": "Answer", "text": "Oui. ETI sous-traitance mécanique ligériennes, cabinets d'expertise comptable stéphanois, scale-up French Tech Saint-Étienne. Notre cas signature ETI industrielle (sourcing ×6, 50 % temps libéré pour les acheteurs, compliance IATF documentée) est directement transposable au tissu sous-traitance mécanique régional." }
        }
      ]
    }
  ]
};

export default function AgenceIASaintEtiennePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <AgenceIASaintEtiennePageClient />
      <Footer showCta={false} />
    </>
  );
}

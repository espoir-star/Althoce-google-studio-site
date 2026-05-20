import type { Metadata } from 'next';
import AgenceIAAngersPageClient from '@/components/AgenceIAAngersPageClient';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: "Agence IA à Angers : agents IA, automatisation et formation pour PME et ETI angevines | Althoce",
  description: "Althoce, agence IA française qui accompagne les PME et ETI à Angers et en Pays de la Loire. Expertise Végépolys (végétal), FrenchTech Angers, agroalimentaire, viticulture Loire (Saumur, Anjou). Présentiel à Angers, distanciel, formation IA, souveraineté France. 30 min offertes.",
  keywords: [
    'agence IA Angers',
    'agence IA Maine-et-Loire',
    'consultant IA Angers',
    'automatisation Angers',
    'IA PME Angers',
    'agent IA Angers',
    'formation IA Angers',
    'IA Végépolys',
    'IA FrenchTech Angers',
    'IA agroalimentaire Loire',
  ],
  openGraph: {
    title: "Agence IA à Angers : agents IA pour PME angevines | Althoce",
    description: "L'agence IA française qui accompagne les PME angevines. Végépolys, FrenchTech, agroalimentaire, viticulture Loire. Présentiel + distanciel + formation.",
    type: 'website',
    locale: 'fr_FR',
    url: 'https://althoce.com/agence-ia-angers/',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Agence IA Angers · Agents IA & Automatisation Végépolys et FrenchTech Loire | Althoce",
    description: "Expertise Végépolys, FrenchTech Angers, viticulture Saumur-Anjou · 70 % N1 absorbé · 4 embauches annulées · Souveraineté France garantie.",
  },
  alternates: {
    canonical: 'https://althoce.com/agence-ia-angers/',
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": "https://althoce.com/agence-ia-angers/#localbusiness",
      "name": "Althoce — Agence IA à Angers",
      "description": "Agence IA française qui accompagne les PME et ETI angevines. Expertise cluster végétal Végépolys (semences, biotech végétale), FrenchTech Angers, agroalimentaire Loire, viticulture Saumur-Anjou. Souveraineté France par défaut.",
      "url": "https://althoce.com/agence-ia-angers/",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Angers",
        "addressRegion": "Pays de la Loire",
        "addressCountry": "FR"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "47.4784",
        "longitude": "-0.5632"
      },
      "areaServed": [
        { "@type": "City", "name": "Angers" },
        { "@type": "City", "name": "Saumur" },
        { "@type": "City", "name": "Cholet" },
        { "@type": "City", "name": "Beaucouzé" },
        { "@type": "AdministrativeArea", "name": "Maine-et-Loire" },
        { "@type": "AdministrativeArea", "name": "Pays de la Loire" },
        { "@type": "Country", "name": "France" }
      ],
      "serviceType": "Agence IA, agents IA, automatisation et formation pour PME et ETI angevines"
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://althoce.com/" },
        { "@type": "ListItem", "position": 2, "name": "Agences", "item": "https://althoce.com/agences/" },
        { "@type": "ListItem", "position": 3, "name": "Angers", "item": "https://althoce.com/agence-ia-angers/" }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Présentiel à Angers ou distanciel : quelle différence ?",
          "acceptedAnswer": { "@type": "Answer", "text": "Aucune différence qualité ni délais. Présentiel à Angers (centre-ville, Belle-Beille, Saint-Serge technopôle), Beaucouzé (Végépolys) ou Saumur pour le cadrage et les ateliers. Build en distanciel structuré avec points hebdomadaires de 30 minutes." }
        },
        {
          "@type": "Question",
          "name": "Avez-vous un bureau permanent à Angers ?",
          "acceptedAnswer": { "@type": "Answer", "text": "Pas de bureau permanent. Déplacements réguliers et espaces partenaires Saint-Serge pour les RDV présentiels. Déplacements réguliers en Maine-et-Loire et Pays de la Loire (Cholet, Le Mans sur demande)." }
        },
        {
          "@type": "Question",
          "name": "Proposez-vous des formations IA pour mes équipes angevines ?",
          "acceptedAnswer": { "@type": "Answer", "text": "Oui. Ateliers de formation IA en présentiel à Angers ou en distanciel synchrone. Formats 4h à 21h, adaptés aux équipes Végépolys (végétal, semences, biotech), FrenchTech Angers (SaaS B2B) et agroalimentaire Loire." }
        },
        {
          "@type": "Question",
          "name": "Avez-vous une expertise spécifique sur le cluster végétal Végépolys ?",
          "acceptedAnswer": { "@type": "Answer", "text": "Oui. Semenciers, biotech végétale, recherche en végétal. Cas types : gestion documentaire conformité, vigilance fournisseurs intrants critiques, automatisation ADV grands donneurs d'ordre semenciers. Souveraineté France par défaut pour la propriété intellectuelle." }
        },
        {
          "@type": "Question",
          "name": "Mes données restent-elles en France ?",
          "acceptedAnswer": { "@type": "Answer", "text": "Oui par défaut. Mistral hébergé France (OVH, Scaleway). Critique pour la propriété intellectuelle Végépolys (semences, brevets), les données utilisateurs des scale-up FrenchTech et le secret commercial viticulture Loire (Saumur, Anjou)." }
        },
        {
          "@type": "Question",
          "name": "Avez-vous des clients en Maine-et-Loire et Pays de la Loire ?",
          "acceptedAnswer": { "@type": "Answer", "text": "Oui. Scale-up FrenchTech Angers, acteurs Végépolys, viticulteurs Saumur-Anjou, cabinets pro angevins. Notre cas signature service client (70 % N1 absorbé, CSAT +12 pts, 4 embauches annulées soit 200k€/an) est transposable à l'ensemble du tissu SaaS et e-commerce angevin." }
        }
      ]
    }
  ]
};

export default function AgenceIAAngersPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <AgenceIAAngersPageClient />
      <Footer showCta={false} />
    </>
  );
}

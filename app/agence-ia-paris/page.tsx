import type { Metadata } from 'next';
import AgenceIAParisPageClient from '@/components/AgenceIAParisPageClient';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: "Agence IA à Paris : agents IA et automatisation pour PME et ETI franciliennes | Althoce",
  description: "Althoce, agence IA à Paris, accompagne les PME et ETI franciliennes dans leurs projets d'agents IA et d'automatisation. Présence parisienne, intervention en présentiel possible. Souveraineté France garantie. 30 min offertes avec un expert.",
  keywords: [
    'agence IA Paris',
    'agence IA Île-de-France',
    'consultant IA Paris',
    'automatisation Paris',
    'IA PME Paris',
    'agent IA Paris',
  ],
  openGraph: {
    title: "Agence IA à Paris : agents IA et automatisation PME franciliennes | Althoce",
    description: "L'agence IA parisienne des PME et ETI franciliennes. Présentiel possible, souveraineté France, +150 PME équipées en France.",
    type: 'website',
    locale: 'fr_FR',
    url: 'https://althoce.com/agence-ia-paris/',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Agence IA Paris · Agents IA & Automatisation PME franciliennes | Althoce',
    description: '+150 PME accompagnées · Présentiel possible · Premier agent en 1 semaine · Souveraineté France garantie.',
  },
  alternates: {
    canonical: 'https://althoce.com/agence-ia-paris/',
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": "https://althoce.com/agence-ia-paris/#localbusiness",
      "name": "Althoce — Agence IA à Paris",
      "description": "Agence IA Althoce, agents IA et automatisation pour PME et ETI franciliennes. Présence parisienne, intervention présentielle possible.",
      "url": "https://althoce.com/agence-ia-paris/",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Paris",
        "addressRegion": "Île-de-France",
        "addressCountry": "FR"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "48.8566",
        "longitude": "2.3522"
      },
      "areaServed": [
        { "@type": "City", "name": "Paris" },
        { "@type": "AdministrativeArea", "name": "Île-de-France" }
      ],
      "serviceType": "Agence IA, agents IA et automatisation pour PME et ETI"
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://althoce.com/" },
        { "@type": "ListItem", "position": 2, "name": "Agences", "item": "https://althoce.com/agences/" },
        { "@type": "ListItem", "position": 3, "name": "Paris", "item": "https://althoce.com/agence-ia-paris/" }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Avez-vous des bureaux physiques à Paris ?",
          "acceptedAnswer": { "@type": "Answer", "text": "Nous disposons d'un espace de travail régulier à Paris pour les RDV clients, les ateliers de cadrage et les présentations COMEX. Notre adresse exacte est partagée au moment de la prise de RDV." }
        },
        {
          "@type": "Question",
          "name": "Intervenez-vous en présentiel chez les clients à Paris ?",
          "acceptedAnswer": { "@type": "Answer", "text": "Oui, sur demande. Le présentiel est pertinent en cadrage initial, ateliers stratégiques et présentations COMEX. Déplacements inclus à Paris et petite couronne." }
        },
        {
          "@type": "Question",
          "name": "Travaillez-vous avec les grands comptes parisiens ou seulement les PME ?",
          "acceptedAnswer": { "@type": "Answer", "text": "Cœur de cible PME et ETI (50-1 000 collaborateurs). Filiales de groupes acceptées sur projets pilotes. Grands comptes (> 5 000) : orientation partenaires intégrateurs." }
        },
        {
          "@type": "Question",
          "name": "Quelle est la différence entre votre approche et celle des grands cabinets parisiens ?",
          "acceptedAnswer": { "@type": "Answer", "text": "Délai (1 semaine vs 6 mois pour un PowerPoint), livrable (code de production prêt à l'emploi), coût significativement inférieur sur les phases opérationnelles." }
        },
        {
          "@type": "Question",
          "name": "Mes données restent-elles en France si je travaille avec une agence parisienne ?",
          "acceptedAnswer": { "@type": "Answer", "text": "Oui par défaut. Infrastructure hébergée en France (OVH, Scaleway), Mistral hébergé France. Anonymisation sur modèles propriétaires si acceptés." }
        },
        {
          "@type": "Question",
          "name": "Quels secteurs avez-vous déjà accompagnés à Paris ?",
          "acceptedAnswer": { "@type": "Answer", "text": "SaaS B2B, cabinets de recrutement, avocats, conseil, agences marketing, e-commerce, ESN, services financiers, luxe (back-office), pharma (R&D), fonction publique (marchés publics)." }
        }
      ]
    }
  ]
};

export default function AgenceIAParisPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <AgenceIAParisPageClient />
      <Footer showCta={false} />
    </>
  );
}

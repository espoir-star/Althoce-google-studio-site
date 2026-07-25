import type { Metadata } from 'next';
import FormationIAPageClient from '@/components/FormationIAPageClient';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Formation IA pour entreprise',
  description: "Deux formations indépendantes d'une journée pour former vos équipes à l'IA générative. Sur vos vrais dossiers, avec vos outils. Finançables OPCO.",
  keywords: ['formation IA entreprise', 'formation intelligence artificielle', 'formation IA générative', 'formation ChatGPT entreprise', 'formation Claude IA', 'formation IA finançable OPCO', 'formation prompting'],
  openGraph: {
    title: 'Formation IA pour entreprise | Althoce',
    description: "Deux formations indépendantes d'une journée pour former vos équipes à l'IA générative. Sur vos vrais dossiers, avec vos outils. Finançables OPCO.",
    type: 'website',
    locale: 'fr_FR',
    url: 'https://althoce.com/services/formation-ia/',
    images: [
      {
        url: '/og-default.png',
        width: 1200,
        height: 630,
        alt: 'Althoce — Formation IA pour entreprise',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Formation IA pour entreprise | Althoce',
    description: "Deux formations d'une journée pour former vos équipes à l'IA générative. Sur vos vrais dossiers, avec vos outils. Finançables OPCO.",
  },
  alternates: {
    canonical: 'https://althoce.com/services/formation-ia/',
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": "https://althoce.com/services/formation-ia/#service",
      "name": "Formation IA pour entreprise",
      "description": "Deux formations indépendantes d'une journée pour former les équipes des PME et ETI françaises à l'IA générative. Sur vos vrais dossiers, avec vos outils. Finançables OPCO.",
      "url": "https://althoce.com/services/formation-ia/",
      "provider": {
        "@type": "Organization",
        "@id": "https://althoce.com/#organization",
        "name": "Althoce",
        "url": "https://althoce.com/"
      },
      "areaServed": { "@type": "Country", "name": "France" },
      "serviceType": "Formation IA en entreprise"
    },
    {
      "@type": "ItemList",
      "name": "Formations IA Althoce",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "IA Fondamentaux",
          "url": "https://althoce.com/services/formation-ia/ia-fondamentaux/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "IA Avancée",
          "url": "https://althoce.com/services/formation-ia/ia-avancee/"
        }
      ]
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://althoce.com/" },
        { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://althoce.com/services/" },
        { "@type": "ListItem", "position": 3, "name": "Formation IA", "item": "https://althoce.com/services/formation-ia/" }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Faut-il des compétences techniques ?",
          "acceptedAnswer": { "@type": "Answer", "text": "Non pour la formation Fondamentaux, aucun prérequis. La formation Avancée demande une pratique régulière d'un outil IA. Un questionnaire de vérification est envoyé en amont." }
        },
        {
          "@type": "Question",
          "name": "Sur quel outil se déroule la formation ?",
          "acceptedAnswer": { "@type": "Answer", "text": "Sur celui que vos équipes utilisent déjà, ChatGPT ou Claude. Si le choix n'est pas encore fait, nous vous aidons à le poser pendant le cadrage." }
        },
        {
          "@type": "Question",
          "name": "Peut-on former plus de 10 personnes ?",
          "acceptedAnswer": { "@type": "Answer", "text": "Oui, en organisant plusieurs sessions. Nous limitons à 10 participants pour garantir un accompagnement individuel pendant les ateliers." }
        },
        {
          "@type": "Question",
          "name": "Quel délai faut-il prévoir ?",
          "acceptedAnswer": { "@type": "Answer", "text": "Deux à trois semaines entre le premier échange et la session : cadrage, questionnaire aux participants, adaptation des supports et montage du dossier de financement si besoin." }
        },
        {
          "@type": "Question",
          "name": "Les formations sont-elles accessibles aux personnes en situation de handicap ?",
          "acceptedAnswer": { "@type": "Answer", "text": "Oui. Contactez-nous en amont pour que nous préparions les aménagements nécessaires." }
        },
        {
          "@type": "Question",
          "name": "Que se passe-t-il après la formation ?",
          "acceptedAnswer": { "@type": "Answer", "text": "Une visio de suivi est prévue à 30 jours. Beaucoup de clients enchaînent ensuite sur un projet d'automatisation concret, souvent identifié pendant la formation." }
        }
      ]
    }
  ]
};

export default function FormationIAPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <FormationIAPageClient />
      <Footer showCta={false} />
    </>
  );
}

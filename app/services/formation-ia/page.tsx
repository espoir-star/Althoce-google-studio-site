import type { Metadata } from 'next';
import FormationIAPageClient from '@/components/FormationIAPageClient';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Formation IA en entreprise : ateliers, conseil et accompagnement sur-mesure | Althoce',
  description: "Quatre formats pour faire monter votre équipe en compétences IA : ateliers pratiques, onboarding outils IA (Claude, ChatGPT, Copilot), missions conseil, accompagnement long. Sur-mesure, contextualisé sur votre métier, sans jargon. 30 min offertes avec un expert.",
  keywords: ['formation IA entreprise', 'formation intelligence artificielle', 'atelier IA PME', 'onboarding outils IA', 'formation ChatGPT entreprise', 'formation Claude IA', 'accompagnement IA équipe'],
  openGraph: {
    title: 'Formation IA en entreprise — Ateliers, conseil, accompagnement | Althoce',
    description: "Quatre formats pour former votre équipe à l'IA : ateliers pratiques, onboarding outils, missions conseil, accompagnement long. Sur-mesure, sans jargon. 30 min offertes.",
    type: 'website',
    locale: 'fr_FR',
    url: 'https://althoce.com/services/formation-ia/',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Formation IA en entreprise | Althoce',
    description: "Ateliers, onboarding outils IA, missions conseil et accompagnement long. Sur-mesure, contextualisé sur votre métier. 30 min offertes.",
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
      "name": "Formation IA en entreprise",
      "description": "Quatre formats pour former votre équipe à l'IA : ateliers pratiques, onboarding outils IA (Claude, ChatGPT, Copilot), missions conseil, accompagnement long. Sur-mesure, contextualisé sur votre métier.",
      "url": "https://althoce.com/services/formation-ia/",
      "provider": {
        "@type": "Organization",
        "@id": "https://althoce.com/#organization",
        "name": "Althoce",
        "url": "https://althoce.com/"
      },
      "areaServed": {
        "@type": "Country",
        "name": "France"
      },
      "serviceType": "Formation IA en entreprise",
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Formats de formation IA Althoce",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Atelier IA pratique",
              "description": "Session intensive d'une demi-journée ou une journée. Vos équipes manipulent l'IA sur des cas réels tirés de votre activité."
            },
            "priceSpecification": { "@type": "PriceSpecification", "priceCurrency": "EUR", "price": "0", "description": "Sur devis" }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Onboarding outils IA",
              "description": "Prise en main guidée de Claude, ChatGPT, Copilot ou d'un outil IA déjà déployé dans votre SI. Protocoles d'usage, bonnes pratiques, cas d'usage métier."
            },
            "priceSpecification": { "@type": "PriceSpecification", "priceCurrency": "EUR", "price": "0", "description": "Sur devis" }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Mission conseil formation",
              "description": "Cadrage des besoins, cartographie des compétences, plan de formation sur-mesure, animation des premières sessions."
            },
            "priceSpecification": { "@type": "PriceSpecification", "priceCurrency": "EUR", "price": "0", "description": "Sur devis" }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Accompagnement entreprise",
              "description": "Présence récurrente à temps partagé (1 à 2 jours/mois). Suivi de l'adoption IA dans la durée, ajustement des usages, formation continue au fil des évolutions."
            },
            "priceSpecification": { "@type": "PriceSpecification", "priceCurrency": "EUR", "price": "0", "description": "Sur devis" }
          }
        ]
      }
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
          "name": "Faut-il des prérequis techniques pour suivre une formation IA Althoce ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Non. Les formations sont calibrées au niveau réel de votre équipe, du collaborateur non-technique au manager qui veut comprendre les enjeux. Pas de code, pas de jargon si vous n'en voulez pas."
          }
        },
        {
          "@type": "Question",
          "name": "En quoi la formation Althoce est-elle différente d'un MOOC ou d'une formation catalogue ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Elle est contextualisée sur votre métier. Les exemples, les exercices, les cas pratiques viennent de votre secteur et de vos processus réels — pas d'un catalogue générique."
          }
        },
        {
          "@type": "Question",
          "name": "Quel format choisir pour débuter ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "L'atelier IA pratique (demi-journée ou journée) est le point d'entrée idéal. Résultat immédiat, équipe mobilisée, coût maîtrisé."
          }
        },
        {
          "@type": "Question",
          "name": "Proposez-vous des formations sur des outils spécifiques ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Oui : Claude, ChatGPT, Copilot, Notion AI, et les outils IA déjà déployés dans votre SI. L'onboarding outils IA est pensé pour accélérer l'adoption d'un outil précis."
          }
        },
        {
          "@type": "Question",
          "name": "Comment se passe la première étape ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "30 minutes offertes avec un expert Althoce. On identifie votre niveau de départ, vos objectifs, le format adapté. Devis sous 5 jours ouvrés, vous décidez sans engagement."
          }
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
      <Footer showCta={true} />
    </>
  );
}

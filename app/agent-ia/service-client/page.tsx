import type { Metadata } from 'next';
import AgentIASupportPageClient from '@/components/AgentIASupportPageClient';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Agent IA pour le service client : N1 absorbé en 24/7, équipe humaine sur les cas complexes | Althoce',
  description: "Un agent IA Althoce absorbe 70 % des tickets support niveau 1, répond en 4 langues, escalade avec contexte enrichi quand c'est complexe. Temps de réponse divisé par 100, CSAT en hausse de 12 points. Tarification sur devis, 30 min offertes avec un expert.",
  keywords: ['agent IA support', 'agent IA tickets', 'automatisation support client', 'IA pour service client', 'agent IA Zendesk', 'agent IA Intercom', 'IA support multilingue'],
  openGraph: {
    title: 'Agent IA pour le support client : N1 absorbé en 24/7 | Althoce',
    description: "Vos agents support saturés par les tickets répétitifs. Un agent IA absorbe le N1, escalade le complexe, libère votre équipe humaine pour la valeur.",
    type: 'article',
    locale: 'fr_FR',
    url: 'https://althoce.com/agent-ia/service-client/',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Agent IA service client | Althoce',
    description: "70 % de tickets N1 absorbés. Temps de réponse divisé par 100. CSAT +12 points. 30 min offertes avec un expert.",
  },
  alternates: {
    canonical: 'https://althoce.com/agent-ia/service-client/',
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": "https://althoce.com/agent-ia/service-client/#service",
      "name": "Agent IA pour le support client",
      "serviceType": "AI agent for customer support",
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
      "description": "Agents IA Althoce pour le support client : FAQ N0, tickets N1 multilingue, statut commande e-commerce, escalade enrichie. Intégration Zendesk, Intercom, Freshdesk, Gorgias. 70 % de déflexion N1 typique.",
      "offers": {
        "@type": "Offer",
        "url": "https://althoce.com/agent-ia/service-client/",
        "priceSpecification": {
          "@type": "PriceSpecification",
          "priceCurrency": "EUR",
          "description": "Tarification sur devis selon volume de tickets, outils branchés, langues couvertes. ROI typique en 3 à 6 mois avec CSAT +10 à +15 points."
        }
      }
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://althoce.com/" },
        { "@type": "ListItem", "position": 2, "name": "Automatisation", "item": "https://althoce.com/services/automatisation-ia/" },
        { "@type": "ListItem", "position": 3, "name": "Agent IA service client", "item": "https://althoce.com/agent-ia/service-client/" }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Différence chatbot RAG vs agent IA support ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Le chatbot répond, l'agent IA agit (consulte back-office, met à jour Zendesk, déclenche remboursement, escalade avec contexte enrichi)."
          }
        },
        {
          "@type": "Question",
          "name": "70 % du N1 résolu sans humain, vraiment ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Oui sur les types de tickets standardisés. Les 30 % restants : cas complexes escalés avec contexte. Ratio dépend de la qualité de la base de connaissances."
          }
        },
        {
          "@type": "Question",
          "name": "Quel investissement et quel ROI pour un agent IA support ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Sur devis selon scope. ROI typique 3 à 6 mois. Temps de réponse divisé par 100, CSAT +10 à +15 points. 30 min offertes avec un expert."
          }
        },
        {
          "@type": "Question",
          "name": "Intégration outil support existant ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Oui. Zendesk, Intercom, Freshdesk, Gorgias en standard. Outils propriétaires : connecteurs custom."
          }
        },
        {
          "@type": "Question",
          "name": "Multilingue ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Oui par défaut. Français, anglais, espagnol, italien, allemand, portugais, néerlandais, mandarin, japonais."
          }
        },
        {
          "@type": "Question",
          "name": "Si l'agent donne une mauvaise réponse ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Ancrage strict sur base de connaissances, filtrage sujets sensibles, monitoring continu, alertes sur dérive."
          }
        },
        {
          "@type": "Question",
          "name": "ROI en combien de temps ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Agent N0 : impact J1. Agent N1 : montée en charge sur 4-8 semaines. ROI plein typique 3 à 6 mois."
          }
        },
        {
          "@type": "Question",
          "name": "Va-t-il remplacer mes agents support ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Non. Redéploiement sur cas complexes. +12 points CSAT, 0 départ d'équipe, meilleure rétention."
          }
        }
      ]
    }
  ]
};

export default function AgentIASupportPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <AgentIASupportPageClient />
      <Footer showCta={true} />
    </>
  );
}

import type { Metadata } from 'next';
import AgentIAFinancePageClient from '@/components/AgentIAFinancePageClient';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Agent IA pour la finance et la comptabilité : saisie, factures, rapprochement, reporting | Althoce',
  description: "Un agent IA Althoce absorbe 80 % de la saisie comptable et du reporting financier : factures fournisseurs, rapprochement bancaire, écritures, indicateurs de pilotage. ROI inférieur à 6 mois, capacité doublée sans recruter. Tarification sur devis, 30 min offertes avec un expert.",
  keywords: ['agent IA finance', 'agent IA comptabilité', 'IA reporting financier', 'automatisation comptabilité', 'IA DAF', 'automatisation factures fournisseurs', 'IA expert-comptable', 'agent IA comptable', 'IA contrôle de gestion'],
  openGraph: {
    title: 'Agent IA pour la finance et la comptabilité — Althoce',
    description: "80 % de la saisie comptable absorbée par un agent IA. Factures, rapprochement, reporting. ROI sous 6 mois.",
    type: 'article',
    locale: 'fr_FR',
    url: 'https://althoce.com/agent-ia/finance/',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Agent IA finance et comptabilité | Althoce',
    description: "80 % de saisie absorbée. Factures, rapprochement, reporting automatisés. ROI inférieur à 6 mois.",
  },
  alternates: {
    canonical: 'https://althoce.com/agent-ia/finance/',
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": "https://althoce.com/agent-ia/finance/#service",
      "name": "Agent IA pour la finance et la comptabilité",
      "serviceType": "Agent IA pour la finance et la comptabilité",
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
      "description": "Agents IA Althoce pour la finance et la comptabilité PME : factures fournisseurs, rapprochement bancaire, reporting financier, assistant DAF. Intégration Sage, Cegid, Pennylane, QuickBooks, EBP. 80 % de saisie absorbée en autonomie.",
      "offers": {
        "@type": "Offer",
        "url": "https://althoce.com/agent-ia/finance/",
        "priceSpecification": {
          "@type": "PriceSpecification",
          "priceCurrency": "EUR",
          "description": "Tarification sur devis selon volume mensuel de factures, outils branchés et périmètre fonctionnel. ROI typique en moins de 6 mois."
        }
      }
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://althoce.com/" },
        { "@type": "ListItem", "position": 2, "name": "Automatisation", "item": "https://althoce.com/services/automatisation-ia/" },
        { "@type": "ListItem", "position": 3, "name": "Agent IA Comptabilité", "item": "https://althoce.com/agent-ia/finance/" }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Mon agent comptable peut-il se connecter à Sage, Cegid, Pennylane, QuickBooks, EBP ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Oui, sur tous ces logiciels. API officielles ou connecteurs RPA selon l'éditeur. Écritures passées avec la même rigueur qu'une saisie humaine, validation sous votre contrôle."
          }
        },
        {
          "@type": "Question",
          "name": "Que se passe-t-il si l'agent fait une erreur sur une écriture ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Validation humaine obligatoire sur les écritures sensibles, filtres de cohérence, journalisation exhaustive. Taux d'erreur observé inférieur à 0,5 %, contre 1 à 3 % pour la saisie humaine manuelle."
          }
        },
        {
          "@type": "Question",
          "name": "Quel investissement pour un agent IA finance et comptabilité et quel ROI attendre ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Sur devis selon volume, outils, périmètre. ROI typique en moins de 6 mois. Capacité doublée sans recruter. 30 minutes offertes avec un expert pour un devis ferme."
          }
        },
        {
          "@type": "Question",
          "name": "En combien de temps l'agent est-il opérationnel ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "1 à 2 semaines pour un agent simple. 4 à 6 semaines pour un système comptable complet. Cadrage chiffré et signé avant tout démarrage."
          }
        },
        {
          "@type": "Question",
          "name": "Mon expert-comptable ou DAF reste-t-il indispensable ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Plus que jamais. L'agent absorbe la saisie, le DAF se recentre sur l'analyse, le conseil et la fiscalité. Aucun client n'a remplacé son DAF par un agent IA."
          }
        },
        {
          "@type": "Question",
          "name": "Mes données comptables sont-elles envoyées à OpenAI ou Anthropic ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Uniquement si vous l'acceptez, avec anonymisation préalable. Pour souveraineté totale : Mistral hébergé en France ou modèles open-source auto-hébergés."
          }
        },
        {
          "@type": "Question",
          "name": "L'agent peut-il préparer une déclaration fiscale (TVA, IS, liasse) ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Il prépare le brouillon de pré-remplissage. Votre expert valide, signe et télétransmet. Économie de 50 à 70 % du temps de préparation."
          }
        },
        {
          "@type": "Question",
          "name": "À qui appartient l'agent à la fin de la mission ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "À vous, à 100 %. Code, prompts, workflows, accès LLM, journaux : tout vous est transféré. Sans abonnement obligatoire."
          }
        }
      ]
    }
  ]
};

export default function AgentIAFinancePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <AgentIAFinancePageClient />
      <Footer showCta={true} />
    </>
  );
}

import type { Metadata } from 'next';
import AgentIAOpsPageClient from '@/components/AgentIAOpsPageClient';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Agent IA pour les opérations et le back-office : mails, documents, ADV en pilote automatique | Althoce',
  description: "Un agent IA Althoce absorbe les tâches répétitives transversales du back-office : tri et réponse aux mails entrants, gestion documentaire, suivi ADV, mise à jour fournisseurs. Votre équipe ops sort du burn-out cyclique. Tarification sur devis, 30 min offertes avec un expert.",
  keywords: ['agent IA ops', 'agent IA back-office', 'automatisation ADV', 'IA pour assistant administratif', 'agent IA traitement mails', 'IA gestion documentaire', 'automatisation suivi fournisseurs'],
  openGraph: {
    title: 'Agent IA pour les ops : mails, documents, ADV en pilote automatique | Althoce',
    description: "Poste pluri-tâches en burn-out cyclique ? Un agent IA absorbe la couche répétitive (mails, ADV, documents, fournisseurs), votre équipe ops sort du chaos.",
    type: 'article',
    locale: 'fr_FR',
    url: 'https://althoce.com/agent-ia/operations/',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Agent IA ops : mails, ADV, documents en pilote automatique | Althoce',
    description: "70 % des mails N1 absorbés. ADV automatisée. Documents classés en continu. Fin du turnover ops. ROI en moins de 6 mois.",
  },
  alternates: {
    canonical: 'https://althoce.com/agent-ia/operations/',
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": "https://althoce.com/agent-ia/operations/#service",
      "name": "Agent IA pour les opérations et le back-office",
      "serviceType": "AI agent for operations and back-office automation",
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
      "description": "Agents IA Althoce pour les opérations : traitement mails entrants, ADV automatisée, gestion documentaire, suivi fournisseurs et reporting opérationnel. Intégration ERP (SAP, Sage, Cegid, Dynamics, Odoo).",
      "offers": {
        "@type": "Offer",
        "url": "https://althoce.com/agent-ia/operations/",
        "priceSpecification": {
          "@type": "PriceSpecification",
          "priceCurrency": "EUR",
          "description": "Tarification sur devis selon volume, outils branchés, scope. ROI typique 3 à 6 mois. Fin du turnover assistant ops (coût caché >40 K€/an)."
        }
      }
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://althoce.com/" },
        { "@type": "ListItem", "position": 2, "name": "Automatisation", "item": "https://althoce.com/services/automatisation-ia/" },
        { "@type": "ListItem", "position": 3, "name": "Agent IA ops", "item": "https://althoce.com/agent-ia/operations/" }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Quelle est la différence entre un agent IA ops et un RPA classique ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "RPA suit des règles fixes (30 % des cas). Agent IA comprend le contexte en langage naturel, s'adapte, escalade intelligemment (70-80 % des cas). Peut aussi se greffer sur un RPA existant pour gérer ses exceptions."
          }
        },
        {
          "@type": "Question",
          "name": "L'agent peut-il comprendre des mails en langage naturel ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Oui. LLM (Mistral, Claude, GPT) en français professionnel. Détection des intentions sous-jacentes. Calibrage sur 200 mails historiques au cadrage."
          }
        },
        {
          "@type": "Question",
          "name": "Quel investissement pour un agent IA ops et quel ROI attendre ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Sur devis selon scope. ROI typique 3 à 6 mois. Fin du turnover ops (coût caché souvent >40 K€/an). Tout démarre par 30 minutes offertes avec un expert."
          }
        },
        {
          "@type": "Question",
          "name": "L'agent peut-il s'intégrer à mon ERP existant (SAP, Sage, Cegid, Dynamics) ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Oui. SAP, Sage, Cegid, Microsoft Dynamics, Odoo en standard. ERP propriétaires : connecteurs custom développés au cadrage."
          }
        },
        {
          "@type": "Question",
          "name": "Que se passe-t-il si l'agent crée une commande erronée dans l'ERP ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Trois garde-fous : validation humaine sur commandes sensibles, checks de cohérence automatiques, log auditable avec annulation rapide. Taux d'erreur observé : inférieur à 0,3 %."
          }
        },
        {
          "@type": "Question",
          "name": "L'agent va-t-il remplacer mon assistant administratif ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Non. Redéploiement sur validation et arbitrage. Aucun assistant ops n'a quitté l'entreprise suite au déploiement. Turnover historique chute drastiquement."
          }
        },
        {
          "@type": "Question",
          "name": "Mes données opérationnelles restent-elles confidentielles ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Oui. Anonymisation des PII avant tout envoi LLM. Pour souveraineté maximale : Mistral hébergé en France + auto-hébergement infra possible."
          }
        },
        {
          "@type": "Question",
          "name": "En combien de temps voit-on les premiers résultats ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Mails : impact J1, calibrage 2-3 semaines. ADV : montée en charge 3-4 semaines. Documents : impact immédiat. ROI plein typique 3 à 6 mois."
          }
        }
      ]
    }
  ]
};

export default function AgentIAOpsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <AgentIAOpsPageClient />
      <Footer showCta={true} />
    </>
  );
}

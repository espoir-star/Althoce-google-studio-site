import type { Metadata } from 'next';
import AgentIACommercialPageClient from '@/components/AgentIACommercialPageClient';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Agent IA pour le commercial : prospection, qualification, prise de RDV en pilote automatique | Althoce',
  description: "Un agent IA Althoce absorbe la prospection, la qualification de leads, les relances pipeline et la prise de RDV. Vos commerciaux se concentrent sur le closing. ROI inférieur à 6 mois, +80 RDV qualifiés/mois en moyenne. Tarification sur devis, 30 min offertes avec un expert.",
  keywords: ['agent IA commercial', 'agent IA SDR', 'agent IA prospection', 'automatisation commerciale', 'IA pour commerciaux', 'agent IA HubSpot', 'agent IA Salesforce', 'IA prise de RDV'],
  openGraph: {
    title: 'Agent IA pour le commercial : prospection et qualification en pilote automatique | Althoce',
    description: "Vos commerciaux saturés ne prospectent plus. Un agent IA absorbe la prospection, la qualification, la prise de RDV. Ils ferment, l'IA alimente.",
    type: 'article',
    locale: 'fr_FR',
    url: 'https://althoce.com/agent-ia/commercial/',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Agent IA commercial | Althoce',
    description: "Prospection, qualification, relance pipeline, prise de RDV en pilote automatique. ROI < 6 mois. 30 min offertes.",
  },
  alternates: {
    canonical: 'https://althoce.com/agent-ia/commercial/',
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": "https://althoce.com/agent-ia/commercial/#service",
      "name": "Agent IA pour le commercial",
      "serviceType": "AI agent for sales and prospecting",
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
      "description": "Agents IA Althoce déployés dans le métier commercial : SDR outbound, qualification inbound, relance pipeline, suivi post-vente. Intégration HubSpot, Salesforce, Pipedrive. ROI mesurable en moins de 6 mois.",
      "offers": {
        "@type": "Offer",
        "url": "https://althoce.com/agent-ia/commercial/",
        "priceSpecification": {
          "@type": "PriceSpecification",
          "priceCurrency": "EUR",
          "description": "Tarification sur devis selon scope (nombre de canaux, intégration CRM, volume cible). Payback typique en moins de 6 mois sur les équipes commerciales saturées."
        }
      }
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://althoce.com/" },
        { "@type": "ListItem", "position": 2, "name": "Automatisation", "item": "https://althoce.com/services/automatisation-ia/" },
        { "@type": "ListItem", "position": 3, "name": "Agent IA commercial", "item": "https://althoce.com/agent-ia/commercial/" }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Un agent IA SDR peut-il remplacer un commercial humain ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Non. L'agent absorbe la partie répétitive (prospection, qualification, relance). Les commerciaux humains gardent le closing et les grands comptes."
          }
        },
        {
          "@type": "Question",
          "name": "Comment l'agent personnalise-t-il les messages ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Trois couches : fiche entreprise, fiche personne, votre ICP et proposition de valeur. Taux de réponse 3 à 5 fois supérieur à un mail générique."
          }
        },
        {
          "@type": "Question",
          "name": "Quel investissement et quel ROI pour un agent IA commercial ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Sur devis selon scope. Payback typique en moins de 6 mois sur les équipes saturées. 30 min offertes avec un expert pour cadrer."
          }
        },
        {
          "@type": "Question",
          "name": "Intégration avec mon CRM ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Oui. HubSpot, Salesforce, Pipedrive, Zoho en standard. Permissions héritées du CRM. CRM internes propriétaires : connecteurs custom au cadrage."
          }
        },
        {
          "@type": "Question",
          "name": "Que se passe-t-il en cas d'erreur de l'agent ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Revue humaine sur les premiers envois, règles strictes d'escalade, monitoring continu, alertes automatiques sur dérive."
          }
        },
        {
          "@type": "Question",
          "name": "Mes prospects savent-ils qu'ils parlent à une IA ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Oui par défaut. Transparence affichée. Pas d'impact négatif sur les taux de réponse observés."
          }
        },
        {
          "@type": "Question",
          "name": "En combien de temps voit-on les premiers RDV ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Agent SDR : 5 à 10 jours. Agent qualification inbound : impact immédiat dès J1. Agent relance pipeline : 7 jours."
          }
        },
        {
          "@type": "Question",
          "name": "Mes données prospects restent-elles en France ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Oui. Mistral + OVH/Scaleway pour souveraineté max. Anonymisation PII sur modèles propriétaires sinon."
          }
        }
      ]
    }
  ]
};

export default function AgentIACommercialPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <AgentIACommercialPageClient />
      <Footer showCta={true} />
    </>
  );
}

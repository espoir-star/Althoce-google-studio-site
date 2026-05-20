import type { Metadata } from 'next';
import AgentIARHPageClient from '@/components/AgentIARHPageClient';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Agent IA pour les RH : tri CV, qualification candidats, assistance interne 24/7 | Althoce',
  description: "Un agent IA Althoce trie les CV avec rigueur RGPD, qualifie les candidats au téléphone, répond aux questions paie et congés des collaborateurs 24/7. Conformité native, anti-biais documenté. Vos équipes RH se recentrent sur l'humain. Tarification sur devis, 30 min offertes avec un expert.",
  keywords: ['agent IA RH', 'agent IA recrutement', 'tri CV IA', 'IA pour DRH', 'automatisation RH', 'chatbot RH interne', 'agent IA paie', 'assistant RH IA', 'agent IA onboarding'],
  openGraph: {
    title: 'Agent IA pour les RH : tri CV, qualification, assistance 24/7 | Althoce',
    description: "Volume de CV ingérable, équipe RH submergée par les questions paie ? Un agent IA absorbe la répétition, votre équipe se recentre sur l'humain. Conforme RGPD, anti-biais documenté.",
    type: 'article',
    locale: 'fr_FR',
    url: 'https://althoce.com/agent-ia/rh/',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Agent IA RH : tri CV, qualification candidats, assistance 24/7 | Althoce',
    description: "Tri CV anti-biais, qualification téléphonique, assistant paie 24/7. Conforme RGPD. ROI en moins de 6 mois.",
  },
  alternates: {
    canonical: 'https://althoce.com/agent-ia/rh/',
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": "https://althoce.com/agent-ia/rh/#service",
      "name": "Agent IA pour les ressources humaines",
      "serviceType": "AI agent for HR and recruitment",
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
      "description": "Agents IA Althoce pour les RH : tri CV anti-biais documenté, qualification candidats téléphonique, assistant RH interne 24/7, onboarding new hire. Conformité RGPD native opposable.",
      "offers": {
        "@type": "Offer",
        "url": "https://althoce.com/agent-ia/rh/",
        "priceSpecification": {
          "@type": "PriceSpecification",
          "priceCurrency": "EUR",
          "description": "Tarification sur devis selon volume CV, outils branchés, conformité requise. ROI typique en moins de 6 mois (doublement du volume traité sans embauche)."
        }
      }
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://althoce.com/" },
        { "@type": "ListItem", "position": 2, "name": "Automatisation", "item": "https://althoce.com/services/automatisation-ia/" },
        { "@type": "ListItem", "position": 3, "name": "Agent IA RH", "item": "https://althoce.com/agent-ia/rh/" }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "L'agent IA tri CV est-il vraiment anti-biais ? Comment garantissez-vous l'absence de discrimination ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Oui, et c'est documenté. Trois niveaux de garantie : exclusion explicite des critères protégés par la loi (genre, âge, origine, adresse, nom), tests statistiques sur CV synthétiques piégés, et logs auditables de chaque décision de scoring. Documentation anti-biais opposable en cas de contrôle CNIL."
          }
        },
        {
          "@type": "Question",
          "name": "Mes CV sont-ils envoyés à OpenAI ou Anthropic ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Pour la souveraineté maximale, nous utilisons Mistral hébergé en France ou un modèle open-source auto-hébergé. Pour les autres clients, anonymisation automatique des PII avant tout envoi LLM. Les contrats Enterprise excluent par défaut la réutilisation pour entraînement."
          }
        },
        {
          "@type": "Question",
          "name": "Quel investissement pour un agent IA RH et quel ROI attendre ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Tarification entièrement sur devis selon votre contexte : volume de CV, outils branchés (ATS, HRIS, paie), périmètre fonctionnel, exigences de souveraineté. ROI typique en moins de 6 mois. Tout démarre par 30 minutes offertes avec un expert."
          }
        },
        {
          "@type": "Question",
          "name": "L'agent IA peut-il prendre des décisions de recrutement ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Non, et ce n'est pas l'objectif. L'agent trie les CV, qualifie les candidats et propose une short list. La décision finale reste systématiquement humaine, conformément au RGPD article 22."
          }
        },
        {
          "@type": "Question",
          "name": "L'agent peut-il s'intégrer à mon ATS ou HRIS existant ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Oui. Workday, Lever, Welcome to the Jungle, Recruitee, Smartrecruiters côté recrutement. Cegid, ADP, Sage Paie, PayFit, Lucca côté HRIS et paie. Pour les outils propriétaires, des connecteurs custom sont développés au cadrage."
          }
        },
        {
          "@type": "Question",
          "name": "Comment l'agent IA assistant RH gère-t-il les questions sensibles (harcèlement, RGPD, litige) ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Détection systématique des sujets sensibles au cadrage (harcèlement, discrimination, RGPD, prud'hommes, syndicat, alerte éthique). Quand l'agent détecte ces sujets, il escalade immédiatement à un humain RH avec contexte. Aucune réponse automatisée sur ces sujets."
          }
        },
        {
          "@type": "Question",
          "name": "L'agent IA va-t-il remplacer mon équipe RH ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Non. L'agent absorbe la partie répétitive et libère votre équipe RH pour les sujets à forte valeur : marque employeur, fidélisation, conflits, accompagnement managers. Aucun de nos clients RH n'a réduit son effectif — plusieurs ont doublé leur volume traité sans embaucher."
          }
        },
        {
          "@type": "Question",
          "name": "En combien de temps voit-on les premiers résultats ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Agent tri CV : impact dès J1, mesurable la première semaine. Qualification téléphonique : 1 à 2 semaines de calibrage. Assistant RH interne : 2 à 3 semaines. ROI plein typique 3 à 6 mois."
          }
        }
      ]
    }
  ]
};

export default function AgentIARHPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <AgentIARHPageClient />
      <Footer showCta={true} />
    </>
  );
}

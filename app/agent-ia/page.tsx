import type { Metadata } from 'next';
import AgentIAHubPageClient from '@/components/AgentIAHubPageClient';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Agents IA sur-mesure par métier — Commercial, Finance, RH, Juridique, Achats | Althoce',
  description: "Althoce déploie des agents IA spécialisés par métier : commercial, service client, finance, RH, juridique, achats, opérations, marketing, téléphonique. Un collaborateur virtuel autonome pour chaque fonction. À partir de 1 400 € HT, premier agent en 1 semaine.",
  keywords: ['agents IA métier', 'agent IA entreprise', 'agent IA commercial', 'agent IA finance', 'agent IA RH', 'agent IA juridique', 'agent IA achats', 'automatisation agentique', 'employé IA PME'],
  openGraph: {
    title: 'Agents IA sur-mesure par métier — Althoce',
    description: "9 spécialisations métier. Un collaborateur virtuel autonome pour chaque fonction de votre entreprise. Commercial, finance, RH, juridique, achats et plus. À partir de 1 400 € HT.",
    type: 'article',
    locale: 'fr_FR',
    url: 'https://althoce.com/agent-ia/',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Agents IA par métier : commercial, finance, RH, juridique, achats | Althoce',
    description: "+758 agents en production · 9 métiers couverts · 1 semaine de déploiement · À partir de 1 400 € HT.",
  },
  alternates: {
    canonical: 'https://althoce.com/agent-ia/',
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": "https://althoce.com/agent-ia/#service",
      "name": "Agents IA sur-mesure par métier",
      "serviceType": "AI agents for business functions",
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
      "description": "Althoce conçoit et déploie des agents IA spécialisés par métier (commercial, finance, RH, juridique, achats, opérations, marketing, service client, téléphonique) pour les PME et ETI françaises. Autonomes, souverains, en production en 1 semaine.",
      "offers": {
        "@type": "Offer",
        "url": "https://althoce.com/agent-ia/",
        "priceSpecification": {
          "@type": "PriceSpecification",
          "priceCurrency": "EUR",
          "price": "1400",
          "description": "Agent IA simple (1 cas d'usage borné) : 1 400 € HT. Systèmes multi-agents et Employé IA : sur devis. 30 minutes offertes avec un expert.",
          "minPrice": "1400"
        }
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Agents IA par métier",
        "itemListElement": [
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Agent IA commercial", "url": "https://althoce.com/agent-ia/commercial/" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Agent IA finance", "url": "https://althoce.com/agent-ia/finance/" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Agent IA RH", "url": "https://althoce.com/agent-ia/rh/" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Agent IA juridique", "url": "https://althoce.com/agent-ia/juridique/" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Agent IA achats", "url": "https://althoce.com/agent-ia/achats/" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Agent IA opérations", "url": "https://althoce.com/agent-ia/operations/" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Agent IA marketing", "url": "https://althoce.com/agent-ia/marketing/" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Agent IA service client", "url": "https://althoce.com/agent-ia/service-client/" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Agent IA téléphonique", "url": "https://althoce.com/agent-ia/telephonique/" } }
        ]
      }
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://althoce.com/" },
        { "@type": "ListItem", "position": 2, "name": "Agents IA", "item": "https://althoce.com/services/agents-ia/" },
        { "@type": "ListItem", "position": 3, "name": "Par métier", "item": "https://althoce.com/agent-ia/" }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Quelle est la différence entre un agent IA et un chatbot ?",
          "acceptedAnswer": { "@type": "Answer", "text": "Un chatbot répond à des questions. Un agent IA exécute des tâches de bout en bout. Un chatbot suit un script ; un agent IA suit un objectif. Un chatbot ne peut pas ouvrir votre CRM, lire un contrat PDF ou envoyer un mail en votre nom ; un agent IA le peut." }
        },
        {
          "@type": "Question",
          "name": "Combien coûte la création d'un agent IA chez Althoce ?",
          "acceptedAnswer": { "@type": "Answer", "text": "Un agent IA simple est facturé 1 400 € HT, tarif fixe, 1 cas d'usage borné, 1 semaine de delivery. Pour les systèmes multi-agents et les employés IA complets : sur devis, chiffré au cadrage. Tout démarre par 30 minutes offertes avec un expert." }
        },
        {
          "@type": "Question",
          "name": "En combien de temps un agent IA est-il opérationnel ?",
          "acceptedAnswer": { "@type": "Answer", "text": "Pour un agent simple : 1 semaine après validation du cadrage. Pour un système multi-agents : 2 à 6 semaines. Pour un employé IA complet : 8 à 12 semaines." }
        },
        {
          "@type": "Question",
          "name": "Un agent IA va-t-il remplacer mes employés ?",
          "acceptedAnswer": { "@type": "Answer", "text": "Non. Nos agents absorbent les tâches répétitives à faible valeur ajoutée. Vos équipes se recentrent sur ce qui demande de l'humain : relation client, créativité, stratégie. Aucun de nos clients n'a supprimé de poste suite à une mission Althoce." }
        },
        {
          "@type": "Question",
          "name": "Mes données sont-elles envoyées à OpenAI ou Anthropic ?",
          "acceptedAnswer": { "@type": "Answer", "text": "Uniquement si vous le décidez. Pour la souveraineté totale, nous utilisons Mistral hébergé en Europe ou des modèles auto-hébergés sur votre infrastructure. Les données sensibles peuvent être filtrées avant tout appel LLM externe." }
        },
        {
          "@type": "Question",
          "name": "À qui appartient l'agent IA à la fin de la mission ?",
          "acceptedAnswer": { "@type": "Answer", "text": "À vous, à 100 %. Code, accès, logs, workflows : tout vous revient. Pas de rétention technique, pas d'abonnement obligatoire au-delà du support que vous choisissez." }
        },
        {
          "@type": "Question",
          "name": "Quelle est la différence entre un agent IA et une automatisation classique (Zapier, Make) ?",
          "acceptedAnswer": { "@type": "Answer", "text": "Une automatisation classique suit des règles fixes : si X alors Y. Un agent IA utilise un modèle de langage pour comprendre le contexte, gérer les imprévus et les documents non structurés. Il s'adapte là où un workflow plante." }
        },
        {
          "@type": "Question",
          "name": "Faut-il avoir des compétences tech en interne pour utiliser un agent IA Althoce ?",
          "acceptedAnswer": { "@type": "Answer", "text": "Non pour l'usage quotidien. Oui si vous voulez le faire évoluer vous-même : nous formons 1 à 2 personnes chez vous. Alternative : support Althoce sans toucher au code." }
        },
        {
          "@type": "Question",
          "name": "Quelle est la différence entre un agent IA et un employé IA ?",
          "acceptedAnswer": { "@type": "Answer", "text": "Un agent IA exécute une tâche ou une famille de tâches. Un employé IA est un assemblage de plusieurs agents qui couvrent un poste entier. Les employés IA sont sur devis et remplacent typiquement 1 à 3 ETP." }
        },
        {
          "@type": "Question",
          "name": "Un agent IA peut-il se tromper ?",
          "acceptedAnswer": { "@type": "Answer", "text": "Oui, comme un humain. Nous gérons ce risque avec trois couches : validation humaine sur les actions sensibles, filtres de contenu, journalisation exhaustive. Le taux d'erreur observé est inférieur à 1 % sur les tâches automatisées." }
        }
      ]
    }
  ]
};

export default function AgentIAHubPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <AgentIAHubPageClient />
      <Footer showCta={true} />
    </>
  );
}

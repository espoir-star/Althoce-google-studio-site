import type { Metadata } from 'next';
import DeveloppementIAPageClient from '@/components/DeveloppementIAPageClient';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Développement IA sur-mesure pour PME & ETI : code de production, MLOps, monitoring | Althoce',
  description: "Althoce développe vos solutions IA en code de production : agents, employés IA, intégrations API LLM, monitoring continu. Stack maîtrisée (Python, TypeScript, n8n, LangGraph). 30 min offertes avec un expert.",
  keywords: ['développement IA', 'agence développement IA', 'développeur IA', 'IA sur-mesure', 'MLOps', 'intégration LLM', 'agent IA custom', 'IA Python', 'IA TypeScript'],
  openGraph: {
    title: 'Développement IA sur-mesure : code de production, MLOps, monitoring | Althoce',
    description: "On code vraiment vos solutions IA. Pas du no-code orchestré, pas de boîte noire. Stack maîtrisée, monitoring continu, dette technique transparente.",
    type: 'article',
    locale: 'fr_FR',
    url: 'https://althoce.com/services/developpement-ia/',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Développement IA sur-mesure | Althoce',
    description: "Code de production Python & TypeScript. Pas du no-code orchestré. Stack IA maîtrisée, monitoring, MLOps.",
  },
  alternates: {
    canonical: 'https://althoce.com/services/developpement-ia/',
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": "https://althoce.com/services/developpement-ia/#service",
      "name": "Développement IA sur-mesure",
      "serviceType": "Custom AI development",
      "provider": { "@type": "Organization", "@id": "https://althoce.com/#organization", "name": "Althoce", "url": "https://althoce.com/" },
      "areaServed": { "@type": "Country", "name": "France" },
      "description": "Développement de solutions IA en code de production : agents, employés IA, intégrations LLM, monitoring continu. Stack Python, TypeScript, n8n, LangGraph.",
      "offers": {
        "@type": "Offer",
        "url": "https://althoce.com/services/developpement-ia/",
        "priceSpecification": {
          "@type": "PriceSpecification",
          "priceCurrency": "EUR",
          "description": "À partir de 1 400 € HT pour un agent simple. Sur devis pour les systèmes, employés IA et refontes."
        }
      }
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://althoce.com/" },
        { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://althoce.com/services/" },
        { "@type": "ListItem", "position": 3, "name": "Développement IA", "item": "https://althoce.com/services/developpement-ia/" }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        { "@type": "Question", "name": "En quoi vous différenciez-vous d'une agence no-code ?", "acceptedAnswer": { "@type": "Answer", "text": "Le no-code plafonne vite. Chez Althoce, vous obtenez du code de production (Python, TypeScript) et du n8n quand c'est pertinent. Pas de lock-in propriétaire." } },
        { "@type": "Question", "name": "Le code livré nous appartient-il ?", "acceptedAnswer": { "@type": "Answer", "text": "Oui. Repo Git complet, documentation, credentials infra. Pas de lock-in." } },
        { "@type": "Question", "name": "Quelle est votre stack technique ?", "acceptedAnswer": { "@type": "Answer", "text": "Python (FastAPI, LangGraph), TypeScript, n8n auto-hébergé, Mistral / OpenAI / Anthropic, pgvector / Qdrant, Docker, GitHub Actions." } },
        { "@type": "Question", "name": "Combien coûte un développement IA ?", "acceptedAnswer": { "@type": "Answer", "text": "Agent simple : 1 400 € HT. Système, employé IA, refonte : sur devis. 30 min offertes avec un expert." } },
        { "@type": "Question", "name": "Travaillez-vous avec les DSI ou les métiers ?", "acceptedAnswer": { "@type": "Answer", "text": "Les deux. DSI systématiquement incluse au cadrage. Objectif : votre DSI peut maintenir en interne ce qu'on livre." } },
        { "@type": "Question", "name": "Comment monitorez-vous la qualité des modèles ?", "acceptedAnswer": { "@type": "Answer", "text": "Langfuse en standard : tracing des appels LLM, alertes sur dérive, reporting hebdo automatique." } }
      ]
    }
  ]
};

export default function DeveloppementIAPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <DeveloppementIAPageClient />
      <Footer showCta={true} />
    </>
  );
}

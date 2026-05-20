import type { Metadata } from 'next';
import AgentsIAPageClient from '@/components/AgentsIAPageClient';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Agents IA sur-mesure — Création & déploiement pour PME et ETI | Althoce',
  description: "Althoce conçoit des agents IA 100% autonomes pour les PME et ETI françaises. Commerciaux, opérationnels, support : des employés virtuels qui lisent, décident et agissent. Premier agent en 1 semaine, à partir de 1 400 €.",
  keywords: ['agents IA', 'agent IA', 'création agent IA', 'développement agent IA', 'agence agent IA', 'agent IA entreprise', 'agent IA autonome', 'automatisation agentique', 'employé IA'],
  openGraph: {
    title: 'Agents IA sur-mesure pour PME et ETI — Althoce',
    description: "Des employés virtuels qui lisent, décident et agissent. 100% autonomes, en production en 1 semaine.",
    type: 'article',
    locale: 'fr_FR',
    url: 'https://althoce.com/services/agents-ia/',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Agents IA sur-mesure — Althoce',
    description: "Des employés virtuels qui raisonnent, décident et agissent à la place de vos équipes.",
  },
  alternates: {
    canonical: 'https://althoce.com/services/agents-ia/',
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": "https://althoce.com/services/agents-ia/#service",
      "name": "Agents IA sur-mesure",
      "serviceType": "Agents IA sur-mesure",
      "provider": { "@type": "Organization", "@id": "https://althoce.com/#organization", "name": "Althoce", "url": "https://althoce.com/" },
      "areaServed": { "@type": "Country", "name": "France" },
      "description": "Création et déploiement d'agents IA 100% autonomes pour PME et ETI. Agents commerciaux, opérationnels et support. Premier agent en 1 semaine, à partir de 1 400 € HT.",
      "offers": {
        "@type": "Offer",
        "url": "https://althoce.com/services/agents-ia/",
        "priceSpecification": {
          "@type": "PriceSpecification",
          "priceCurrency": "EUR",
          "description": "À partir de 1 400 € HT pour un agent simple. Sur devis pour les systèmes multi-agents et employés IA."
        }
      }
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://althoce.com/" },
        { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://althoce.com/services/" },
        { "@type": "ListItem", "position": 3, "name": "Agents IA", "item": "https://althoce.com/services/agents-ia/" }
      ]
    },
    {
      "@type": "HowTo",
      "name": "Comment déployer un agent IA avec Althoce",
      "step": [
        { "@type": "HowToStep", "position": 1, "name": "L'audit", "text": "Cartographie des tâches chronophages en 48h. Rapport des 3 à 5 automatisations prioritaires." },
        { "@type": "HowToStep", "position": 2, "name": "Le plan", "text": "Roadmap chiffrée : quels agents, dans quel ordre, combien de temps, quel ROI." },
        { "@type": "HowToStep", "position": 3, "name": "La construction", "text": "Développement des agents IA et branchage aux outils existants (Gmail, Slack, HubSpot, CRM)." },
        { "@type": "HowToStep", "position": 4, "name": "L'autonomie", "text": "Formation des équipes. Code, accès et environnement transférés au client." }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        { "@type": "Question", "name": "Quelle est la différence entre un agent IA et un chatbot ?", "acceptedAnswer": { "@type": "Answer", "text": "Un chatbot répond à des questions. Un agent IA exécute des tâches de bout en bout. Un chatbot suit un script ; un agent IA suit un objectif. Un chatbot ne peut pas ouvrir votre CRM, lire un contrat PDF ou envoyer un mail en votre nom ; un agent IA le peut." } },
        { "@type": "Question", "name": "Quelle est la différence entre un agent IA et une automatisation classique ?", "acceptedAnswer": { "@type": "Answer", "text": "Une automatisation classique suit des règles fixes : si X alors Y. Un agent IA utilise un modèle de langage pour comprendre le contexte et choisir quoi faire. Il gère les cas imprévus, les documents non structurés, les exceptions." } },
        { "@type": "Question", "name": "Combien coûte la création d'un agent IA chez Althoce ?", "acceptedAnswer": { "@type": "Answer", "text": "Un agent IA simple est facturé 1 400 € HT — tarif fixe, 1 cas d'usage borné, 1 semaine de delivery. Pour les systèmes multi-agents : sur devis. Tout démarre par 30 minutes offertes avec un expert." } },
        { "@type": "Question", "name": "En combien de temps un agent IA est-il opérationnel ?", "acceptedAnswer": { "@type": "Answer", "text": "Pour un agent simple : 1 semaine après validation du cadrage. Pour un système multi-agents : 2 à 6 semaines. Pour un employé IA complet : 8 à 12 semaines." } },
        { "@type": "Question", "name": "À qui appartient l'agent IA à la fin de la mission ?", "acceptedAnswer": { "@type": "Answer", "text": "À vous, à 100 %. Code, accès, logs, workflows : tout vous revient. Pas de rétention technique, pas d'abonnement obligatoire." } },
        { "@type": "Question", "name": "Mes données vont-elles être envoyées à OpenAI ?", "acceptedAnswer": { "@type": "Answer", "text": "Uniquement si vous le décidez. Pour la souveraineté totale, nous utilisons des modèles hébergés en Europe (Mistral) ou auto-hébergés sur votre infrastructure." } },
        { "@type": "Question", "name": "Mes employés vont-ils être remplacés ?", "acceptedAnswer": { "@type": "Answer", "text": "Non. Nos agents absorbent les tâches répétitives. Vos équipes se recentrent sur ce qui demande de l'humain. Aucun de nos clients n'a supprimé de poste suite à une mission Althoce." } },
        { "@type": "Question", "name": "Quelle est la différence entre un agent IA et un employé IA ?", "acceptedAnswer": { "@type": "Answer", "text": "Un agent IA exécute une tâche ou une famille de tâches. Un employé IA est un assemblage de plusieurs agents couvrant un poste entier. C'est la différence entre un outil et un collaborateur." } }
      ]
    }
  ]
};

export default function AgentsIAPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <AgentsIAPageClient />
      <Footer showCta={true} />
    </>
  );
}

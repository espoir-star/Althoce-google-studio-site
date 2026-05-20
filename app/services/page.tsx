import type { Metadata } from 'next';
import ServicesHubPageClient from '@/components/ServicesHubPageClient';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Tous nos services IA pour PME et ETI : agents, automatisation, employé IA, audit | Althoce',
  description: "Le catalogue complet des services IA Althoce : 3 piliers (agents IA, automatisation, employé IA) et 5 services support (développement, chatbot, intégration, formation, audit). Souverains, français, à partir de 1 400 € HT.",
  keywords: ['services IA', 'agence IA services', 'automatisation IA services', 'solutions IA entreprise', 'prestations IA', 'services IA PME'],
  openGraph: {
    title: 'Tous nos services IA pour PME et ETI | Althoce',
    description: "Du chatbot à 1 400 € HT à l'employé IA dédié à un poste. 7 services pour couvrir tous les besoins IA d'une PME ou ETI française.",
    type: 'website',
    locale: 'fr_FR',
    url: 'https://althoce.com/services/',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Services IA Althoce — Du chatbot à l\'employé IA',
    description: "7 services intégrés, souverains France. À partir de 1 400 € HT. 30 min offertes.",
  },
  alternates: {
    canonical: 'https://althoce.com/services/',
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "CollectionPage",
      "@id": "https://althoce.com/services/#collection",
      "name": "Services IA Althoce",
      "description": "Catalogue des 7 services IA Althoce : 3 piliers (agents IA, automatisation IA, employé IA) et 5 services support (développement, chatbot, intégration, formation, audit).",
      "url": "https://althoce.com/services/",
      "provider": { "@type": "Organization", "@id": "https://althoce.com/#organization", "name": "Althoce", "url": "https://althoce.com/" }
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://althoce.com/" },
        { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://althoce.com/services/" }
      ]
    },
    {
      "@type": "ItemList",
      "name": "Services Althoce",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "url": "https://althoce.com/services/agents-ia/", "name": "Agents IA sur-mesure" },
        { "@type": "ListItem", "position": 2, "url": "https://althoce.com/services/automatisation-ia/", "name": "Automatisation IA agentique" },
        { "@type": "ListItem", "position": 3, "url": "https://althoce.com/services/employe-ia/", "name": "Employé IA dédié à un poste" },
        { "@type": "ListItem", "position": 4, "url": "https://althoce.com/services/developpement-ia/", "name": "Développement IA sur-mesure" },
        { "@type": "ListItem", "position": 5, "url": "https://althoce.com/services/chatbot-ia/", "name": "Chatbot IA RAG" },
        { "@type": "ListItem", "position": 6, "url": "https://althoce.com/services/integration-ia/", "name": "Intégration IA dans le SI" },
        { "@type": "ListItem", "position": 7, "url": "https://althoce.com/services/formation-ia/", "name": "Formation IA pour entreprises" },
        { "@type": "ListItem", "position": 8, "url": "https://althoce.com/services/audit-ia/", "name": "Audit IA stratégique" }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        { "@type": "Question", "name": "Par quel service commencer quand on n'a jamais déployé d'IA ?", "acceptedAnswer": { "@type": "Answer", "text": "Dans 80 % des cas : agent IA simple à 1 400 € HT, ou chatbot RAG, ou audit IA si vous voulez cartographier en amont." } },
        { "@type": "Question", "name": "Quelle différence entre agent IA, automatisation IA et employé IA ?", "acceptedAnswer": { "@type": "Answer", "text": "Agent : 1 cas borné. Automatisation : processus métier complet. Employé IA : poste entier avec mémoire et rituels d'équipe." } },
        { "@type": "Question", "name": "Comment se passe la première prise de contact avec Althoce ?", "acceptedAnswer": { "@type": "Answer", "text": "30 minutes offertes avec un expert, devis ferme sous 5 jours ouvrés, vous décidez sans engagement." } },
        { "@type": "Question", "name": "Quel service après un déploiement IA qui pose problème ?", "acceptedAnswer": { "@type": "Answer", "text": "Audit IA Post-incident, puis Intégration IA pour mettre en place la couche gouvernance." } },
        { "@type": "Question", "name": "Faut-il combiner plusieurs services Althoce ?", "acceptedAnswer": { "@type": "Answer", "text": "Souvent oui. Cadrage initial + produit cœur + intégration + formation. Mix défini au cadrage." } }
      ]
    }
  ]
};

export default function ServicesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <ServicesHubPageClient />
      <Footer showCta={true} />
    </>
  );
}

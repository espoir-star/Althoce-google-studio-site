import type { Metadata } from 'next';
import EmployeIAPageClient from '@/components/EmployeIAPageClient';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Employé IA — Un poste à temps plein automatisé, intégré à votre équipe | Althoce',
  description: "Un employé IA Althoce couvre un rôle entier (SDR, support, comptable, ops, RH) : disponible 24/7, intégré à votre SI et à vos rituels d'équipe. Souverain, français, sur devis. 30 min offertes avec un expert.",
  keywords: ['employé IA', 'salarié IA', 'agent IA temps plein', 'collaborateur virtuel IA', 'assistant IA dédié', 'employé IA SDR', 'employé IA comptable', 'employé IA RH', 'créer un employé IA', 'employé IA PME'],
  openGraph: {
    title: 'Employé IA Althoce — Un poste à temps plein automatisé',
    description: "Pas un chatbot, pas un workflow : un membre d'équipe IA dédié à un rôle. SDR, support, comptable, ops. Souverain, français, intégré à vos rituels.",
    type: 'article',
    locale: 'fr_FR',
    url: 'https://althoce.com/services/employe-ia/',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Employé IA Althoce — Un poste à temps plein automatisé',
    description: "Pas un chatbot, pas un workflow : un membre d'équipe IA dédié à un rôle. Souverain, français, intégré à vos rituels.",
  },
  alternates: {
    canonical: 'https://althoce.com/services/employe-ia/',
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": "https://althoce.com/services/employe-ia/#service",
      "name": "Employé IA",
      "alternateName": "Salarié IA",
      "serviceType": "AI Workforce",
      "provider": {
        "@type": "Organization",
        "@id": "https://althoce.com/#organization",
        "name": "Althoce",
        "url": "https://althoce.com/"
      },
      "areaServed": { "@type": "Country", "name": "France" },
      "description": "Conception et déploiement d'employés IA — collaborateurs IA dédiés à un rôle entier (SDR, support, comptable, ops, RH). Souverains, intégrés au SI et à la culture d'équipe.",
      "offers": {
        "@type": "Offer",
        "url": "https://althoce.com/services/employe-ia/",
        "priceSpecification": {
          "@type": "PriceSpecification",
          "priceCurrency": "EUR",
          "description": "Sur devis — chiffré au cadrage. Build initial à partir de plusieurs dizaines de milliers d'euros HT + récurrence mensuelle."
        }
      }
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://althoce.com/" },
        { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://althoce.com/services/" },
        { "@type": "ListItem", "position": 3, "name": "Employé IA", "item": "https://althoce.com/services/employe-ia/" }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        { "@type": "Question", "name": "Quelle est la différence entre un agent IA et un employé IA ?", "acceptedAnswer": { "@type": "Answer", "text": "Un agent IA exécute 1 cas d'usage borné. Un employé IA couvre un poste entier (plusieurs agents orchestrés + mémoire + outils + identité de marque). Agent simple = 1 400 € HT, employé IA = sur devis." } },
        { "@type": "Question", "name": "Un employé IA va-t-il remplacer mes salariés ?", "acceptedAnswer": { "@type": "Answer", "text": "Non. Les clients qui réussissent l'intégration redéploient leurs humains sur des sujets à forte valeur ajoutée cognitive. 0 départ d'équipe imputable au déploiement IA sur les 4 derniers trimestres." } },
        { "@type": "Question", "name": "Combien coûte un employé IA chez Althoce ?", "acceptedAnswer": { "@type": "Answer", "text": "Sur devis, chiffré au cadrage. Tout démarre par 30 minutes offertes avec un expert, avec un devis ferme à la sortie." } },
        { "@type": "Question", "name": "En combien de temps un employé IA est-il opérationnel ?", "acceptedAnswer": { "@type": "Answer", "text": "6 à 12 semaines entre signature du cadrage et mise en production complète." } },
        { "@type": "Question", "name": "Mes données restent-elles en France ?", "acceptedAnswer": { "@type": "Answer", "text": "Oui par défaut. Mistral + OVH/Scaleway pour la souveraineté maximale. Anonymisation systématique sur les modèles propriétaires." } },
        { "@type": "Question", "name": "Peut-on intégrer un employé IA à nos outils existants ?", "acceptedAnswer": { "@type": "Answer", "text": "Oui — c'est la condition de réussite. Connecteurs standards : HubSpot, Salesforce, Sage, Cegid, Pennylane, Outlook, Slack, Zendesk, etc." } },
        { "@type": "Question", "name": "Que se passe-t-il quand l'employé IA rencontre un cas qu'il ne sait pas traiter ?", "acceptedAnswer": { "@type": "Answer", "text": "Il escalade à un humain avec contexte enrichi. Pas d'invention, pas d'hallucination — protocole standardisé chez Althoce." } },
        { "@type": "Question", "name": "Comment l'employé IA est-il intégré à la culture de l'équipe ?", "acceptedAnswer": { "@type": "Answer", "text": "Trois rituels obligatoires : reporting hebdo automatique, présence aux stand-ups, revue mensuelle avec son manager humain." } }
      ]
    },
    {
      "@type": "HowTo",
      "name": "Comment Althoce déploie un employé IA en 4 étapes",
      "step": [
        { "@type": "HowToStep", "name": "Cadrage", "text": "30 min avec un expert + cartographie du rôle cible + devis ferme sous 5 jours." },
        { "@type": "HowToStep", "name": "Build", "text": "Conception et développement des agents, intégration aux outils du SI, mise en place de la mémoire long-terme et de l'identité de marque." },
        { "@type": "HowToStep", "name": "POC", "text": "1 à 2 semaines de fonctionnement en parallèle de l'équipe humaine, ajustement des règles métier." },
        { "@type": "HowToStep", "name": "Mise en production + support", "text": "Bascule complète, formation du manager humain, mise en place des rituels, support continu." }
      ]
    }
  ]
};

export default function EmployeIAPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <EmployeIAPageClient />
      <Footer showCta={true} />
    </>
  );
}

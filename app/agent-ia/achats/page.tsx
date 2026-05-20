import type { Metadata } from 'next';
import AgentIAachatsPageClient from '@/components/AgentIAachatsPageClient';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Agent IA pour les achats : sourcing fournisseurs, analyse devis, suivi contrats | Althoce',
  description: "Un agent IA Althoce source les fournisseurs candidats, compare les devis selon vos critères pondérés, suit les contrats et alerte sur les renouvellements, surveille la vigilance financière de votre panel. Vos acheteurs se concentrent sur la négociation et la relation stratégique. Tarification sur devis, 30 min offertes avec un expert.",
  keywords: ['agent IA achats', 'IA sourcing fournisseurs', 'analyse devis IA', 'agent IA suivi contrats fournisseurs', 'IA pour direction achats', 'vigilance fournisseurs IA', 'automatisation achats PME'],
  openGraph: {
    title: 'Agent IA pour les achats : sourcing, devis, contrats en pilote automatique | Althoce',
    description: "Fonction achats sous-équipée alors qu'elle représente 40 à 60 % de vos charges ? Un agent IA absorbe le sourcing, l'analyse de devis et le suivi contrats. Vos acheteurs négocient.",
    type: 'article',
    locale: 'fr_FR',
    url: 'https://althoce.com/agent-ia/achats/',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Agent IA achats : sourcing 4h, 0 contrat raté, 3-7% économies | Althoce',
    description: "Sourcing en 4h vs 3 jours. 100 % des devis analysés rigoureusement. Vigilance fournisseurs 24/7. ROI 3 à 6 mois.",
  },
  alternates: {
    canonical: 'https://althoce.com/agent-ia/achats/',
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": "https://althoce.com/agent-ia/achats/#service",
      "name": "Agent IA pour les achats",
      "serviceType": "AI agent for procurement and supplier management",
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
      "description": "Agents IA Althoce pour les achats : sourcing fournisseurs accéléré, analyse devis comparatif pondéré, suivi contrats avec alertes, vigilance financière fournisseurs continue. Intégration SAP Ariba, Coupa, Determine, Ivalua, ERP standards.",
      "offers": {
        "@type": "Offer",
        "url": "https://althoce.com/agent-ia/achats/",
        "priceSpecification": {
          "@type": "PriceSpecification",
          "priceCurrency": "EUR",
          "description": "Tarification sur devis selon volume achats, panel fournisseurs, intégration. ROI typique 3 à 7 % d'économies achats supplémentaires la première année."
        }
      }
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://althoce.com/" },
        { "@type": "ListItem", "position": 2, "name": "Automatisation", "item": "https://althoce.com/services/automatisation-ia/" },
        { "@type": "ListItem", "position": 3, "name": "Agent IA achats", "item": "https://althoce.com/agent-ia/achats/" }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "L'agent prend-il des décisions d'achat à la place de mes acheteurs ?",
          "acceptedAnswer": { "@type": "Answer", "text": "Non. Recommande avec scoring transparent. Décision finale humaine. Aucun pouvoir de signature ou d'engagement contractuel." }
        },
        {
          "@type": "Question",
          "name": "Le scoring est-il transparent ou une boîte noire ?",
          "acceptedAnswer": { "@type": "Answer", "text": "Totalement transparent. Critères pondérés définis au cadrage. Détail du scoring par critère sur chaque recommandation." }
        },
        {
          "@type": "Question",
          "name": "Quel investissement et quel ROI pour un agent IA achats ?",
          "acceptedAnswer": { "@type": "Answer", "text": "Sur devis. ROI typique 3 à 7 % d'économies achats supplémentaires la première année. Acheteurs libérés sur la négociation." }
        },
        {
          "@type": "Question",
          "name": "L'agent peut-il s'intégrer à mon outil achats existant ?",
          "acceptedAnswer": { "@type": "Answer", "text": "SAP Ariba, Coupa, Determine, Ivalua, Jaggaer. ERP : SAP, Sage, Cegid, Dynamics. Vigilance : Pappers, Altares, Creditsafe." }
        },
        {
          "@type": "Question",
          "name": "La vigilance financière remplace-t-elle mon abonnement Pappers ou Altares ?",
          "acceptedAnswer": { "@type": "Answer", "text": "Non. S'appuie dessus. Vous gardez l'abonnement officiel, l'agent surveille systématiquement 200 fournisseurs au lieu des 20 manuels." }
        },
        {
          "@type": "Question",
          "name": "Si l'agent recommande un fournisseur défaillant, qui est responsable ?",
          "acceptedAnswer": { "@type": "Answer", "text": "Même responsabilité qu'un acheteur humain. Scoring transparent permet d'identifier les zones de risque. Vigilance financière alerte sur signaux faibles." }
        },
        {
          "@type": "Question",
          "name": "Mes conditions négociées restent-elles confidentielles ?",
          "acceptedAnswer": { "@type": "Answer", "text": "Oui. Anonymisation possible des PII fournisseurs. Mistral + auto-hébergement pour souveraineté max. Conditions négociées jamais sorties de votre infra." }
        },
        {
          "@type": "Question",
          "name": "L'agent IA va-t-il remplacer mes acheteurs ?",
          "acceptedAnswer": { "@type": "Answer", "text": "Non. Libération sur la négociation stratégique. Aucun effectif réduit observé. 3-7 % d'économies achats captées en plus." }
        }
      ]
    }
  ]
};

export default function AgentIAachatsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <AgentIAachatsPageClient />
      <Footer showCta={true} />
    </>
  );
}

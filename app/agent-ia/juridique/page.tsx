import type { Metadata } from 'next';
import AgentIAJuridiquePageClient from '@/components/AgentIAJuridiquePageClient';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Agent IA pour le juridique : analyse de contrats, veille réglementaire, rédaction courante | Althoce',
  description: "Un agent IA Althoce analyse vos contrats entrants, fait votre veille réglementaire en temps réel, pré-rédige les documents juridiques standards. Sous strict contrôle humain, dans le respect du secret professionnel. Souveraineté France garantie. Tarification sur devis, 30 min offertes avec un expert.",
  keywords: ['agent IA juridique', 'IA pour juriste', 'analyse contrat IA', 'veille réglementaire IA', 'IA pour cabinet d\'avocats', 'IA pour direction juridique', 'rédaction documents juridiques IA'],
  openGraph: {
    title: 'Agent IA pour le juridique : analyse contrats, veille, rédaction courante | Althoce',
    description: "Juriste saturé par les contrats à analyser, la veille en retard ? Un agent IA absorbe le travail répétitif sous strict contrôle humain. Secret pro respecté, souveraineté France.",
    type: 'article',
    locale: 'fr_FR',
    url: 'https://althoce.com/agent-ia/juridique/',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Agent IA juridique : analyse contrats, veille, rédaction | Althoce',
    description: "3h → 30 min par contrat. Veille réglementaire automatisée. Secret professionnel respecté. Mistral hébergé France.",
  },
  alternates: {
    canonical: 'https://althoce.com/agent-ia/juridique/',
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": "https://althoce.com/agent-ia/juridique/#service",
      "name": "Agent IA pour le juridique",
      "serviceType": "AI agent for legal pre-analysis (under strict human supervision)",
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
      "description": "Agents IA Althoce pour le juridique : analyse contractuelle de pré-décision, veille réglementaire continue, rédaction de documents standards, recherche jurisprudence. Strict contrôle humain. Souveraineté France garantie (Mistral hébergé France).",
      "offers": {
        "@type": "Offer",
        "url": "https://althoce.com/agent-ia/juridique/",
        "priceSpecification": {
          "@type": "PriceSpecification",
          "priceCurrency": "EUR",
          "description": "Tarification sur devis selon volume, thèmes de veille, intégration GED, souveraineté. ROI typique 3 à 6 mois : doublement capacité analyse, libération 4 à 8 jours/mois pour stratégie."
        }
      }
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://althoce.com/" },
        { "@type": "ListItem", "position": 2, "name": "Automatisation", "item": "https://althoce.com/services/automatisation-ia/" },
        { "@type": "ListItem", "position": 3, "name": "Agent IA juridique", "item": "https://althoce.com/agent-ia/juridique/" }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "L'agent peut-il signer un contrat ou prendre une décision juridique ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Non, jamais. Mode pré-analyse à décharge pour décision humaine. Le juriste signe et engage sa responsabilité."
          }
        },
        {
          "@type": "Question",
          "name": "Mes contrats vont-ils chez OpenAI ou Anthropic ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Non par défaut. Mistral hébergé France ou open-source auto-hébergé sur votre infra. Données ne quittent jamais le territoire."
          }
        },
        {
          "@type": "Question",
          "name": "Quel investissement et quel ROI pour un agent IA juridique ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Sur devis. ROI 3-6 mois. Doublement capacité analyse, 4-8 jours/mois libérés pour stratégie."
          }
        },
        {
          "@type": "Question",
          "name": "L'agent peut-il s'intégrer à ma GED et à la signature électronique ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "SharePoint, Notion, NetDocuments, iManage. DocuSign, Yousign, Adobe Sign (lecture seule). Légifrance, Bofip, sources sectorielles."
          }
        },
        {
          "@type": "Question",
          "name": "Si l'agent fait une erreur d'analyse contractuelle, qui est responsable ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Le juriste / avocat qui a validé, identique à un paralégal humain. Mode pré-analyse à décharge protège la chaîne de responsabilité."
          }
        },
        {
          "@type": "Question",
          "name": "L'agent peut-il préparer une procédure contentieuse ou un mémoire ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Note de recherche oui, rédaction d'actes non. L'agent gagne du temps sur la phase préparatoire (60-70 % du dossier)."
          }
        },
        {
          "@type": "Question",
          "name": "L'agent IA va-t-il remplacer mon juriste ou mon avocat ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Non. Absorbe le répétitif, libère pour la négociation, conseil stratégique, contentieux. Aucun effectif réduit observé."
          }
        },
        {
          "@type": "Question",
          "name": "L'agent est-il compatible avec la déontologie avocat (CCBE, RIN) ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Oui sous conditions. Secret pro préservé (souveraineté France), indépendance préservée (mode pré-analyse), diligence avocat. Revue ordinale possible en amont."
          }
        }
      ]
    }
  ]
};

export default function AgentIAJuridiquePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <AgentIAJuridiquePageClient />
      <Footer showCta={true} />
    </>
  );
}

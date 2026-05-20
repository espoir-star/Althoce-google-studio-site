import type { Metadata } from 'next';
import CasClientSaasB2BServiceClientPageClient from '@/components/CasClientSaasB2BServiceClientPageClient';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: "Éditeur SaaS B2B : 70 % des tickets N1 résolus en autonomie avec un agent IA service client | Cas client Althoce",
  description: "Comment un éditeur SaaS B2B de 120 collaborateurs et 8 000 clients PME a réduit son temps de première réponse de 18 heures à 4 minutes et fait monter sa CSAT de 12 points en 3 mois avec un agent IA service client intégré à Zendesk.",
  keywords: [
    'cas client agent IA service client',
    'ROI agent IA support SaaS',
    'automatisation tickets Zendesk exemple',
    'cas concret agent IA support PME',
    'témoignage agent IA support B2B',
  ],
  openGraph: {
    title: '70 % des tickets N1 absorbés : cas client SaaS B2B service client | Althoce',
    description: "Temps de première réponse 18h vers 4 min, CSAT +12 points, 0 départ équipe support. Comment un SaaS B2B 8 000 clients PME a transformé son support en 4 semaines.",
    type: 'article',
    locale: 'fr_FR',
    url: 'https://althoce.com/cas-clients/saas-b2b-agent-ia-service-client/',
  },
  twitter: {
    card: 'summary_large_image',
    title: '70 % tickets N1 absorbés : SaaS B2B × agent IA Zendesk | Althoce',
    description: "18h vers 4 min · CSAT +12 pts · 240 k€ économisés · 4 semaines de déploiement.",
  },
  alternates: {
    canonical: 'https://althoce.com/cas-clients/saas-b2b-agent-ia-service-client/',
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": "https://althoce.com/cas-clients/saas-b2b-agent-ia-service-client/#article",
      "headline": "70 % des tickets N1 résolus en autonomie pour un éditeur SaaS B2B grâce à un agent IA service client",
      "description": "Cas client Althoce : éditeur SaaS B2B 120 collaborateurs, 8 000 clients PME. Temps de réponse 18h vers 4 min, CSAT +12 points, 0 départ équipe support en 12 mois post-déploiement.",
      "datePublished": "2026-05-08",
      "dateModified": "2026-05-08",
      "author": {
        "@type": "Organization",
        "@id": "https://althoce.com/#organization",
        "name": "Althoce",
        "url": "https://althoce.com/"
      },
      "publisher": {
        "@type": "Organization",
        "@id": "https://althoce.com/#organization",
        "name": "Althoce",
        "url": "https://althoce.com/"
      },
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://althoce.com/cas-clients/saas-b2b-agent-ia-service-client/"
      },
      "about": {
        "@type": "Service",
        "name": "Agent IA service client pour SaaS B2B",
        "provider": { "@type": "Organization", "name": "Althoce" }
      },
      "keywords": "agent IA service client, automatisation tickets Zendesk, support SaaS automatisé, CSAT amélioration IA, agent IA support PME"
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://althoce.com/" },
        { "@type": "ListItem", "position": 2, "name": "Cas clients", "item": "https://althoce.com/cas-clients/" },
        { "@type": "ListItem", "position": 3, "name": "Éditeur SaaS B2B service client", "item": "https://althoce.com/cas-clients/saas-b2b-agent-ia-service-client/" }
      ]
    }
  ]
};

export default function CasClientSaasB2BServiceClientPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <CasClientSaasB2BServiceClientPageClient />
      <Footer showCta={true} />
    </>
  );
}

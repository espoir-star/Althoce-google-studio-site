import type { Metadata } from 'next';
import CasClientSaasB2BMarketingPageClient from '@/components/CasClientSaasB2BMarketingPageClient';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: "Éditeur SaaS B2B : content marketing multiplié par 4 et trafic organique +140 % avec un agent IA marketing | Cas client Althoce",
  description: "Comment un éditeur SaaS B2B de 90 collaborateurs et 1 500 clients a multiplié sa production de contenu par 4 (1 vers 4 articles SEO/mois, 4 vers 12 posts LinkedIn/mois, 60 emails segmentés/mois) et boosté son trafic organique de 140 % en 6 mois grâce à un agent IA marketing au ton de marque.",
  keywords: [
    'cas client agent IA marketing',
    'ROI agent IA content marketing PME',
    'automatisation production contenu SaaS',
    'cas concret IA SEO B2B',
    'témoignage agent IA marketing ton de marque',
  ],
  openGraph: {
    title: 'Content ×4 et trafic organique +140 % : cas client SaaS B2B marketing | Althoce',
    description: "Production contenu multipliée par 4 sans embauche, ton de marque respecté à 90 %, équipe enfin libérée pour la stratégie. Le cas d'un SaaS B2B 1 500 clients.",
    type: 'article',
    locale: 'fr_FR',
    url: 'https://althoce.com/cas-clients/saas-b2b-agent-ia-marketing/',
  },
  twitter: {
    card: 'summary_large_image',
    title: '×4 production content · +140 % trafic organique : SaaS B2B × agent IA marketing | Althoce',
    description: "×4 articles SEO · ×3 posts LinkedIn · 60 emails nurture segmentés · 60 k€ recrutement annulé · 3 semaines de déploiement.",
  },
  alternates: {
    canonical: 'https://althoce.com/cas-clients/saas-b2b-agent-ia-marketing/',
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": "https://althoce.com/cas-clients/saas-b2b-agent-ia-marketing/#article",
      "headline": "Production de contenu multipliée par 4 et trafic organique +140 % pour un éditeur SaaS B2B grâce à un agent IA marketing au ton de marque",
      "description": "Cas client Althoce : éditeur SaaS B2B 90 collaborateurs, 1 500 clients PME. Production multipliée par 4 en 6 mois, trafic organique +140 %, recrutement content manager annulé (60 k€/an redéployé).",
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
        "@id": "https://althoce.com/cas-clients/saas-b2b-agent-ia-marketing/"
      },
      "about": {
        "@type": "Service",
        "name": "Agent IA marketing content pour SaaS B2B",
        "provider": { "@type": "Organization", "name": "Althoce" }
      },
      "keywords": "agent IA marketing, automatisation content marketing, SEO IA SaaS B2B, agent IA LinkedIn, nurture email IA segmenté"
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://althoce.com/" },
        { "@type": "ListItem", "position": 2, "name": "Cas clients", "item": "https://althoce.com/cas-clients/" },
        { "@type": "ListItem", "position": 3, "name": "Éditeur SaaS B2B marketing", "item": "https://althoce.com/cas-clients/saas-b2b-agent-ia-marketing/" }
      ]
    }
  ]
};

export default function CasClientSaasB2BMarketingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <CasClientSaasB2BMarketingPageClient />
      <Footer showCta={true} />
    </>
  );
}

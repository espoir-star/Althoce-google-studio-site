import type { Metadata } from 'next';
import CasClientCabinetRecrutementParisTRiCVPageClient from '@/components/CasClientCabinetRecrutementParisTRiCVPageClient';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: "Cabinet de recrutement parisien : ×3,5 volume CV triés avec un agent IA anti-biais documenté | Cas client Althoce",
  description: "Comment un cabinet de recrutement parisien de 6 consultants a multiplié par 3,5 son volume de CV triés sérieusement (200 vers 700 par semaine) et doublé son volume placé en 4 mois grâce à un agent IA tri CV anti-biais documenté, conforme RGPD opposable.",
  keywords: [
    'cas client agent IA tri CV',
    'ROI agent IA recrutement cadres',
    'automatisation tri CV anti-biais',
    'cas concret IA cabinet recrutement',
    'témoignage agent IA RGPD recrutement',
  ],
  openGraph: {
    title: '×3,5 volume CV triés et ×2 placements : cas client cabinet de recrutement parisien | Althoce',
    description: "Tri CV anti-biais documenté, conformité RGPD opposable, 0 retour défavorable depuis 6 mois. Comment un cabinet parisien a doublé son volume placé sans recruter.",
    type: 'article',
    locale: 'fr_FR',
    url: 'https://althoce.com/cas-clients/cabinet-recrutement-paris-agent-ia-tri-cv/',
  },
  twitter: {
    card: 'summary_large_image',
    title: '×3,5 CV triés · ×2 placements : cabinet recrutement Paris × agent IA anti-biais | Althoce',
    description: "200 vers 700 CV triés/semaine · 8 vers 17 placements/mois · 0 retour RGPD · 3 semaines de déploiement.",
  },
  alternates: {
    canonical: 'https://althoce.com/cas-clients/cabinet-recrutement-paris-agent-ia-tri-cv/',
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": "https://althoce.com/cas-clients/cabinet-recrutement-paris-agent-ia-tri-cv/#article",
      "headline": "×3,5 volume CV triés et placements doublés pour un cabinet de recrutement parisien grâce à un agent IA anti-biais documenté",
      "description": "Cas client Althoce : cabinet de recrutement cadres Paris, 6 consultants, 700 CV/semaine. Agent IA tri CV anti-biais documenté, conforme RGPD opposable, déployé en 3 semaines. 0 retour défavorable sur 6 mois.",
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
        "@id": "https://althoce.com/cas-clients/cabinet-recrutement-paris-agent-ia-tri-cv/"
      },
      "about": {
        "@type": "Service",
        "name": "Agent IA tri CV anti-biais pour cabinet de recrutement",
        "provider": { "@type": "Organization", "name": "Althoce" }
      },
      "keywords": "agent IA tri CV, automatisation recrutement, tri CV anti-biais, conformité RGPD recrutement, agent IA RH cabinet recrutement"
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://althoce.com/" },
        { "@type": "ListItem", "position": 2, "name": "Cas clients", "item": "https://althoce.com/cas-clients/" },
        { "@type": "ListItem", "position": 3, "name": "Cabinet de recrutement parisien", "item": "https://althoce.com/cas-clients/cabinet-recrutement-paris-agent-ia-tri-cv/" }
      ]
    }
  ]
};

export default function CasClientCabinetRecrutementParisTRiCVPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <CasClientCabinetRecrutementParisTRiCVPageClient />
      <Footer showCta={true} />
    </>
  );
}

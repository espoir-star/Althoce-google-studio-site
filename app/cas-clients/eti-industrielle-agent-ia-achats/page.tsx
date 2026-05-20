import type { Metadata } from 'next';
import CasClientEtiIndustrielleAchatsPageClient from '@/components/CasClientEtiIndustrielleAchatsPageClient';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: "ETI industrielle : -18 % sur les achats négociés et volume de devis ×4 pour 3 acheteurs grâce à un agent IA achats | Cas client Althoce",
  description: "Comment une ETI industrielle de 180 collaborateurs avec 22 M€ d'achats/an a réduit son coût moyen d'achat de 18 % sur les catégories négociées et multiplié par 4 le volume de devis traités par acheteur grâce à un agent IA achats déployé en 7 semaines (ERP SAP, extraction multi-formats, scoring 5 critères, fiche négociation automatique).",
  keywords: [
    'cas client agent IA achats',
    'ROI agent IA achats ETI industrielle',
    'automatisation comparatif devis fournisseurs',
    'cas concret IA scoring fournisseur ERP SAP',
    'témoignage agent IA négociation achats',
  ],
  openGraph: {
    title: 'ETI industrielle : -18 % achats négociés · ×4 RFQ / acheteur · 340 k€ économisés | Althoce',
    description: "22 M€ d'achats/an, 350 fournisseurs, 3 acheteurs saturés. Un agent IA déployé en 7 semaines : de la RFQ à la fiche de négociation automatique. -18 % sur les catégories négociées en 8 mois.",
    type: 'article',
    locale: 'fr_FR',
    url: 'https://althoce.com/cas-clients/eti-industrielle-agent-ia-achats/',
  },
  twitter: {
    card: 'summary_large_image',
    title: '-18 % achats · ×4 RFQ · 340 k€ · 3j → 4h comparatif : ETI industrielle × agent IA achats | Althoce',
    description: "22 M€ achats · 350 fournisseurs · scoring 5 critères · fiche négociation auto · alertes contrats · 7 semaines de déploiement.",
  },
  alternates: {
    canonical: 'https://althoce.com/cas-clients/eti-industrielle-agent-ia-achats/',
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": "https://althoce.com/cas-clients/eti-industrielle-agent-ia-achats/#article",
      "headline": "ETI industrielle : -18 % sur les achats négociés et volume de devis ×4 pour 3 acheteurs grâce à un agent IA achats Althoce",
      "description": "Cas client Althoce : ETI industrielle 180 collaborateurs, 22 M€ achats/an, 350 fournisseurs. Agent IA achats déployé en 7 semaines. -18 % coût moyen catégories négociées, ×4 RFQ traitées par acheteur, 3j → 4h pour un comparatif, 340 k€ économisés en 8 mois.",
      "datePublished": "2026-05-14",
      "dateModified": "2026-05-14",
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
        "@id": "https://althoce.com/cas-clients/eti-industrielle-agent-ia-achats/"
      },
      "about": {
        "@type": "Service",
        "name": "Agent IA achats pour ETI industrielle (scoring fournisseur, fiche négociation, alertes contrats)",
        "provider": { "@type": "Organization", "name": "Althoce" }
      },
      "keywords": "agent IA achats, automatisation RFQ, scoring fournisseur IA, comparatif devis automatique, fiche négociation IA, alertes contrats fournisseurs"
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://althoce.com/" },
        { "@type": "ListItem", "position": 2, "name": "Cas clients", "item": "https://althoce.com/cas-clients/" },
        { "@type": "ListItem", "position": 3, "name": "ETI industrielle achats", "item": "https://althoce.com/cas-clients/eti-industrielle-agent-ia-achats/" }
      ]
    }
  ]
};

export default function CasClientEtiIndustrielleAchatsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <CasClientEtiIndustrielleAchatsPageClient />
      <Footer showCta={true} />
    </>
  );
}

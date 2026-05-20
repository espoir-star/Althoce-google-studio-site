import type { Metadata } from 'next';
import CasClientCabinetComptableLyonPageClient from '@/components/CasClientCabinetComptableLyonPageClient';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: "Cabinet d'expertise comptable Lyon : ×2 capacité grâce aux agents IA Althoce | Cas client",
  description: "Comment un cabinet d'expertise comptable lyonnais de 12 collaborateurs a doublé sa capacité de production en 4 mois avec 2 agents IA Althoce : automatisation de la saisie comptable et du rapprochement bancaire. Chiffres réels, architecture détaillée, témoignage.",
  keywords: [
    'cas client agent IA comptable',
    'ROI agent IA cabinet comptable',
    'automatisation saisie comptable IA',
    'agent IA expertise comptable',
    'rapprochement bancaire automatique IA',
    'Althoce cabinet comptable Lyon',
    'doublement capacité cabinet comptable',
  ],
  openGraph: {
    title: "Cabinet d'expertise comptable Lyon : ×2 capacité en 4 mois avec 2 agents IA",
    description: "12 collaborateurs, 2 agents IA, 4 mois : saisie comptable automatisée à 80 %, rapprochement bancaire sans intervention humaine, +80 clients sans recrutement.",
    type: 'article',
    locale: 'fr_FR',
    url: 'https://althoce.com/cas-clients/cabinet-comptable-lyon/',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Cabinet comptable Lyon : ×2 capacité avec agents IA Althoce",
    description: "80 % saisie automatisée · 0 départ collaborateur · +80 clients · ROI atteint en 3 mois.",
  },
  alternates: {
    canonical: 'https://althoce.com/cas-clients/cabinet-comptable-lyon/',
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": "https://althoce.com/cas-clients/cabinet-comptable-lyon/#article",
      "headline": "Cabinet d'expertise comptable Lyon : ×2 capacité à effectif constant grâce aux agents IA Althoce",
      "description": "Comment un cabinet d'expertise comptable lyonnais de 12 collaborateurs a doublé sa capacité de production en 4 mois avec 2 agents IA Althoce, sans recrutement ni départ.",
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
        "@id": "https://althoce.com/cas-clients/cabinet-comptable-lyon/"
      },
      "about": {
        "@type": "Service",
        "name": "Agents IA pour cabinet d'expertise comptable",
        "provider": {
          "@type": "Organization",
          "name": "Althoce"
        }
      },
      "keywords": "agent IA comptabilité, automatisation saisie comptable, rapprochement bancaire automatique, cabinet expertise comptable Lyon, ROI agent IA"
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://althoce.com/" },
        { "@type": "ListItem", "position": 2, "name": "Cas clients", "item": "https://althoce.com/cas-clients/" },
        { "@type": "ListItem", "position": 3, "name": "Cabinet comptable Lyon", "item": "https://althoce.com/cas-clients/cabinet-comptable-lyon/" }
      ]
    }
  ]
};

export default function CasClientCabinetComptableLyonPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <CasClientCabinetComptableLyonPageClient />
      <Footer showCta={true} />
    </>
  );
}

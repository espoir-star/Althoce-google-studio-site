import type { Metadata } from 'next';
import CasClientCabinetAvocatsPageClient from '@/components/CasClientCabinetAvocatsPageClient';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: "Cabinet d'avocats lyonnais : 0 appel raté et +130 % RDV qualifiés avec un agent IA téléphonique | Cas client Althoce",
  description: "Comment un cabinet d'avocats lyonnais de 18 collaborateurs a éliminé les appels perdus, doublé ses prises de RDV et libéré 12 heures par semaine avec un agent IA téléphonique voix naturelle conforme secret professionnel.",
  keywords: [
    'cas client agent IA téléphonique cabinet avocats',
    'ROI agent IA accueil téléphonique',
    'agent IA voix naturelle cabinet avocats',
    'automatisation RDV cabinet avocats IA',
    'agent IA secret professionnel',
    'Althoce cabinet avocats Lyon',
  ],
  openGraph: {
    title: '0 appel raté et +130 % RDV qualifiés : cas client cabinet d\'avocats lyonnais | Althoce',
    description: "Agent IA téléphonique voix naturelle, 12h libérées/semaine, 0 heure sup. Comment un cabinet d'avocats lyonnais a éliminé les appels perdus et doublé ses prises de RDV.",
    type: 'article',
    locale: 'fr_FR',
    url: 'https://althoce.com/cas-clients/cabinet-avocats-agent-ia-telephonique/',
  },
  twitter: {
    card: 'summary_large_image',
    title: '0 appel raté · +130 % RDV : cabinet avocats × agent IA téléphonique | Althoce',
    description: "0 % appels perdus · +130 % RDV qualifiés · 12h libérées/semaine · conforme secret professionnel.",
  },
  alternates: {
    canonical: 'https://althoce.com/cas-clients/cabinet-avocats-agent-ia-telephonique/',
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": "https://althoce.com/cas-clients/cabinet-avocats-agent-ia-telephonique/#article",
      "headline": "0 appel raté et +130 % RDV qualifiés pour un cabinet d'avocats lyonnais grâce à un agent IA téléphonique",
      "description": "Cas client Althoce : comment un cabinet d'avocats lyonnais de 18 collaborateurs a éliminé les appels perdus, doublé ses prises de RDV et libéré 12 heures par semaine avec un agent IA téléphonique voix naturelle conforme secret professionnel.",
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
        "@id": "https://althoce.com/cas-clients/cabinet-avocats-agent-ia-telephonique/"
      },
      "about": {
        "@type": "Service",
        "name": "Agent IA téléphonique pour cabinet d'avocats",
        "provider": { "@type": "Organization", "name": "Althoce" }
      },
      "keywords": "agent IA téléphonique cabinet avocats, agent IA voix naturelle, accueil téléphonique IA, RDV automatisé cabinet avocats, agent IA secret professionnel"
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://althoce.com/" },
        { "@type": "ListItem", "position": 2, "name": "Cas clients", "item": "https://althoce.com/cas-clients/" },
        { "@type": "ListItem", "position": 3, "name": "Cabinet d'avocats lyonnais", "item": "https://althoce.com/cas-clients/cabinet-avocats-agent-ia-telephonique/" }
      ]
    }
  ]
};

export default function CasClientCabinetAvocatsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <CasClientCabinetAvocatsPageClient />
      <Footer showCta={true} />
    </>
  );
}

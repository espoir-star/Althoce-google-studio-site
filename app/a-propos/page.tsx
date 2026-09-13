import { aboutFaqs } from '@/lib/cabinet-content';
import type { Metadata } from 'next';
import AProposPageClient from '@/components/AProposPageClient';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: "L'histoire et la culture d'Althoce",
  description: "Althoce, cabinet IA d’origine bordelaise : conseil, formations IA, agents IA et automatisation pour les PME. Une équipe engagée, du diagnostic au suivi des usages.",
  keywords: "qui est Althoce, équipe Althoce, histoire Althoce, culture Althoce, agence IA Bordeaux histoire, Althoce origine",
  robots: { index: true, follow: true },
  alternates: { canonical: 'https://althoce.com/a-propos/' },
  openGraph: {
    title: "L'histoire et la culture d'Althoce | Althoce",
    description: "Découvrez Althoce, cabinet IA bordelais : une approche humaine du conseil, de la formation et de l’automatisation pour les PME.",
    type: 'website',
    locale: 'fr_FR',
    url: 'https://althoce.com/a-propos/',
    images: [
      {
        url: '/og-default.png',
        width: 1200,
        height: 630,
        alt: 'Althoce — Agents IA & Automatisation pour PME et ETI françaises',
      },
    ],
},
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://althoce.com/#organization",
      "name": "Althoce",
      "legalName": "ALTHOCE CONSEIL",
      "url": "https://althoce.com/",
      "logo": "https://althoce.com/logo.svg",
      "description": "Cabinet IA d’origine bordelaise, Althoce accompagne les PME avec le conseil, les formations IA, les agents IA et l’automatisation, du diagnostic au suivi des usages.",
      "foundingDate": "2025",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "5 rue Fénelon",
        "addressLocality": "Bordeaux",
        "postalCode": "33000",
        "addressCountry": "FR",
      },
      "areaServed": { "@type": "Country", "name": "France" },
    },
    {
      "@type": "WebPage",
      "@id": "https://althoce.com/a-propos/#webpage",
      "name": "L'histoire et la culture d'Althoce",
      "url": "https://althoce.com/a-propos/",
      "mainEntity": { "@id": "https://althoce.com/#organization" },
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://althoce.com/" },
        { "@type": "ListItem", "position": 2, "name": "À propos", "item": "https://althoce.com/a-propos/" },
      ],
    },
    {
      "@type": "FAQPage",
      "mainEntity": aboutFaqs.map(item => ({ "@type": "Question", "name": item.q, "acceptedAnswer": { "@type": "Answer", "text": item.a } })),
    },
  ],
};

export default function AProposPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <AProposPageClient />
      <Footer showCta={true} positioning="cabinet" />
    </>
  );
}

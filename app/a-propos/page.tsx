import type { Metadata } from 'next';
import AProposPageClient from '@/components/AProposPageClient';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: "L'histoire et la culture d'Althoce | Althoce",
  description: "Althoce, agence IA française d'origine bordelaise. Histoire, culture d'équipe et valeurs : démocratiser l'IA responsable dans les PME françaises. +150 PME équipées.",
  keywords: "qui est Althoce, équipe Althoce, histoire Althoce, culture Althoce, agence IA Bordeaux histoire, Althoce origine",
  robots: { index: true, follow: true },
  alternates: { canonical: 'https://althoce.com/a-propos/' },
  openGraph: {
    title: "L'histoire et la culture d'Althoce | Althoce",
    description: "Agence IA française d'origine bordelaise. Histoire, culture d'équipe et valeurs : démocratiser l'IA responsable dans les PME françaises.",
    type: 'website',
    locale: 'fr_FR',
    url: 'https://althoce.com/a-propos/',
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
      "description": "Agence IA française d'origine bordelaise. Mission : démocratiser l'usage de l'IA dans les entreprises françaises de manière responsable. +150 PME équipées.",
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
      "mainEntity": [
        { "@type": "Question", "name": "Comment Althoce est-elle organisée au quotidien ?", "acceptedAnswer": { "@type": "Answer", "text": "Un noyau permanent qui arbitre collectivement les sujets stratégiques, et un réseau de consultants spécialisés mobilisés selon les missions. Pas de pyramide, pas de département stratégie déconnecté." } },
        { "@type": "Question", "name": "Est-ce qu'Althoce recrute ?", "acceptedAnswer": { "@type": "Answer", "text": "L'équipe grandit avec ses missions. Développeurs IA seniors, experts métier sectoriels avec expérience PME/ETI, candidatures à espoir@contact.althoce.com." } },
        { "@type": "Question", "name": "Pourquoi Bordeaux ?", "acceptedAnswer": { "@type": "Answer", "text": "Ancrage culturel et professionnel : tissu PME dense, exigeant, où on attend du concret et où la parole vaut le contrat. ADN bordelais, intervention partout en France." } },
        { "@type": "Question", "name": "Quelles sont les ambitions d'Althoce ?", "acceptedAnswer": { "@type": "Answer", "text": "Densifier le portefeuille français (200, 500, 1000 PME équipées d'ici 3 ans), étendre le réseau de consultants partenaires, approfondir l'expertise sectorielle sur les verticales déjà signature." } },
      ],
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
      <Footer showCta={true} />
    </>
  );
}

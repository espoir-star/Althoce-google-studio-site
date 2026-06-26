import type { Metadata } from 'next';
import ContactPageClient from '@/components/ContactPageClient';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Discutons de votre projet — 30 minutes offertes | Althoce',
  description: "30 minutes pour identifier vos automatisations à fort ROI. Sans engagement, sans pitch commercial. Expert disponible. Réponse sous 24h ouvrées.",
  keywords: 'contact Althoce, contacter Althoce, prendre RDV Althoce, 30 minutes Althoce, rendez-vous expert IA Althoce',
  robots: { index: true, follow: true },
  alternates: { canonical: 'https://althoce.com/contact/' },
  openGraph: {
    title: 'Discutons de votre projet — 30 minutes offertes | Althoce',
    description: '30 minutes pour comprendre vos enjeux. Sans engagement. Réponse sous 24 h. Données hébergées en UE.',
    type: 'website',
    locale: 'fr_FR',
    url: 'https://althoce.com/contact/',
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
      "@type": "ContactPage",
      "@id": "https://althoce.com/contact/#webpage",
      "name": "Discutons de votre projet — 30 minutes offertes",
      "url": "https://althoce.com/contact/",
      "mainEntity": { "@id": "https://althoce.com/#organization" },
    },
    {
      "@type": "Organization",
      "@id": "https://althoce.com/#organization",
      "name": "Althoce",
      "legalName": "ALTHOCE CONSEIL",
      "url": "https://althoce.com/",
      "logo": "https://althoce.com/logo.svg",
      "email": "espoir@contact.althoce.com",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "5 rue Fénelon",
        "addressLocality": "Bordeaux",
        "postalCode": "33000",
        "addressCountry": "FR",
      },
      "contactPoint": [
        {
          "@type": "ContactPoint",
          "contactType": "Sales",
          "email": "espoir@contact.althoce.com",
          "areaServed": "FR",
          "availableLanguage": "French",
        },
        {
          "@type": "ContactPoint",
          "contactType": "Customer Service",
          "email": "espoir@contact.althoce.com",
          "areaServed": "FR",
          "availableLanguage": "French",
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://althoce.com/" },
        { "@type": "ListItem", "position": 2, "name": "Contact", "item": "https://althoce.com/contact/" },
      ],
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Combien de temps avant le premier RDV ?",
          "acceptedAnswer": { "@type": "Answer", "text": "Créneau proposé dans les 24 à 72 heures ouvrées. Urgence ? Précisez-le dans le formulaire." },
        },
        {
          "@type": "Question",
          "name": "Les 30 minutes sont-elles vraiment gratuites ?",
          "acceptedAnswer": { "@type": "Answer", "text": "Oui. Aucune contrepartie. Les 30 minutes servent à qualifier le besoin et proposer un devis pertinent. Vous n'avez aucune obligation de signer." },
        },
        {
          "@type": "Question",
          "name": "Sans certitude d'avoir un besoin IA, est-ce que ça vaut le coup ?",
          "acceptedAnswer": { "@type": "Answer", "text": "Oui. Les 30 minutes servent à clarifier si votre situation se prête à un agent IA, à un workflow, à une formation, ou à rien pour l'instant. Réponse sincère même si c'est « pas maintenant »." },
        },
        {
          "@type": "Question",
          "name": "Faut-il signer un NDA avant l'échange ?",
          "acceptedAnswer": { "@type": "Answer", "text": "Pas obligatoire pour les 30 minutes (échange fonctionnel uniquement). NDA mutuel possible sur demande dans les 24 h." },
        },
      ],
    },
  ],
};

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ContactPageClient />
      <Footer showCta={false} />
    </>
  );
}

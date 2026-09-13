import { contactFaqs } from '@/lib/cabinet-content';
import type { Metadata } from 'next';
import ContactPageClient from '@/components/ContactPageClient';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Discutons de votre projet — 30 minutes offertes',
  description: "Contactez Althoce pour un pré-audit offert de 30 minutes : formations IA, agents IA et automatisation pour votre PME. Sans engagement, réponse sous 24 h ouvrées.",
  keywords: 'contact Althoce, contacter Althoce, prendre RDV Althoce, 30 minutes Althoce, rendez-vous expert IA Althoce',
  robots: { index: true, follow: true },
  alternates: { canonical: 'https://althoce.com/contact/' },
  openGraph: {
    title: 'Discutons de votre projet — 30 minutes offertes | Althoce',
    description: 'Un premier échange offert pour vos besoins de formation IA et d’automatisation. 30 minutes, sans engagement, pour voir par où commencer.',
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
      "mainEntity": contactFaqs.map(item => ({ "@type": "Question", "name": item.q, "acceptedAnswer": { "@type": "Answer", "text": item.a } })),
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
      <Footer showCta={false} positioning="cabinet" />
    </>
  );
}

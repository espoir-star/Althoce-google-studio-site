import type { Metadata } from 'next';
import ContactPageClient from '@/components/ContactPageClient';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Réserver un Audit Gratuit | Althoce',
  description: "Réservez un appel gratuit de 30 minutes avec Althoce. Nous analyserons vos besoins et déterminerons comment l'IA peut transformer votre activité.",
  openGraph: {
    title: 'Réserver un Audit Gratuit | Althoce',
    url: 'https://althoce.com/contact',
  },
  alternates: {
    canonical: 'https://althoce.com/contact',
  },
};

const contactPageSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "@id": "https://althoce.com/contact#contactpage",
  "name": "Réserver un Audit Gratuit — Althoce",
  "description": "Réservez un appel de 30 minutes avec Althoce pour analyser vos besoins en automatisation IA.",
  "url": "https://althoce.com/contact",
  "mainEntity": {
    "@type": "Service",
    "name": "Consultation IA gratuite",
    "description": "Appel découverte de 30 minutes pour analyser vos besoins en agents IA et automatisation.",
    "provider": { "@id": "https://althoce.com/#organization" },
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "EUR",
      "description": "Consultation initiale gratuite de 30 minutes",
      "availability": "https://schema.org/InStock",
    },
  },
};

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageSchema) }}
      />
      <ContactPageClient />
      <Footer showCta={false} />
    </>
  );
}

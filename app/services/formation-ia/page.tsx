import { formationFaq } from '@/lib/formations';
import type { Metadata } from 'next';
import FormationIAPageClient from '@/components/FormationIAPageClient';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Formation IA pour entreprise',
  description: "Formations IA pour vos équipes et coaching individuel pour dirigeants. Des parcours sur vos vrais dossiers, avec vos outils et un suivi après la formation.",
  keywords: ['formation IA entreprise', 'formation intelligence artificielle', 'formation IA générative', 'formation ChatGPT entreprise', 'formation Claude IA', 'formation IA finançable OPCO', 'formation prompting'],
  openGraph: {
    title: 'Formation IA pour entreprise | Althoce',
    description: "Formations IA pour vos équipes et coaching individuel pour dirigeants. Des parcours sur vos vrais dossiers, avec vos outils et un suivi après la formation.",
    type: 'website',
    locale: 'fr_FR',
    url: 'https://althoce.com/services/formation-ia/',
    images: [
      {
        url: '/og-default.png',
        width: 1200,
        height: 630,
        alt: 'Althoce — Formation IA pour entreprise',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Formation IA pour entreprise | Althoce',
    description: "Formations IA pour vos équipes et coaching individuel pour dirigeants. Des parcours sur vos vrais dossiers, avec vos outils et un suivi après la formation.",
  },
  alternates: {
    canonical: 'https://althoce.com/services/formation-ia/',
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": "https://althoce.com/services/formation-ia/#service",
      "name": "Formation IA pour entreprise",
      "description": "Formations IA pour vos équipes et coaching individuel pour dirigeants. Des parcours sur vos vrais dossiers, avec vos outils et un suivi après la formation.",
      "url": "https://althoce.com/services/formation-ia/",
      "provider": {
        "@type": "Organization",
        "@id": "https://althoce.com/#organization",
        "name": "Althoce",
        "url": "https://althoce.com/"
      },
      "areaServed": { "@type": "Country", "name": "France" },
      "serviceType": "Formation IA en entreprise"
    },
    {
      "@type": "ItemList",
      "name": "Formations IA Althoce",
      "itemListElement": [
        { "@type": "ListItem", "position": 3, "name": "Coaching IA Dirigeant", "url": "https://althoce.com/services/formation-ia/coaching-dirigeant/" },
        {
          "@type": "ListItem",
          "position": 1,
          "name": "IA Fondamentaux",
          "url": "https://althoce.com/services/formation-ia/ia-fondamentaux/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "IA Avancée",
          "url": "https://althoce.com/services/formation-ia/ia-avancee/"
        }
      ]
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://althoce.com/" },
        { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://althoce.com/services/" },
        { "@type": "ListItem", "position": 3, "name": "Formation IA", "item": "https://althoce.com/services/formation-ia/" }
      ]
    },
    { "@type": "FAQPage", "mainEntity": formationFaq.map(item => ({ "@type": "Question", "name": item.q, "acceptedAnswer": { "@type": "Answer", "text": item.a } })) }
  ]
};

export default function FormationIAPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <FormationIAPageClient />
      <Footer showCta={false} />
    </>
  );
}

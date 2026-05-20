import type { Metadata } from 'next';
import CasClientDistributeurB2BOpsPageClient from '@/components/CasClientDistributeurB2BOpsPageClient';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: "Distributeur B2B industriel : volume traité ×3 et fin du turnover assistant ops grâce aux agents IA Althoce | Cas client",
  description: "Comment un distributeur B2B industriel de 45 collaborateurs a triplé son volume de mails et commandes traités sans embaucher, et a éliminé son turnover récurrent sur le poste d'assistant ops (80 % vers 0 %) grâce à 3 agents IA déployés en 6 semaines.",
  keywords: [
    'cas client agent IA ops',
    'ROI agent IA back-office',
    'automatisation ADV distributeur',
    'cas concret IA assistant administratif',
    'témoignage agent IA fin du burn-out ops',
  ],
  openGraph: {
    title: 'Volume ×3 et turnover 80 % vers 0 % : cas client distributeur B2B ops | Althoce',
    description: "Le projet IT le plus rentable du distributeur. 3 agents IA ops déployés en 6 semaines. Fin du burn-out cyclique sur le poste assistant administratif.",
    type: 'article',
    locale: 'fr_FR',
    url: 'https://althoce.com/cas-clients/distributeur-b2b-agent-ia-ops/',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Volume ×3 · turnover 0 % : distributeur B2B × 3 agents IA ops | Althoce',
    description: "80 → 240 mails/j · 25 → 75 commandes/j · turnover 80 % → 0 % · 40 k€ coût caché éliminé · 6 semaines de déploiement.",
  },
  alternates: {
    canonical: 'https://althoce.com/cas-clients/distributeur-b2b-agent-ia-ops/',
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": "https://althoce.com/cas-clients/distributeur-b2b-agent-ia-ops/#article",
      "headline": "Volume traité ×3 et fin du turnover assistant ops pour un distributeur B2B industriel grâce aux agents IA Althoce",
      "description": "Cas client Althoce : distributeur B2B industriel 45 collaborateurs. 3 agents IA ops déployés en 6 semaines. Mails ×3, commandes ERP ×3, turnover 80 % vers 0 % sur 14 mois. Coût caché 40 k€/an éliminé.",
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
        "@id": "https://althoce.com/cas-clients/distributeur-b2b-agent-ia-ops/"
      },
      "about": {
        "@type": "Service",
        "name": "Agents IA ops pour distributeur B2B (mails, ADV, GED)",
        "provider": { "@type": "Organization", "name": "Althoce" }
      },
      "keywords": "agent IA ops, automatisation back-office, agent IA ADV Sage, agent IA mails entrants, agent IA GED SharePoint, turnover assistant ops"
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://althoce.com/" },
        { "@type": "ListItem", "position": 2, "name": "Cas clients", "item": "https://althoce.com/cas-clients/" },
        { "@type": "ListItem", "position": 3, "name": "Distributeur B2B industriel", "item": "https://althoce.com/cas-clients/distributeur-b2b-agent-ia-ops/" }
      ]
    }
  ]
};

export default function CasClientDistributeurB2BOpsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <CasClientDistributeurB2BOpsPageClient />
      <Footer showCta={true} />
    </>
  );
}

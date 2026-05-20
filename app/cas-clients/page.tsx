import type { Metadata } from 'next';
import CasClientsHubPageClient from '@/components/CasClientsHubPageClient';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Cas clients : ce que nos agents IA ont changé concrètement chez des PME et ETI françaises | Althoce',
  description: "9 cas clients chiffrés Althoce : cabinet comptable Lyon (×2 capacité), négoce vins Bordeaux (+200 % RDV), SaaS B2B (70 % N1 absorbé), cabinet recrutement Paris (×2 placements), ETI industrielle (4 % économies achats = 1,2 M€). Lisez les transformations réelles, contactez un expert.",
  keywords: ['cas clients Althoce', 'cas client agent IA', 'retour expérience agent IA', 'ROI agent IA exemple', 'cas concret automatisation IA PME', 'témoignage agent IA', 'preuve sociale IA entreprise'],
  openGraph: {
    title: 'Cas clients Althoce : 9 transformations chiffrées chez des PME et ETI françaises',
    description: "Cabinets, ETI, distributeurs, SaaS : 9 cas concrets de déploiement d'agents IA Althoce. Chiffres réels, ROI mesurable, témoignages directs.",
    type: 'website',
    locale: 'fr_FR',
    url: 'https://althoce.com/cas-clients/',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cas clients Althoce : 9 transformations chiffrées chez des PME et ETI françaises',
    description: "+150 PME équipées · +758 agents en production · 96 % de réussite déploiement · 9 cas réels chiffrés.",
  },
  alternates: {
    canonical: 'https://althoce.com/cas-clients/',
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "CollectionPage",
      "@id": "https://althoce.com/cas-clients/#collection",
      "name": "Cas clients Althoce",
      "description": "9 cas clients chiffrés Althoce : cabinets d'expertise comptable, négoces, SaaS B2B, cabinets d'avocats et de recrutement, ETI industrielles. Transformations réelles, ROI mesurable, témoignages directs.",
      "url": "https://althoce.com/cas-clients/",
      "provider": {
        "@type": "Organization",
        "@id": "https://althoce.com/#organization",
        "name": "Althoce",
        "url": "https://althoce.com/"
      }
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://althoce.com/" },
        { "@type": "ListItem", "position": 2, "name": "Cas clients", "item": "https://althoce.com/cas-clients/" }
      ]
    },
    {
      "@type": "ItemList",
      "name": "Cas clients Althoce — 9 transformations chiffrées",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "url": "https://althoce.com/cas-clients/cabinet-comptable-lyon/", "name": "Cabinet d'expertise comptable Lyon — ×2 capacité à effectif constant" },
        { "@type": "ListItem", "position": 2, "url": "https://althoce.com/cas-clients/negoce-vins-bordelais-agent-ia-sdr/", "name": "Négoce de vins bordelais — +200 % RDV qualifiés en 4 mois" },
        { "@type": "ListItem", "position": 3, "url": "https://althoce.com/cas-clients/saas-b2b-agent-ia-service-client/", "name": "Éditeur SaaS B2B — 70 % tickets N1 absorbés, CSAT +12 points" },
        { "@type": "ListItem", "position": 4, "url": "https://althoce.com/cas-clients/cabinet-avocats-agent-ia-telephonique/", "name": "Cabinet d'avocats lyonnais — 0 % appels perdus, ×2,3 RDV qualifiés" },
        { "@type": "ListItem", "position": 5, "url": "https://althoce.com/cas-clients/cabinet-recrutement-paris-agent-ia-tri-cv/", "name": "Cabinet de recrutement Paris — 200 à 700 CV triés/semaine, ×2 placements" },
        { "@type": "ListItem", "position": 6, "url": "https://althoce.com/cas-clients/saas-b2b-agent-ia-marketing/", "name": "Éditeur SaaS B2B marketing — trafic organique +140 % à 6 mois" },
        { "@type": "ListItem", "position": 7, "url": "https://althoce.com/cas-clients/distributeur-b2b-agent-ia-ops/", "name": "Distributeur B2B industriel — turnover ops 80 % → 0 %, ×3 commandes traitées" },
        { "@type": "ListItem", "position": 8, "url": "https://althoce.com/cas-clients/eti-agroalimentaire-agent-ia-juridique/", "name": "ETI agroalimentaire juridique — 30 à 50+ contrats analysés/mois" },
        { "@type": "ListItem", "position": 9, "url": "https://althoce.com/cas-clients/eti-industrielle-agent-ia-achats/", "name": "ETI industrielle achats — +4 % économies achats = 1,2 M€/an" }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Les chiffres présentés sont-ils réels ou marketing ?",
          "acceptedAnswer": { "@type": "Answer", "text": "Réels et vérifiables. Pour chaque cas, les chiffres sont croisés avec les données client avant publication. Méthodologie disponible sur demande pendant les 30 minutes offertes avec un expert. Aucun chiffre n'est inventé." }
        },
        {
          "@type": "Question",
          "name": "Pourquoi certains clients sont-ils anonymisés ?",
          "acceptedAnswer": { "@type": "Answer", "text": "Nominatif uniquement avec accord écrit du client. La majorité des PME préfèrent l'anonymisation. Quand nous anonymisons, nous gardons une rigueur sectorielle pour que la transposition reste fidèle." }
        },
        {
          "@type": "Question",
          "name": "Y a-t-il des cas d'échec dans votre portefeuille ?",
          "acceptedAnswer": { "@type": "Answer", "text": "Oui. Notre taux de réussite déploiement est de 96 %, ce qui signifie que 4 % des projets sont arrêtés au cadrage, avant le build. Nous ne facturons jamais un build qui n'a pas de chance raisonnable de réussir." }
        },
        {
          "@type": "Question",
          "name": "Comment savoir si mon cas est transposable ?",
          "acceptedAnswer": { "@type": "Answer", "text": "Trois indicateurs : taille comparable, métier comparable, volume comparable. Si les 3 sont vrais, la transposition est très probable. Les 30 minutes offertes avec un expert permettent de valider." }
        },
        {
          "@type": "Question",
          "name": "Combien coûte un déploiement comparable à ces cas ?",
          "acceptedAnswer": { "@type": "Answer", "text": "Sur devis selon votre contexte. Tout démarre par 30 minutes offertes avec un expert : on identifie le cas comparable, on partage les ordres de grandeur d'investissement et de ROI, vous repartez avec un devis ferme sous 5 jours sans engagement." }
        }
      ]
    }
  ]
};

export default function CasClientsHubPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <CasClientsHubPageClient />
      <Footer showCta={true} />
    </>
  );
}

import type { Metadata } from 'next';
import AgentIAMarketingPageClient from '@/components/AgentIAMarketingPageClient';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Agent IA pour le marketing : contenu, SEO, social, email en pilote automatique | Althoce',
  description: "Un agent IA Althoce produit votre contenu multi-canal (articles SEO, posts LinkedIn, newsletters, séquences email) à votre ton de marque, fait votre veille concurrentielle, et libère votre équipe marketing pour la stratégie. Cohérence marque garantie. Tarification sur devis, 30 min offertes avec un expert.",
  keywords: ['agent IA marketing', 'IA pour marketing', 'IA création contenu', 'agent IA SEO', 'agent IA email marketing', 'automatisation marketing IA', 'IA pour CMO', 'génération contenu IA entreprise'],
  openGraph: {
    title: 'Agent IA pour le marketing : contenu, SEO, social, email en pilote automatique | Althoce',
    description: "Équipe marketing sous-dimensionnée vs ambition ? Un agent IA produit votre contenu multi-canal à votre ton de marque. Cohérence garantie. L'équipe se concentre sur la stratégie.",
    type: 'article',
    locale: 'fr_FR',
    url: 'https://althoce.com/agent-ia/marketing/',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Agent IA marketing : contenu, SEO, email en pilote automatique | Althoce',
    description: "Volume de contenu ×4 sans embauche. Articles SEO, posts LinkedIn, newsletters, séquences email — à votre ton de marque. ROI 3 à 6 mois.",
  },
  alternates: {
    canonical: 'https://althoce.com/agent-ia/marketing/',
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": "https://althoce.com/agent-ia/marketing/#service",
      "name": "Agent IA pour le marketing",
      "serviceType": "AI agent for marketing and content production",
      "provider": {
        "@type": "Organization",
        "@id": "https://althoce.com/#organization",
        "name": "Althoce",
        "url": "https://althoce.com/"
      },
      "areaServed": {
        "@type": "Country",
        "name": "France"
      },
      "description": "Agents IA Althoce pour le marketing : génération de contenu multi-canal au ton de marque, SEO sémantique, email marketing segmenté, veille concurrentielle continue. Intégration HubSpot, Brevo, WordPress, LinkedIn, etc.",
      "offers": {
        "@type": "Offer",
        "url": "https://althoce.com/agent-ia/marketing/",
        "priceSpecification": {
          "@type": "PriceSpecification",
          "priceCurrency": "EUR",
          "description": "Tarification sur devis selon volume cible, canaux, personnalisation segments. ROI typique 3 à 6 mois (volume contenu ×3 à ×5 sans embauche)."
        }
      }
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://althoce.com/" },
        { "@type": "ListItem", "position": 2, "name": "Automatisation", "item": "https://althoce.com/services/automatisation-ia/" },
        { "@type": "ListItem", "position": 3, "name": "Agent IA marketing", "item": "https://althoce.com/agent-ia/marketing/" }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "L'agent IA produit-il du contenu à mon ton de marque ou du contenu générique style ChatGPT ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "À votre ton de marque, strict. Brief de marque détaillé + indexation de votre bibliothèque de contenu existant. Nos clients passent les tests blind sans que les lecteurs détectent le contenu IA dans 90 % des cas."
          }
        },
        {
          "@type": "Question",
          "name": "L'agent peut-il vraiment remplacer un content manager humain ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Non. L'agent absorbe la production (rédaction, SEO, déclinaison multi-canal). Le content manager humain garde la stratégie éditoriale et les interlocuteurs."
          }
        },
        {
          "@type": "Question",
          "name": "Quel investissement pour un agent IA marketing et quel ROI attendre ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Sur devis selon scope. ROI typique 3 à 6 mois. Volume contenu ×3 à ×5 sans embauche. Tout démarre par 30 minutes offertes avec un expert."
          }
        },
        {
          "@type": "Question",
          "name": "L'agent peut-il s'intégrer à mes outils marketing existants (HubSpot, Brevo, WordPress, etc.) ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Oui. HubSpot, Brevo, ActiveCampaign, Mailjet, Mailchimp côté email. WordPress, Webflow, Shopify côté CMS. LinkedIn via Buffer/Hootsuite côté social."
          }
        },
        {
          "@type": "Question",
          "name": "Comment éviter le contenu plat, sans personnalité, reconnaissable comme IA ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Brief de marque très détaillé + indexation contenu existant + validation humaine systématique avant publication avec retours qualitatifs qui affinent l'agent dans le temps."
          }
        },
        {
          "@type": "Question",
          "name": "L'agent peut-il faire du SEO sérieusement ou c'est du bourrage de mots-clés ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "SEO sérieusement : intent match, structure logique H2/H3, maillage interne automatique, Schema.org FAQPage quand pertinent. Audit SEO initial inclus."
          }
        },
        {
          "@type": "Question",
          "name": "Mes données marketing (CRM, clients, listes email) restent-elles confidentielles ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Oui. Anonymisation des PII avant tout envoi LLM. Les listes email et données CRM ne sont jamais envoyées aux modèles — seules les analyses agrégées sont utilisées."
          }
        },
        {
          "@type": "Question",
          "name": "L'agent peut-il aussi gérer la création de visuels (images, infographies, vidéos courtes) ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Partiellement. Visuels statiques : oui (DALL-E, Midjourney, Stable Diffusion). Vidéos : scripts et prompts oui, production finale reste humaine ou outil dédié."
          }
        }
      ]
    }
  ]
};

export default function AgentIAMarketingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <AgentIAMarketingPageClient />
      <Footer showCta={true} />
    </>
  );
}

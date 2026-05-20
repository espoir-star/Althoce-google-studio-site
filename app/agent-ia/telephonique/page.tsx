import type { Metadata } from 'next';
import AgentIATelephoniquePageClient from '@/components/AgentIATelephoniquePageClient';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Agent IA téléphonique : réception et émission d\'appels en pilote automatique, voix naturelle | Althoce',
  description: "Un agent IA Althoce répond aux appels entrants 24/7 en voix naturelle, qualifie les appelants, prend les RDV, passe les rappels sortants automatisés. Pas un IVR à touches. Une vraie conversation. Intégration CRM native. Tarification sur devis, 30 min offertes avec un expert.",
  keywords: ['agent IA téléphonique', 'agent IA vocal', 'IA standard téléphonique', 'répondeur IA intelligent', 'voicebot français', 'automatisation appels', 'agent vocal IA', 'IA rappels automatiques'],
  openGraph: {
    title: 'Agent IA téléphonique : réception et émission d\'appels, voix naturelle | Althoce',
    description: "Votre standard téléphonique sature. Votre SAV vocal frustre. Un agent IA Althoce répond en voix naturelle, qualifie, transfère ou résout. Pas un IVR à touches.",
    type: 'article',
    locale: 'fr_FR',
    url: 'https://althoce.com/agent-ia/telephonique/',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Agent IA téléphonique | Althoce',
    description: "Voix naturelle française 24/7. Zéro appel raté. Standard téléphonique IA déployé en 2 à 3 semaines.",
  },
  alternates: {
    canonical: 'https://althoce.com/agent-ia/telephonique/',
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": "https://althoce.com/agent-ia/telephonique/#service",
      "name": "Agent IA téléphonique",
      "serviceType": "AI agent for phone calls and voice automation",
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
      "description": "Agents IA Althoce pour la téléphonie : réception standard 24/7, qualification commerciale entrante, rappels sortants automatisés, support vocal N0. Voix naturelle française, intégration VoIP (Twilio, Ringover, Aircall, opérateur).",
      "offers": {
        "@type": "Offer",
        "url": "https://althoce.com/agent-ia/telephonique/",
        "priceSpecification": {
          "@type": "PriceSpecification",
          "priceCurrency": "EUR",
          "description": "Tarification sur devis selon volume d'appels, intégration VoIP, nombre de scénarios. Payback typique en moins de 6 mois sur les standards saturés et SAV vocaux débordés."
        }
      }
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://althoce.com/" },
        { "@type": "ListItem", "position": 2, "name": "Automatisation", "item": "https://althoce.com/services/automatisation-ia/" },
        { "@type": "ListItem", "position": 3, "name": "Agent IA téléphonique", "item": "https://althoce.com/agent-ia/telephonique/" }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Différence agent IA téléphonique vs IVR à touches ?",
          "acceptedAnswer": { "@type": "Answer", "text": "L'IVR est un menu à touches limité. L'agent IA mène une vraie conversation en voix naturelle française, comprend les demandes même reformulées, agit dans le CRM, transfère à un humain quand c'est complexe." }
        },
        {
          "@type": "Question",
          "name": "La voix est-elle naturelle ou robotique ?",
          "acceptedAnswer": { "@type": "Answer", "text": "Naturelle. Moteurs ElevenLabs, Cartesia, OpenAI TTS. Indistinguable d'un humain pour 80 % des appelants en tests A/B." }
        },
        {
          "@type": "Question",
          "name": "Quel investissement et quel ROI ?",
          "acceptedAnswer": { "@type": "Answer", "text": "Sur devis selon volume d'appels et scénarios. Payback typique moins de 6 mois sur les standards saturés. 30 min offertes avec un expert pour cadrer." }
        },
        {
          "@type": "Question",
          "name": "Intégration au numéro de téléphone existant ?",
          "acceptedAnswer": { "@type": "Answer", "text": "Oui. Twilio, Ringover, Aircall, OnOff, ou directement opérateur via SIP trunk. Le numéro de l'entreprise ne change pas." }
        },
        {
          "@type": "Question",
          "name": "Si l'agent ne comprend pas l'appelant ?",
          "acceptedAnswer": { "@type": "Answer", "text": "Demande poliment une reformulation, puis transfère à un humain avec contexte vocal pré-passé si le cas sort du périmètre." }
        },
        {
          "@type": "Question",
          "name": "Données et conversations en France ?",
          "acceptedAnswer": { "@type": "Answer", "text": "Oui. Enregistrements et transcriptions stockés sur OVH ou Scaleway. Mistral + voix open-source pour souveraineté maximale. Conformité RGPD native." }
        },
        {
          "@type": "Question",
          "name": "L'agent va-t-il remplacer mon standard humain ?",
          "acceptedAnswer": { "@type": "Answer", "text": "Non. Absorbe la partie répétitive, libère l'humain pour les cas à valeur (litige, urgence, fidélisation). Zéro départ d'équipe imputable observé." }
        },
        {
          "@type": "Question",
          "name": "Gestion des appels d'urgence ?",
          "acceptedAnswer": { "@type": "Answer", "text": "Critères d'urgence définis au cadrage. Transfert immédiat à un humain avec priorité maximale ou protocole spécifique (astreinte, SAMU/15 pour le médical)." }
        }
      ]
    }
  ]
};

export default function AgentIATelephoniquePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <AgentIATelephoniquePageClient />
      <Footer showCta={true} />
    </>
  );
}

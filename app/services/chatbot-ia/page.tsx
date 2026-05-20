import type { Metadata } from 'next';
import ChatbotIAPageClient from '@/components/ChatbotIAPageClient';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Chatbot IA RAG sur-mesure pour site et intranet : ancré sur votre base de connaissances | Althoce',
  description: "Pas un chatbot scripté qui frustre vos visiteurs. Un chatbot RAG ancré sur votre base de connaissances, vos FAQ, vos docs internes. Souverain, français, à partir de 1 400 € HT. 30 min offertes avec un expert.",
  keywords: ['chatbot IA', 'chatbot RAG', 'chatbot intelligent', 'agent conversationnel', 'chatbot site internet', 'chatbot français', 'chatbot PME', 'assistant IA conversationnel'],
  openGraph: {
    title: 'Chatbot IA RAG sur-mesure : ancré sur votre base de connaissances | Althoce',
    description: "Vos visiteurs en ont marre des chatbots scriptés. Un chatbot RAG répond avec votre vraie connaissance, en temps réel, en français, souverain.",
    type: 'article',
    locale: 'fr_FR',
    url: 'https://althoce.com/services/chatbot-ia/',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Chatbot IA RAG sur-mesure | Althoce',
    description: "Pas un chatbot scripté. Un assistant RAG ancré sur votre base de connaissances, souverain, français.",
  },
  alternates: {
    canonical: 'https://althoce.com/services/chatbot-ia/',
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": "https://althoce.com/services/chatbot-ia/#service",
      "name": "Chatbot IA RAG sur-mesure",
      "serviceType": "Conversational AI",
      "provider": {
        "@type": "Organization",
        "@id": "https://althoce.com/#organization",
        "name": "Althoce",
        "url": "https://althoce.com/"
      },
      "areaServed": { "@type": "Country", "name": "France" },
      "description": "Chatbot IA RAG ancré sur votre base de connaissances (FAQ, docs, intranet). Souverain, français, intégrable à votre site ou intranet. À partir de 1 400 € HT.",
      "offers": {
        "@type": "Offer",
        "url": "https://althoce.com/services/chatbot-ia/",
        "priceSpecification": {
          "@type": "PriceSpecification",
          "priceCurrency": "EUR",
          "description": "À partir de 1 400 € HT pour un chatbot RAG simple. Sur devis pour les systèmes multi-bases ou multilingues."
        }
      }
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://althoce.com/" },
        { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://althoce.com/services/" },
        { "@type": "ListItem", "position": 3, "name": "Chatbot IA", "item": "https://althoce.com/services/chatbot-ia/" }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        { "@type": "Question", "name": "Différence entre chatbot et agent IA ?", "acceptedAnswer": { "@type": "Answer", "text": "Un chatbot répond. Un agent IA répond ET prend des actions (créer ticket, envoyer email, prendre RDV)." } },
        { "@type": "Question", "name": "Comment éviter les hallucinations ?", "acceptedAnswer": { "@type": "Answer", "text": "Trois garde-fous : ancrage strict sur passages remontés, escalade si rien trouvé, filtre anti-hallucination." } },
        { "@type": "Question", "name": "Combien coûte un chatbot IA ?", "acceptedAnswer": { "@type": "Answer", "text": "Chatbot RAG simple : 1 400 € HT. Multi-bases ou multilingue : sur devis. 30 min offertes avec un expert." } },
        { "@type": "Question", "name": "En combien de temps est-il opérationnel ?", "acceptedAnswer": { "@type": "Answer", "text": "1 semaine pour un chatbot simple. 2 à 4 semaines pour multi-bases ou multilingue." } },
        { "@type": "Question", "name": "Intégrable à notre site existant ?", "acceptedAnswer": { "@type": "Answer", "text": "Oui. Script embed ou API. Compatible Next.js, WordPress, Shopify, Webflow, Sharepoint, Notion." } },
        { "@type": "Question", "name": "Le chatbot apprend-il ?", "acceptedAnswer": { "@type": "Answer", "text": "Oui via mise à jour de la base de connaissances. Monitoring continu des conversations pour alimenter la base." } }
      ]
    }
  ]
};

export default function ChatbotIAPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ChatbotIAPageClient />
      <Footer showCta={true} />
    </>
  );
}

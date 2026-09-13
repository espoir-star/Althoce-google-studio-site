import type { Metadata } from 'next';
import Footer from '@/components/Footer';
import ServiceSchema from '@/components/services/ServiceSchema';
import ServicePage from '@/components/services/ServicePage';
import { serviceStories } from '@/lib/services-content';

export const metadata: Metadata = {
  title: 'Chatbot IA RAG sur mesure',
  description: "Chatbot IA RAG connecté à vos connaissances : réponses contextualisées, sources sélectionnées et relais humain pour vos clients ou vos équipes.",
  keywords: ['chatbot IA', 'chatbot RAG', 'chatbot intelligent', 'agent conversationnel', 'chatbot site internet', 'chatbot français', 'chatbot PME', 'assistant IA conversationnel'],
  openGraph: {
    title: "Chatbot IA | Althoce",
    description: "Chatbot IA RAG connecté à vos connaissances : réponses contextualisées, sources sélectionnées et relais humain pour vos clients ou vos équipes.",
    type: 'article',
    locale: 'fr_FR',
    url: 'https://althoce.com/services/chatbot-ia/',
    images: [
      {
        url: '/og-default.png',
        width: 1200,
        height: 630,
        alt: 'Althoce — Agents IA & Automatisation pour PME et ETI françaises',
      },
    ],
},
  twitter: {
    card: 'summary_large_image',
    title: "Chatbot IA | Althoce",
    description: "Chatbot IA RAG connecté à vos connaissances : réponses contextualisées, sources sélectionnées et relais humain pour vos clients ou vos équipes.",
  },
  alternates: {
    canonical: 'https://althoce.com/services/chatbot-ia/',
  },
};

const service = serviceStories.find(item => item.slug === 'chatbot-ia')!;
export default function Page() { return <><ServiceSchema service={service} /><ServicePage service={service} /><Footer showCta={true} /></>; }

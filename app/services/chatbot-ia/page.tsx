import type { Metadata } from 'next';
import Footer from '@/components/Footer';
import ServiceSchema from '@/components/services/ServiceSchema';
import ServicePage from '@/components/services/ServicePage';
import { serviceStories } from '@/lib/services-content';

const service = serviceStories.find(item => item.slug === 'chatbot-ia')!;

export const metadata: Metadata = {
  title: 'Chatbot IA RAG sur mesure',
  description: service.metaDescription,
  keywords: ['chatbot IA', 'chatbot RAG', 'chatbot intelligent', 'agent conversationnel', 'chatbot site internet', 'chatbot français', 'chatbot PME', 'assistant IA conversationnel'],
  openGraph: {
    title: "Chatbot IA | Althoce",
    description: service.metaDescription,
    type: 'article',
    locale: 'fr_FR',
    url: 'https://althoce.com/services/chatbot-ia/',
    images: [
      {
        url: '/og-default.png',
        width: 1200,
        height: 630,
        alt: 'Althoce, cabinet de conseil et intégration IA',
      },
    ],
},
  twitter: {
    card: 'summary_large_image',
    title: "Chatbot IA | Althoce",
    description: service.metaDescription,
  },
  alternates: {
    canonical: 'https://althoce.com/services/chatbot-ia/',
  },
};


export default function Page() { return <><ServiceSchema service={service} /><ServicePage service={service} /><Footer showCta={true} /></>; }

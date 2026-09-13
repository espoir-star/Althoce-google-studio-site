import ServicePage from './services/ServicePage';
import { serviceStories } from '@/lib/services-content';
export default function ChatbotIAPageClient() { return <ServicePage service={serviceStories.find(item => item.slug === 'chatbot-ia')!} />; }

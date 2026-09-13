import ServicePage from './services/ServicePage';
import { serviceStories } from '@/lib/services-content';
export default function AgentsIAPageClient() { return <ServicePage service={serviceStories.find(item => item.slug === 'agents-ia')!} />; }

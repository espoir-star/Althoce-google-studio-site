import ServicePage from './services/ServicePage';
import { serviceStories } from '@/lib/services-content';
export default function IntegrationIAPageClient() { return <ServicePage service={serviceStories.find(item => item.slug === 'integration-ia')!} />; }

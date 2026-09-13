import ServicePage from './services/ServicePage';
import { serviceStories } from '@/lib/services-content';
export default function AutomatisationIAPageClient() { return <ServicePage service={serviceStories.find(item => item.slug === 'automatisation-ia')!} />; }

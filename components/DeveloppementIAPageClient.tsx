import ServicePage from './services/ServicePage';
import { serviceStories } from '@/lib/services-content';
export default function DeveloppementIAPageClient() { return <ServicePage service={serviceStories.find(item => item.slug === 'developpement-ia')!} />; }

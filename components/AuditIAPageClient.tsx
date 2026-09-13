import ServicePage from './services/ServicePage';
import { serviceStories } from '@/lib/services-content';
export default function AuditIAPageClient() { return <ServicePage service={serviceStories.find(item => item.slug === 'audit-ia')!} />; }

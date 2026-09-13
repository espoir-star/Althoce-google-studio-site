import ServicePage from './services/ServicePage';
import { serviceStories } from '@/lib/services-content';
export default function EmployeIAPageClient() { return <ServicePage service={serviceStories.find(item => item.slug === 'employe-ia')!} />; }

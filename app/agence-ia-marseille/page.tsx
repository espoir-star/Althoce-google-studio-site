import type { Metadata } from 'next';
import CityPage, { NationalPage, CitySchema } from '@/components/cities/CityPage';
import { cityStories } from '@/lib/cities-content';
import Footer from '@/components/Footer';
const story=cityStories.find(x=>x.slug==="marseille")!;
export const metadata:Metadata={...{"title": "Agence IA à Marseille : automatisation PME", "description": "Conseil, formations IA et agents sur mesure pour les entreprises à Marseille. Althoce vous accompagne du diagnostic au suivi.", "alternates": {"canonical": "https://althoce.com/agence-ia-marseille/"}, "openGraph": {"title": "Agence IA à Marseille : automatisation PME", "description": "Conseil, formations IA et agents sur mesure pour les entreprises à Marseille. Althoce vous accompagne du diagnostic au suivi.", "url": "https://althoce.com/agence-ia-marseille/", "type": "website", "locale": "fr_FR", "images": ["/og-default.png"]}, "twitter": {"card": "summary_large_image", "title": "Agence IA à Marseille : automatisation PME", "description": "Conseil, formations IA et agents sur mesure pour les entreprises à Marseille. Althoce vous accompagne du diagnostic au suivi."}},keywords:[
    'agence IA Marseille',
    'agence IA Provence',
    'consultant IA Marseille',
    'automatisation Marseille',
    'IA PME Marseille',
    'agent IA Aix-en-Provence',
    'formation IA Marseille',
    'IA logistique portuaire',
    'IA agroalimentaire Provence',
  ]};
export default function Page(){return <><CitySchema story={story}/><CityPage story={story}/><Footer showCta={false}/></>}

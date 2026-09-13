import type { Metadata } from 'next';
import CityPage, { NationalPage, CitySchema } from '@/components/cities/CityPage';
import { cityStories } from '@/lib/cities-content';
import Footer from '@/components/Footer';
const story=cityStories.find(x=>x.slug==="nimes")!;
export const metadata:Metadata={...{"title": "Agence IA à Nîmes : automatisation PME", "description": "Conseil, formations IA et agents sur mesure pour les entreprises à Nîmes. Althoce vous accompagne du diagnostic au suivi.", "alternates": {"canonical": "https://althoce.com/agence-ia-nimes/"}, "openGraph": {"title": "Agence IA à Nîmes : automatisation PME", "description": "Conseil, formations IA et agents sur mesure pour les entreprises à Nîmes. Althoce vous accompagne du diagnostic au suivi.", "url": "https://althoce.com/agence-ia-nimes/", "type": "website", "locale": "fr_FR", "images": ["/og-default.png"]}, "twitter": {"card": "summary_large_image", "title": "Agence IA à Nîmes : automatisation PME", "description": "Conseil, formations IA et agents sur mesure pour les entreprises à Nîmes. Althoce vous accompagne du diagnostic au suivi."}},keywords:[
    'agence IA Nîmes',
    'agence IA Gard',
    'consultant IA Nîmes',
    'automatisation Nîmes',
    'IA PME Nîmes',
    'agent IA Nîmes',
    'formation IA Nîmes',
    'IA Costières de Nîmes',
    'IA tourisme romain',
    'IA agroalimentaire Gard',
  ]};
export default function Page(){return <><CitySchema story={story}/><CityPage story={story}/><Footer showCta={false}/></>}

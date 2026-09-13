import type { Metadata } from 'next';
import CityPage, { NationalPage, CitySchema } from '@/components/cities/CityPage';
import { cityStories } from '@/lib/cities-content';
import Footer from '@/components/Footer';
const story=cityStories.find(x=>x.slug==="strasbourg")!;
export const metadata:Metadata={...{"title": "Agence IA à Strasbourg : automatisation PME", "description": "Conseil, formations IA et agents sur mesure pour les entreprises à Strasbourg. Althoce vous accompagne du diagnostic au suivi.", "alternates": {"canonical": "https://althoce.com/agence-ia-strasbourg/"}, "openGraph": {"title": "Agence IA à Strasbourg : automatisation PME", "description": "Conseil, formations IA et agents sur mesure pour les entreprises à Strasbourg. Althoce vous accompagne du diagnostic au suivi.", "url": "https://althoce.com/agence-ia-strasbourg/", "type": "website", "locale": "fr_FR", "images": ["/og-default.png"]}, "twitter": {"card": "summary_large_image", "title": "Agence IA à Strasbourg : automatisation PME", "description": "Conseil, formations IA et agents sur mesure pour les entreprises à Strasbourg. Althoce vous accompagne du diagnostic au suivi."}},keywords:[
    'agence IA Strasbourg',
    'agence IA Grand Est',
    'consultant IA Strasbourg',
    'automatisation Strasbourg',
    'IA PME Strasbourg',
    'agent IA Strasbourg',
    'formation IA Strasbourg',
    'IA pharma Alsace',
    'IA transfrontalier Strasbourg',
  ]};
export default function Page(){return <><CitySchema story={story}/><CityPage story={story}/><Footer showCta={false}/></>}

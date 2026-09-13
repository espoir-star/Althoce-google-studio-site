import type { Metadata } from 'next';
import CityPage, { NationalPage, CitySchema } from '@/components/cities/CityPage';
import { cityStories } from '@/lib/cities-content';
import Footer from '@/components/Footer';
const story=cityStories.find(x=>x.slug==="le-havre")!;
export const metadata:Metadata={...{"title": "Agence IA au Havre : automatisation PME", "description": "Conseil, formations IA et agents sur mesure pour les entreprises au Havre. Althoce vous accompagne du diagnostic au suivi.", "alternates": {"canonical": "https://althoce.com/agence-ia-le-havre/"}, "openGraph": {"title": "Agence IA au Havre : automatisation PME", "description": "Conseil, formations IA et agents sur mesure pour les entreprises au Havre. Althoce vous accompagne du diagnostic au suivi.", "url": "https://althoce.com/agence-ia-le-havre/", "type": "website", "locale": "fr_FR", "images": ["/og-default.png"]}, "twitter": {"card": "summary_large_image", "title": "Agence IA au Havre : automatisation PME", "description": "Conseil, formations IA et agents sur mesure pour les entreprises au Havre. Althoce vous accompagne du diagnostic au suivi."}},keywords:[
    'agence IA Le Havre',
    'agence IA Normandie',
    'consultant IA Le Havre',
    'automatisation Le Havre',
    'IA PME Le Havre',
    'agent IA Le Havre',
    'formation IA Le Havre',
    'IA logistique portuaire',
    'IA transitaire maritime',
    'IA HAROPA',
  ]};
export default function Page(){return <><CitySchema story={story}/><CityPage story={story}/><Footer showCta={false}/></>}

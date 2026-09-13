import type { Metadata } from 'next';
import CityPage, { NationalPage, CitySchema } from '@/components/cities/CityPage';
import { cityStories } from '@/lib/cities-content';
import Footer from '@/components/Footer';
const story=cityStories.find(x=>x.slug==="lille")!;
export const metadata:Metadata={...{"title": "Agence IA à Lille : automatisation PME", "description": "Conseil, formations IA et agents sur mesure pour les entreprises à Lille. Althoce vous accompagne du diagnostic au suivi.", "alternates": {"canonical": "https://althoce.com/agence-ia-lille/"}, "openGraph": {"title": "Agence IA à Lille : automatisation PME", "description": "Conseil, formations IA et agents sur mesure pour les entreprises à Lille. Althoce vous accompagne du diagnostic au suivi.", "url": "https://althoce.com/agence-ia-lille/", "type": "website", "locale": "fr_FR", "images": ["/og-default.png"]}, "twitter": {"card": "summary_large_image", "title": "Agence IA à Lille : automatisation PME", "description": "Conseil, formations IA et agents sur mesure pour les entreprises à Lille. Althoce vous accompagne du diagnostic au suivi."}},keywords:[
    'agence IA Lille',
    'agence IA Hauts-de-France',
    'consultant IA Lille',
    'automatisation Lille',
    'IA PME Lille',
    'agent IA Lille',
    'formation IA Lille',
    'IA e-commerce Nord',
    'IA retail Lille',
  ]};
export default function Page(){return <><CitySchema story={story}/><CityPage story={story}/><Footer showCta={false}/></>}

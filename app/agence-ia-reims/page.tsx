import type { Metadata } from 'next';
import CityPage, { NationalPage, CitySchema } from '@/components/cities/CityPage';
import { cityStories } from '@/lib/cities-content';
import Footer from '@/components/Footer';
const story=cityStories.find(x=>x.slug==="reims")!;
export const metadata:Metadata={...{"title": "Agence IA à Reims : automatisation PME", "description": "Conseil, formations IA et agents sur mesure pour les entreprises à Reims. Althoce vous accompagne du diagnostic au suivi.", "alternates": {"canonical": "https://althoce.com/agence-ia-reims/"}, "openGraph": {"title": "Agence IA à Reims : automatisation PME", "description": "Conseil, formations IA et agents sur mesure pour les entreprises à Reims. Althoce vous accompagne du diagnostic au suivi.", "url": "https://althoce.com/agence-ia-reims/", "type": "website", "locale": "fr_FR", "images": ["/og-default.png"]}, "twitter": {"card": "summary_large_image", "title": "Agence IA à Reims : automatisation PME", "description": "Conseil, formations IA et agents sur mesure pour les entreprises à Reims. Althoce vous accompagne du diagnostic au suivi."}},keywords:[
    'agence IA Reims',
    'agence IA Champagne-Ardenne',
    'consultant IA Reims',
    'automatisation Reims',
    'IA PME Reims',
    'agent IA Reims',
    'formation IA Reims',
    'IA champagne',
    'IA agroalimentaire Reims',
  ]};
export default function Page(){return <><CitySchema story={story}/><CityPage story={story}/><Footer showCta={false}/></>}

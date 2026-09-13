import type { Metadata } from 'next';
import CityPage, { NationalPage, CitySchema } from '@/components/cities/CityPage';
import { cityStories } from '@/lib/cities-content';
import Footer from '@/components/Footer';
const story=cityStories.find(x=>x.slug==="rennes")!;
export const metadata:Metadata={...{"title": "Agence IA à Rennes : automatisation PME", "description": "Conseil, formations IA et agents sur mesure pour les entreprises à Rennes. Althoce vous accompagne du diagnostic au suivi.", "alternates": {"canonical": "https://althoce.com/agence-ia-rennes/"}, "openGraph": {"title": "Agence IA à Rennes : automatisation PME", "description": "Conseil, formations IA et agents sur mesure pour les entreprises à Rennes. Althoce vous accompagne du diagnostic au suivi.", "url": "https://althoce.com/agence-ia-rennes/", "type": "website", "locale": "fr_FR", "images": ["/og-default.png"]}, "twitter": {"card": "summary_large_image", "title": "Agence IA à Rennes : automatisation PME", "description": "Conseil, formations IA et agents sur mesure pour les entreprises à Rennes. Althoce vous accompagne du diagnostic au suivi."}},keywords:[
    'agence IA Rennes',
    'agence IA Bretagne',
    'consultant IA Rennes',
    'automatisation Rennes',
    'IA PME Rennes',
    'agent IA Rennes',
    'formation IA Rennes',
    'IA agroalimentaire Bretagne',
    'IA FrenchTech Rennes',
  ]};
export default function Page(){return <><CitySchema story={story}/><CityPage story={story}/><Footer showCta={false}/></>}

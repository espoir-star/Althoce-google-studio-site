import type { Metadata } from 'next';
import CityPage, { NationalPage, CitySchema } from '@/components/cities/CityPage';
import { cityStories } from '@/lib/cities-content';
import Footer from '@/components/Footer';
const story=cityStories.find(x=>x.slug==="nantes")!;
export const metadata:Metadata={...{"title": "Agence IA à Nantes : automatisation PME", "description": "Conseil, formations IA et agents sur mesure pour les entreprises à Nantes. Althoce vous accompagne du diagnostic au suivi.", "alternates": {"canonical": "https://althoce.com/agence-ia-nantes/"}, "openGraph": {"title": "Agence IA à Nantes : automatisation PME", "description": "Conseil, formations IA et agents sur mesure pour les entreprises à Nantes. Althoce vous accompagne du diagnostic au suivi.", "url": "https://althoce.com/agence-ia-nantes/", "type": "website", "locale": "fr_FR", "images": ["/og-default.png"]}, "twitter": {"card": "summary_large_image", "title": "Agence IA à Nantes : automatisation PME", "description": "Conseil, formations IA et agents sur mesure pour les entreprises à Nantes. Althoce vous accompagne du diagnostic au suivi."}},keywords:[
    'agence IA Nantes',
    'agence IA Pays de la Loire',
    'consultant IA Nantes',
    'automatisation Nantes',
    'IA PME Nantes',
    'agent IA Nantes',
    'formation IA Nantes',
    'IA numérique Nantes',
    'IA biotech Nantes',
  ]};
export default function Page(){return <><CitySchema story={story}/><CityPage story={story}/><Footer showCta={false}/></>}

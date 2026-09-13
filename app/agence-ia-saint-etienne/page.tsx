import type { Metadata } from 'next';
import CityPage, { NationalPage, CitySchema } from '@/components/cities/CityPage';
import { cityStories } from '@/lib/cities-content';
import Footer from '@/components/Footer';
const story=cityStories.find(x=>x.slug==="saint-etienne")!;
export const metadata:Metadata={...{"title": "Agence IA à Saint-Étienne : automatisation PME", "description": "Conseil, formations IA et agents sur mesure pour les entreprises à Saint-Étienne. Althoce vous accompagne du diagnostic au suivi.", "alternates": {"canonical": "https://althoce.com/agence-ia-saint-etienne/"}, "openGraph": {"title": "Agence IA à Saint-Étienne : automatisation PME", "description": "Conseil, formations IA et agents sur mesure pour les entreprises à Saint-Étienne. Althoce vous accompagne du diagnostic au suivi.", "url": "https://althoce.com/agence-ia-saint-etienne/", "type": "website", "locale": "fr_FR", "images": ["/og-default.png"]}, "twitter": {"card": "summary_large_image", "title": "Agence IA à Saint-Étienne : automatisation PME", "description": "Conseil, formations IA et agents sur mesure pour les entreprises à Saint-Étienne. Althoce vous accompagne du diagnostic au suivi."}},keywords:[
    'agence IA Saint-Étienne',
    'agence IA Loire',
    'consultant IA Saint-Étienne',
    'automatisation Saint-Étienne',
    'IA PME Saint-Étienne',
    'agent IA Saint-Étienne',
    'formation IA Saint-Étienne',
    'IA design Saint-Étienne',
    'IA sous-traitance mécanique',
    'IA French Tech Saint-Étienne',
  ]};
export default function Page(){return <><CitySchema story={story}/><CityPage story={story}/><Footer showCta={false}/></>}

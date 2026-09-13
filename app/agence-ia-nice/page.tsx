import type { Metadata } from 'next';
import CityPage, { NationalPage, CitySchema } from '@/components/cities/CityPage';
import { cityStories } from '@/lib/cities-content';
import Footer from '@/components/Footer';
const story=cityStories.find(x=>x.slug==="nice")!;
export const metadata:Metadata={...{"title": "Agence IA à Nice : automatisation PME", "description": "Conseil, formations IA et agents sur mesure pour les entreprises à Nice. Althoce vous accompagne du diagnostic au suivi.", "alternates": {"canonical": "https://althoce.com/agence-ia-nice/"}, "openGraph": {"title": "Agence IA à Nice : automatisation PME", "description": "Conseil, formations IA et agents sur mesure pour les entreprises à Nice. Althoce vous accompagne du diagnostic au suivi.", "url": "https://althoce.com/agence-ia-nice/", "type": "website", "locale": "fr_FR", "images": ["/og-default.png"]}, "twitter": {"card": "summary_large_image", "title": "Agence IA à Nice : automatisation PME", "description": "Conseil, formations IA et agents sur mesure pour les entreprises à Nice. Althoce vous accompagne du diagnostic au suivi."}},keywords:[
    'agence IA Nice',
    "agence IA Côte d'Azur",
    'consultant IA Nice',
    'automatisation Nice',
    'IA PME Nice',
    'agent IA Nice',
    'formation IA Nice',
    'IA hôtellerie luxe',
    'IA Sophia Antipolis',
  ]};
export default function Page(){return <><CitySchema story={story}/><CityPage story={story}/><Footer showCta={false}/></>}

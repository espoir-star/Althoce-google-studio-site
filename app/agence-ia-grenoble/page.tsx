import type { Metadata } from 'next';
import CityPage, { NationalPage, CitySchema } from '@/components/cities/CityPage';
import { cityStories } from '@/lib/cities-content';
import Footer from '@/components/Footer';
const story=cityStories.find(x=>x.slug==="grenoble")!;
export const metadata:Metadata={...{"title": "Agence IA à Grenoble : automatisation PME", "description": "Conseil, formations IA et agents sur mesure pour les entreprises à Grenoble. Althoce vous accompagne du diagnostic au suivi.", "alternates": {"canonical": "https://althoce.com/agence-ia-grenoble/"}, "openGraph": {"title": "Agence IA à Grenoble : automatisation PME", "description": "Conseil, formations IA et agents sur mesure pour les entreprises à Grenoble. Althoce vous accompagne du diagnostic au suivi.", "url": "https://althoce.com/agence-ia-grenoble/", "type": "website", "locale": "fr_FR", "images": ["/og-default.png"]}, "twitter": {"card": "summary_large_image", "title": "Agence IA à Grenoble : automatisation PME", "description": "Conseil, formations IA et agents sur mesure pour les entreprises à Grenoble. Althoce vous accompagne du diagnostic au suivi."}},keywords:[
    'agence IA Grenoble',
    'agence IA Isère',
    'consultant IA Grenoble',
    'automatisation Grenoble',
    'IA PME Grenoble',
    'agent IA Grenoble',
    'formation IA Grenoble',
    'IA micro-électronique',
    'IA Inovallée',
    'IA deep tech Grenoble',
  ]};
export default function Page(){return <><CitySchema story={story}/><CityPage story={story}/><Footer showCta={false}/></>}

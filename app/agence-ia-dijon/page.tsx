import type { Metadata } from 'next';
import CityPage, { NationalPage, CitySchema } from '@/components/cities/CityPage';
import { cityStories } from '@/lib/cities-content';
import Footer from '@/components/Footer';
const story=cityStories.find(x=>x.slug==="dijon")!;
export const metadata:Metadata={...{"title": "Agence IA à Dijon : automatisation PME", "description": "Conseil, formations IA et agents sur mesure pour les entreprises à Dijon. Althoce vous accompagne du diagnostic au suivi.", "alternates": {"canonical": "https://althoce.com/agence-ia-dijon/"}, "openGraph": {"title": "Agence IA à Dijon : automatisation PME", "description": "Conseil, formations IA et agents sur mesure pour les entreprises à Dijon. Althoce vous accompagne du diagnostic au suivi.", "url": "https://althoce.com/agence-ia-dijon/", "type": "website", "locale": "fr_FR", "images": ["/og-default.png"]}, "twitter": {"card": "summary_large_image", "title": "Agence IA à Dijon : automatisation PME", "description": "Conseil, formations IA et agents sur mesure pour les entreprises à Dijon. Althoce vous accompagne du diagnostic au suivi."}},keywords:[
    'agence IA Dijon',
    'agence IA Bourgogne-Franche-Comté',
    'consultant IA Dijon',
    'automatisation Dijon',
    'IA PME Dijon',
    'agent IA Dijon',
    'formation IA Dijon',
    'IA agroalimentaire Bourgogne',
    'IA vins de Bourgogne',
    'IA pharma Dijon',
  ]};
export default function Page(){return <><CitySchema story={story}/><CityPage story={story}/><Footer showCta={false}/></>}

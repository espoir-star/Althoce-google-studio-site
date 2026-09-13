import type { Metadata } from 'next';
import CityPage, { NationalPage, CitySchema } from '@/components/cities/CityPage';
import { cityStories } from '@/lib/cities-content';
import Footer from '@/components/Footer';
const story=cityStories.find(x=>x.slug==="angers")!;
export const metadata:Metadata={...{"title": "Agence IA à Angers : automatisation PME", "description": "Conseil, formations IA et agents sur mesure pour les entreprises à Angers. Althoce vous accompagne du diagnostic au suivi.", "alternates": {"canonical": "https://althoce.com/agence-ia-angers/"}, "openGraph": {"title": "Agence IA à Angers : automatisation PME", "description": "Conseil, formations IA et agents sur mesure pour les entreprises à Angers. Althoce vous accompagne du diagnostic au suivi.", "url": "https://althoce.com/agence-ia-angers/", "type": "website", "locale": "fr_FR", "images": ["/og-default.png"]}, "twitter": {"card": "summary_large_image", "title": "Agence IA à Angers : automatisation PME", "description": "Conseil, formations IA et agents sur mesure pour les entreprises à Angers. Althoce vous accompagne du diagnostic au suivi."}},keywords:[
    'agence IA Angers',
    'agence IA Maine-et-Loire',
    'consultant IA Angers',
    'automatisation Angers',
    'IA PME Angers',
    'agent IA Angers',
    'formation IA Angers',
    'IA Végépolys',
    'IA FrenchTech Angers',
    'IA agroalimentaire Loire',
  ]};
export default function Page(){return <><CitySchema story={story}/><CityPage story={story}/><Footer showCta={false}/></>}

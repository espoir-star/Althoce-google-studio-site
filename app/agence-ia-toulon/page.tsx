import type { Metadata } from 'next';
import CityPage, { NationalPage, CitySchema } from '@/components/cities/CityPage';
import { cityStories } from '@/lib/cities-content';
import Footer from '@/components/Footer';
const story=cityStories.find(x=>x.slug==="toulon")!;
export const metadata:Metadata={...{"title": "Agence IA à Toulon : automatisation PME", "description": "Conseil, formations IA et agents sur mesure pour les entreprises à Toulon. Althoce vous accompagne du diagnostic au suivi.", "alternates": {"canonical": "https://althoce.com/agence-ia-toulon/"}, "openGraph": {"title": "Agence IA à Toulon : automatisation PME", "description": "Conseil, formations IA et agents sur mesure pour les entreprises à Toulon. Althoce vous accompagne du diagnostic au suivi.", "url": "https://althoce.com/agence-ia-toulon/", "type": "website", "locale": "fr_FR", "images": ["/og-default.png"]}, "twitter": {"card": "summary_large_image", "title": "Agence IA à Toulon : automatisation PME", "description": "Conseil, formations IA et agents sur mesure pour les entreprises à Toulon. Althoce vous accompagne du diagnostic au suivi."}},keywords:[
    'agence IA Toulon',
    'agence IA Var',
    'consultant IA Toulon',
    'automatisation Toulon',
    'IA PME Toulon',
    'agent IA Toulon',
    'formation IA Toulon',
    'IA défense Toulon',
    'IA Marine Nationale',
    'IA Pôle Mer Méditerranée',
  ]};
export default function Page(){return <><CitySchema story={story}/><CityPage story={story}/><Footer showCta={false}/></>}

import type { Metadata } from 'next';
import CityPage, { NationalPage, CitySchema } from '@/components/cities/CityPage';
import { cityStories } from '@/lib/cities-content';
import Footer from '@/components/Footer';
const story=cityStories.find(x=>x.slug==="toulouse")!;
export const metadata:Metadata={...{"title": "Agence IA à Toulouse : automatisation PME", "description": "Conseil, formations IA et agents sur mesure pour les entreprises à Toulouse. Althoce vous accompagne du diagnostic au suivi.", "alternates": {"canonical": "https://althoce.com/agence-ia-toulouse/"}, "openGraph": {"title": "Agence IA à Toulouse : automatisation PME", "description": "Conseil, formations IA et agents sur mesure pour les entreprises à Toulouse. Althoce vous accompagne du diagnostic au suivi.", "url": "https://althoce.com/agence-ia-toulouse/", "type": "website", "locale": "fr_FR", "images": ["/og-default.png"]}, "twitter": {"card": "summary_large_image", "title": "Agence IA à Toulouse : automatisation PME", "description": "Conseil, formations IA et agents sur mesure pour les entreprises à Toulouse. Althoce vous accompagne du diagnostic au suivi."}},keywords:[
    'agence IA Toulouse',
    'agence IA Occitanie',
    'consultant IA Toulouse',
    'automatisation Toulouse',
    'IA PME Toulouse',
    'agent IA aéronautique',
    'formation IA Toulouse',
    'IA sous-traitance Airbus',
    'IA SaaS Labège',
  ]};
export default function Page(){return <><CitySchema story={story}/><CityPage story={story}/><Footer showCta={false}/></>}

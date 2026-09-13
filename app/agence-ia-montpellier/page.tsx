import type { Metadata } from 'next';
import CityPage, { NationalPage, CitySchema } from '@/components/cities/CityPage';
import { cityStories } from '@/lib/cities-content';
import Footer from '@/components/Footer';
const story=cityStories.find(x=>x.slug==="montpellier")!;
export const metadata:Metadata={...{"title": "Agence IA à Montpellier : automatisation PME", "description": "Conseil, formations IA et agents sur mesure pour les entreprises à Montpellier. Althoce vous accompagne du diagnostic au suivi.", "alternates": {"canonical": "https://althoce.com/agence-ia-montpellier/"}, "openGraph": {"title": "Agence IA à Montpellier : automatisation PME", "description": "Conseil, formations IA et agents sur mesure pour les entreprises à Montpellier. Althoce vous accompagne du diagnostic au suivi.", "url": "https://althoce.com/agence-ia-montpellier/", "type": "website", "locale": "fr_FR", "images": ["/og-default.png"]}, "twitter": {"card": "summary_large_image", "title": "Agence IA à Montpellier : automatisation PME", "description": "Conseil, formations IA et agents sur mesure pour les entreprises à Montpellier. Althoce vous accompagne du diagnostic au suivi."}},keywords:[
    'agence IA Montpellier',
    'agence IA Occitanie',
    'consultant IA Montpellier',
    'automatisation Montpellier',
    'IA PME Montpellier',
    'agent IA Montpellier',
    'formation IA Montpellier',
    'IA santé Montpellier',
    'IA biotech Languedoc',
    'IA FrenchTech Méditerranée',
  ]};
export default function Page(){return <><CitySchema story={story}/><CityPage story={story}/><Footer showCta={false}/></>}

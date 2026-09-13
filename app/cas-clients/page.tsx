import type { Metadata } from 'next';
import CasePage, { CasesHub, CaseSchema } from '@/components/cases/CasePage';
import { caseStories } from '@/lib/cases-content';
import Footer from '@/components/Footer';
const story = caseStories.find(x=>x.slug==="")!;
export const metadata: Metadata = {"title": "Cas clients : ce que nos agents IA ont changé concrètement chez des PME et ETI françaises", "description": "Explorez les cas clients Althoce : contexte métier, agents IA sur mesure, automatisation et accompagnement des équipes.", "alternates": {"canonical": "https://althoce.com/cas-clients/"}, "openGraph": {"title": "Cas clients : ce que nos agents IA ont changé concrètement chez des PME et ETI françaises", "description": "Explorez les cas clients Althoce : contexte métier, agents IA sur mesure, automatisation et accompagnement des équipes.", "type": "website", "url": "https://althoce.com/cas-clients/", "images": ["/og-default.png"]}, "twitter": {"card": "summary_large_image", "title": "Cas clients : ce que nos agents IA ont changé concrètement chez des PME et ETI françaises", "description": "Explorez les cas clients Althoce : contexte métier, agents IA sur mesure, automatisation et accompagnement des équipes."}};
export default function Page(){return <><CaseSchema/><CasesHub/><Footer showCta={false}/></>}

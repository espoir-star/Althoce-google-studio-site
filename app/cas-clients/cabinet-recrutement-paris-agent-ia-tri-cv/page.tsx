import type { Metadata } from 'next';
import CasePage, { CasesHub, CaseSchema } from '@/components/cases/CasePage';
import { caseStories } from '@/lib/cases-content';
import Footer from '@/components/Footer';
const story = caseStories.find(x=>x.slug==="cabinet-recrutement-paris-agent-ia-tri-cv")!;
export const metadata: Metadata = {"title": "Cabinet recrutement : tri CV par IA", "description": "Découvrez le contexte, les usages IA sur mesure et l’accompagnement des équipes dans ce dossier Althoce.", "alternates": {"canonical": "https://althoce.com/cas-clients/cabinet-recrutement-paris-agent-ia-tri-cv/"}, "openGraph": {"title": "Cabinet recrutement : tri CV par IA", "description": "Découvrez le contexte, les usages IA sur mesure et l’accompagnement des équipes dans ce dossier Althoce.", "type": "article", "url": "https://althoce.com/cas-clients/cabinet-recrutement-paris-agent-ia-tri-cv/", "images": ["/og-default.png"]}, "twitter": {"card": "summary_large_image", "title": "Cabinet recrutement : tri CV par IA", "description": "Découvrez le contexte, les usages IA sur mesure et l’accompagnement des équipes dans ce dossier Althoce."}};
export default function Page(){return <><CaseSchema story={story}/><CasePage story={story}/><Footer showCta={false}/></>}

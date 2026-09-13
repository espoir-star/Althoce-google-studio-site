import type { Metadata } from 'next';
import CasePage, { CasesHub, CaseSchema } from '@/components/cases/CasePage';
import { caseStories } from '@/lib/cases-content';
import Footer from '@/components/Footer';
const story = caseStories.find(x=>x.slug==="saas-b2b-agent-ia-marketing")!;
export const metadata: Metadata = {"title": "SaaS B2B : agent IA marketing", "description": "Découvrez le contexte, les usages IA sur mesure et l’accompagnement des équipes dans ce dossier Althoce.", "alternates": {"canonical": "https://althoce.com/cas-clients/saas-b2b-agent-ia-marketing/"}, "openGraph": {"title": "SaaS B2B : agent IA marketing", "description": "Découvrez le contexte, les usages IA sur mesure et l’accompagnement des équipes dans ce dossier Althoce.", "type": "article", "url": "https://althoce.com/cas-clients/saas-b2b-agent-ia-marketing/", "images": ["/og-default.png"]}, "twitter": {"card": "summary_large_image", "title": "SaaS B2B : agent IA marketing", "description": "Découvrez le contexte, les usages IA sur mesure et l’accompagnement des équipes dans ce dossier Althoce."}};
export default function Page(){return <><CaseSchema story={story}/><CasePage story={story}/><Footer showCta={false}/></>}

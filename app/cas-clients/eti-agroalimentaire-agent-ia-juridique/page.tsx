import type { Metadata } from 'next';
import CasePage, { CasesHub, CaseSchema } from '@/components/cases/CasePage';
import { caseStories } from '@/lib/cases-content';
import Footer from '@/components/Footer';
const story = caseStories.find(x=>x.slug==="eti-agroalimentaire-agent-ia-juridique")!;
export const metadata: Metadata = {"title": "ETI agroalimentaire : agent IA juridique", "description": "Découvrez le contexte, les usages IA sur mesure et l’accompagnement des équipes dans ce dossier Althoce.", "alternates": {"canonical": "https://althoce.com/cas-clients/eti-agroalimentaire-agent-ia-juridique/"}, "openGraph": {"title": "ETI agroalimentaire : agent IA juridique", "description": "Découvrez le contexte, les usages IA sur mesure et l’accompagnement des équipes dans ce dossier Althoce.", "type": "article", "url": "https://althoce.com/cas-clients/eti-agroalimentaire-agent-ia-juridique/", "images": ["/og-default.png"]}, "twitter": {"card": "summary_large_image", "title": "ETI agroalimentaire : agent IA juridique", "description": "Découvrez le contexte, les usages IA sur mesure et l’accompagnement des équipes dans ce dossier Althoce."}};
export default function Page(){return <><CaseSchema story={story}/><CasePage story={story}/><Footer showCta={false}/></>}

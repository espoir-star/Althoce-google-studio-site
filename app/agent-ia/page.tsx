import type { Metadata } from 'next';
import AgentIAHubPageClient from '@/components/AgentIAHubPageClient';
import MetierSchema from '@/components/metiers/MetierSchema';
import Footer from '@/components/Footer';
const description='Agents IA et automatisations sur mesure : explorez les usages en marketing, commercial, RH, finance, juridique, achats, support et opérations.';
export const metadata:Metadata={title:'Agents IA sur-mesure par métier — Commercial, Finance, RH, Juridique, Achats',description,keywords:['agents IA métier', 'agent IA entreprise', 'agent IA commercial', 'agent IA finance', 'agent IA RH', 'agent IA juridique', 'agent IA achats', 'automatisation agentique', 'employé IA PME'],alternates:{canonical:'https://althoce.com/agent-ia/'},openGraph:{title:'Agents IA sur mesure par métier | Althoce',description,url:'https://althoce.com/agent-ia/',type:'website',locale:'fr_FR',images:[{url:'/images/services/metiers-collaboration.webp',alt:'Équipe au travail dans un bureau'}]},twitter:{card:'summary_large_image',title:'Agents IA sur mesure par métier | Althoce',description}};
export default function Page(){return <><MetierSchema/><AgentIAHubPageClient/><Footer showCta={false}/></>}

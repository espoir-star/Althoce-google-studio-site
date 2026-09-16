import type { Metadata } from 'next';
import FinancePage from '@/components/sectors/FinancePage';
import Footer from '@/components/Footer';
import { financeFaq } from '@/lib/resources';
const title='IA Finance : conseil, formation et automatisation sur mesure';
const description='Althoce accompagne les cabinets comptables et les directions financières : formation IA, agents sur mesure et guides pratiques pour vos équipes.';
const url='https://althoce.com/secteurs/finance/';
export const metadata:Metadata={title,description,alternates:{canonical:url},openGraph:{title,description,url,type:'website',images:[{url:'/images/sectors/finance-dossiers.webp',alt:'Travail en équipe sur des dossiers financiers'}]},twitter:{card:'summary_large_image',title,description,images:['/images/sectors/finance-dossiers.webp']}};
export default function Page(){const schema={'@context':'https://schema.org','@graph':[{'@type':'BreadcrumbList',itemListElement:[{'@type':'ListItem',position:1,name:'Accueil',item:'https://althoce.com/'},{'@type':'ListItem',position:2,name:'Secteurs',item:'https://althoce.com/secteurs/'},{'@type':'ListItem',position:3,name:'Finance',item:url}]},{'@type':'FAQPage',mainEntity:financeFaq.map(x=>({'@type':'Question',name:x.q,acceptedAnswer:{'@type':'Answer',text:x.a}}))}]};return <><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(schema).replace(/</g,'\\u003c')}}/><FinancePage/><Footer showCta={false}/></>}

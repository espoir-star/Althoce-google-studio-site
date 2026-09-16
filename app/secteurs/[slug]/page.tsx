import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Footer from '@/components/Footer';
import SectorPage from '@/components/sectors/SectorPage';
import { sectorStories,sectorFaq } from '@/lib/sectors-content';
export const dynamicParams=false;
export function generateStaticParams(){return sectorStories.map(d=>({slug:d.slug}))}
export async function generateMetadata({params}:{params:Promise<{slug:string}>}):Promise<Metadata>{const {slug}=await params;const d=sectorStories.find(x=>x.slug===slug);if(!d)return {};const title=`IA ${d.name} : conseil, formation et usages sur mesure`;return {title,description:d.intro,alternates:{canonical:`https://althoce.com/secteurs/${slug}/`},openGraph:{title,description:d.intro,url:`https://althoce.com/secteurs/${slug}/`,images:[{url:`/images/sectors/${slug}.webp`}]},twitter:{card:'summary_large_image',title,description:d.intro,images:[`/images/sectors/${slug}.webp`]}}}
export default async function Page({params}:{params:Promise<{slug:string}>}){const {slug}=await params;const d=sectorStories.find(x=>x.slug===slug);if(!d)notFound();const url=`https://althoce.com/secteurs/${slug}/`;const graph=[{'@type':'BreadcrumbList',itemListElement:[['Accueil','https://althoce.com/'],['Secteurs','https://althoce.com/secteurs/'],[d.name,url]].map(([name,item],i)=>({'@type':'ListItem',position:i+1,name,item}))},{'@type':'FAQPage',mainEntity:sectorFaq(d).map(x=>({'@type':'Question',name:x.q,acceptedAnswer:{'@type':'Answer',text:x.a}}))}];return <><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify({'@context':'https://schema.org','@graph':graph}).replace(/</g,'\\u003c')}}/><SectorPage story={d}/><Footer showCta={false}/></>}

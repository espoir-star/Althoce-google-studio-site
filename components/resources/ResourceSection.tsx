import { ArrowUpRight } from 'lucide-react';
import { guides, financeGuideSlugs, guideUrl, type Guide } from '@/lib/resources';
import s from './Resources.module.css';
import GuideCarousel from './GuideCarousel';

export function ResourceCard({guide:g}:{guide:Guide}) {
 return <a className={s.card} href={guideUrl(g.slug)} target="_blank" rel="noopener noreferrer">
  <div className={`${s.cover} ${s[g.theme]}`} aria-hidden="true"><span className={s.brand}>althoce.</span><span className={s.coverTitle}>{g.title}</span><div className={s.solutions}>{g.solutions?.map(solution=><span key={solution} className={s.solution}>{solution==='claude'?<><img src="/logos/claude.svg" alt="" width={22} height={22}/><span>Claude</span></> :solution==='pennylane'?<img src="/logos/pennylane.svg" alt="" width={105} height={22}/>:<>{solution==='meta'&&<img src="/logos/meta.svg" alt="" width={24} height={18}/>}<span>{solution==='meta'?'Meta Ads':'Microsoft Copilot'}</span></>}</span>)}</div><span className={s.mark}>{g.mark}</span><span className={s.coverFoot}>LES GUIDES PRATIQUES</span></div>
  <div className={s.copy}><span className={s.audience}>{g.audience}</span><h3>{g.title}</h3><p>{g.description}</p><span className={s.link}>Recevoir le guide gratuit <ArrowUpRight size={18} aria-hidden="true"/><span className={s.srOnly}> — nouvel onglet</span></span></div>
 </a>;
}
export default function ResourceSection({compact=false,slugs,id='finance-guides',description='Pour le cabinet ou la direction financière, commencez par les situations qui vous parlent. Chaque guide vous donne un point de départ.'}:{compact?:boolean;slugs?:string[];id?:string;description?:string}) {
 const selected=slugs?guides.filter(g=>slugs.includes(g.slug)):compact?guides.filter(g=>['12-cas-usage-experts-comptables','12-agents-ia-direction-financiere'].includes(g.slug)):guides.filter(g=>financeGuideSlugs.includes(g.slug));
 if(!selected.length)return null;
 return <section className={s.section} aria-labelledby={`${id}-title`}><div className={s.container}><div className={s.heading}><h2 id={`${id}-title`}>Des idées à lire.<br/>Des usages à essayer.</h2><p>{description}</p></div>{compact||selected.length<4?<div className={`${s.grid} ${s.compact} ${selected.length===1?s.single:""}`}>{selected.map(g=><ResourceCard key={g.slug} guide={g}/>)}</div>:<GuideCarousel count={selected.length} id={`${id}-track`}>{selected.map(g=><ResourceCard key={g.slug} guide={g}/>)}</GuideCarousel>}</div></section>;
}

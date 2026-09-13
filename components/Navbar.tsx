'use client';

import { useEffect, useRef, useState } from 'react';
import { ArrowUpRight, ChevronDown, Compass, Workflow, GraduationCap, ChartNoAxesCombined, BookOpen, Users, Calculator, Building2, MessageCircle, Menu, X } from 'lucide-react';
import { Logo } from '@/components/ui/brand/Logo';
import s from './Navigation.module.css';

const groups = [
  { label:'Services', id:'services', items:[
    {label:'Diagnostic IA',text:'Comprendre vos usages et choisir les priorités.',href:'/services/audit-ia/',icon:Compass},
    {label:'Déploiement & agents IA',text:'Des agents et automatisations sur mesure.',href:'/services/automatisation-ia/',icon:Workflow},
    {label:'Pilotage & maintenance',text:'Suivre, entretenir et faire évoluer vos solutions.',href:'/services/pilotage-ia/',icon:ChartNoAxesCombined},
    {label:'Formation IA',text:'Faire grandir les compétences de vos équipes.',href:'/services/formation-ia/',icon:GraduationCap},
  ]},
  { label:'Ressources', id:'ressources', items:[
    {label:'Blog',text:'Des repères pour comprendre et avancer.',href:'/blog/',icon:BookOpen},
    {label:'Cas clients',text:'Des projets et leurs résultats sur le terrain.',href:'/cas-clients/',icon:Users},
    {label:'Calculateur ROI',text:'Explorer le potentiel de vos usages.',href:'/calculateur-roi/',icon:Calculator},
  ]},
  { label:'À propos', id:'apropos', items:[
    {label:'Le cabinet',text:'Notre approche et notre engagement.',href:'/a-propos/',icon:Building2},
    {label:'Contact',text:'Faisons connaissance autour de votre projet.',href:'/contact/',icon:MessageCircle},
  ]},
];

export default function Navbar(){
  const [open,setOpen]=useState<string|null>(null);
  const [mobile,setMobile]=useState(false);
  const root=useRef<HTMLElement>(null);
  const burger=useRef<HTMLButtonElement>(null);
  useEffect(()=>{
    const close=(e:PointerEvent)=>{if(!root.current?.contains(e.target as Node)){setOpen(null);setMobile(false)}};
    const resize=()=>{if(window.innerWidth>900)setMobile(false)};
    document.addEventListener('pointerdown',close);window.addEventListener('resize',resize);
    return()=>{document.removeEventListener('pointerdown',close);window.removeEventListener('resize',resize)};
  },[]);
  useEffect(()=>{if(!mobile)return;const prev=document.body.style.overflow;document.body.style.overflow='hidden';return()=>{document.body.style.overflow=prev}},[mobile]);
  const close=()=>{setOpen(null);setMobile(false)};
  return <nav ref={root} className={s.nav} aria-label="Navigation principale" onKeyDown={e=>{if(e.key==='Escape'){const trigger=root.current?.querySelector<HTMLButtonElement>(`button[data-group="${open}"]`);close();if(mobile)burger.current?.focus();else trigger?.focus()}}} onBlur={e=>{if(!e.currentTarget.contains(e.relatedTarget as Node)){close()}}}>
    <a className={s.brand} href="/" aria-label="Althoce — accueil"><Logo variant="white" size={34}/><span>althoce<span className={s.brandDot}>.</span></span></a>
    <div className={s.desktop}>
      {groups.map(group=><div key={group.id} className={s.group}>
        <button type="button" data-group={group.id} className={s.trigger} aria-expanded={open===group.id} aria-controls={`nav-${group.id}`} onClick={()=>setOpen(open===group.id?null:group.id)}>{group.label}<ChevronDown size={14} aria-hidden="true"/></button>
        {open===group.id&&<div id={`nav-${group.id}`} className={`${s.dropdown} ${group.id==='services'?s.services:''}`}>
          {group.items.map(item=><a key={item.href} href={item.href} onClick={close} className={s.item}><span className={s.icon}><item.icon size={21} aria-hidden="true"/></span><span><strong>{item.label}</strong><small>{item.text}</small></span><ArrowUpRight className={s.arrow} size={16} aria-hidden="true"/></a>)}
        </div>}
      </div>)}
      <a className={s.cta} href="/contact/">Pré-audit offert<ArrowUpRight size={17} aria-hidden="true"/></a>
    </div>
    <button ref={burger} className={s.burger} type="button" aria-label={mobile?'Fermer le menu':'Ouvrir le menu'} aria-expanded={mobile} aria-controls="nav-mobile" onClick={()=>{setMobile(!mobile);setOpen(null)}}>{mobile?<X size={24}/>:<Menu size={24}/>}</button>
    {mobile&&<div id="nav-mobile" className={s.mobile}>
      <div className={s.mobileScroll}>{groups.map(group=><div key={group.id}>
        <button type="button" className={s.mobileTrigger} aria-expanded={open===group.id} aria-controls={`mobile-${group.id}`} onClick={()=>setOpen(open===group.id?null:group.id)}>{group.label}<ChevronDown size={18} aria-hidden="true"/></button>
        {open===group.id&&<div id={`mobile-${group.id}`}>{group.items.map(item=><a key={item.href} className={s.item} href={item.href} onClick={close}><span className={s.icon}><item.icon size={20} aria-hidden="true"/></span><span><strong>{item.label}</strong><small>{item.text}</small></span></a>)}</div>}
      </div>)}</div>
      <div className={s.mobileBottom}><a className={s.cta} href="/contact/" onClick={close}>Pré-audit offert<ArrowUpRight size={18} aria-hidden="true"/></a><p>30 minutes ensemble. Sans engagement.</p></div>
    </div>}
  </nav>;
}

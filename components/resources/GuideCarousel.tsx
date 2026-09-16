'use client';
import { useEffect, useRef, useState, type ReactNode } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import s from './Resources.module.css';

export default function GuideCarousel({children,count,id='finance-guide-track'}:{children:ReactNode;count:number;id?:string}){
 const track=useRef<HTMLDivElement>(null);
 const [position,setPosition]=useState({start:1,end:Math.min(4,count),left:false,right:count>4});
 useEffect(()=>{
  const el=track.current;if(!el)return;
  const update=()=>{const first=el.firstElementChild as HTMLElement|null;if(!first)return;const gap=parseFloat(getComputedStyle(el).columnGap)||24;const stride=first.offsetWidth+gap;const shown=Math.max(1,Math.round((el.clientWidth+gap)/stride));const start=Math.min(count,Math.round(el.scrollLeft/stride)+1);setPosition({start,end:Math.min(count,start+shown-1),left:el.scrollLeft>2,right:el.scrollLeft+el.clientWidth<el.scrollWidth-2})};
  update();el.addEventListener('scroll',update,{passive:true});const observer=new ResizeObserver(update);observer.observe(el);return()=>{el.removeEventListener('scroll',update);observer.disconnect()};
 },[count]);
 const move=(direction:number)=>{const el=track.current;if(!el)return;const card=el.firstElementChild as HTMLElement|null;if(!card)return;const gap=parseFloat(getComputedStyle(el).columnGap)||24;el.scrollBy({left:direction*(card.offsetWidth+gap),behavior:window.matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth'})};
 return <div className={s.carousel} role="region" aria-roledescription="carrousel" aria-label="Guides pratiques"><div className={s.controls}><p aria-live="polite" aria-atomic="true">{position.start}–{position.end} <span>sur {count} guides</span></p><div><button type="button" aria-label="Guides précédents" aria-controls={id} disabled={!position.left} onClick={()=>move(-1)}><ArrowLeft size={20} aria-hidden="true"/></button><button type="button" aria-label="Guides suivants" aria-controls={id} disabled={!position.right} onClick={()=>move(1)}><ArrowRight size={20} aria-hidden="true"/></button></div></div><div ref={track} id={id} className={s.track}>{children}</div></div>;
}

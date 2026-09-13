'use client';
import { useState, useEffect } from 'react';
import type { ChangeEvent, FormEvent } from 'react';
import { trackFb } from '@/lib/fbpixel';
import s from './CabinetPages.module.css';
const tailleOptions = [
  '1 à 9 personnes',
  '10 à 49 personnes',
  '50 à 199 personnes',
  '200 à 499 personnes',
  '500 à 4 999 personnes',
  '5 000 personnes et plus',
];

const budgetOptions = [
  'Moins de 5 000 € HT',
  '5 000 € à 15 000 € HT',
  '15 000 € à 50 000 € HT',
  '50 000 € à 100 000 € HT',
  'Plus de 100 000 € HT',
  'À évaluer ensemble',
];

export default function ContactForm() {
  const [state,setState] = useState<'idle'|'loading'|'success'|'error'>('idle');
  const [form,setForm] = useState({nom:'',entreprise:'',email:'',telephone:'',taille:'',budget:'',description:''});
  useEffect(()=>{trackFb('Contact');},[]);
  function change(e: ChangeEvent<HTMLInputElement|HTMLSelectElement|HTMLTextAreaElement>) { setForm(prev=>({...prev,[e.target.name]:e.target.value})); }
  async function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if(state==='loading') return;
    setState('loading');
    try {
      const res=await fetch('/api/contact',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(form)});
      setState(res.ok?'success':'error');
      if(res.ok) trackFb('Lead',{content_name:'Formulaire de contact',content_category:form.budget||undefined});
    } catch {setState('error');}
  }
  if(state==='success') return <div className={s.success} role="status"><h2>Votre demande est bien reçue.</h2><p>Nous vous répondons sous 24 heures ouvrées pour convenir d’un créneau de 30 minutes.</p><p>En attendant, découvrez nos <a href="/cas-clients/">cas clients</a> ou nos <a href="/services/formation-ia/">formations IA</a>.</p></div>;
  return <form className={s.form} onSubmit={submit} aria-label="Demande de pré-audit" aria-busy={state==='loading'}>
    <h2>Faisons connaissance.</h2><p>Quelques lignes suffisent. Les champs marqués * sont obligatoires.</p>
    <div className={s.row}>
      <div className={s.field}><label htmlFor="ctc-nom">Nom et prénom *</label><input id="ctc-nom" name="nom" autoComplete="name" required value={form.nom} onChange={change} /></div>
      <div className={s.field}><label htmlFor="ctc-entreprise">Entreprise *</label><input id="ctc-entreprise" name="entreprise" autoComplete="organization" required value={form.entreprise} onChange={change} /></div>
    </div>
    <div className={s.row}>
      <div className={s.field}><label htmlFor="ctc-email">Email professionnel *</label><input id="ctc-email" name="email" type="email" autoComplete="email" required value={form.email} onChange={change} /></div>
      <div className={s.field}><label htmlFor="ctc-telephone">Téléphone</label><input id="ctc-telephone" name="telephone" type="tel" autoComplete="tel" value={form.telephone} onChange={change} /></div>
    </div>
    <div className={s.row}>
      <div className={s.field}><label htmlFor="ctc-taille">Taille de l’équipe</label><select id="ctc-taille" name="taille" value={form.taille} onChange={change}><option value="">Sélectionner…</option>{tailleOptions.map(o=><option key={o}>{o}</option>)}</select></div>
      <div className={s.field}><label htmlFor="ctc-budget">Budget envisagé</label><select id="ctc-budget" name="budget" value={form.budget} onChange={change}><option value="">Sélectionner…</option>{budgetOptions.map(o=><option key={o}>{o}</option>)}</select></div>
    </div>
    <div className={s.field}><label htmlFor="ctc-description">Votre besoin, en quelques mots *</label><textarea id="ctc-description" name="description" required rows={5} value={form.description} onChange={change} placeholder="Former votre équipe à l’IA, gagner du temps, explorer une idée… Qu’aimeriez-vous faire évoluer ?" /></div>
    <button className={s.submit} type="submit" disabled={state==='loading'}>{state==='loading'?'Envoi en cours…':'Demander mon pré-audit offert →'}</button>
    {state==='error'&&<p className={s.error} role="alert">L’envoi n’a pas abouti. Vos informations sont conservées dans ce formulaire. Réessayez ou écrivez à <a href="mailto:espoir@contact.althoce.com">espoir@contact.althoce.com</a>.</p>}
    <p className={s.privacy}>Vos informations servent à répondre à votre demande. Consultez notre <a href="/confidentialite/">politique de confidentialité</a>. Vous pouvez exercer vos droits à espoir@contact.althoce.com.</p>
  </form>;
}

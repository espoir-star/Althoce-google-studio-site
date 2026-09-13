import Image from 'next/image';
import ContactForm from './ContactForm';
import { Breadcrumb, FaqSection } from './brand/Sections';
import { contactFaqs } from '@/lib/cabinet-content';
import conversation from '@/public/images/home/premier-echange-bureau.webp';
import b from './brand/Brand.module.css';
import s from './CabinetPages.module.css';

export default function ContactPageClient() {
  return <main className={b.page}>
    <section className={s.contactHero} aria-labelledby="contact-title"><div className={`${b.container} ${s.contactGrid}`}>
      <div><Breadcrumb label="Contact" /><h1 id="contact-title">Discutons de votre projet.<br /><span>Le premier pas est offert.</span></h1><p className={b.lead}>Formation IA, agents IA, automatisation ou simplement une question : prenons 30 minutes pour comprendre votre quotidien et voir comment avancer.</p><p className={s.contactNote}>Pré-audit offert · Sans engagement · Réponse sous 24 h ouvrées</p><div className={s.contactPhoto}><Image src={conversation} alt="Deux collègues prennent le temps d’échanger dans un bureau lumineux." fill priority sizes="(max-width: 900px) calc(100vw - 40px), 48vw" placeholder="blur" /></div><p className={b.lead}>Vous n’avez pas besoin d’arriver avec un cahier des charges. Une difficulté, une envie de former votre équipe ou une idée à explorer suffisent.</p></div>
      <ContactForm />
    </div></section>
    <FaqSection id="faq-contact" title="Avant notre premier échange." description="Un appel pour faire le point. Le diagnostic complet vient ensuite, si votre situation le justifie." items={contactFaqs} showContactLink={false} />
    <section id="infos-pratiques" className={`${b.section} ${b.soft}`} aria-labelledby="infos-title"><div className={b.container}><h2 id="infos-title">Restons en contact.</h2><div className={s.info}><div><h3>Par email</h3><a href="mailto:espoir@contact.althoce.com">espoir@contact.althoce.com</a><p>Pour un projet, une formation ou une question.</p></div><div><h3>À Bordeaux</h3><p>ALTHOCE CONSEIL<br />5 rue Fénelon<br />33000 Bordeaux, France</p><p>Sur rendez-vous uniquement.</p></div><div><h3>Nos échanges</h3><p>Du lundi au vendredi, de 9 h à 18 h, heure de Paris.</p><p>À distance et sur place selon votre projet.</p></div></div></div></section>
  </main>;
}

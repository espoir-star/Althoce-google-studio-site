import type { Metadata } from 'next';
import { ArrowUpRight } from 'lucide-react';
import Footer from '@/components/Footer';
import b from '@/components/brand/Brand.module.css';
import s from '@/components/brand/Utility.module.css';

export const metadata: Metadata = { title: 'Page introuvable', robots: { index: false, follow: true } };
export default function NotFound() {
  return <><main className={`${b.page} ${s.notFound}`}><div className={b.container}>
    <span className={s.errorCode} aria-hidden="true">404</span>
    <h1>Cette page a pris<br/><span>un autre chemin.</span></h1>
    <p className={b.lead}>Le lien a peut-être changé. Retrouvez nos accompagnements ou revenez à l’accueil pour poursuivre votre visite.</p>
    <div className={s.paths}><a href="/">Revenir à l’accueil<ArrowUpRight size={20}/></a><a href="/services/">Explorer nos services<ArrowUpRight size={20}/></a><a href="/contact/">Parler de votre projet<ArrowUpRight size={20}/></a></div>
  </div></main><Footer showCta={false}/></>;
}

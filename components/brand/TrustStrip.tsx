import { heroLogos } from '@/lib/data';
import s from './TrustStrip.module.css';

export default function TrustStrip({ className = '', inset = false }: { className?: string; inset?: boolean }) {
  return <div className={`${s.strip} ${inset ? s.inset : ''} ${className}`}>
    <p>Ils nous font confiance<span>+150 entreprises accompagnées</span></p>
    <div className={s.logos} aria-label="Références clients">
      {heroLogos.map((src, i) => <img key={src} src={src} alt={`Référence client Althoce ${i + 1}`} width={110} height={36} loading="lazy" decoding="async" />)}
    </div>
  </div>;
}

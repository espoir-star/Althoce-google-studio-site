import Image from 'next/image';
import { heroLogos } from '@/lib/data';
import s from './TrustStrip.module.css';

export default function TrustStrip({ className = '', inset = false }: { className?: string; inset?: boolean }) {
  return <div className={`${s.strip} ${inset ? s.inset : ''} ${className}`}>
    <p>Nos partenaires</p>
    <div className={s.logos} aria-label="Nos partenaires">
      {heroLogos.map(({ src, name }) => <Image key={src} src={src} alt={name} width={110} height={34} sizes="110px" loading="lazy" />)}
    </div>
    <div className={s.tools}>
      <p>Les IA avec lesquelles nous travaillons</p>
      <ul aria-label="Outils IA utilisés dans nos missions">
        {[
          { name: 'Claude', src: '/logos/claude.svg' },
          { name: 'ChatGPT', src: '/logos/chatgpt.svg' },
          { name: 'Mistral', src: '/logos/mistral.svg' },
        ].map(({ name, src }) => <li key={name}><Image src={src} alt="" width={26} height={26} loading="lazy" /><span>{name}</span></li>)}
      </ul>
    </div>
  </div>;
}

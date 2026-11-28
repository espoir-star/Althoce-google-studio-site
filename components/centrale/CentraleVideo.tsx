'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Play } from 'lucide-react';
import { centraleVideo as video } from '@/lib/centrale-content';
import s from './CentraleVideo.module.css';

/**
 * Lecteur en deux temps : l'image d'aperçu vient du site, et le lecteur YouTube (domaine youtube-nocookie.com)
 * ne se charge qu'au clic. Aucune requête vers YouTube tant que le visiteur ne lance pas la vidéo.
 */
export default function CentraleVideo({ priority = false }: { priority?: boolean }) {
  const [playing, setPlaying] = useState(false);
  if (!video.youtubeId) return null;
  return <div className={s.frame}>
    {playing
      ? <iframe
          src={`https://www.youtube-nocookie.com/embed/${video.youtubeId}?autoplay=1&rel=0&playsinline=1`}
          title={video.title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      : <button type="button" className={s.facade} onClick={() => setPlaying(true)} aria-label={`Voir la présentation de La Centrale en vidéo (${video.durationLabel})`}>
          <Image src={video.poster} alt="" fill priority={priority} sizes="(max-width: 900px) 92vw, 620px" />
          <span className={s.cta} aria-hidden="true"><span className={s.play}><Play size={18} fill="currentColor" /></span>Voir la présentation<span className={s.duration}>{video.durationLabel}</span></span>
        </button>}
  </div>;
}

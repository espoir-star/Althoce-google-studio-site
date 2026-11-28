'use client';

import { useEffect, useRef, useState } from 'react';
import { Pause, Play, Volume2, VolumeX } from 'lucide-react';
import { centraleVideo as video } from '@/lib/centrale-content';
import s from './CentraleVideo.module.css';

/**
 * Film de présentation hébergé par le site : lecture automatique sans le son (exigence des navigateurs),
 * en boucle, sans habillage de lecteur. Deux commandes seulement : pause et son. Pas de lecture
 * automatique si le visiteur a demandé à réduire les animations.
 */
export default function CentraleVideo() {
  const ref = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(true);

  // Vrai quand le visiteur a mis la vidéo en pause lui-même : on ne la relance plus automatiquement.
  const userPaused = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.muted = true;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const tryPlay = () => {
      if (!userPaused.current && document.visibilityState === 'visible') el.play().catch(() => {});
    };
    // Lecture quand la vidéo est à l'écran, pause (sans le son) quand elle en sort.
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) tryPlay();
      else if (el.muted) el.pause();
    }, { threshold: 0.25 });
    observer.observe(el);
    document.addEventListener('visibilitychange', tryPlay);
    return () => {
      observer.disconnect();
      document.removeEventListener('visibilitychange', tryPlay);
    };
  }, []);

  const togglePlay = () => {
    const el = ref.current;
    if (!el) return;
    if (el.paused) {
      userPaused.current = false;
      el.play().catch(() => {});
    } else {
      userPaused.current = true;
      el.pause();
    }
  };

  const toggleSound = () => {
    const el = ref.current;
    if (!el) return;
    if (el.muted) {
      userPaused.current = false;
      el.muted = false;
      el.currentTime = 0;
      el.play().catch(() => {});
    } else {
      el.muted = true;
    }
    setMuted(el.muted);
  };

  return <div className={s.frame}>
    <video
      ref={ref}
      className={s.video}
      src={video.src}
      poster={video.poster}
      muted
      loop
      playsInline
      preload="metadata"
      aria-label={`Vidéo de présentation de La Centrale (${video.durationLabel})`}
      onPlay={() => setPlaying(true)}
      onPause={() => setPlaying(false)}
      onClick={togglePlay}
    />
    <div className={s.controls}>
      <button type="button" className={s.round} onClick={togglePlay} aria-label={playing ? 'Mettre la vidéo en pause' : 'Lire la vidéo'}>
        {playing ? <Pause size={16} fill="currentColor" aria-hidden="true" /> : <Play size={16} fill="currentColor" aria-hidden="true" />}
      </button>
      <button type="button" className={s.sound} onClick={toggleSound} aria-pressed={!muted}>
        {muted ? <VolumeX size={16} aria-hidden="true" /> : <Volume2 size={16} aria-hidden="true" />}
        <span>{muted ? 'Activer le son' : 'Couper le son'}</span>
      </button>
    </div>
  </div>;
}

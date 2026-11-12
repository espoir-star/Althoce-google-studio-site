'use client';

import { Children, useCallback, useEffect, useRef, useState, type ReactNode } from 'react';
import { ArrowLeft, ArrowRight, Pause, Play } from 'lucide-react';
import s from './CaseStudyCarousel.module.css';

const READING_TIME = 9000;

/** Cards stay server-rendered. Only their navigation and optional rotation are interactive. */
export default function CaseStudyCarousel({ children, labels }: { children: ReactNode; labels: string[] }) {
  const slides = Children.toArray(children);
  const viewport = useRef<HTMLDivElement>(null);
  const selected = useRef(0);
  const frame = useRef<number | null>(null);
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [visible, setVisible] = useState(false);
  const [pageVisible, setPageVisible] = useState(true);
  const [motionAllowed, setMotionAllowed] = useState(false);
  const playing = motionAllowed && !paused && !hovered && visible && pageVisible;

  const goTo = useCallback((index: number, smooth = true) => {
    const track = viewport.current;
    if (!track) return;
    const target = track.children[index] as HTMLElement | undefined;
    const first = track.firstElementChild as HTMLElement | null;
    if (!target || !first) return;
    track.scrollTo({ left: target.offsetLeft - first.offsetLeft, behavior: smooth && motionAllowed ? 'smooth' : 'instant' });
  }, [motionAllowed]);

  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    const updateMotion = () => setMotionAllowed(!media.matches);
    const updateVisibility = () => setPageVisible(!document.hidden);
    updateMotion();
    updateVisibility();
    media.addEventListener('change', updateMotion);
    document.addEventListener('visibilitychange', updateVisibility);
    return () => {
      media.removeEventListener('change', updateMotion);
      document.removeEventListener('visibilitychange', updateVisibility);
    };
  }, []);

  useEffect(() => {
    const track = viewport.current;
    if (!track) return;
    const observer = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting && entry.intersectionRatio >= 0.4), { threshold: 0.4 });
    const resize = new ResizeObserver(() => goTo(selected.current, false));
    observer.observe(track);
    resize.observe(track);
    return () => {
      observer.disconnect();
      resize.disconnect();
      if (frame.current !== null) cancelAnimationFrame(frame.current);
    };
  }, [goTo]);

  useEffect(() => {
    if (!playing) return;
    const timeout = window.setTimeout(() => goTo((active + 1) % slides.length), READING_TIME);
    return () => window.clearTimeout(timeout);
  }, [active, goTo, playing, slides.length]);

  function navigate(index: number, focusSlide = false) {
    setPaused(true);
    const target = (index + slides.length) % slides.length;
    goTo(target, !focusSlide);
    if (focusSlide) {
      viewport.current?.children[target]?.querySelector<HTMLElement>('a')?.focus({ preventScroll: true });
    }
  }

  function updatePosition() {
    if (frame.current !== null) cancelAnimationFrame(frame.current);
    frame.current = requestAnimationFrame(() => {
      const track = viewport.current;
      if (!track) return;
      const first = track.firstElementChild as HTMLElement;
      let nearest = 0;
      let distance = Infinity;
      Array.from(track.children).forEach((child, index) => {
        const offset = Math.abs((child as HTMLElement).offsetLeft - first.offsetLeft - track.scrollLeft);
        if (offset < distance) { distance = offset; nearest = index; }
      });
      selected.current = nearest;
      setActive(nearest);
      frame.current = null;
    });
  }

  return <div className={s.carousel} role="region" aria-roledescription="carrousel" aria-label="Projets clients Althoce"
    onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}
    onFocusCapture={event => {
      if ((event.target as HTMLElement).closest('[data-rotation]')) return;
      setPaused(true);
      const slide = (event.target as HTMLElement).closest<HTMLElement>('[data-slide]');
      if (slide) goTo(Number(slide.dataset.slide), false);
    }}>
    <div className={s.toolbar}>
      <span className={s.counter} aria-live={playing ? 'off' : 'polite'} aria-atomic="true"><strong>{String(active + 1).padStart(2, '0')}</strong><span aria-hidden="true">/</span><span className={s.srOnly}>sur</span>{String(slides.length).padStart(2, '0')}</span>
      <div className={s.controls}>
        {motionAllowed && <button type="button" data-rotation className={s.rotation} onClick={() => setPaused(value => !value)} aria-label={paused ? 'Reprendre le défilement automatique des cas clients' : 'Mettre en pause le défilement automatique des cas clients'}>
          {paused ? <Play size={15} aria-hidden="true" /> : <Pause size={15} aria-hidden="true" />}{paused ? 'Reprendre' : 'Pause'}
        </button>}
        <button type="button" className={s.arrow} aria-label="Cas client précédent" aria-controls="home-case-slides" onClick={() => navigate(active - 1)}><ArrowLeft size={20} aria-hidden="true" /></button>
        <button type="button" className={s.arrow} aria-label="Cas client suivant" aria-controls="home-case-slides" onClick={() => navigate(active + 1)}><ArrowRight size={20} aria-hidden="true" /></button>
      </div>
    </div>
    <div id="home-case-slides" ref={viewport} className={s.viewport} onScroll={updatePosition}
      onPointerDown={() => setPaused(true)} onWheel={() => setPaused(true)}
      onKeyDown={event => {
        const index = event.key === 'ArrowRight' ? active + 1 : event.key === 'ArrowLeft' ? active - 1 : event.key === 'Home' ? 0 : event.key === 'End' ? slides.length - 1 : null;
        if (index === null) return;
        event.preventDefault();
        navigate(index, true);
      }}>
      {slides.map((slide, index) => <div className={s.slide} key={labels[index]} data-slide={index} role="group" aria-roledescription="diapositive" aria-label={`${index + 1} sur ${slides.length} : ${labels[index]}`}>{slide}</div>)}
    </div>
    <div className={s.pagination} aria-label="Choisir un cas client">{labels.map((label, index) => <button key={label} type="button" aria-label={`Voir le cas ${label}`} aria-current={active === index ? 'true' : undefined} aria-controls="home-case-slides" onClick={() => navigate(index)}><span className={s.marker} /><span className={s.paginationLabel}>{label}</span></button>)}</div>
  </div>;
}

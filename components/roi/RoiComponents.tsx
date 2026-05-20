'use client';

import React, { useState, useEffect, useRef, CSSProperties } from 'react';

// Styles are in globals.css
export const CALC_CSS = ``;

// ── Design tokens — aligned with the global design system ─────────────
export const T = {
  accent:        '#2563eb',
  accentSoft:    '#3b82f6',
  accentGlow:    'rgba(37,99,235,.07)',
  accentGlowStr: 'rgba(37,99,235,.14)',
  accentInk:     '#ffffff',
  bg:            '#fafafa',
  bgCard:        '#ffffff',
  bgCard2:       '#f5f5f5',
  bgSoft:        'rgba(9,9,11,.02)',
  bgSoft2:       'rgba(9,9,11,.035)',
  bgSoft3:       'rgba(9,9,11,.055)',
  border:        '#e4e4e7',
  borderSoft:    'rgba(228,228,231,.7)',
  borderStrong:  'rgba(9,9,11,.15)',
  text:          '#09090b',
  textSoft:      '#52525b',   // matches homepage body text exactly
  textMuted:     '#71717a',
  textFaint:     '#a1a1aa',
  good:          '#22c55e',
  warn:          '#f59e0b',
  rSm:           '10px',
  r:             '14px',
  rLg:           '20px',
  rXl:           '28px',
  shadow:        '0 1px 3px rgba(0,0,0,.06), 0 1px 2px rgba(0,0,0,.04)',
  shadowMd:      '0 4px 16px rgba(0,0,0,.07), 0 1px 4px rgba(0,0,0,.04)',
  shadowLg:      '0 12px 40px rgba(0,0,0,.10), 0 4px 12px rgba(0,0,0,.05)',
  mono:          "'SF Mono','Cascadia Code',ui-monospace,monospace",
  font:          "'Plus Jakarta Sans','Inter',sans-serif",
};

export function useResponsive() {
  const [width, setWidth] = useState(1200);
  useEffect(() => {
    setWidth(window.innerWidth);
    const fn = () => setWidth(window.innerWidth);
    window.addEventListener('resize', fn);
    return () => window.removeEventListener('resize', fn);
  }, []);
  return { isMobile: width < 768, isTablet: width < 1024 };
}

// ── Eyebrow — matches site's section badge style ───────────────────────
export function Eyebrow({ children, style }: { children: React.ReactNode; style?: CSSProperties }) {
  return (
    <div style={{
      display: 'inline-flex', alignItems: 'center', gap: 6,
      padding: '5px 14px', borderRadius: 9999,
      background: 'rgba(37,99,235,.06)', border: '1px solid rgba(37,99,235,.2)',
      fontFamily: T.mono, fontSize: 11, fontWeight: 800,
      color: T.accent, textTransform: 'uppercase', letterSpacing: '.1em',
      ...style,
    }}>
      {children}
    </div>
  );
}

// ── CTA Button — aligned with global .btn-primary ─────────────────────
interface CTAProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  primary?: boolean;
  size?: 'sm' | 'md' | 'lg';
  href?: string;
}
export function CTA({ children, primary = true, size = 'md', style, href, disabled, onClick, ...rest }: CTAProps) {
  const sizes = {
    sm: { padding: '9px 18px', fontSize: 14 },
    md: { padding: '13px 22px', fontSize: 14 },
    lg: { padding: '15px 28px', fontSize: 15 },
  };
  const baseStyle: CSSProperties = {
    ...sizes[size], borderRadius: 9999,
    fontWeight: 700, letterSpacing: '-0.01em', fontFamily: T.font,
    display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 7,
    whiteSpace: 'nowrap' as const,
    transition: 'transform .18s cubic-bezier(.16,1,.3,1), box-shadow .18s cubic-bezier(.16,1,.3,1), background .15s',
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.4 : 1,
    textDecoration: 'none',
    border: 'none',
    ...(primary ? {
      background: T.accent,
      color: T.accentInk,
      boxShadow: '0 1px 2px rgba(0,0,0,.1), 0 4px 14px rgba(37,99,235,.28), inset 0 1px 0 rgba(255,255,255,.12)',
    } : {
      background: 'transparent',
      color: T.text,
      border: `1px solid ${T.border}`,
      boxShadow: T.shadow,
    }),
    ...style,
  };
  const arrow = primary ? (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
      <path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ) : null;

  const handleEnter = (e: React.MouseEvent<HTMLElement>) => {
    if (disabled) return;
    (e.currentTarget as HTMLElement).style.transform = 'translateY(-1px)';
    if (primary) (e.currentTarget as HTMLElement).style.boxShadow = '0 2px 6px rgba(0,0,0,.12), 0 8px 24px rgba(37,99,235,.35), inset 0 1px 0 rgba(255,255,255,.12)';
    else (e.currentTarget as HTMLElement).style.boxShadow = '0 4px 16px rgba(0,0,0,.1)';
  };
  const handleLeave = (e: React.MouseEvent<HTMLElement>) => {
    (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
    if (primary) (e.currentTarget as HTMLElement).style.boxShadow = '0 1px 2px rgba(0,0,0,.1), 0 4px 14px rgba(37,99,235,.28), inset 0 1px 0 rgba(255,255,255,.12)';
    else (e.currentTarget as HTMLElement).style.boxShadow = T.shadow;
  };
  const handleDown = (e: React.MouseEvent<HTMLElement>) => {
    (e.currentTarget as HTMLElement).style.transform = 'translateY(0) scale(0.98)';
  };

  if (href) return (
    <a href={href} style={baseStyle} onMouseEnter={handleEnter} onMouseLeave={handleLeave} onMouseDown={handleDown}>
      {children}{arrow}
    </a>
  );
  return (
    <button disabled={disabled} onClick={onClick} style={baseStyle} {...rest}
      onMouseEnter={handleEnter} onMouseLeave={handleLeave} onMouseDown={handleDown}>
      {children}{arrow}
    </button>
  );
}

// ── Section Card — premium card aligned with site cards ───────────────
export function SectionCard({ n, title, subtitle, children }: {
  n: string; title: string; subtitle?: string; children: React.ReactNode;
}) {
  const { isMobile } = useResponsive();
  return (
    <section style={{
      background: T.bgCard,
      border: `1px solid ${T.border}`,
      borderRadius: T.rLg,
      padding: isMobile ? 20 : 36,
      marginBottom: 16,
      boxShadow: T.shadow,
      transition: 'box-shadow .2s',
    }}>
      <header style={{ display: 'flex', gap: 14, alignItems: 'flex-start', marginBottom: 24 }}>
        <div style={{
          width: 34, height: 34, borderRadius: 10, flexShrink: 0,
          background: T.accent,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontFamily: T.mono, fontSize: 12, fontWeight: 700,
          color: '#fff',
          boxShadow: '0 2px 8px rgba(37,99,235,.35)',
        }}>{n}</div>
        <div style={{ flex: 1, minWidth: 0, paddingTop: 2 }}>
          <h2 style={{ margin: 0, fontSize: isMobile ? 18 : 21, fontWeight: 700, letterSpacing: '-0.025em', color: T.text, lineHeight: 1.2 }}>{title}</h2>
          {subtitle && <p style={{ margin: '6px 0 0', fontSize: isMobile ? 13 : 14, color: T.textSoft, lineHeight: 1.6 }}>{subtitle}</p>}
        </div>
      </header>
      <div>{children}</div>
    </section>
  );
}

// ── Field ─────────────────────────────────────────────────────────────
export function Field({ label, hint, children }: { label: string; hint?: string; children: React.ReactNode }) {
  return (
    <label style={{ display: 'block' }}>
      <div style={{ fontSize: 11, fontWeight: 600, color: T.textMuted, fontFamily: T.mono, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 10 }}>
        {label}
      </div>
      {children}
      {hint && <div style={{ fontSize: 12, color: T.textFaint, marginTop: 7, lineHeight: 1.55 }}>{hint}</div>}
    </label>
  );
}

// ── Text Input ────────────────────────────────────────────────────────
export function TextInput({ value, onChange, placeholder }: { value: string; onChange: (v: string) => void; placeholder?: string }) {
  return (
    <input type="text" value={value} onChange={e => onChange(e.target.value)} placeholder={placeholder}
      style={{
        width: '100%', padding: '11px 14px', borderRadius: T.rSm,
        background: T.bgCard2, border: `1px solid ${T.border}`,
        color: T.text, fontSize: 14, fontFamily: T.font,
        outline: 'none', transition: 'border-color .15s, box-shadow .15s',
        boxSizing: 'border-box',
      }}
      onFocus={e => {
        e.target.style.borderColor = T.accent;
        e.target.style.boxShadow = '0 0 0 3px rgba(37,99,235,.1)';
        e.target.style.background = '#fff';
      }}
      onBlur={e => {
        e.target.style.borderColor = T.border;
        e.target.style.boxShadow = 'none';
        e.target.style.background = T.bgCard2;
      }}
    />
  );
}

// ── Slider track helper ───────────────────────────────────────────────
function SliderTrack({ pct }: { pct: number }) {
  return `linear-gradient(to right,${T.accent} 0%,${T.accent} ${pct}%,${T.bgCard2} ${pct}%,${T.bgCard2} 100%)`;
}

// ── Log Slider ────────────────────────────────────────────────────────
export function LogSlider({ min, max, value, onChange, format }: {
  min: number; max: number; value: number; onChange: (v: number) => void; format: (v: number) => string;
}) {
  const lmin = Math.log(Math.max(1, min));
  const lmax = Math.log(max);
  const pct = Math.max(0, Math.min(100, ((Math.log(Math.max(min, value)) - lmin) / (lmax - lmin)) * 100));
  const handle = (e: React.ChangeEvent<HTMLInputElement>) => {
    const p = parseFloat(e.target.value);
    const v = Math.exp(lmin + (p / 100) * (lmax - lmin));
    let snapped: number;
    if (v < 10)           snapped = Math.round(v);
    else if (v < 100)     snapped = Math.round(v / 5) * 5;
    else if (v < 1000)    snapped = Math.round(v / 10) * 10;
    else if (v < 10_000)  snapped = Math.round(v / 100) * 100;
    else if (v < 100_000) snapped = Math.round(v / 1000) * 1000;
    else if (v < 1_000_000) snapped = Math.round(v / 10000) * 10000;
    else if (v < 10_000_000) snapped = Math.round(v / 100000) * 100000;
    else snapped = Math.round(v / 1_000_000) * 1_000_000;
    onChange(snapped);
  };
  return (
    <div>
      <div style={{ fontSize: 28, fontWeight: 700, letterSpacing: '-0.03em', fontVariantNumeric: 'tabular-nums', marginBottom: 12, color: T.text, lineHeight: 1 }}>
        {format(value)}
      </div>
      <input type="range" min={0} max={100} step={0.1} value={pct} onChange={handle}
        style={{ width: '100%', appearance: 'none', WebkitAppearance: 'none', height: 5, borderRadius: 99, background: SliderTrack({ pct }), outline: 'none', cursor: 'pointer', display: 'block' }} />
      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 8, fontSize: 11, color: T.textFaint, fontFamily: T.mono, fontWeight: 500 }}>
        <span>{format(min)}</span><span>{format(max)}</span>
      </div>
    </div>
  );
}

// ── Lin Slider ────────────────────────────────────────────────────────
export function LinSlider({ min, max, step = 1, value, onChange, format }: {
  min: number; max: number; step?: number; value: number; onChange: (v: number) => void; format: (v: number) => string;
}) {
  const pct = Math.max(0, Math.min(100, ((value - min) / (max - min)) * 100));
  return (
    <div>
      <div style={{ fontSize: 28, fontWeight: 700, letterSpacing: '-0.03em', fontVariantNumeric: 'tabular-nums', marginBottom: 12, color: T.text, lineHeight: 1 }}>
        {format(value)}
      </div>
      <input type="range" min={min} max={max} step={step} value={value} onChange={e => onChange(parseFloat(e.target.value))}
        style={{ width: '100%', appearance: 'none', WebkitAppearance: 'none', height: 5, borderRadius: 99, background: SliderTrack({ pct }), outline: 'none', cursor: 'pointer', display: 'block' }} />
      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 8, fontSize: 11, color: T.textFaint, fontFamily: T.mono, fontWeight: 500 }}>
        <span>{format(min)}</span><span>{format(max)}</span>
      </div>
    </div>
  );
}

// ── Toggle Card ───────────────────────────────────────────────────────
export function ToggleCard({ active, onClick, title, subtitle, right }: {
  active: boolean; onClick: () => void; title: React.ReactNode; subtitle?: string; right?: React.ReactNode;
}) {
  const [hovered, setHovered] = useState(false);
  return (
    <button onClick={onClick} type="button"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: 'flex', alignItems: 'center', gap: 12, width: '100%',
        padding: '13px 15px', borderRadius: T.r,
        background: active ? T.accentGlow : (hovered ? 'rgba(0,0,0,.018)' : T.bgCard2),
        border: `1px solid ${active ? T.accent : (hovered ? 'rgba(9,9,11,.12)' : T.border)}`,
        boxShadow: active ? '0 0 0 3px rgba(37,99,235,.08)' : 'none',
        color: T.text, textAlign: 'left', cursor: 'pointer',
        transition: 'all .16s cubic-bezier(.16,1,.3,1)',
        fontFamily: T.font,
      }}>
      <div style={{
        width: 18, height: 18, borderRadius: 5, flexShrink: 0,
        background: active ? T.accent : 'transparent',
        border: active ? 'none' : `1.5px solid ${T.borderStrong}`,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        transition: 'all .15s',
        boxShadow: active ? '0 1px 4px rgba(37,99,235,.3)' : 'none',
      }}>
        {active && (
          <svg width="11" height="11" viewBox="0 0 24 24" fill="none">
            <path d="M5 12l5 5L20 7" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        )}
      </div>
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ fontSize: 14, fontWeight: 500, letterSpacing: '-0.01em', color: active ? T.text : T.textSoft }}>{title}</div>
        {subtitle && <div style={{ fontSize: 12, color: T.textMuted, marginTop: 2, lineHeight: 1.4 }}>{subtitle}</div>}
      </div>
      {right}
    </button>
  );
}

// ── Animated Number ───────────────────────────────────────────────────
export function AnimNumber({ value, format, duration = 600 }: { value: number; format: (v: number) => string; duration?: number }) {
  const [display, setDisplay] = useState(value);
  const prev = useRef(value);
  const ts = useRef(0);
  useEffect(() => {
    const start = prev.current;
    const target = value;
    const t0 = performance.now();
    cancelAnimationFrame(ts.current);
    const tick = (t: number) => {
      const p = Math.min(1, (t - t0) / duration);
      const e = 1 - Math.pow(1 - p, 3);
      setDisplay(start + (target - start) * e);
      if (p < 1) ts.current = requestAnimationFrame(tick);
      else prev.current = target;
    };
    ts.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(ts.current);
  }, [value, duration]);
  return <span style={{ fontVariantNumeric: 'tabular-nums' }}>{format(display)}</span>;
}

// ── Toast ─────────────────────────────────────────────────────────────
export function Toast({ message, onDone }: { message: string; onDone: () => void }) {
  useEffect(() => {
    const t = setTimeout(onDone, 4000);
    return () => clearTimeout(t);
  }, [onDone]);
  return (
    <div style={{
      position: 'fixed', bottom: 88, left: '50%', transform: 'translateX(-50%)',
      background: T.text, color: '#fff', padding: '12px 20px', borderRadius: T.r,
      fontSize: 13, fontFamily: T.font, zIndex: 9999, maxWidth: 420,
      boxShadow: '0 8px 32px rgba(0,0,0,.22), 0 2px 8px rgba(0,0,0,.12)',
      lineHeight: 1.55, animation: 'alt-fade-in .2s ease-out',
      backdropFilter: 'blur(8px)',
    }}>
      {message}
    </div>
  );
}

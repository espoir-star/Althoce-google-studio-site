'use client';

import React from 'react';
import FormationInfoGrid from '@/components/formation/FormationInfoGrid';
import FormationTimeline from '@/components/formation/FormationTimeline';
import type { FormationDetail, RichLinkText } from '@/lib/formations';

function RichLink({ data, color }: { data: RichLinkText; color: string }) {
  return (
    <>
      {data.before}
      <a href={data.href} style={{ color, fontWeight: 700, textDecoration: 'underline', textUnderlineOffset: 3 }}>
        {data.linkText}
      </a>
      {data.after}
    </>
  );
}

export default function FormationDetailClient({ formation }: { formation: FormationDetail }) {
  const { accent } = formation;

  return (
    <main>
      <style dangerouslySetInnerHTML={{ __html: `
        @media (max-width: 900px) { .frm-info-grid { grid-template-columns: repeat(2, 1fr) !important; } }
        @media (max-width: 520px) { .frm-info-grid { grid-template-columns: 1fr !important; } }
      ` }} />

      {/* ── Hero ── */}
      <section style={{ padding: '120px 24px 64px', position: 'relative', overflow: 'hidden', borderBottom: '1px solid #e4e4e7' }}>
        <div aria-hidden="true" style={{ position: 'absolute', inset: 0, overflow: 'hidden', zIndex: 0, pointerEvents: 'none' }}>
          <div style={{ position: 'absolute', top: '-10%', left: '-5%', width: 560, height: 560, borderRadius: '50%', background: `radial-gradient(circle,${accent}10 0%,transparent 65%)`, filter: 'blur(80px)' }} />
        </div>
        <div style={{ position: 'relative', zIndex: 1, maxWidth: 820, margin: '0 auto' }}>
          <nav aria-label="Breadcrumb" style={{ fontSize: 13, color: '#a1a1aa', marginBottom: 22, display: 'flex', alignItems: 'center', gap: 6, fontWeight: 500, flexWrap: 'wrap' }}>
            <a href="/services/" style={{ color: '#8a8a95', textDecoration: 'none' }}>Services</a>
            <span>›</span>
            <a href="/services/formation-ia/" style={{ color: '#8a8a95', textDecoration: 'none' }}>Formation IA</a>
            <span>›</span>
            <span style={{ color: '#09090b' }}>{formation.breadcrumbLabel}</span>
          </nav>

          <span style={{ display: 'inline-block', padding: '4px 12px', borderRadius: 9999, background: `${accent}14`, color: accent, fontSize: 12, fontWeight: 800, letterSpacing: '.04em', marginBottom: 18 }}>
            {formation.level}
          </span>

          <h1 style={{ fontSize: 'clamp(30px,4.5vw,52px)', fontWeight: 800, lineHeight: 1.08, letterSpacing: '-.04em', color: '#09090b', marginBottom: 20 }}>
            {formation.title}
          </h1>

          <p style={{ fontSize: 17, color: '#52525b', lineHeight: 1.75, marginBottom: 36, maxWidth: 640 }}>
            {formation.chapo}
          </p>

          <FormationInfoGrid items={formation.infos} />

          {formation.infoNote && (
            <p style={{ fontSize: 14.5, color: '#52525b', lineHeight: 1.7, marginTop: 20, padding: '14px 18px', borderRadius: 12, background: `${accent}06`, border: `1px solid ${accent}20` }}>
              <RichLink data={formation.infoNote} color={accent} />
            </p>
          )}

          <div style={{ marginTop: 32 }}>
            <a href="/contact/" style={{ padding: '13px 26px', borderRadius: 9999, background: '#09090b', color: '#fff', textDecoration: 'none', fontSize: 15, fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: 6, transition: 'transform .15s,box-shadow .15s' }}
              onMouseEnter={(e) => { e.currentTarget.style.transform = 'scale(1.03)'; e.currentTarget.style.boxShadow = '0 6px 24px rgba(0,0,0,.25)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.boxShadow = 'none'; }}>
              Demander un devis →
            </a>
          </div>
        </div>
      </section>

      {/* ── Objectifs ── */}
      <section style={{ padding: '80px 24px', background: '#fff' }}>
        <div style={{ maxWidth: 820, margin: '0 auto' }}>
          <h2 style={{ fontSize: 'clamp(22px,3vw,34px)', fontWeight: 800, letterSpacing: '-.03em', color: '#09090b', lineHeight: 1.2, marginBottom: 32 }}>
            {formation.objectifsTitre}
          </h2>
          <ol style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 16 }}>
            {formation.objectifs.map((obj, i) => (
              <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 16 }}>
                <span style={{ flexShrink: 0, width: 30, height: 30, borderRadius: '50%', background: `${accent}12`, border: `1px solid ${accent}30`, color: accent, fontSize: 14, fontWeight: 800, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  {i + 1}
                </span>
                <p style={{ fontSize: 16, color: '#3f3f46', lineHeight: 1.65, paddingTop: 3 }}>{obj}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ── Le programme ── */}
      <section style={{ padding: '80px 24px', background: '#fafafa', borderTop: '1px solid #e4e4e7' }}>
        <div style={{ maxWidth: 820, margin: '0 auto' }}>
          <h2 style={{ fontSize: 'clamp(22px,3vw,34px)', fontWeight: 800, letterSpacing: '-.03em', color: '#09090b', lineHeight: 1.2, marginBottom: 44 }}>
            Le programme
          </h2>
          <FormationTimeline modules={formation.timeline} accent={accent} />
        </div>
      </section>

      {/* ── Ce que vos équipes repartent avec ── */}
      <section style={{ padding: '80px 24px', background: '#fff', borderTop: '1px solid #e4e4e7' }}>
        <div style={{ maxWidth: 820, margin: '0 auto' }}>
          <h2 style={{ fontSize: 'clamp(22px,3vw,34px)', fontWeight: 800, letterSpacing: '-.03em', color: '#09090b', lineHeight: 1.2, marginBottom: 32 }}>
            Ce que vos équipes repartent avec
          </h2>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 14 }}>
            {formation.deliverables.map((d, i) => (
              <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 12, fontSize: 16, color: '#3f3f46', lineHeight: 1.6 }}>
                <svg width="20" height="20" viewBox="0 0 20 20" style={{ flexShrink: 0, marginTop: 1 }} aria-hidden="true">
                  <circle cx="10" cy="10" r="9" fill={`${accent}12`} stroke={accent} strokeWidth="1.2" />
                  <path d="M6 10L9 13L14 7" stroke={accent} strokeWidth="1.7" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                {d}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── Aller plus loin ── */}
      <section style={{ padding: '64px 24px', background: '#fafafa', borderTop: '1px solid #e4e4e7' }}>
        <div style={{ maxWidth: 820, margin: '0 auto' }}>
          <div style={{ padding: '28px 32px', borderRadius: 20, border: '1px solid #e4e4e7', background: '#fff' }}>
            <p style={{ fontSize: 12, fontWeight: 800, textTransform: 'uppercase', letterSpacing: '.1em', color: '#a1a1aa', marginBottom: 10 }}>Aller plus loin</p>
            <p style={{ fontSize: 16, color: '#3f3f46', lineHeight: 1.7 }}>
              <RichLink data={formation.allerPlusLoin} color={accent} />
            </p>
          </div>
        </div>
      </section>

      {/* ── CTA final + mentions ── */}
      <section style={{ padding: '80px 24px 88px', background: '#fff', borderTop: '1px solid #e4e4e7' }}>
        <div style={{ maxWidth: 720, margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: 'clamp(22px,3vw,34px)', fontWeight: 800, letterSpacing: '-.03em', color: '#09090b', lineHeight: 1.2, marginBottom: 16 }}>
            {formation.ctaTitle}
          </h2>
          <p style={{ fontSize: 16, color: '#52525b', lineHeight: 1.75, marginBottom: 32, maxWidth: 560, marginLeft: 'auto', marginRight: 'auto' }}>
            {formation.ctaBody}
          </p>
          <a href="/contact/" style={{ padding: '14px 28px', borderRadius: 9999, background: '#09090b', color: '#fff', textDecoration: 'none', fontSize: 15, fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: 6, transition: 'transform .15s,box-shadow .15s' }}
            onMouseEnter={(e) => { e.currentTarget.style.transform = 'scale(1.03)'; e.currentTarget.style.boxShadow = '0 6px 24px rgba(0,0,0,.25)'; }}
            onMouseLeave={(e) => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.boxShadow = 'none'; }}>
            Réserver 30 minutes →
          </a>
          <p style={{ fontSize: 12.5, color: '#a1a1aa', lineHeight: 1.6, marginTop: 28, maxWidth: 640, marginLeft: 'auto', marginRight: 'auto' }}>
            {formation.mentions}
          </p>
        </div>
      </section>
    </main>
  );
}

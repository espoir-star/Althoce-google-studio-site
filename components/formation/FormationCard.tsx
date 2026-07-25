'use client';

import React from 'react';

interface FormationCardProps {
  level: string;        // "Niveau 1"
  title: string;        // "IA Fondamentaux"
  tagline: string;      // accroche
  description: string;
  meta: string;         // "1 journée · Aucun prérequis · Jusqu'à 10 participants"
  keyPoints: string[];  // 3 points
  href: string;
  accent?: string;      // couleur d'accent (défaut : bleu Althoce)
}

/**
 * Carte du hub Formation IA. Bordure neutre, hover bordure encre.
 * Badge niveau, titre, accroche, méta sur une ligne, 3 puces accent, CTA fléché.
 */
export default function FormationCard({
  level,
  title,
  tagline,
  description,
  meta,
  keyPoints,
  href,
  accent = '#2563eb',
}: FormationCardProps) {
  return (
    <a
      href={href}
      style={{
        display: 'flex',
        flexDirection: 'column',
        padding: '32px 30px',
        borderRadius: 20,
        border: '1px solid #e4e4e7',
        background: '#fff',
        textDecoration: 'none',
        transition: 'border-color .2s ease, box-shadow .2s ease, transform .2s ease',
        boxShadow: '0 1px 4px rgba(0,0,0,.03)',
        height: '100%',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = '#09090b';
        e.currentTarget.style.boxShadow = '0 12px 40px rgba(0,0,0,.09)';
        e.currentTarget.style.transform = 'translateY(-3px)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = '#e4e4e7';
        e.currentTarget.style.boxShadow = '0 1px 4px rgba(0,0,0,.03)';
        e.currentTarget.style.transform = 'none';
      }}
    >
      {/* Badge niveau */}
      <span
        style={{
          alignSelf: 'flex-start',
          padding: '4px 12px',
          borderRadius: 9999,
          background: `${accent}14`,
          color: accent,
          fontSize: 12,
          fontWeight: 800,
          letterSpacing: '.04em',
          marginBottom: 18,
        }}
      >
        {level}
      </span>

      {/* Titre */}
      <h3 style={{ fontSize: 28, fontWeight: 800, letterSpacing: '-.03em', color: '#09090b', lineHeight: 1.15, marginBottom: 8 }}>
        {title}
      </h3>

      {/* Accroche */}
      <p style={{ fontSize: 15, fontWeight: 700, color: accent, lineHeight: 1.5, marginBottom: 12 }}>
        {tagline}
      </p>

      {/* Description */}
      <p style={{ fontSize: 15, color: '#52525b', lineHeight: 1.7, marginBottom: 16 }}>
        {description}
      </p>

      {/* Méta sur une ligne */}
      <p style={{ fontSize: 13, color: '#a1a1aa', fontWeight: 600, marginBottom: 20 }}>
        {meta}
      </p>

      {/* 3 points */}
      <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 28px', display: 'flex', flexDirection: 'column', gap: 10 }}>
        {keyPoints.map((point, i) => (
          <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, fontSize: 14, color: '#3f3f46', lineHeight: 1.6 }}>
            <svg width="16" height="16" viewBox="0 0 16 16" style={{ flexShrink: 0, marginTop: 2 }} aria-hidden="true">
              <circle cx="8" cy="8" r="7" fill={`${accent}12`} stroke={accent} strokeWidth="1.2" />
              <path d="M5 8L7 10L11 6" stroke={accent} strokeWidth="1.6" fill="none" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            {point}
          </li>
        ))}
      </ul>

      {/* CTA fléché en bas */}
      <span style={{ marginTop: 'auto', display: 'inline-flex', alignItems: 'center', gap: 8, fontSize: 15, fontWeight: 700, color: '#09090b' }}>
        Voir le programme
        <span aria-hidden="true" style={{ color: accent }}>→</span>
      </span>
    </a>
  );
}

'use client';

import React from 'react';
import { Logo } from '@/components/ui/brand/Logo';
import { cities } from '@/lib/data';

const AC = '#2563eb';

const footerCols = [
  {
    h: 'Services',
    links: [
      { l: 'Agents IA', href: '/services/agents-ia/' },
      { l: 'Chatbot IA', href: '/services/chatbot-ia/' },
      { l: 'Développement IA', href: '/services/developpement-ia/' },
      { l: 'Automatisation IA', href: '/services/automatisation-ia/' },
      { l: 'Employé IA', href: '/services/employe-ia/' },
    ],
  },
  {
    h: 'Agents métiers',
    links: [
      { l: 'Agent Marketing', href: '/agent-ia/marketing/' },
      { l: 'Agent Commercial', href: '/agent-ia/commercial/' },
      { l: 'Agent Support', href: '/agent-ia/service-client/' },
      { l: 'Agent Finance', href: '/agent-ia/finance/' },
      { l: 'Agent RH', href: '/agent-ia/rh/' },
      { l: 'Agent Téléphonique', href: '/agent-ia/telephonique/' },
    ],
  },
  {
    h: 'Ressources',
    links: [
      { l: 'Blog', href: '/blog/' },
      { l: 'Cas clients', href: '/cas-clients/' },
      { l: 'Calculateur ROI', href: '/calculateur-roi/' },
    ],
  },
  {
    h: 'Entreprise',
    links: [
      { l: 'À propos', href: '/a-propos/' },
      { l: 'Contact', href: '/contact/' },
    ],
  },
  {
    h: 'Légal',
    links: [
      { l: 'Mentions légales', href: '/mentions-legales/' },
      { l: 'Confidentialité', href: '/confidentialite/' },
    ],
  },
];

const FooterLink = ({ href, label, dim = false }: { href: string; label: string; dim?: boolean }) => (
  <a
    href={href}
    style={{ fontSize: 14, color: dim ? '#71717a' : '#8a8a95', textDecoration: 'none', transition: 'color .15s', display: 'block', marginBottom: 10, lineHeight: 1.5 }}
    onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = '#fff'; }}
    onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = dim ? '#71717a' : '#8a8a95'; }}
  >
    {label}
  </a>
);

export default function Footer({ showCta = true }: { showCta?: boolean }) {
  return (
    <footer>
      <style>{`
        .footer-cta-section { padding: 80px 24px; }
        .footer-cta-card { border-radius: 32px; padding: 80px 48px; }
        .footer-cta-desc { display: block; }
        .footer-cities { grid-template-columns: repeat(4, 1fr); }
        @media (max-width: 640px) {
          .footer-cta-section { padding: 40px 16px; }
          .footer-cta-card { border-radius: 20px; padding: 40px 24px; }
          .footer-cta-desc { display: none; }
          .footer-cities { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>

      {/* CTA banner */}
      {showCta && (
        <section className="footer-cta-section" style={{ background: '#fff', borderTop: '1px solid #e4e4e7' }}>
          <div style={{ maxWidth: 1160, margin: '0 auto' }}>
            <div className="footer-cta-card" style={{ background: '#09090b', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', top: -80, left: -80, width: 320, height: 320, background: `radial-gradient(circle,${AC}35,transparent)`, pointerEvents: 'none' }} />
              <div style={{ position: 'absolute', bottom: -80, right: -80, width: 320, height: 320, background: 'radial-gradient(circle,#3b82f625,transparent)', pointerEvents: 'none' }} />
              <div style={{ position: 'relative', zIndex: 1, maxWidth: 600, margin: '0 auto' }}>
                <h2 style={{ fontSize: 'clamp(22px,4vw,48px)', fontWeight: 800, letterSpacing: '-.04em', color: '#fff', lineHeight: 1.1, marginBottom: 16 }}>
                  Prêt à déployer votre premier agent IA ?
                </h2>
                <p className="footer-cta-desc" style={{ fontSize: 16, color: '#a1a1aa', marginBottom: 32, lineHeight: 1.7 }}>
                  30 minutes d'échange, trois idées concrètes d'automatisation — même si on ne travaille pas ensemble.
                </p>
                <a
                  href="/contact"
                  style={{ padding: '14px 28px', borderRadius: 9999, background: '#fff', color: '#09090b', border: 'none', cursor: 'pointer', fontSize: 14, fontWeight: 700, fontFamily: 'inherit', display: 'inline-flex', alignItems: 'center', gap: 8, marginBottom: 16, textDecoration: 'none', transition: 'transform .15s, box-shadow .15s' }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.transform = 'scale(1.03)'; (e.currentTarget as HTMLAnchorElement).style.boxShadow = '0 8px 30px rgba(255,255,255,.2)'; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.transform = 'scale(1)'; (e.currentTarget as HTMLAnchorElement).style.boxShadow = 'none'; }}
                >
                  Discutons de votre projet →
                </a>
                <p style={{ fontSize: 13, color: '#71717a' }}>Sans engagement · 30 min offertes · Réponse sous 24h</p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Footer body */}
      <div style={{ background: '#09090b', color: '#71717a', padding: '64px 24px 36px', borderTop: '1px solid #1a1a1a' }}>
        <div style={{ maxWidth: 1160, margin: '0 auto' }}>
          {/* Top grid */}
          <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr 1fr 1fr', gap: 40, marginBottom: 48 }} className="v2-grid-hero footer-top-grid">
            <div className="footer-logo-col">
              <div style={{ marginBottom: 16 }}>
                <Logo variant="white" size={40} />
              </div>
              <p style={{ fontSize: 15, lineHeight: 1.72, maxWidth: 260, marginBottom: 16 }}>
                Agence IA &amp; Automatisation pour les PME et ETI françaises. On déploie des agents IA 100% autonomes.
              </p>
              <p style={{ fontSize: 13, color: '#52525b' }}>📍 Bordeaux, France</p>
            </div>

            {footerCols.map((col) => (
              <div key={col.h}>
                <div style={{ fontSize: 12, fontWeight: 800, color: '#fff', textTransform: 'uppercase', letterSpacing: '.1em', marginBottom: 18 }}>
                  {col.h}
                </div>
                {col.links.map((link) => (
                  <FooterLink key={link.l} href={link.href} label={link.l} />
                ))}
              </div>
            ))}
          </div>

          {/* Geo section */}
          <div style={{ borderTop: '1px solid rgba(255,255,255,.06)', paddingTop: 32, marginBottom: 32 }}>
            <div style={{ fontSize: 12, fontWeight: 800, color: '#fff', textTransform: 'uppercase', letterSpacing: '.1em', marginBottom: 20 }}>
              Partout en France
            </div>
            <div style={{ display: 'grid', gap: '12px 32px' }} className="v2-grid4 footer-cities">
              {cities.main.map((c) => (
                <FooterLink key={c} href={`/agence-ia-${c.toLowerCase()}/`} label={c} />
              ))}
              {cities.secondary.map((c) => (
                <FooterLink key={c} href={`/agence-ia-${c.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/ /g, '-')}/`} label={c} dim />
              ))}
            </div>
          </div>

          {/* Bottom bar */}
          <div style={{ borderTop: '1px solid rgba(255,255,255,.06)', paddingTop: 28 }}>
            {/* Logo certification centré */}
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 20 }}>
              <div style={{ background: '#fff', borderRadius: 16, padding: '14px 20px', display: 'inline-flex', alignItems: 'center' }}>
                <img
                  src="/logos/French tech.png"
                  alt="La French Tech Bordeaux"
                  style={{ height: 72, width: 'auto', objectFit: 'contain', display: 'block' }}
                />
              </div>
            </div>
            {/* Copyright row */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 10, borderTop: '1px solid rgba(255,255,255,.04)', paddingTop: 20 }}>
              <span style={{ fontSize: 13 }}>© 2025 Althoce. Tous droits réservés.</span>
              <span style={{ fontSize: 13 }}>Made with ❤️ in Bordeaux</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

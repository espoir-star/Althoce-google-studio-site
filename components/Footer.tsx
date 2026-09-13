'use client';
import { PreAuditCTA } from './brand/Sections';

import React from 'react';
import Image from 'next/image';
import { Logo } from '@/components/ui/brand/Logo';
import { cities } from '@/lib/data';

const AC = '#2563eb';

const footerCols = [
  {
    h: 'Services',
    links: [
      { l: 'Diagnostic IA', href: '/services/audit-ia/' },
      { l: 'Pilotage IA & maintenance', href: '/services/pilotage-ia/' },
      { l: 'Formations IA', href: '/services/formation-ia/' },
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
    style={{ fontSize: 14, color: dim ? '#a9bdd9' : '#c2cfe2', textDecoration: 'none', transition: 'color .15s', display: 'block', marginBottom: 10, lineHeight: 1.5 }}
    onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = '#fff'; }}
    onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = dim ? '#a9bdd9' : '#c2cfe2'; }}
  >
    {label}
  </a>
);

export default function Footer({ showCta = true, positioning = 'cabinet' }: { showCta?: boolean; positioning?: 'agence' | 'cabinet' }) {
  return (
    <footer>
      <style>{`
        footer a:focus-visible { outline: 2px solid #a9caff; outline-offset: 4px; border-radius: 3px; }
        .footer-cities { grid-template-columns: repeat(4, 1fr); }
        @media (max-width: 640px) {
          footer a:focus-visible { outline: 2px solid #a9caff; outline-offset: 4px; border-radius: 3px; }
        .footer-cities { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>

      {showCta && <PreAuditCTA id="footer-pre-audit" />}

      <div style={{ background: 'radial-gradient(ellipse at 0 0, #214b78, transparent 65%), linear-gradient(125deg, #142f50, #0e223d)' , color: '#a9bdd9', padding: '64px 24px 36px', borderTop: '1px solid #385574' }}>
        <div style={{ maxWidth: 1160, margin: '0 auto' }}>
          {/* Top grid */}
          <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr 1fr 1fr', gap: '40px', marginBottom: 48 }} className="footer-top-grid">
            <div className="footer-logo-col">
              <div style={{ marginBottom: 16 }}>
                <a href="/" aria-label="Althoce — accueil" style={{display:"inline-flex",alignItems:"center",gap:10,color:"white",textDecoration:"none"}}><Logo variant="white" size={40} /><span style={{fontSize:30,fontWeight:600,letterSpacing:"-.05em"}}>althoce<span style={{color:"#8cb6ff"}}>.</span></span></a>
              </div>
              <p style={{ fontSize: 15, lineHeight: 1.72, maxWidth: 260, marginBottom: 16 }}>
                {positioning === 'cabinet' ? 'Cabinet IA pour les PME et ETI françaises. Conseil, formations IA, agents IA et automatisation.' : 'Agence IA & Automatisation pour les PME et ETI françaises. Conseil, formations IA et agents adaptés à vos équipes.'}
              </p>
              <p style={{ fontSize: 13, color: '#a9bdd9' }}>Bordeaux, partout en France</p>
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
          <div style={{ borderTop: '1px solid rgba(187,213,247,.18)', paddingTop: 32, marginBottom: 32 }}>
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
          <div style={{ borderTop: '1px solid rgba(187,213,247,.18)', paddingTop: 28 }}>
            {/* Logos certifications centrés */}
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 16, flexWrap: 'wrap', marginBottom: 20 }}>
              <div style={{ background: '#fff', borderRadius: 16, padding: '14px 20px', display: 'inline-flex', alignItems: 'center' }}>
                <img
                  src="/logos/French tech.png"
                  alt="La French Tech Bordeaux"
                  style={{ height: 72, width: 'auto', objectFit: 'contain', display: 'block' }}
                />
              </div>
              <a
                href="https://www.francenum.gouv.fr/activateurs/althoce-conseil"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Althoce, Activateur France Num — programme officiel du gouvernement français pour la transformation numérique des PME"
                style={{ display: 'inline-flex', background: '#fff', borderRadius: 16, padding: '14px 20px', transition: 'opacity .15s' }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.opacity = '.8'; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.opacity = '1'; }}
              >
                <Image
                  src="/logos/Althoce-Activateur-francenum.png"
                  alt="Activateur France Num"
                  width={120}
                  height={109}
                  style={{ height: 72, width: 'auto', objectFit: 'contain', display: 'block' }}
                />
              </a>
            </div>
            {/* Copyright row */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 10, borderTop: '1px solid rgba(187,213,247,.18)', paddingTop: 20 }}>
              <span style={{ fontSize: 13 }}>© {new Date().getFullYear()} Althoce. Tous droits réservés.</span>
              <button type="button" onClick={() => window.dispatchEvent(new Event('althoce:cookie-settings'))} style={{ background: 'none', border: 0, color: 'inherit', fontSize: 13, textDecoration: 'underline', cursor: 'pointer', padding: 8 }}>Gérer les cookies</button>
              <span style={{ fontSize: 13 }}>Pensé à Bordeaux. À vos côtés en France.</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

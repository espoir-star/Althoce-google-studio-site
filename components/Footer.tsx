'use client';
import { PreAuditCTA } from './brand/Sections';

import React from 'react';
import Image from 'next/image';
import { Logo } from '@/components/ui/brand/Logo';
import { cities } from '@/lib/data';

const footerCols = [{"h": "Accompagnement", "links": [{"l": "Diagnostic IA", "href": "/services/audit-ia/"}, {"l": "Déploiement & agents IA", "href": "/services/automatisation-ia/"}, {"l": "Pilotage & maintenance", "href": "/services/pilotage-ia/"}, {"l": "Formations IA", "href": "/services/formation-ia/"}, {"l": "Tous nos services", "href": "/services/"}]}, {"h": "Formations", "links": [{"l": "IA Fondamentaux", "href": "/services/formation-ia/ia-fondamentaux/"}, {"l": "IA Avancée", "href": "/services/formation-ia/ia-avancee/"}, {"l": "Coaching dirigeant", "href": "/services/formation-ia/coaching-dirigeant/"}]}, {"h": "Secteurs", "links": [{"l": "Finance", "href": "/secteurs/finance/"}, {"l": "Droit", "href": "/secteurs/droit/"}, {"l": "Marketing & communication", "href": "/secteurs/marketing-communication/"}, {"l": "Associations", "href": "/secteurs/associations/"}, {"l": "Immobilier", "href": "/secteurs/immobilier/"}, {"l": "Commerce & distribution", "href": "/secteurs/commerce-distribution/"}, {"l": "Industrie", "href": "/secteurs/industrie/"}]}, {"h": "Ressources", "links": [{"l": "Nos guides gratuits", "href": "/guides/"}, {"l": "Cas clients", "href": "/cas-clients/"}, {"l": "Blog", "href": "/blog/"}, {"l": "Calculateur ROI", "href": "/calculateur-roi/"}]}, {"h": "Le cabinet", "links": [{"l": "À propos", "href": "/a-propos/"}, {"l": "Contact", "href": "/contact/"}, {"l": "Nos secteurs", "href": "/secteurs/"}]}];

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
        .footer-local-links{border-top:1px solid #bbd5f72e;padding:28px 0}
        .footer-local-grid{display:grid;grid-template-columns:1fr 1fr;gap:24px}
        .footer-local-grid details{border:1px solid #bbd5f72e;border-radius:8px;padding:0 20px}
        .footer-local-grid summary{cursor:pointer;padding:18px 0;color:#e5efff;font-size:15px}
        .footer-city-list{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:4px 16px;padding:10px 0 16px}
        footer summary:focus-visible,footer button:focus-visible{outline:2px solid #a9caff;outline-offset:4px}
        @media(max-width:900px){.footer-top-grid{grid-template-columns:repeat(3,minmax(0,1fr))!important}.footer-city-list{grid-template-columns:repeat(2,minmax(0,1fr))}}
        @media(max-width:600px){.footer-top-grid{grid-template-columns:repeat(2,minmax(0,1fr))!important;gap:28px!important}.footer-local-grid{grid-template-columns:1fr;gap:12px}}

        @media (max-width: 640px) {
          footer a:focus-visible { outline: 2px solid #a9caff; outline-offset: 4px; border-radius: 3px; }
        .footer-cities { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>

      {showCta && <PreAuditCTA id="footer-pre-audit" />}

      <div style={{ background: 'radial-gradient(ellipse at 0 0, #214b78, transparent 65%), linear-gradient(125deg, #142f50, #0e223d)' , color: '#a9bdd9', padding: '64px 24px 36px', borderTop: '1px solid #385574' }}>
        <div style={{ maxWidth: 1160, margin: '0 auto' }}>
          {/* Top grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, minmax(0, 1fr))', gap: '40px', marginBottom: 48 }} className="footer-top-grid">
            <div className="footer-intro" style={{gridColumn:"1 / -1"}}>
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

          <div className="footer-local-links">
            <p style={{color:'#fff',fontSize:20,marginBottom:8}}>À vos côtés, partout en France.</p>
            <p style={{fontSize:14,marginBottom:24}}>Des interventions dans vos locaux et à distance, selon votre projet.</p>
            <div className="footer-local-grid">{[{title:'Conseil IA dans votre ville',prefix:'agence-ia'},{title:'Formation IA dans votre ville',prefix:'formation-ia'}].map(group=><details key={group.prefix}><summary>{group.title}</summary><div className="footer-city-list">{[...cities.main,...cities.secondary].map(c=><FooterLink key={c} href={`/${group.prefix}-${c.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/ /g,'-')}/`} label={c}/>)}</div></details>)}</div>
          </div>

          {/* Bottom bar */}
          <div style={{ borderTop: '1px solid rgba(187,213,247,.18)', paddingTop: 28 }}>
            {/* Logos certifications centrés */}
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 16, flexWrap: 'wrap', marginBottom: 20 }}>
              <div style={{ background: '#fff', borderRadius: 16, padding: '14px 20px', display: 'inline-flex', alignItems: 'center' }}>
                <Image
                  width={72}
                  height={72}
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
              <a href="/mentions-legales/" style={{color:"inherit",fontSize:13}}>Mentions légales</a><a href="/confidentialite/" style={{color:"inherit",fontSize:13}}>Confidentialité</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

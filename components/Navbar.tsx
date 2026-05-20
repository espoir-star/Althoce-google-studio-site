'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Logo } from '@/components/ui/brand/Logo';
import { agentMetiers } from '@/lib/data';

const navServices = [
  { l: 'Agents IA', desc: 'Employés virtuels 100 % autonomes', href: '/services/agents-ia/' },
  { l: 'Chatbot IA', desc: 'Assistant RAG sur votre base de connaissance', href: '/services/chatbot-ia/' },
  { l: 'Développement IA', desc: 'Code de production Python & TypeScript', href: '/services/developpement-ia/' },
  { l: 'Automatisation IA', desc: 'Workflows intelligents sans code', href: '/services/automatisation-ia/' },
  { l: 'Intégration IA', desc: 'Branchement sur votre SI existant', href: '/services/integration-ia/' },
  { l: 'Employé IA', desc: 'Un poste entier automatisé de A à Z', href: '/services/employe-ia/' },
];

const navRessources = [
  { l: 'Blog', desc: 'Conseils IA, cas clients & guides pratiques', href: '/blog/' },
  { l: 'Cas clients', desc: 'Résultats concrets chez nos clients PME & ETI', href: '/cas-clients/' },
  { l: 'Calculateur ROI', desc: 'Estimez vos économies avant de vous engager', href: '/calculateur-roi/' },
];

const CSS = `
  @keyframes nb-drop-in {
    from { opacity: 0; transform: translateY(-6px) scale(.98); }
    to   { opacity: 1; transform: translateY(0)   scale(1);    }
  }
  @keyframes nb-mob-in {
    from { opacity: 0; transform: translateY(-8px); }
    to   { opacity: 1; transform: translateY(0);    }
  }
  .nb-link {
    display: inline-flex; align-items: center; gap: 5px;
    padding: 7px 13px; border-radius: 8px;
    font-size: 13.5px; font-weight: 500; color: #52525b;
    background: transparent; border: none; cursor: pointer;
    font-family: inherit; text-decoration: none;
    transition: color .15s, background .15s;
    white-space: nowrap;
  }
  .nb-link:hover, .nb-link.active { color: #09090b; background: rgba(0,0,0,.04); }
  .nb-chevron { transition: transform .2s; display: block; }
  .nb-chevron.open { transform: rotate(180deg); }
  .nb-drop {
    position: absolute; top: calc(100% + 10px);
    background: #fff;
    border: 1px solid rgba(0,0,0,.07);
    border-radius: 16px;
    box-shadow: 0 4px 6px rgba(0,0,0,.03), 0 12px 40px rgba(0,0,0,.09);
    animation: nb-drop-in .17s ease-out both;
    overflow: hidden;
  }
  .nb-drop-item {
    display: flex; align-items: flex-start; gap: 11px;
    padding: 11px 14px; border-radius: 10px; margin: 2px;
    text-decoration: none; color: #09090b;
    transition: background .12s;
  }
  .nb-drop-item:hover { background: #f5f5f5; }
  .nb-drop-item-icon {
    width: 30px; height: 30px; border-radius: 8px;
    background: #f4f4f5; display: flex; align-items: center; justify-content: center;
    flex-shrink: 0; margin-top: 1px;
    transition: background .12s;
  }
  .nb-drop-item:hover .nb-drop-item-icon { background: #ebebeb; }
  .nb-drop-item-label { font-size: 14px; font-weight: 600; color: #09090b; margin-bottom: 1px; }
  .nb-drop-item-desc  { font-size: 13px; color: #8a8a95; line-height: 1.4; }
  .nb-drop-footer {
    border-top: 1px solid #f4f4f5; padding: 10px 16px;
    display: flex; align-items: center; justify-content: space-between;
  }
  .nb-drop-footer-link {
    font-size: 13px; font-weight: 600; color: #2563eb;
    text-decoration: none; transition: color .15s;
    display: inline-flex; align-items: center; gap: 4px;
  }
  .nb-drop-footer-link:hover { color: #1d4ed8; }
  .nb-cta {
    display: inline-flex; align-items: center; gap: 5px;
    padding: 9px 18px; border-radius: 9999px;
    background: #09090b; color: #fff;
    font-size: 14px; font-weight: 600; font-family: inherit;
    text-decoration: none; border: none; cursor: pointer;
    box-shadow: 0 1px 2px rgba(0,0,0,.1), inset 0 1px 0 rgba(255,255,255,.06);
    transition: transform .15s, box-shadow .15s, background .15s;
    white-space: nowrap;
  }
  .nb-cta:hover {
    transform: translateY(-1px);
    box-shadow: 0 4px 16px rgba(0,0,0,.18), inset 0 1px 0 rgba(255,255,255,.06);
  }
  .nb-cta:active { transform: translateY(0); }

  /* Burger animation */
  .nb-burger { background: none; border: none; cursor: pointer; padding: 8px; display: none; flex-direction: column; gap: 5px; }
  .nb-burger-line {
    display: block; width: 20px; height: 1.5px;
    background: #09090b; border-radius: 2px;
    transform-origin: center; transition: transform .25s, opacity .2s;
  }
  .nb-burger.open .nb-burger-line:nth-child(1) { transform: translateY(6.5px) rotate(45deg); }
  .nb-burger.open .nb-burger-line:nth-child(2) { opacity: 0; transform: scaleX(0); }
  .nb-burger.open .nb-burger-line:nth-child(3) { transform: translateY(-6.5px) rotate(-45deg); }

  /* Mobile menu — panel plein écran */
  /* position:absolute (not fixed) because backdrop-filter on <nav> creates a stacking context
     that traps fixed descendants — absolute+top:100% escapes the 64px height correctly */
  .nb-mob {
    position: absolute; top: 100%; left: 0; right: 0;
    height: calc(100vh - 64px);
    background: #fff; overflow: hidden; z-index: 99;
    animation: nb-mob-in .22s cubic-bezier(.16,1,.3,1) both;
    display: flex; flex-direction: column;
  }
  .nb-mob-scroll { flex: 1; overflow-y: auto; padding: 0 20px 32px; }

  /* Section accordion */
  .nb-mob-section-btn {
    width: 100%; display: flex; align-items: center; justify-content: space-between;
    padding: 16px 0; background: none; border: none; border-bottom: 1px solid #f4f4f5;
    cursor: pointer; font-size: 16px; font-weight: 600; color: #09090b; font-family: inherit;
    transition: color .15s;
  }
  .nb-mob-section-btn:hover { color: #2563eb; }
  .nb-mob-section-btn.open { border-bottom-color: transparent; color: #2563eb; }

  /* Accordion content */
  .nb-mob-acc { overflow: hidden; transition: max-height .28s cubic-bezier(.4,0,.2,1); max-height: 0; }
  .nb-mob-acc.open { max-height: 600px; }
  .nb-mob-acc-inner { padding-bottom: 8px; border-bottom: 1px solid #f4f4f5; }

  /* Accordion items — avec icône + desc */
  .nb-mob-drop-item {
    display: flex; align-items: center; gap: 12px;
    padding: 11px 12px; border-radius: 10px; text-decoration: none;
    transition: background .12s; margin: 1px 0;
  }
  .nb-mob-drop-item:hover { background: #f5f5f5; }
  .nb-mob-drop-icon {
    width: 34px; height: 34px; border-radius: 9px; background: #f4f4f5;
    display: flex; align-items: center; justify-content: center; flex-shrink: 0;
    transition: background .12s; color: #8a8a95;
  }
  .nb-mob-drop-item:hover .nb-mob-drop-icon { background: #ebebeb; color: #09090b; }
  .nb-mob-drop-label { font-size: 13.5px; font-weight: 600; color: #09090b; }
  .nb-mob-drop-desc  { font-size: 13px; color: #8a8a95; line-height: 1.35; margin-top: 1px; }
  .nb-mob-see-all {
    display: flex; align-items: center; justify-content: center; gap: 6px;
    padding: 10px; margin: 6px 0 4px; border-radius: 8px;
    font-size: 14px; font-weight: 600; color: #2563eb; text-decoration: none;
    background: #eff6ff; transition: background .15s;
  }
  .nb-mob-see-all:hover { background: #dbeafe; }

  /* Simple links */
  .nb-mob-link {
    display: flex; align-items: center; justify-content: space-between;
    padding: 16px 0; font-size: 16px; font-weight: 500;
    color: #8a8a95; border-bottom: 1px solid #f4f4f5; text-decoration: none;
    transition: color .15s;
  }
  .nb-mob-link:hover { color: #09090b; }

  /* Bottom CTA sticky */
  .nb-mob-footer {
    padding: 16px 20px 28px; border-top: 1px solid #f4f4f5;
    background: #fff;
  }
  .nb-mob-cta {
    display: flex; justify-content: center; align-items: center; gap: 6px;
    width: 100%; padding: 15px 24px; border-radius: 14px;
    background: #09090b; color: #fff; text-decoration: none;
    font-weight: 700; font-size: 16px;
    box-shadow: 0 4px 20px rgba(0,0,0,.14), inset 0 1px 0 rgba(255,255,255,.06);
    transition: transform .15s, box-shadow .15s;
  }
  .nb-mob-cta:hover { transform: translateY(-1px); box-shadow: 0 8px 28px rgba(0,0,0,.2); }
  .nb-mob-note { text-align: center; font-size: 13px; color: #a1a1aa; margin-top: 10px; }

  @media (max-width: 900px) {
    .nb-desk { display: none !important; }
    .nb-burger { display: flex !important; }
  }
  @media (min-width: 901px) {
    .nb-burger { display: none !important; }
  }
`;

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <svg className={`nb-chevron${open ? ' open' : ''}`} width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
      <path d="M2 4.5L6 8L10 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
      <path d="M2.5 6H9.5M6.5 3L9.5 6L6.5 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ServiceIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <rect x="1" y="1" width="5" height="5" rx="1.5" stroke="currentColor" strokeWidth="1.2" />
      <rect x="8" y="1" width="5" height="5" rx="1.5" stroke="currentColor" strokeWidth="1.2" />
      <rect x="1" y="8" width="5" height="5" rx="1.5" stroke="currentColor" strokeWidth="1.2" />
      <rect x="8" y="8" width="5" height="5" rx="1.5" stroke="currentColor" strokeWidth="1.2" />
    </svg>
  );
}

function AgentIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <circle cx="7" cy="5" r="2.5" stroke="currentColor" strokeWidth="1.2" />
      <path d="M2 12c0-2.21 2.239-4 5-4s5 1.79 5 4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  );
}

function BlogIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <path d="M2 3h10M2 6h7M2 9h5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  );
}

function CalcIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <rect x="1.5" y="1.5" width="11" height="11" rx="2" stroke="currentColor" strokeWidth="1.2" />
      <path d="M4 7h6M7 4v6" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  );
}

function CasClientsIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <path d="M2 11c0-2 1.5-3.5 3.5-3.5S9 9 9 11" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      <circle cx="5.5" cy="4.5" r="2" stroke="currentColor" strokeWidth="1.2" />
      <path d="M10 8c1.1.5 2 1.7 2 3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      <circle cx="10" cy="4" r="1.5" stroke="currentColor" strokeWidth="1.2" />
    </svg>
  );
}

function MobileMenu({ onClose }: { onClose: () => void }) {
  const [openSection, setOpenSection] = useState<string | null>(null);
  const toggle = (s: string) => setOpenSection(p => p === s ? null : s);

  return (
    <div className="nb-mob">
      <div className="nb-mob-scroll">

        {/* Agents IA accordion */}
        <button
          className={`nb-mob-section-btn${openSection === 'agents' ? ' open' : ''}`}
          onClick={() => toggle('agents')}
        >
          Agents IA par métier
          <ChevronIcon open={openSection === 'agents'} />
        </button>
        <div className={`nb-mob-acc${openSection === 'agents' ? ' open' : ''}`}>
          <div className="nb-mob-acc-inner">
            {agentMetiers.map((m) => (
              <a key={m.title} href={m.href} onClick={onClose} className="nb-mob-drop-item">
                <div className="nb-mob-drop-icon"><AgentIcon /></div>
                <div>
                  <div className="nb-mob-drop-label">{m.title}</div>
                  <div className="nb-mob-drop-desc">{m.desc}</div>
                </div>
              </a>
            ))}
            <a href="/agent-ia/" onClick={onClose} className="nb-mob-see-all">
              Voir tous les agents IA <ArrowIcon />
            </a>
          </div>
        </div>

        {/* Services accordion */}
        <button
          className={`nb-mob-section-btn${openSection === 'services' ? ' open' : ''}`}
          onClick={() => toggle('services')}
        >
          Services
          <ChevronIcon open={openSection === 'services'} />
        </button>
        <div className={`nb-mob-acc${openSection === 'services' ? ' open' : ''}`}>
          <div className="nb-mob-acc-inner">
            {navServices.map((s) => (
              <a key={s.l} href={s.href} onClick={onClose} className="nb-mob-drop-item">
                <div className="nb-mob-drop-icon"><ServiceIcon /></div>
                <div>
                  <div className="nb-mob-drop-label">{s.l}</div>
                  <div className="nb-mob-drop-desc">{s.desc}</div>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Ressources accordion */}
        <button
          className={`nb-mob-section-btn${openSection === 'ressources' ? ' open' : ''}`}
          onClick={() => toggle('ressources')}
        >
          Ressources
          <ChevronIcon open={openSection === 'ressources'} />
        </button>
        <div className={`nb-mob-acc${openSection === 'ressources' ? ' open' : ''}`}>
          <div className="nb-mob-acc-inner">
            {navRessources.map((r) => (
              <a key={r.l} href={r.href} onClick={onClose} className="nb-mob-drop-item">
                <div className="nb-mob-drop-icon">
                  {r.href.includes('blog') ? <BlogIcon /> : r.href.includes('cas-clients') ? <CasClientsIcon /> : <CalcIcon />}
                </div>
                <div>
                  <div className="nb-mob-drop-label">{r.l}</div>
                  <div className="nb-mob-drop-desc">{r.desc}</div>
                </div>
              </a>
            ))}
          </div>
        </div>

        <a href="/services/formation-ia/" onClick={onClose} className="nb-mob-link">
          Formation <ArrowIcon />
        </a>

      </div>

      {/* CTA sticky en bas */}
      <div className="nb-mob-footer">
        <a href="/contact" onClick={onClose} className="nb-mob-cta">
          Parlons de votre projet <ArrowIcon />
        </a>
        <p className="nb-mob-note">Sans engagement · Réponse sous 24 h</p>
      </div>
    </div>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled]   = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropAgent, setDropAgent] = useState(false);
  const [dropServ,  setDropServ]  = useState(false);
  const [dropRess,  setDropRess]  = useState(false);
  const tAgent = useRef<ReturnType<typeof setTimeout> | null>(null);
  const tServ  = useRef<ReturnType<typeof setTimeout> | null>(null);
  const tRess  = useRef<ReturnType<typeof setTimeout> | null>(null);

  const openAgent  = () => { if (tAgent.current) clearTimeout(tAgent.current); setDropAgent(true); };
  const closeAgent = () => { tAgent.current = setTimeout(() => setDropAgent(false), 180); };
  const openServ   = () => { if (tServ.current) clearTimeout(tServ.current); setDropServ(true); };
  const closeServ  = () => { tServ.current = setTimeout(() => setDropServ(false), 180); };
  const openRess   = () => { if (tRess.current) clearTimeout(tRess.current); setDropRess(true); };
  const closeRess  = () => { tRess.current = setTimeout(() => setDropRess(false), 180); };

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 20);
    h();
    window.addEventListener('scroll', h, { passive: true });
    return () => window.removeEventListener('scroll', h);
  }, []);

  return (
    <nav
      aria-label="Navigation principale"
      style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        height: 64,
        background: scrolled ? 'rgba(255,255,255,.92)' : 'rgba(255,255,255,.7)',
        backdropFilter: 'blur(20px) saturate(180%)',
        WebkitBackdropFilter: 'blur(20px) saturate(180%)',
        borderBottom: `1px solid ${scrolled ? 'rgba(0,0,0,.07)' : 'rgba(0,0,0,.04)'}`,
        boxShadow: scrolled ? '0 1px 0 rgba(0,0,0,.04)' : 'none',
        transition: 'background .3s, border-color .3s, box-shadow .3s',
      }}
    >
      <style>{CSS}</style>

      <div style={{ maxWidth: 1160, margin: '0 auto', padding: '0 28px', height: 64, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>

        {/* Logo */}
        <a href="/" aria-label="Althoce — accueil" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', flexShrink: 0 }}>
          <Logo variant="dark" size={34} />
        </a>

        {/* Desktop nav */}
        <div className="nb-desk" style={{ display: 'flex', alignItems: 'center', gap: 1 }}>

          {/* Agents IA dropdown */}
          <div style={{ position: 'relative' }} onMouseEnter={openAgent} onMouseLeave={closeAgent}>
            <button className={`nb-link${dropAgent ? ' active' : ''}`} aria-expanded={dropAgent} aria-haspopup="true">
              Agents IA <ChevronIcon open={dropAgent} />
            </button>
            {dropAgent && (
              <div
                className="nb-drop"
                role="menu"
                style={{ left: 0, width: 540, padding: 8 }}
                onMouseEnter={openAgent} onMouseLeave={closeAgent}
              >
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 0 }}>
                  {agentMetiers.map((m) => (
                    <a key={m.title} href={m.href} role="menuitem" className="nb-drop-item">
                      <div className="nb-drop-item-icon">
                        <AgentIcon />
                      </div>
                      <div>
                        <div className="nb-drop-item-label">{m.title}</div>
                        <div className="nb-drop-item-desc">{m.desc}</div>
                      </div>
                    </a>
                  ))}
                </div>
                <div className="nb-drop-footer">
                  <span style={{ fontSize: 13, color: '#a1a1aa' }}>10 agents métiers disponibles</span>
                  <a href="/agent-ia/" className="nb-drop-footer-link">
                    Voir tous les agents <ArrowIcon />
                  </a>
                </div>
              </div>
            )}
          </div>

          {/* Services dropdown */}
          <div style={{ position: 'relative' }} onMouseEnter={openServ} onMouseLeave={closeServ}>
            <button className={`nb-link${dropServ ? ' active' : ''}`} aria-expanded={dropServ} aria-haspopup="true">
              Services <ChevronIcon open={dropServ} />
            </button>
            {dropServ && (
              <div
                className="nb-drop"
                role="menu"
                style={{ left: 0, width: 520, padding: 8 }}
                onMouseEnter={openServ} onMouseLeave={closeServ}
              >
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 0 }}>
                  {navServices.map((s) => (
                    <a key={s.l} href={s.href} role="menuitem" className="nb-drop-item">
                      <div className="nb-drop-item-icon">
                        <ServiceIcon />
                      </div>
                      <div>
                        <div className="nb-drop-item-label">{s.l}</div>
                        <div className="nb-drop-item-desc">{s.desc}</div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>

          <a href="/services/formation-ia/" className="nb-link">Formation</a>

          {/* Ressources dropdown */}
          <div style={{ position: 'relative' }} onMouseEnter={openRess} onMouseLeave={closeRess}>
            <button className={`nb-link${dropRess ? ' active' : ''}`} aria-expanded={dropRess} aria-haspopup="true">
              Ressources <ChevronIcon open={dropRess} />
            </button>
            {dropRess && (
              <div
                className="nb-drop"
                role="menu"
                style={{ left: 0, width: 300, padding: 8 }}
                onMouseEnter={openRess} onMouseLeave={closeRess}
              >
                {navRessources.map((r) => (
                  <a key={r.l} href={r.href} role="menuitem" className="nb-drop-item">
                    <div className="nb-drop-item-icon">
                      {r.href.includes('blog') ? <BlogIcon /> : r.href.includes('cas-clients') ? <CasClientsIcon /> : <CalcIcon />}
                    </div>
                    <div>
                      <div className="nb-drop-item-label">{r.l}</div>
                      <div className="nb-drop-item-desc">{r.desc}</div>
                    </div>
                  </a>
                ))}
              </div>
            )}
          </div>

          {/* CTA */}
          <a href="/contact" className="nb-cta" style={{ marginLeft: 10 }}>
            Parlons de votre projet <ArrowIcon />
          </a>
        </div>

        {/* Burger */}
        <button
          className={`nb-burger${mobileOpen ? ' open' : ''}`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
          aria-expanded={mobileOpen}
        >
          <span className="nb-burger-line" />
          <span className="nb-burger-line" />
          <span className="nb-burger-line" />
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && <MobileMenu onClose={() => setMobileOpen(false)} />}
    </nav>
  );
}

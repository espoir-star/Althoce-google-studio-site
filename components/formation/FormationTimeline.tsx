import React from 'react';

export interface TimelineModule {
  horaire: string;    // "9h30"
  titre: string;      // "Module 1 — Comprendre l'IA générative et les LLM"
  contenu: string[];  // points de contenu (ou paragraphe unique)
  atelier?: {
    label: string;        // "Atelier", "Cas pratique", "Atelier guidé"…
    description: string;
  };
}

interface FormationTimelineProps {
  modules: TimelineModule[];
  accent?: string;
}

/**
 * Timeline verticale du programme d'une journée.
 * Ligne verticale accent à gauche, point de jalon par module, horaire en gras.
 * Encart atelier avec fond teinté pour le distinguer du contenu théorique.
 */
export default function FormationTimeline({ modules, accent = '#2563eb' }: FormationTimelineProps) {
  return (
    <div style={{ position: 'relative', paddingLeft: 32 }}>
      {/* Ligne verticale */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          left: 7,
          top: 6,
          bottom: 6,
          width: 2,
          background: `linear-gradient(to bottom, ${accent}, ${accent}30)`,
          borderRadius: 2,
        }}
      />

      <div style={{ display: 'flex', flexDirection: 'column', gap: 36 }}>
        {modules.map((mod, i) => (
          <div key={i} style={{ position: 'relative' }}>
            {/* Point de jalon */}
            <span
              aria-hidden="true"
              style={{
                position: 'absolute',
                left: -32,
                top: 4,
                width: 16,
                height: 16,
                borderRadius: '50%',
                background: '#fff',
                border: `3px solid ${accent}`,
                boxShadow: '0 0 0 4px #fff',
              }}
            />

            {/* Horaire */}
            <div style={{ fontSize: 14, fontWeight: 800, color: accent, marginBottom: 4, letterSpacing: '-.01em' }}>
              {mod.horaire}
            </div>

            {/* Titre du module */}
            <h3 style={{ fontSize: 18, fontWeight: 800, color: '#09090b', lineHeight: 1.3, letterSpacing: '-.02em', marginBottom: mod.contenu.length ? 12 : 0 }}>
              {mod.titre}
            </h3>

            {/* Contenu */}
            {mod.contenu.length > 0 && (
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 8 }}>
                {mod.contenu.map((point, j) => (
                  <li key={j} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, fontSize: 15, color: '#52525b', lineHeight: 1.65 }}>
                    <span
                      aria-hidden="true"
                      style={{ flexShrink: 0, width: 5, height: 5, borderRadius: '50%', background: accent, marginTop: 8 }}
                    />
                    {point}
                  </li>
                ))}
              </ul>
            )}

            {/* Encart atelier */}
            {mod.atelier && (
              <div
                style={{
                  marginTop: 14,
                  padding: '14px 18px',
                  borderRadius: 12,
                  background: `${accent}08`,
                  border: `1px solid ${accent}22`,
                  borderLeft: `3px solid ${accent}`,
                }}
              >
                <p style={{ fontSize: 12, fontWeight: 800, textTransform: 'uppercase', letterSpacing: '.08em', color: accent, marginBottom: 6 }}>
                  {mod.atelier.label}
                </p>
                <p style={{ fontSize: 14.5, color: '#3f3f46', lineHeight: 1.65, margin: 0 }}>
                  {mod.atelier.description}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

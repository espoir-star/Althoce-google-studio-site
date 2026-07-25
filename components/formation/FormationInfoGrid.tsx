import React from 'react';

export interface FormationInfoItem {
  label: string;  // "Durée"
  value: string;  // "1 journée, 7 heures"
}

interface FormationInfoGridProps {
  items: FormationInfoItem[];
}

/**
 * Grille des infos clés des pages détail. Pas de tableau.
 * 4 colonnes desktop, 2 colonnes tablette, 1 colonne mobile (via .frm-info-grid).
 * Chaque carte : label petit majuscule gris, valeur en font-medium.
 */
export default function FormationInfoGrid({ items }: FormationInfoGridProps) {
  return (
    <div
      className="frm-info-grid"
      style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 12 }}
    >
      {items.map((item, i) => (
        <div
          key={i}
          style={{
            padding: '22px 20px',
            borderRadius: 16,
            border: '1px solid #e4e4e7',
            background: '#fff',
          }}
        >
          <p
            style={{
              fontSize: 11,
              fontWeight: 800,
              textTransform: 'uppercase',
              letterSpacing: '.1em',
              color: '#a1a1aa',
              marginBottom: 8,
            }}
          >
            {item.label}
          </p>
          <p style={{ fontSize: 15, fontWeight: 500, color: '#09090b', lineHeight: 1.5 }}>
            {item.value}
          </p>
        </div>
      ))}
    </div>
  );
}

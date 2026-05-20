'use client';

import React from 'react';

const AC = '#2563eb';

export type CityName =
  | 'Paris' | 'Lyon' | 'Marseille' | 'Toulouse'
  | 'Lille' | 'Nantes' | 'Nice' | 'Strasbourg'
  | 'Montpellier' | 'Bordeaux' | 'Rennes' | 'Reims' | 'Le Havre'
  | 'Saint-Étienne' | 'Toulon' | 'Grenoble' | 'Dijon' | 'Angers' | 'Nîmes' | 'Brest';

export interface FranceMapSVGProps {
  mainCity: CityName;
  presentielLabel: string;
}

// ─────────────────────────────────────────────────────────────
// Silhouette France — 35 points, tracé depuis les vraies frontières
// Système de coordonnées (WGS84 → SVG 100×100) :
//   x = 5 + (lon + 5.0) × 6.5      [-5°W (Brest)=5  ;  8°E (Nice)=92]
//   y = 5 + (51.0 - lat) × 10.0    [51°N (Dunkerque)=5  ;  43°N (Perpignan)=85]
//
// Sens horaire depuis Dunkerque.
// Traits distinctifs présents :
//   • Péninsule du Cotentin (bump nord, ~y=14)
//   • Bretagne (pointe ouest, x≈8, y≈32)
//   • Baie de Gascogne (côte concave)
//   • Pyrénées (S)
//   • Coin Nice (SE, x≈92)
//   • Alpes + Rhin (bord E, x≈88-89)
// ─────────────────────────────────────────────────────────────
const FRANCE =
  // ── Nord-Est : Dunkerque → Ardennes → Strasbourg ──
  '53,5 59,5 65,7 72,11 78,16 84,22 88,29 ' +
  // ── Est : Alsace → Jura suisse → Alpes ──
  '89,40 87,51 87,62 ' +
  // ── Coin SE : Nice / frontière italienne (point le plus à l'est du Sud) ──
  '92,74 ' +
  // ── Côte d'Azur → Provence → Camargue → Perpignan ──
  '83,81 76,84 71,85 62,88 56,89 ' +
  // ── Pyrénées → Pays Basque ──
  '44,87 34,85 27,80 ' +
  // ── Côte Atlantique (remontée vers le nord) ──
  '22,72 20,62 18,50 16,44 ' +
  // ── Bretagne Sud → pointe (x minimum) → Bretagne Nord ──
  '12,39 8,32 10,26 ' +
  // ── Côte Nord-Bretagne → base du Cotentin ──
  '16,24 21,23 ' +
  // ── Péninsule Cotentin : montée, pointe (y minimum), descente ──
  '25,19 27,14 31,18 ' +
  // ── Normandie → Picardie → Dunkerque ──
  '35,20 43,17 48,12 53,5';

// Polygone intérieur légèrement rentré (effet de profondeur)
const FRANCE_INNER =
  '54,8 59,8 64,9 71,13 77,18 83,24 86,30 ' +
  '87,41 85,52 85,63 ' +
  '90,74 ' +
  '81,80 74,83 69,84 61,87 56,88 ' +
  '45,86 35,84 28,79 ' +
  '23,71 21,62 19,51 17,45 ' +
  '13,40 9,34 11,27 ' +
  '17,25 22,24 ' +
  '26,20 28,16 32,19 ' +
  '36,21 43,18 48,13 54,8';

// ─────────────────────────────────────────────────────────────
// Coordonnées villes (lat/lon → SVG, mêmes formules)
// ─────────────────────────────────────────────────────────────
const CITY_COORDS: Record<CityName, [number, number]> = {
  Paris:        [53, 27],   // 48.85°N  2.35°E
  Lille:        [57,  9],   // 50.63°N  3.06°E
  Strasbourg:   [86, 29],   // 48.57°N  7.75°E
  Nantes:       [27, 43],   // 47.22°N -1.55°W
  Lyon:         [69, 58],   // 45.75°N  4.84°E
  Bordeaux:     [33, 67],   // 44.84°N -0.58°W
  Toulouse:     [47, 79],   // 43.60°N  1.44°E
  Marseille:    [72, 82],   // 43.30°N  5.37°E
  Nice:         [85, 77],   // 43.70°N  7.26°E
  Montpellier:  [63, 79],   // 43.61°N  3.88°E
  Rennes:         [27, 34],   // 48.12°N -1.68°W
  Reims:          [64, 22],   // 49.26°N  4.03°E
  'Le Havre':     [38, 20],   // 49.49°N  0.11°E
  'Saint-Étienne':[66, 61],   // 45.44°N  4.39°E
  Toulon:         [76, 84],   // 43.12°N  5.93°E
  Grenoble:       [75, 63],   // 45.19°N  5.72°E
  Dijon:          [70, 42],   // 47.32°N  5.04°E
  Angers:         [34, 40],   // 47.48°N -0.56°W
  Nîmes:          [66, 77],   // 43.84°N  4.36°E
  Brest:          [ 8, 31],   // 48.39°N -4.49°W
};

// ─────────────────────────────────────────────────────────────
// Label ville principale [textX, textY, fontSize, lx1, ly1, lx2, ly2]
// Chaque ville : label positionné pour rester lisible et à l'intérieur
// ─────────────────────────────────────────────────────────────
const MAIN_LABELS: Record<CityName, [number, number, number, number, number, number, number]> = {
  Paris:        [35, 21, 4.5,  53, 27, 42, 22],
  Lille:        [35, 18, 4.5,  57,  9, 43, 17],
  Strasbourg:   [51, 25,   4,  85, 29, 62, 26],   // label à gauche
  Nantes:       [30, 41, 4.5,  27, 43, 30, 42],
  Lyon:         [51, 54, 4.5,  69, 58, 57, 55],
  Bordeaux:     [36, 65, 4.5,  33, 67, 36, 66],
  Toulouse:     [29, 73, 4.5,  47, 79, 35, 74],
  Marseille:    [50, 77, 4.5,  72, 82, 59, 78],
  Nice:         [62, 73,   4,  85, 77, 69, 74],   // label à gauche
  Montpellier:  [43, 73,   4,  63, 79, 50, 74],   // label au-dessus
  Rennes:           [32, 31, 4.5,  27, 34, 32, 33],   // label à droite
  Reims:            [67, 18,   4,  64, 22, 67, 19],   // label au-dessus droite
  'Le Havre':       [42, 17, 3.5,  38, 20, 42, 18],   // label à droite
  'Saint-Étienne':  [42, 59, 3.5,  66, 61, 53, 60],   // label à gauche
  Toulon:           [55, 83, 3.5,  76, 84, 63, 84],   // label à gauche
  Grenoble:         [58, 67, 3.5,  75, 63, 66, 66],   // label bas-gauche
  Dijon:            [48, 40, 3.8,  70, 42, 58, 41],   // label à gauche
  Angers:           [38, 36, 3.8,  34, 40, 37, 37],   // label droite-haut
  Nîmes:            [54, 72, 3.5,  66, 77, 61, 73],   // label gauche-haut
  Brest:            [12, 28, 3.5,   8, 31,  12, 29],  // label droite (pointe ouest)
};

export function FranceMapSVG({ mainCity, presentielLabel }: FranceMapSVGProps) {
  const [cx, cy] = CITY_COORDS[mainCity];
  const [tx, ty, tfs, lx1, ly1, lx2, ly2] = MAIN_LABELS[mainCity];

  return (
    <div style={{ width: '100%', maxWidth: 400, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 20 }}>
      <svg viewBox="0 0 100 100" style={{ width: '100%', height: 'auto' }} aria-hidden="true">
        {/* Fond France */}
        <polygon
          points={FRANCE}
          fill={`${AC}09`}
          stroke={`${AC}28`}
          strokeWidth="0.65"
          strokeLinejoin="round"
        />
        {/* Couche intérieure — profondeur subtile */}
        <polygon
          points={FRANCE_INNER}
          fill={`${AC}05`}
          stroke="none"
        />

        {/* Villes secondaires — point uniquement */}
        {(Object.entries(CITY_COORDS) as [CityName, [number, number]][]).map(([name, [x, y]]) => {
          if (name === mainCity) return null;
          return (
            <circle key={name} cx={x} cy={y} r="1.3" fill={AC} opacity="0.28" />
          );
        })}

        {/* Ville principale — triple halo + point */}
        <circle cx={cx} cy={cy} r="8"   fill={`${AC}12`} />
        <circle cx={cx} cy={cy} r="4.5" fill={`${AC}24`} />
        <circle cx={cx} cy={cy} r="2"   fill={AC} />

        {/* Nom de la ville principale uniquement */}
        <text
          x={tx} y={ty}
          fontSize={tfs}
          fontWeight="800"
          fill={AC}
          fontFamily="system-ui, -apple-system, sans-serif"
        >
          {mainCity}
        </text>

        {/* Ligne pointillée label → point */}
        <line
          x1={lx1} y1={ly1} x2={lx2} y2={ly2}
          stroke={AC}
          strokeWidth="0.45"
          strokeDasharray="1.5 1"
          opacity="0.55"
        />
      </svg>

      {/* Pills */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8, alignItems: 'center' }}>
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', justifyContent: 'center' }}>
          <div style={{ padding: '5px 14px', borderRadius: 9999, background: '#fff', border: `1.5px solid ${AC}`, fontSize: 11, fontWeight: 800, color: AC, display: 'flex', alignItems: 'center', gap: 5, boxShadow: '0 2px 8px rgba(0,0,0,.08)', whiteSpace: 'nowrap' }}>
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true">
              <circle cx="5" cy="3.5" r="2" stroke={AC} strokeWidth="1.2" />
              <path d="M1 9c0-2 1.8-3.5 4-3.5s4 1.5 4 3.5" stroke={AC} strokeWidth="1.2" strokeLinecap="round" />
            </svg>
            {presentielLabel}
          </div>
          <div style={{ padding: '5px 14px', borderRadius: 9999, background: '#fff', border: '1.5px solid #e4e4e7', fontSize: 11, fontWeight: 800, color: '#52525b', display: 'flex', alignItems: 'center', gap: 5, boxShadow: '0 2px 8px rgba(0,0,0,.08)', whiteSpace: 'nowrap' }}>
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true">
              <rect x="1" y="2" width="8" height="5.5" rx="1.5" stroke="#52525b" strokeWidth="1.2" />
              <path d="M3 8l7-6" stroke="#52525b" strokeWidth="0.8" strokeLinecap="round" opacity="0.4" />
            </svg>
            Distanciel partout
          </div>
        </div>
        <div style={{ fontSize: 10, fontWeight: 700, color: '#a1a1aa', letterSpacing: '.06em', textTransform: 'uppercase' }}>
          +150 PME équipées en France
        </div>
      </div>
    </div>
  );
}

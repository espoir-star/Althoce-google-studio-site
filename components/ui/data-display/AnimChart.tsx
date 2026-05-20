/** Animated SVG chart used in Case Studies section — 4 variants: line, bar, donut, wave. */

const AC = '#2563eb';

interface AnimChartProps {
  type: 'line' | 'bar' | 'donut' | 'wave';
  active: boolean;
}

export function AnimChart({ type, active }: AnimChartProps) {
  if (type === 'line') {
    return (
      <svg width="100%" height="64" viewBox="0 0 200 64" style={{ overflow: 'visible' }}>
        <defs>
          <linearGradient id="lg1" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor={AC} />
            <stop offset="100%" stopColor="#60a5fa" />
          </linearGradient>
        </defs>
        <path
          d="M0 60 L30 50 L60 38 L90 28 L120 15 L150 8 L180 4 L200 2"
          fill="none" stroke="url(#lg1)" strokeWidth="2.5" strokeLinecap="round"
          strokeDasharray="300" strokeDashoffset={active ? 0 : 300}
          style={{ transition: 'stroke-dashoffset 1.4s ease' }}
        />
        {active && ([0, 60, 120, 180] as number[]).map((x, i) => (
          <circle key={i} cx={x} cy={[60, 38, 15, 4][i]} r="3.5" fill={AC}
            style={{ animation: `pulseDot 2s ${i * 0.3}s ease infinite` }} />
        ))}
      </svg>
    );
  }

  if (type === 'bar') {
    return (
      <svg width="100%" height="64" viewBox="0 0 200 64">
        {([0, 1, 2, 3, 4, 5] as number[]).map((i) => (
          <rect
            key={i}
            x={i * 34 + 2} y={active ? 64 - [20, 35, 25, 50, 40, 62][i] : 64}
            width={28} height={active ? [20, 35, 25, 50, 40, 62][i] : 0}
            rx="4" fill={i === 5 ? AC : `${AC}55`}
            style={{ transition: `all .7s ${i * 0.1 + 0.2}s ease` }}
          />
        ))}
      </svg>
    );
  }

  if (type === 'donut') {
    return (
      <svg width="64" height="64" viewBox="0 0 64 64">
        <circle cx="32" cy="32" r="26" fill="none" stroke="#1e1e1e" strokeWidth="8" />
        <circle
          cx="32" cy="32" r="26" fill="none" stroke={AC} strokeWidth="8" strokeLinecap="round"
          strokeDasharray="163" strokeDashoffset={active ? 40 : 163}
          style={{ transition: 'stroke-dashoffset 1.2s .3s ease', transformOrigin: 'center', transform: 'rotate(-90deg)' }}
        />
        <text x="32" y="37" textAnchor="middle" fontSize="12" fontWeight="800" fill="#fff">70h</text>
      </svg>
    );
  }

  if (type === 'wave') {
    return (
      <svg width="100%" height="64" viewBox="0 0 200 64">
        <defs>
          <linearGradient id="wg" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={AC} stopOpacity=".6" />
            <stop offset="100%" stopColor={AC} stopOpacity="0" />
          </linearGradient>
        </defs>
        <path
          d="M0 40 Q25 20 50 35 Q75 50 100 30 Q125 10 150 25 Q175 40 200 20 L200 64 L0 64 Z"
          fill="url(#wg)" opacity={active ? 1 : 0}
          style={{ transition: 'opacity .8s .3s ease' }}
        />
        <path
          d="M0 40 Q25 20 50 35 Q75 50 100 30 Q125 10 150 25 Q175 40 200 20"
          fill="none" stroke={AC} strokeWidth="2"
          strokeDasharray="300" strokeDashoffset={active ? 0 : 300}
          style={{ transition: 'stroke-dashoffset 1.2s ease' }}
        />
      </svg>
    );
  }

  return null;
}

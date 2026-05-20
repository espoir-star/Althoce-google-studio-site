/** AL monogram logo — used in Navbar (dark) and Footer (white variant). */

interface LogoProps {
  /** 'dark' renders black strokes; 'white' renders white strokes. */
  variant?: 'dark' | 'white';
  size?: number;
}

export function Logo({ variant = 'dark', size = 36 }: LogoProps) {
  const fill = variant === 'white' ? '#fff' : '#09090b';
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" aria-label="Althoce logo" role="img">
      <rect x="10" y="15" width="20" height="70" fill={fill} rx="3" />
      <path d="M45 15 L65 15 L65 50 L80 50 L62.5 85 L45 50 L45 15 Z" fill={fill} />
      <circle cx="42" cy="50" r="7" fill="#2563eb" />
    </svg>
  );
}

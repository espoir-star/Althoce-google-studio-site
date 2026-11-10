import { ImageResponse } from 'next/og';

export const alt = 'La Centrale by Althoce. Vos agents IA, chez vous, sur une seule plateforme.';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function Image() {
  return new ImageResponse(<div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', width: '100%', height: '100%', padding: '64px 72px', background: '#f1f6ff', color: '#102b52', fontFamily: 'sans-serif' }}>
    <div style={{ display: 'flex', alignItems: 'center', gap: 18, fontSize: 28 }}><span style={{ background: '#2563eb', width: 18, height: 18, borderRadius: 18 }} /><span>La Centrale by Althoce</span></div>
    <div style={{ display: 'flex', flexDirection: 'column', fontSize: 65, fontWeight: 700, letterSpacing: -3, lineHeight: 1.12 }}><span>Vos agents IA, chez vous,</span><span style={{ color: '#2563eb' }}>sur une seule plateforme.</span></div>
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid #bbceeb', paddingTop: 28, fontSize: 23 }}><span>Sur mesure · Reliée à vos outils · Évolutive</span><span>althoce.com</span></div>
  </div>, size);
}

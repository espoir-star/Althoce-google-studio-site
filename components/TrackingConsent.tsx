'use client';
import { useEffect, useState } from 'react';
import MetaPixel from './MetaPixel';
import { Cookie, ArrowUpRight } from 'lucide-react';
import styles from './TrackingConsent.module.css';
export const CONSENT_KEY = 'althoce-marketing-consent';
export default function TrackingConsent() {
  const [choice, setChoice] = useState<string | null>(null);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    try { const saved = localStorage.getItem(CONSENT_KEY); setChoice(saved); setOpen(saved !== 'yes' && saved !== 'no'); } catch { setOpen(true); }
    const show = () => setOpen(true);
    window.addEventListener('althoce:cookie-settings', show);
    return () => window.removeEventListener('althoce:cookie-settings', show);
  }, []);
  function save(value: 'yes' | 'no') {
    try { localStorage.setItem(CONSENT_KEY, value); } catch { /* Consent remains limited to this page. */ }
    if (value === 'no' && choice === 'yes') {
      const fbq = (window as unknown as { fbq?: (...args: unknown[]) => void }).fbq;
      fbq?.('consent', 'revoke');
      for (const name of ['_fbp', '_fbc']) {
        for (const domain of ['', location.hostname, '.' + location.hostname])
          document.cookie = `${name}=; Max-Age=0; path=/;${domain ? ` domain=${domain};` : ''} SameSite=Lax`;
      }
      window.location.reload();
    }
    setChoice(value); setOpen(false);
  }
  return <>
    {choice === 'yes' && <MetaPixel />}
    {open && <section className={styles.panel} aria-label="Préférences de confidentialité">
      <div className={styles.content}>
        <div className={styles.heading}><span className={styles.icon}><Cookie size={22} strokeWidth={1.6} aria-hidden="true" /></span><h2>Les cookies, à votre façon.</h2></div>
        <p>Avec votre accord, nous utilisons des cookies pour mesurer l’audience du site et l’efficacité de nos campagnes.</p>
        <a className={styles.link} href="/confidentialite/">En savoir plus sur les cookies <ArrowUpRight size={14} aria-hidden="true" /></a>
      </div>
      <div className={styles.footer}>
        <div className={styles.actions}><button type="button" onClick={() => save('no')}>Refuser</button><button type="button" onClick={() => save('yes')}>Accepter</button></div>
        <p className={styles.note}>Votre choix reste modifiable à tout moment.</p>
      </div>
    </section>}
  </>;
}

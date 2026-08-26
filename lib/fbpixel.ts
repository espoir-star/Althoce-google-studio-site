/**
 * Helper sûr pour déclencher un événement du pixel Meta.
 * `fbq` est installé globalement par components/MetaPixel.tsx ; la file d'attente
 * du pixel accepte les appels même avant le chargement complet de fbevents.js,
 * donc un appel précoce n'est jamais perdu.
 */
type FbqParams = Record<string, unknown>;

export function trackFb(event: string, params?: FbqParams): void {
  if (typeof window === 'undefined') return;
  const fbq = (window as unknown as { fbq?: (...args: unknown[]) => void }).fbq;
  if (typeof fbq !== 'function') return;
  if (params) fbq('track', event, params);
  else fbq('track', event);
}

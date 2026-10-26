'use client';
import { createContext, useContext, useId, useState, type ReactNode } from 'react';
import { ArrowUpRight, Check } from 'lucide-react';
import { trackConnectorClick } from '@/lib/analytics';
import { CONNECTOR_BOOKING_URL, PENNYLANE_TRIAL_URL, SEAT_OPTIONS, pennylane, type Seats } from '@/lib/connectors-content';
import b from '../brand/Brand.module.css';
import s from './Connectors.module.css';

/* Un seul choix « 1 à 10 / Plus de 10 » pour toute la page : en-tête, tarif et dernier appel. */
const SeatsContext = createContext<{ seats: Seats; setSeats: (v: Seats) => void }>({ seats: 'small', setSeats: () => {} });

export function OfferChoiceProvider({ children }: { children: ReactNode }) {
  const [seats, setSeats] = useState<Seats>('small');
  return <SeatsContext.Provider value={{ seats, setSeats }}>{children}</SeatsContext.Provider>;
}

export function SeatChoice({ tone = 'light' }: { tone?: 'light' | 'dark' }) {
  const { seats, setSeats } = useContext(SeatsContext);
  const name = useId();
  return <fieldset className={`${s.seatChoice} ${tone === 'dark' ? s.seatChoiceDark : ''}`}>
    <legend>Combien de personnes du cabinet utiliseront le connecteur&nbsp;?</legend>
    <div className={s.seatOptions}>{SEAT_OPTIONS.map(o => <label key={o.value} className={seats === o.value ? s.seatActive : undefined}>
      <input type="radio" name={name} value={o.value} checked={seats === o.value} onChange={() => setSeats(o.value)} />{o.label}
    </label>)}</div>
  </fieldset>;
}

export function TrialLink({ placement, children, className }: { placement: string; children: ReactNode; className?: string }) {
  return <a className={className} href={PENNYLANE_TRIAL_URL} target="_blank" rel="noopener noreferrer" onClick={() => trackConnectorClick('pennylane', 'essai', placement)}>{children}</a>;
}

export function BookingLink({ placement, children, className, connector = 'pennylane' }: { placement: string; children: ReactNode; className?: string; connector?: 'pennylane' | 'hub' }) {
  return <a className={className} href={CONNECTOR_BOOKING_URL} target="_blank" rel="noopener noreferrer" onClick={() => trackConnectorClick(connector, 'rendez_vous', placement)}>{children}</a>;
}

/** Bouton principal : essai Stripe (1 à 10) ou rendez-vous (plus de 10), avec sa mention. */
export function OfferButton({ placement, showNote = true }: { placement: string; showNote?: boolean }) {
  const { seats } = useContext(SeatsContext);
  const arrow = <ArrowUpRight size={18} aria-hidden="true" />;
  return <div className={s.offerAction} aria-live="polite">
    {seats === 'small'
      ? <TrialLink placement={placement} className={b.primary}>Démarrer l’essai gratuit de 7 jours{arrow}</TrialLink>
      : <BookingLink placement={placement} className={b.primary}>Prendre rendez-vous{arrow}</BookingLink>}
    {showNote && <p className={s.offerNote}>{seats === 'small' ? `Essai gratuit de 7 jours, sans engagement. Puis ${pennylane.priceHt} € HT par mois.` : 'Nous regardons ensemble vos dossiers, vos logiciels et le nombre de comptes.'}</p>}
  </div>;
}

/** Lien discret vers l'autre parcours, sous le dernier appel à l'action. */
export function OtherPath({ placement }: { placement: string }) {
  const { seats } = useContext(SeatsContext);
  return <p className={s.otherPath}>{seats === 'small'
    ? <>Plus de 10 personnes&nbsp;? <BookingLink placement={placement}>Prendre rendez-vous</BookingLink></>
    : <>De 1 à 10 personnes&nbsp;? <TrialLink placement={placement}>Démarrer l’essai gratuit de 7 jours</TrialLink></>}</p>;
}

/** Les deux cartes du tarif : la carte qui correspond au choix est mise en avant. */
export function PricingCards() {
  const { seats } = useContext(SeatsContext);
  const arrow = <ArrowUpRight size={18} aria-hidden="true" />;
  return <div className={s.pricing}>
    <article className={`${s.priceCard} ${seats === 'small' ? s.priceCardActive : ''}`} aria-labelledby="price-small">
      <h3 id="price-small">1 à 10 collaborateurs</h3>
      <p className={s.price}><strong>{pennylane.priceHt}&nbsp;€&nbsp;HT</strong> par mois et par cabinet</p>
      <p className={s.priceTtc}>soit {pennylane.priceTtc}&nbsp;€ TTC</p>
      <ul>{pennylane.smallOffer.map(item => <li key={item}><Check size={18} aria-hidden="true" /><span>{item}</span></li>)}</ul>
      <TrialLink placement="tarif" className={b.primary}>Démarrer l’essai gratuit de 7 jours{arrow}</TrialLink>
    </article>
    <article className={`${s.priceCard} ${seats === 'large' ? s.priceCardActive : ''}`} aria-labelledby="price-large">
      <h3 id="price-large">Plus de 10 collaborateurs</h3>
      <p className={s.price}><strong>Sur rendez-vous</strong></p>
      <p className={s.priceTtc}>Selon vos dossiers, vos logiciels et le nombre de comptes</p>
      <ul>{pennylane.largeOffer.map(item => <li key={item}><Check size={18} aria-hidden="true" /><span>{item}</span></li>)}</ul>
      <BookingLink placement="tarif" className={b.primary}>Prendre rendez-vous{arrow}</BookingLink>
    </article>
  </div>;
}

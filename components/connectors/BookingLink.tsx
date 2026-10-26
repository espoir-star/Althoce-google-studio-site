'use client';
import type { ReactNode } from 'react';
import { trackConnectorClick } from '@/lib/analytics';
import { CONNECTOR_BOOKING_URL } from '@/lib/connectors-content';

/** Lien de rendez-vous avec un conseiller (calendrier connecteurs), mesuré après consentement. */
export function BookingLink({ placement, children, className, connector = 'pennylane' }: { placement: string; children: ReactNode; className?: string; connector?: 'pennylane' | 'hub' }) {
  return <a className={className} href={CONNECTOR_BOOKING_URL} target="_blank" rel="noopener noreferrer" onClick={() => trackConnectorClick(connector, 'rendez_vous', placement)}>{children}</a>;
}

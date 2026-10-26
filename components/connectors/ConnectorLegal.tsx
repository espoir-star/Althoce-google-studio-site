import { CONNECTOR_CGV_URL } from '@/lib/connectors-content';
import s from './Connectors.module.css';

/** Mentions propres à l'offre connecteur : société, contact, CGV et marques. */
export function ConnectorLegal() {
  return <section className={s.legal} aria-label="Informations légales du connecteur"><div className={s.legalInner}>
    <p>Althoce Conseil, SAS, 5 rue Fénelon, 33000 Bordeaux. Contact : <a href="mailto:espoir@contact.althoce.com">espoir@contact.althoce.com</a></p>
    <p className={s.legalLinks}>
      {CONNECTOR_CGV_URL ? <a href={CONNECTOR_CGV_URL}>CGV</a> : <span>CGV : à publier</span>}
      <a href="/mentions-legales/">Mentions légales</a>
      <a href="/confidentialite/">Confidentialité</a>
    </p>
    <p>Pennylane est une marque de Pennylane SAS et Claude un produit d’Anthropic. Althoce n’est affilié à aucune de ces sociétés.</p>
  </div></section>;
}

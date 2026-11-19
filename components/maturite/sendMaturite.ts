import type { Answers, Profile } from '@/lib/maturite/questions';

/** Coordonnées saisies dans le test. Gardées en mémoire le temps de la visite, jamais dans le stockage du navigateur. */
export type Contact = { prenom: string; nom: string; email: string; telephone: string; entreprise: string };
export const emptyContact = (): Contact => ({ prenom: '', nom: '', email: '', telephone: '', entreprise: '' });

/** Choix faits dans la demande de plan : être rappelé par un expert, s’opposer aux communications d’Althoce. */
export type PlanChoices = { rappel: boolean; oppositionMarketing: boolean };

/** `plan` : ouverture du plan d’action. `echange` : demande de rendez-vous. Le serveur recalcule le résultat. */
export async function sendMaturite(demande: 'plan' | 'echange', contact: Contact, consent: boolean, profile: Profile, answers: Answers, choices?: PlanChoices): Promise<{ ok: boolean; error?: string }> {
  try {
    const response = await fetch('/api/maturite-lead/', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({
      demande, ...contact, consentement_rgpd: consent, profil: profile, reponses: answers, source_url: location.origin + location.pathname,
      ...(choices ? { rappel: choices.rappel, opposition_marketing: choices.oppositionMarketing } : {}),
    }) });
    const result = await response.json().catch(() => null);
    return response.ok && result?.ok === true ? { ok: true } : { ok: false, error: typeof result?.error === 'string' ? result.error : 'Envoi impossible. Veuillez réessayer.' };
  } catch { return { ok: false, error: 'Connexion impossible. Votre résultat reste affiché. Réessayez dans un instant.' }; }
}

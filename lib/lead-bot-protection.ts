import { checkBotId } from 'botid/server';
import { LeadError } from './lead-security';

export async function verifyLeadHuman(): Promise<void> {
  try {
    const result = await checkBotId({ advancedOptions: { checkLevel: 'basic' } });
    if (result.isBot) throw new LeadError(403, 'Votre demande n’a pas pu être vérifiée. Réessayez depuis le formulaire ou contactez-nous par email.');
  } catch (error) {
    if (error instanceof LeadError) throw error;
    // Never forward a lead when verification is unavailable.
    throw new LeadError(503, 'Vérification momentanément indisponible. Réessayez ou contactez-nous par email.');
  }
}

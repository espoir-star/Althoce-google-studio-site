import type { Metadata } from 'next';
import CalculateurROIPageClient from '@/components/CalculateurROIPageClient';

export const metadata: Metadata = {
  title: 'Calculateur ROI Agents IA | Althoce',
  description: "Calculez en 3 minutes les économies qu'un agent IA Althoce ferait à votre entreprise. Méthodologie transparente, hypothèses visibles.",
};

export default function CalculateurROIPage() {
  return <CalculateurROIPageClient />;
}

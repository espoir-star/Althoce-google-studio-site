import type { Metadata } from 'next';
import CalculateurROIPageClient from '@/components/CalculateurROIPageClient';

export const metadata: Metadata = {
  title: 'Calculateur ROI Agents IA',
  description: "Estimez le temps que des usages IA sur mesure pourraient libérer dans votre entreprise. Simulation indicative, hypothèses et coûts du modèle visibles.",
  alternates: { canonical: 'https://althoce.com/calculateur-roi/' },
};

export default function CalculateurROIPage() {
  return <CalculateurROIPageClient />;
}

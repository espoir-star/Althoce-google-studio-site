// Categories are independent of URLs, so established URLs stay stable.
export const sectorNavigation = [
  { label: 'Finance', href: '/secteurs/finance/' },
  { label: 'Droit', href: '/secteurs/droit/' },
  { label: 'Santé & médical', href: '/secteurs/medical/' },
  { label: 'Assurance & patrimoine', href: '/secteurs/assurance-patrimoine/' },
  { label: 'Immobilier', href: '/secteurs/immobilier/' },
  { label: 'Commerce', href: '/secteurs/commerce-distribution/' },
  { label: 'Hôtellerie', href: '/secteurs/hotellerie/' },
  { label: 'Retail & luxe', href: '/secteurs/retail-luxe/' },
  { label: 'Industrie', href: '/secteurs/industrie/' },
  { label: 'Agences marketing', href: '/secteurs/marketing-communication/' },
  { label: 'Associations', href: '/secteurs/associations/' },
];
export const professionalMetierNavigation = [
  { label: 'Expert-comptable', href: '/secteurs/comptabilite/', description: 'Collecte, rapprochement bancaire, lettrage et révision du cabinet.' },
];
export const metierNavigation = [
  ...professionalMetierNavigation,
  { label: 'Commercial & prospection', href: '/agent-ia/commercial/' },
  { label: 'Marketing & communication', href: '/agent-ia/marketing/' },
  { label: 'Finance & comptabilité interne', href: '/agent-ia/finance/' },
  { label: 'Opérations & ADV', href: '/agent-ia/operations/' },
  { label: 'Juridique & contrats', href: '/agent-ia/juridique/' },
  { label: 'Ressources humaines', href: '/agent-ia/rh/' },
  { label: 'Service client & support', href: '/agent-ia/service-client/' },
  { label: 'Achats & fournisseurs', href: '/agent-ia/achats/' },
  { label: 'Accueil téléphonique', href: '/agent-ia/telephonique/' },
];

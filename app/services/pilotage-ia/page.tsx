import type { Metadata } from 'next';
import Footer from '@/components/Footer';
import ServiceSchema from '@/components/services/ServiceSchema';
import ServicePage from '@/components/services/ServicePage';
import { serviceStories } from '@/lib/services-content';
const description = 'Pilotage IA et maintenance pour PME : suivi des usages, fiabilité des agents et automatisations, évolutions et accompagnement des équipes avec Althoce.';
export const metadata: Metadata = {
  title: 'Pilotage IA & maintenance des agents et automatisations',
  description,
  keywords: ['pilotage IA', 'maintenance IA', 'maintenance agents IA', 'suivi automatisation IA', 'accompagnement IA PME'],
  alternates: { canonical: 'https://althoce.com/services/pilotage-ia/' },
  openGraph: { title: 'Pilotage IA & maintenance | Althoce', description, type: 'website', locale: 'fr_FR', url: 'https://althoce.com/services/pilotage-ia/', images: [{url:'/og-default.png',width:1200,height:630,alt:'Althoce — Pilotage IA et maintenance pour PME'}] },
  twitter: { card:'summary_large_image',title:'Pilotage IA & maintenance | Althoce',description },
};
const service = serviceStories.find(item => item.slug === 'pilotage-ia')!;
export default function Page() { return <><ServiceSchema service={service} /><ServicePage service={service} /><Footer showCta={true} /></>; }

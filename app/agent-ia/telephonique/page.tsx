import type { Metadata } from 'next';
import MetierPage from '@/components/metiers/MetierPage';
import MetierSchema from '@/components/metiers/MetierSchema';
import Footer from '@/components/Footer';
import {metierStories} from '@/lib/metiers-content';
const story=metierStories.find(x=>x.slug==="telephonique")!;
const url=`https://althoce.com/agent-ia/${story.slug}/`;
export const metadata: Metadata = {
 title: "Agent IA téléphonique : réception d'appels",
 description: story.intro,
 keywords: ['agent IA téléphonique', 'agent IA vocal', 'IA standard téléphonique', 'répondeur IA intelligent', 'voicebot français', 'automatisation appels', 'agent vocal IA', 'IA rappels automatiques'],
 alternates:{canonical:url},
 openGraph:{title:`${story.name} sur mesure | Althoce`,description:story.intro,url,type:'website',locale:'fr_FR',images:[{url:`/images/services/${story.image}.webp`,alt:story.name}]},
 twitter:{card:'summary_large_image',title:`${story.name} sur mesure | Althoce`,description:story.intro},
};
export default function Page(){return <><MetierSchema story={story}/><MetierPage story={story}/><Footer showCta={false}/></>}

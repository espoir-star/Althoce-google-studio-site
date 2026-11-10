import type { Metadata } from 'next';
import MetierPage from '@/components/metiers/MetierPage';
import MetierSchema from '@/components/metiers/MetierSchema';
import Footer from '@/components/Footer';
import {metierStories} from '@/lib/metiers-content';
const story=metierStories.find(x=>x.slug==="juridique")!;
const url=`https://althoce.com/agent-ia/${story.slug}/`;
export const metadata: Metadata = {
 title: `${story.name} sur mesure : usages et contrôles`,
 description: story.description,
 keywords: ['agent IA juridique', 'IA pour juriste', 'analyse contrat IA', 'veille réglementaire IA', 'IA pour cabinet d\'avocats', 'IA pour direction juridique', 'rédaction documents juridiques IA'],
 alternates:{canonical:url},
 openGraph:{title:`${story.name} sur mesure | Althoce`,description:story.description,url,type:'website',locale:'fr_FR',images:[{url:`/images/services/${story.image}.webp`,alt:story.name}]},
 twitter:{card:'summary_large_image',title:`${story.name} sur mesure | Althoce`,description:story.description},
};
export default function Page(){return <><MetierSchema story={story}/><MetierPage story={story}/><Footer showCta={false}/></>}

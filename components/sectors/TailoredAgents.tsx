import { Compass, Cable, Users } from 'lucide-react';
import b from '@/components/brand/Brand.module.css';
import s from './Sectors.module.css';

export default function TailoredAgents() {
  return <section className={b.section}><div className={b.container}>
    <div className={s.heading}><h2>Vos agents IA.<br/><span>Conçus sur mesure.</span></h2><p>Votre organisation ne ressemble à aucune autre. Nous concevons des agents IA et des automatisations autour de vos processus, de vos outils et des personnes qui les utilisent.</p></div>
    <div className={s.hubPillars}>
      <article><Compass size={26} aria-hidden="true"/><h3>Votre façon de travailler</h3><p>Nous observons le quotidien de l’équipe pour définir ce que l’agent doit préparer et ce qui reste à valider.</p></article>
      <article><Cable size={26} aria-hidden="true"/><h3>Vos outils, vos règles</h3><p>Les connexions, les données accessibles et les consignes sont définies avec vous.</p></article>
      <article><Users size={26} aria-hidden="true"/><h3>Des essais avec l’équipe</h3><p>Nous testons en situation, ajustons les réponses et accompagnons la prise en main puis le suivi.</p></article>
    </div>
  </div></section>;
}

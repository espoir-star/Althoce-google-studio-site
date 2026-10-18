import { Compass, Cable, Users } from 'lucide-react';
import b from '@/components/brand/Brand.module.css';
import s from './Sectors.module.css';

export default function TailoredAgents() {
  return <section className={b.section}><div className={b.container}>
    <div className={s.heading}><h2>Vos agents IA.<br/><span>Conçus sur mesure.</span></h2><p>Confidentialité, traçabilité, responsabilités : les exigences de votre activité guident la conception. Nous créons vos agents IA et automatisations autour de vos processus et des outils déjà en place.</p></div>
    <div className={s.hubPillars}>
      <article><Compass size={26} aria-hidden="true"/><h3>Votre façon de travailler</h3><p>Nous observons le quotidien de l’équipe pour définir ce que l’agent doit préparer et ce qui reste à valider.</p></article>
      <article><Cable size={26} aria-hidden="true"/><h3>Vos outils, vos règles</h3><p>Nous définissons les connexions, les données autorisées et les validations, en tenant compte de vos obligations professionnelles.</p></article>
      <article><Users size={26} aria-hidden="true"/><h3>Des essais avec l’équipe</h3><p>Nous testons en situation, ajustons les réponses et accompagnons la prise en main puis le suivi.</p></article>
    </div>
  </div></section>;
}

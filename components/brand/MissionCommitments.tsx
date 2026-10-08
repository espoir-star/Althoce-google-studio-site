import { SlidersHorizontal, UsersRound, RefreshCw } from 'lucide-react';
import s from './MissionCommitments.module.css';

const commitments = [
  { title: 'Conçus sur mesure', description: 'Des agents IA adaptés à vos outils, à vos contraintes et à votre façon de travailler.', Icon: SlidersHorizontal },
  { title: 'Transmis à vos équipes', description: 'Des formations et des repères concrets pour prendre la main au quotidien.', Icon: UsersRound },
  { title: 'Suivis dans la durée', description: 'Un accompagnement après la livraison pour ajuster les usages avec vous.', Icon: RefreshCw },
];

export default function MissionCommitments() {
  return <ul className={s.commitments} aria-label="Notre façon de vous accompagner">
    {commitments.map(({ title, description, Icon }) => <li key={title}>
      <span className={s.icon}><Icon size={21} strokeWidth={1.6} aria-hidden="true" /></span>
      <div><h3>{title}</h3><p>{description}</p></div>
    </li>)}
  </ul>;
}

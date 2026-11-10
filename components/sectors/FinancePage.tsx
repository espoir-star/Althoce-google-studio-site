import Image from 'next/image';
import { ArrowUpRight, Check } from 'lucide-react';
import { FaqSection, PreAuditCTA, TextLink } from '@/components/brand/Sections';
import ResourceSection from '@/components/resources/ResourceSection';
import { financeFaq } from '@/lib/resources';
import b from '@/components/brand/Brand.module.css';
import s from '@/components/expertise/Expertise.module.css';
export default function FinancePage() {
  return (
    <main className={b.page}>
      <section className={s.hero}>
        <div className={`${b.container} ${s.heroGrid}`}>
          <div>
            <nav className={b.breadcrumb} aria-label="Fil d’Ariane">
              <a href="/">Accueil</a>
              <span>/</span>
              <a href="/agent-ia/">Usages IA par métier</a>
              <span>/</span>
              <span aria-current="page">Direction financière</span>
            </nav>
            <p className={s.audience}>DAF · Responsables financiers · Contrôle de gestion</p>
            <h1>
              L’IA pour votre direction financière.
              <span>Des sources fiables pour préparer vos décisions.</span>
            </h1>
            <p className={b.lead}>
              Avant le commentaire de gestion, il y a les exports à réunir, les écarts à expliquer
              et les chiffres à vérifier. Althoce vous aide à choisir les usages utiles, former
              l’équipe et relier l’IA à vos sources financières.
            </p>
            <div className={s.actions}>
              <a href="/contact/" className={b.primary}>
                Parlons de vos priorités
                <ArrowUpRight size={18} aria-hidden="true" />
              </a>
            </div>
          </div>
          <div className={s.photo}>
            <Image
              src="/images/services/metiers-operations.webp"
              alt="Des professionnels préparent la lecture et le contrôle de leurs dossiers au bureau."
              fill
              priority
              sizes="(max-width:800px) 90vw, 46vw"
            />
          </div>
        </div>
      </section>
      <section className={`${b.section} ${s.soft}`}>
        <div className={`${b.container} ${s.split}`}>
          <div>
            <h2>
              Relier les sources.
              <br />
              <span>Rendre les écarts explicables.</span>
            </h2>
            <p className={b.lead}>
              Nous examinons ensemble le logiciel comptable, l’ERP, les tableurs et les pièces
              utilisées pour vos reportings. Le projet doit préciser d’où vient chaque indicateur, à
              quelle période il correspond et qui en valide la lecture.
            </p>
            <div className={s.deliverables}>
              <div>
                <span>01</span>
                <p>Une définition partagée des indicateurs, périodes et périmètres.</p>
              </div>
              <div>
                <span>02</span>
                <p>Des connexions autorisées ou des exports contrôlés, selon les outils.</p>
              </div>
              <div>
                <span>03</span>
                <p>
                  Une préparation des analyses qui conserve les références et signale les inconnues.
                </p>
              </div>
            </div>
          </div>
          <div className={s.dossier}>
            <small>EXEMPLE · PRÉPARATION DU REPORTING</small>
            <p>
              Le réalisé s’écarte du budget. Une partie vient du périmètre, une autre reste à
              expliquer avec les responsables opérationnels.
            </p>
            <div className={s.dossierResult}>
              <h3>Une note de préparation, pas une explication inventée.</h3>
              <ul>
                {[
                  'Chiffres rapprochés de leurs sources',
                  'Variations constatées et calculs à vérifier',
                  'Questions ouvertes pour les responsables',
                ].map((x) => (
                  <li key={x}>
                    <Check size={16} aria-hidden="true" />
                    {x}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className={b.section}>
        <div className={`${b.container} ${s.split}`}>
          <div className={`${s.photo} ${s.photoWide}`}>
            <Image
              src="/images/sectors/finance-formation.webp"
              alt="Des collaborateurs pratiquent ensemble lors d’un atelier sur leurs dossiers financiers."
              fill
              sizes="(max-width:800px) 90vw, 46vw"
            />
          </div>
          <div>
            <h2>
              Faire de la vérification
              <br />
              <span>une compétence partagée.</span>
            </h2>
            <p className={b.lead}>
              Vos équipes apprennent à préparer une analyse, contrôler les calculs et reconnaître
              une information insuffisante. Les exercices s’adaptent aux responsabilités de la
              comptabilité, du contrôle de gestion et de la direction.
            </p>
            <TextLink href="/services/formation-ia/">
              Choisir la formation adaptée à l’équipe
            </TextLink>
            <br />
            <TextLink href="/ia-souveraine/">Étudier une plateforme sous votre contrôle</TextLink>
          </div>
        </div>
      </section>
      <section className={b.section}>
        <div className={b.container}>
          <div className={s.heading}>
            <h2>
              Choisir le bon périmètre
              <br />
              <span>pour commencer.</span>
            </h2>
          </div>
          <div className={s.hubSwitch}>
            <div>
              <h3>Un processus financier à alléger</h3>
              <p>
                Extraction de factures, rapprochement documentaire, suivi des échéances : la page
                métier détaille les données d’entrée, le travail préparé et la validation humaine.
              </p>
              <TextLink href="/agent-ia/finance/">Explorer les agents IA finance</TextLink>
            </div>
            <div>
              <h3>Un cabinet d’expertise comptable</h3>
              <p>
                Vos dossiers multi-clients, vos responsables de mission et votre production
                appellent un autre parcours, de la collecte à la restitution.
              </p>
              <TextLink href="/secteurs/comptabilite/">
                Découvrir le parcours cabinet comptable
              </TextLink>
            </div>
          </div>
        </div>
      </section>
      <ResourceSection
        slugs={['12-agents-ia-direction-financiere', '12-skills-claude-finance']}
        description="Deux ressources pour explorer les tâches et les méthodes de votre direction financière."
      />
      <FaqSection
        id="faq-finance"
        title="Avant de lancer le projet."
        description="Les priorités et les responsabilités de votre équipe financière."
        items={financeFaq}
        showContactLink={false}
      />
      <PreAuditCTA
        title="Quel reporting mérite une autre façon de travailler ?"
        description="Partons de vos sources, de vos contrôles et du temps consacré à la préparation. Le premier échange permet de choisir une priorité réaliste."
      />
    </main>
  );
}

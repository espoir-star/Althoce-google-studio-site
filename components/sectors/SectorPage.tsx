import Image from 'next/image';
import { ArrowUpRight, Check, ShieldCheck } from 'lucide-react';
import { sectorFaq, type SectorStory } from '@/lib/sectors-content';
import ResourceSection from '@/components/resources/ResourceSection';
import WorkflowExamples from '@/components/expertise/WorkflowExamples';
import RelatedExpertise from '@/components/expertise/RelatedExpertise';
import { FaqSection, PreAuditCTA, TextLink } from '@/components/brand/Sections';
import b from '@/components/brand/Brand.module.css';
import s from '@/components/expertise/Expertise.module.css';

export default function SectorPage({ story: d }: { story: SectorStory }) {
  return (
    <main className={b.page}>
      <section className={s.hero}>
        <div className={b.container}>
          <div className={s.heroGrid}>
            <div>
              <nav className={b.breadcrumb} aria-label="Fil d’Ariane">
                <a href="/">Accueil</a>
                <span>/</span>
                <a href="/secteurs/">Secteurs</a>
                <span>/</span>
                <span aria-current="page">{d.name}</span>
              </nav>
              <p className={s.audience}>{d.audience}</p>
              <h1>
                {d.title}.<span>{d.promise}</span>
              </h1>
              <p className={b.lead}>{d.intro}</p>
              <div className={s.actions}>
                <a href="/contact/" className={b.primary}>
                  Parlons de votre organisation
                  <ArrowUpRight size={18} aria-hidden="true" />
                </a>
                <TextLink href="#usages">Voir les situations concrètes</TextLink>
              </div>
            </div>
            <div className={s.photo}>
              <Image
                src={d.image}
                alt={d.imageAlt}
                fill
                priority
                sizes="(max-width:800px) 90vw, 46vw"
              />
            </div>
          </div>
          <div className={s.friction}>
            {d.friction.map((x) => (
              <p key={x}>{x}</p>
            ))}
          </div>
        </div>
      </section>
      <section className={`${b.section} ${s.soft}`}>
        <div className={b.container}>
          <div className={s.split}>
            <div>
              <h2>{d.approach.title}</h2>
              <p className={b.lead}>{d.approach.text}</p>
              <div className={s.deliverables}>
                {d.approach.deliverables.map((x, i) => (
                  <div key={x}>
                    <span>0{i + 1}</span>
                    <p>{x}</p>
                  </div>
                ))}
              </div>
              <TextLink href="/services/agents-ia/">
                Comment nous concevons vos agents sur mesure
              </TextLink>
            </div>
            <aside className={s.boundary}>
              <ShieldCheck size={26} strokeWidth={1.5} aria-hidden="true" />
              <h3>Le cadre fait partie du projet.</h3>
              <p>{d.boundaries}</p>
              {['comptabilite', 'droit', 'industrie'].includes(d.slug) && (
                <TextLink href="/ia-souveraine/">
                  Étudier une plateforme sous votre contrôle
                </TextLink>
              )}
            </aside>
          </div>
          {d.paths && (
            <div className={s.paths}>
              {d.paths.map((p) => (
                <article className={s.path} key={p.id}>
                  <h3>{p.title}</h3>
                  <p>{p.text}</p>
                  <strong>{p.result}</strong>
                  <TextLink href={`#usages-${p.id}`}>Explorer ce parcours</TextLink>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>
      <section className={b.section}>
        <div className={`${b.container} ${s.split}`}>
          <div className={`${s.photo} ${s.photoWide}`}>
            <Image
              src={d.trainingImage}
              alt={`Un atelier de travail en équipe, pour illustrer une formation IA adaptée au secteur ${d.name.toLowerCase()}.`}
              fill
              sizes="(max-width:800px) 90vw, 46vw"
            />
          </div>
          <div>
            <h2>
              Former sur le travail
              <br />
              <span>que vous faites vraiment.</span>
            </h2>
            <p className={b.lead}>{d.training}</p>
            <ul className={s.practice}>
              {d.trainingPractice.map((x) => (
                <li key={x}>
                  <Check size={17} aria-hidden="true" />
                  {x}
                </li>
              ))}
            </ul>
            <TextLink href="/services/formation-ia/">
              Découvrir les formations IA sur mesure
            </TextLink>
          </div>
        </div>
      </section>
      <section id="usages" className={b.section}>
        <div className={b.container}>
          <div className={s.headingRow}>
            <h2>
              Reconnaître une situation.
              <br />
              <span>Imaginer une autre façon de faire.</span>
            </h2>
            <p>
              Voici des scénarios à construire avec vous. Les sources, les connexions et les
              validations se précisent pendant le cadrage.
            </p>
          </div>
          {d.paths ? (
            d.paths.map((p, i) => (
              <div key={p.id}>
                <h3 id={`usages-${p.id}`} className={s.pathHeading}>
                  {p.title}
                </h3>
                <WorkflowExamples
                  id={`scenarios-${p.id}`}
                  items={d.scenarios.slice(i * 2, i * 2 + 2)}
                />
              </div>
            ))
          ) : (
            <WorkflowExamples items={d.scenarios} id={`scenarios-${d.slug}`} />
          )}
          <p className={s.caption}>
            Exemples de périmètres sur mesure. Ils ne constituent pas un catalogue d’agents prêts à
            l’emploi ni des références de projets livrés.
          </p>
        </div>
      </section>
      {d.guides.length > 0 && (
        <ResourceSection
          slugs={d.guides}
          id={`guides-${d.slug}`}
          description={`Des ressources sélectionnées pour prolonger les usages présentés en ${d.name.toLowerCase()}. Les guides s’ouvrent sur leur page de téléchargement.`}
        />
      )}
      <section className={`${b.section} ${s.soft}`}>
        <div className={b.container}>
          {d.caseSlug && (
            <a href={`/cas-clients/${d.caseSlug}/`} className={s.caseLink}>
              <div>
                <span>Un projet à découvrir</span>
                <strong>{d.caseLabel}</strong>
              </div>
              <ArrowUpRight size={23} aria-hidden="true" />
            </a>
          )}
          <div className={s.heading}>
            <h2>
              Approfondir le travail
              <br />
              <span>de vos équipes.</span>
            </h2>
            <p>
              Découvrez les documents à réunir, le travail que l’agent peut préparer et les
              contrôles à organiser pour chaque fonction.
            </p>
          </div>
          <RelatedExpertise type="metiers" slugs={d.related} />
        </div>
      </section>
      <FaqSection
        id={`faq-${d.slug}`}
        title={`L’IA en ${d.name.toLowerCase()} : vos questions.`}
        description="Le périmètre, les données et le bon point de départ."
        items={sectorFaq(d)}
        showContactLink={false}
      />
      <PreAuditCTA
        title="Partons d’un dossier concret."
        description="Parlons d’une tâche qui mobilise votre équipe, des outils utilisés et des exigences à respecter. Ce premier échange nous aide à choisir un point de départ utile."
      />
    </main>
  );
}

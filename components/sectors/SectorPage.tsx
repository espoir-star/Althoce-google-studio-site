import Image from "next/image";
import { ArrowUpRight, Check, ShieldCheck } from "lucide-react";
import { sectorFaq, type SectorStory } from "@/lib/sectors-content";
import { metierStories } from "@/lib/metiers-content";
import ResourceSection from "@/components/resources/ResourceSection";
import WorkflowExamples from "@/components/expertise/WorkflowExamples";
import RelatedExpertise from "@/components/expertise/RelatedExpertise";
import { FaqSection, PreAuditCTA, TextLink } from "@/components/brand/Sections";
import b from "@/components/brand/Brand.module.css";
import s from "@/components/expertise/Expertise.module.css";

export default function SectorPage({ story: d }: { story: SectorStory }) {
  const related = d.related.flatMap((slug) => {
    const metier = metierStories.find((item) => item.slug === slug);
    return metier
      ? [{ label: metier.dossier.label, href: `/agent-ia/${slug}/`, text: "" }]
      : [];
  });
  const reading = [
    ...(d.caseSlug
      ? [{ label: d.caseLabel!, href: `/cas-clients/${d.caseSlug}/`, text: "" }]
      : []),
    ...related,
  ];
  return (
    <main className={b.page}>
      <section className={s.hero}>
        <div className={`${b.container} ${s.heroGrid}`}>
          <div>
            <nav className={b.breadcrumb} aria-label="Fil d’Ariane">
              <a href="/">Accueil</a>
              <span>/</span>
              <a href={d.category === 'metier' ? '/agent-ia/' : '/secteurs/'}>{d.category === 'metier' ? 'Métiers' : 'Secteurs'}</a>
              <span>/</span>
              <span aria-current="page">{d.name}</span>
            </nav>
            <p className={s.audience}>{d.audience}</p>
            <h1>{d.heading}</h1>
            <p className={b.lead}>{d.intro}</p>
            <div className={s.actions}>
              <a href="/contact/" className={b.primary}>
                Parlons de votre projet
                <ArrowUpRight size={18} aria-hidden="true" />
              </a>
              <TextLink href="#usages">Voir les exemples d’agents</TextLink>
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
      </section>
      <section className={`${b.section} ${s.soft}`}>
        <div className={b.container}>
          <div className={s.headingRow}>
            <h2>{d.approach.title}</h2>
            <p>{d.approach.text}</p>
          </div>
          <ul className={s.benefits}>
            {d.approach.deliverables.map((x) => (
              <li key={x}>
                <Check size={20} aria-hidden="true" />
                <p>{x}</p>
              </li>
            ))}
          </ul>
          <p className={s.assurance}>
            <ShieldCheck size={20} aria-hidden="true" />
            <span>{d.boundaries}</span>
          </p>
        </div>
      </section>
      <section className={b.section}>
        <div className={`${b.container} ${s.split}`}>
          <div className={`${s.photo} ${s.photoWide}`}>
            <Image
              src={d.trainingImage}
              alt={d.trainingImageAlt || `Atelier de formation IA en équipe : ${d.name.toLowerCase()}.`}
              fill
              sizes="(max-width:800px) 90vw, 46vw"
            />
          </div>
          <div>
            <h2>Des formations ancrées dans votre quotidien.</h2>
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
              Nos formations IA
            </TextLink>
          </div>
        </div>
      </section>
      <section id="usages" className={`${b.section} ${s.soft}`}>
        <div className={b.container}>
          <div className={s.heading}>
            <h2>{d.usesTitle}</h2>
            <p>
              Des exemples que nous adaptons à vos outils et à votre façon de
              travailler.
            </p>
          </div>
          {d.paths ? (
            d.paths.map((path, i) => (
              <div
                key={path.id}
                id={`usages-${path.id}`}
                className={s.medicalPath}
              >
                <h3>{path.title}</h3>
                <p>{path.text}</p>
                <WorkflowExamples
                  id={`scenarios-${path.id}`}
                  items={d.scenarios.slice(i * 2, i * 2 + 2)}
                />
              </div>
            ))
          ) : (
            <WorkflowExamples items={d.scenarios} id={`scenarios-${d.slug}`} />
          )}
        </div>
      </section>
      {d.guides.length > 0 && (
        <ResourceSection
          slugs={d.guides}
          id={`guides-${d.slug}`}
          title="Nos guides pour passer à la pratique."
          description="Des exemples et des méthodes à explorer avec votre équipe."
        />
      )}
      <FaqSection
        id={`faq-${d.slug}`}
        title="Les questions que vous vous posez."
        description="Pour préparer votre projet IA."
        items={sectorFaq(d)}
        showContactLink={false}
      />
      <PreAuditCTA title={d.cta.title} description={d.cta.description} />
      <div className={b.container}>
        <RelatedExpertise links={reading} />
      </div>
    </main>
  );
}

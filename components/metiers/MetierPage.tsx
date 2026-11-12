import Image from "next/image";
import {
  ArrowUpRight,
  ShieldCheck,
  Megaphone,
  Handshake,
  Headphones,
  Phone,
  Users,
  ReceiptText,
  Settings2,
  Scale,
  ShoppingBag,
} from "lucide-react";
import { FaqSection, PreAuditCTA } from "../brand/Sections";
import ResourceSection from "../resources/ResourceSection";
import WorkflowExamples from "../expertise/WorkflowExamples";
import RelatedExpertise from "../expertise/RelatedExpertise";
import { metierGuideSlugs } from "@/lib/resources";
import { sectorStories } from "@/lib/sectors-content";
import { metierStories, type MetierStory } from "@/lib/metiers-content";
import { professionalMetierNavigation } from '@/lib/solutions-navigation';
import b from "../brand/Brand.module.css";
import s from "../expertise/Expertise.module.css";
const cases: Record<string, { slug: string; label: string }> = {
  marketing: {
    slug: "saas-b2b-agent-ia-marketing",
    label: "Cas client : marketing B2B",
  },
  commercial: {
    slug: "negoce-vins-bordelais-agent-ia-sdr",
    label: "Cas client : prospection dans le négoce",
  },
  operations: {
    slug: "distributeur-b2b-agent-ia-ops",
    label: "Cas client : administration des ventes",
  },
  juridique: {
    slug: "eti-agroalimentaire-agent-ia-juridique",
    label: "Cas client : revue juridique en entreprise",
  },
  achats: {
    slug: "eti-industrielle-agent-ia-achats",
    label: "Cas client : achats industriels",
  },
  "service-client": {
    slug: "saas-b2b-agent-ia-service-client",
    label: "Cas client : support client B2B",
  },
  telephonique: {
    slug: "cabinet-avocats-agent-ia-telephonique",
    label: "Cas client : accueil d’un cabinet d’avocats",
  },
};
const icons: Record<string, typeof Megaphone> = {
  marketing: Megaphone,
  commercial: Handshake,
  "service-client": Headphones,
  telephonique: Phone,
  rh: Users,
  finance: ReceiptText,
  operations: Settings2,
  juridique: Scale,
  achats: ShoppingBag,
};
export function MetierDirectory({ current }: { current?: string }) {
  return (
    <nav className={s.directory} aria-label="Usages IA par métier">
      {professionalMetierNavigation.map(x => <a key={x.href} href={x.href} className={s.sectorCard}>
        <ReceiptText size={24} strokeWidth={1.5} aria-hidden="true" />
        <h3>{x.label}</h3><p>{x.description}</p>
        <span className={s.cardBottom}>Voir les usages<ArrowUpRight size={18} aria-hidden="true" /></span>
      </a>)}
      {metierStories
        .filter((x) => x.slug !== current)
        .map((x) => {
          const Icon = icons[x.slug];
          return (
            <a
              key={x.slug}
              href={`/agent-ia/${x.slug}/`}
              className={s.sectorCard}
            >
              <Icon size={24} strokeWidth={1.5} aria-hidden="true" />
              <h3>{x.dossier.label}</h3>
              <p>{x.dossier.focus}</p>
              <span className={s.cardBottom}>
                Voir les usages
                <ArrowUpRight size={18} aria-hidden="true" />
              </span>
            </a>
          );
        })}
    </nav>
  );
}
export default function MetierPage({ story: d }: { story: MetierStory }) {
  const f = d.dossier;
  const related = f.sectors.flatMap((slug) => {
    const sector = sectorStories.find((x) => x.slug === slug);
    return sector
      ? [{ label: sector.name, href: `/secteurs/${slug}/`, text: "" }]
      : [];
  });
  const reading = [
    ...(cases[d.slug]
      ? [
          {
            label: cases[d.slug].label,
            href: `/cas-clients/${cases[d.slug].slug}/`,
            text: "",
          },
        ]
      : []),
    ...(d.slug === "finance"
      ? [
          {
            label: "IA pour votre direction financière",
            href: "/secteurs/finance/",
            text: "",
          },
        ]
      : []),
    ...(d.slug === "finance" ? [] : related),
  ];
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
              <span aria-current="page">{f.label}</span>
            </nav>
            <h1>
              {d.name} sur mesure.<span>{f.headline}</span>
            </h1>
            <p className={b.lead}>{d.intro}</p>
            <div className={s.actions}>
              <a href="/contact/" className={b.primary}>
                Parlons de votre projet
                <ArrowUpRight size={18} aria-hidden="true" />
              </a>
            </div>
          </div>
          <div className={s.photo}>
            <Image
              src={`/images/services/${d.image}.webp`}
              alt={`Équipe au travail, pour illustrer les usages IA en ${f.label.toLowerCase()}.`}
              fill
              priority
              sizes="(max-width:800px) 90vw, 46vw"
            />
          </div>
        </div>
      </section>
      <section className={`${b.section} ${s.soft}`} id="agents">
        <div className={b.container}>
          <div className={s.heading}>
            <h2>Ce que votre agent peut prendre en charge.</h2>
            <p>
              Nous adaptons ces exemples à vos outils et aux tâches de votre
              équipe.
            </p>
          </div>
          <WorkflowExamples items={f.scenarios} id={`scenarios-${d.slug}`} />
        </div>
      </section>
      {metierGuideSlugs[d.slug] && (
        <ResourceSection
          slugs={metierGuideSlugs[d.slug]}
          id={`guides-${d.slug}`}
          title="Un guide pour commencer."
          description="Des exemples à explorer avec votre équipe."
        />
      )}
      <section className={b.section}>
        <div className={`${b.container} ${s.split}`}>
          <div className={`${s.photo} ${s.photoWide}`}>
            <Image
              src="/images/home/atelier-equipes.webp"
              alt="Des collaborateurs pratiquent ensemble pendant une formation IA."
              fill
              sizes="(max-width:800px) 90vw, 46vw"
            />
          </div>
          <div>
            <h2>Installé avec vous. Adopté par votre équipe.</h2>
            <div className={s.projectSteps}>
              <div>
                <h3>Dans vos outils</h3>
                <p>{f.setup}</p>
              </div>
              <div>
                <h3>Avec la formation nécessaire</h3>
                <p>{f.training}</p>
              </div>
              <div>
                <h3>Avec un suivi après l’installation</h3>
                <p>
                  Nous testons l’agent avec votre équipe, documentons son
                  utilisation et organisons les ajustements au fil des retours.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className={b.container}>
          <p className={s.assurance}>
            <ShieldCheck size={20} aria-hidden="true" />
            <span>{f.guard}</span>
          </p>
        </div>
      </section>
      <FaqSection
        id="faq"
        title="Avant de démarrer."
        description="Vos questions sur l’installation et l’utilisation."
        items={d.faq}
        showContactLink={false}
      />
      <PreAuditCTA
        id="footer-pre-audit"
        title={f.cta}
        description="Décrivez-nous une tâche, les outils que vous utilisez et ce que vous aimeriez simplifier. Nous vous aidons à choisir un premier usage utile."
      />
      <div className={b.container}>
        <RelatedExpertise links={reading} />
      </div>
    </main>
  );
}

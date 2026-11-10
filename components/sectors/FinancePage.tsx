import Image from "next/image";
import { ArrowUpRight, ShieldCheck } from "lucide-react";
import { FaqSection, PreAuditCTA } from "@/components/brand/Sections";
import WorkflowExamples from "@/components/expertise/WorkflowExamples";
import RelatedExpertise from "@/components/expertise/RelatedExpertise";
import ResourceSection from "@/components/resources/ResourceSection";
import { financeFaq } from "@/lib/resources";
import b from "@/components/brand/Brand.module.css";
import s from "@/components/expertise/Expertise.module.css";
const examples = [
  {
    title: "Préparer le reporting de gestion",
    output:
      "L’agent rassemble les chiffres des sources choisies et prépare une synthèse des variations, avec les périodes et justificatifs utilisés.",
    review:
      "Le contrôle de gestion vérifie les chiffres et explique les variations avec les opérationnels.",
  },
  {
    title: "Suivre les écarts au budget",
    output:
      "L’agent met en regard le réalisé et le budget et regroupe les écarts à examiner par activité ou poste de dépense.",
    review: "Les responsables confirment les causes et les actions à retenir.",
  },
  {
    title: "Préparer la revue de trésorerie",
    output:
      "L’agent réunit les soldes disponibles et les échéances d’encaissement et de décaissement pour préparer la revue avec l’équipe.",
    review:
      "La direction vérifie les hypothèses, confirme les dates et décide des arbitrages.",
  },
];
export default function FinancePage() {
  return (
    <main className={b.page}>
      <section className={s.hero}>
        <div className={`${b.container} ${s.heroGrid}`}>
          <div>
            <nav className={b.breadcrumb} aria-label="Fil d’Ariane">
              <a href="/">Accueil</a>
              <span>/</span>
              <span aria-current="page">Direction financière</span>
            </nav>
            <p className={s.audience}>
              DAF · Responsables financiers · Contrôle de gestion
            </p>
            <h1>L’IA pour passer moins de temps à préparer vos analyses.</h1>
            <p className={b.lead}>
              Althoce relie vos sources financières, conçoit des agents sur
              mesure et forme votre équipe. Vos reportings et revues se
              préparent à partir de chiffres que vous pouvez retrouver et
              vérifier.
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
              alt="Des professionnels examinent leurs dossiers financiers au bureau."
              fill
              priority
              sizes="(max-width:800px) 90vw, 46vw"
            />
          </div>
        </div>
      </section>
      <section className={`${b.section} ${s.soft}`}>
        <div className={b.container}>
          <div className={s.heading}>
            <h2>Des agents pour préparer vos rendez-vous de pilotage.</h2>
            <p>
              Trois exemples à adapter aux sources et aux indicateurs de votre
              entreprise.
            </p>
          </div>
          <WorkflowExamples
            items={examples}
            id="scenarios-direction-financiere"
          />
        </div>
      </section>
      <ResourceSection
        slugs={[
          "12-agents-ia-direction-financiere",
          "12-skills-claude-finance",
        ]}
        title="Nos guides pour les équipes financières."
        description="Des exemples et des méthodes à mettre à l’épreuve de vos propres tâches."
      />
      <section className={b.section}>
        <div className={`${b.container} ${s.split}`}>
          <div className={`${s.photo} ${s.photoWide}`}>
            <Image
              src="/images/sectors/finance-formation.webp"
              alt="Une équipe travaille sur ses documents pendant une formation IA finance."
              fill
              sizes="(max-width:800px) 90vw, 46vw"
            />
          </div>
          <div>
            <h2>Relier les chiffres. Former ceux qui les analysent.</h2>
            <div className={s.projectSteps}>
              <div>
                <h3>Partir de vos sources</h3>
                <p>
                  Logiciel comptable, ERP, tableurs : nous choisissons les
                  données utiles et clarifions les périodes et indicateurs avant
                  de les relier.
                </p>
              </div>
              <div>
                <h3>Former sur vos analyses</h3>
                <p>
                  Vos équipes pratiquent la préparation d’un commentaire, le
                  contrôle des calculs et la vérification d’une hypothèse.
                </p>
              </div>
              <div>
                <h3>Ajuster avec vos retours</h3>
                <p>
                  Les premières revues servent à corriger les consignes et à
                  organiser le suivi. L’agent évolue avec les besoins de votre
                  direction.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className={b.container}>
          <p className={s.assurance}>
            <ShieldCheck size={20} aria-hidden="true" />
            <span>
              Vos équipes valident les analyses. Les décisions financières et
              les paiements restent soumis à vos règles d’autorisation.
            </span>
          </p>
        </div>
      </section>
      <FaqSection
        id="faq-finance"
        title="Vos questions avant de commencer."
        description="Les sources, les outils et l’équipe à mobiliser."
        items={financeFaq}
        showContactLink={false}
      />
      <PreAuditCTA
        title="Quel reporting vous prend trop de temps ?"
        description="Partons d’une analyse récurrente et des recherches nécessaires pour la préparer. Nous identifierons avec vous un premier usage utile."
      />
      <div className={b.container}>
        <RelatedExpertise
          links={[
            {
              label: "Agents IA pour la comptabilité interne",
              href: "/agent-ia/finance/",
              text: "",
            },
          ]}
        />
      </div>
    </main>
  );
}

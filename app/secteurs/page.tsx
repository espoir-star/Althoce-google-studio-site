import type { Metadata } from "next";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import Footer from "@/components/Footer";
import { Breadcrumb, PreAuditCTA } from "@/components/brand/Sections";
import RelatedExpertise from "@/components/expertise/RelatedExpertise";
import { sectorStories } from "@/lib/sectors-content";
import b from "@/components/brand/Brand.module.css";
import s from "@/components/expertise/Expertise.module.css";
const title = "IA par secteur : professions, santé et entreprises";
const description =
  "Découvrez les formations et agents IA sur mesure d’Althoce pour les cabinets comptables, le droit, la santé, l’industrie, le commerce et les organisations.";
export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "https://althoce.com/secteurs/" },
  openGraph: {
    title,
    description,
    url: "https://althoce.com/secteurs/",
    images: [{ url: "/images/sectors/finance-formation.webp" }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/images/sectors/finance-formation.webp"],
  },
};
const sectorSummaries: Record<string, string> = {
  comptabilite: "Collecte, rapprochement bancaire, lettrage et révision.",
  droit: "Pièces, chronologies, contrats et préparation des échanges.",
  medical: "Secrétariat, procédures et documentation qualité.",
  "assurance-patrimoine": "Collecte, rendez-vous et suivi des échéances.",
  immobilier: "Transaction, gestion locative et copropriété.",
  "commerce-distribution": "Prospection, devis, appels d’offres et commandes.",
  industrie: "Achats, documentation technique et qualité.",
  "marketing-communication": "Briefs, retours clients et bilans de campagne.",
  associations: "Adhésions, subventions et bilans d’activité.",
};
const groups = [
  {
    id: "professions",
    title: "Cabinets, professions et santé",
    text: "Des dossiers qui engagent votre responsabilité, avec des données à protéger et des validations propres à votre activité.",
  },
  {
    id: "organisations",
    title: "Entreprises et organisations",
    text: "Des cycles de vente, des documents techniques ou une mission collective : l’IA se construit autour du travail à accomplir.",
  },
];
export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            name: title,
            itemListElement: sectorStories.map((d, i) => ({
              "@type": "ListItem",
              position: i + 1,
              name: d.name,
              url: `https://althoce.com/secteurs/${d.slug}/`,
            })),
          }).replace(/</g, "\\u003c"),
        }}
      />
      <main className={b.page}>
        <section className={s.hero}>
          <div className={`${b.container} ${s.heroGrid}`}>
            <div>
              <Breadcrumb label="Secteurs" />
              <h1>Des agents IA et des formations adaptés à votre secteur.</h1>
              <p className={b.lead}>
                Althoce forme vos équipes et conçoit des agents IA autour des
                tâches propres à votre activité. Retrouvez les usages qui
                peuvent aider votre organisation au quotidien.
              </p>
              <div className={s.actions}>
                <a className={b.primary} href="#vos-secteurs">
                  Trouver mon secteur
                  <ArrowUpRight size={18} aria-hidden="true" />
                </a>
              </div>
            </div>
            <div className={s.photo}>
              <Image
                src="/images/sectors/finance-formation.webp"
                alt="Des professionnels travaillent ensemble sur leurs documents lors d’un atelier."
                fill
                priority
                sizes="(max-width:800px) 90vw, 46vw"
              />
            </div>
          </div>
        </section>
        <section id="vos-secteurs" className={`${b.section} ${s.soft}`}>
          <div className={b.container}>
            {groups.map((g) => (
              <div key={g.id} className={s.sectorGroup}>
                <div className={s.heading}>
                  <h2 className={s.groupTitle}>{g.title}</h2>
                </div>
                <div className={s.directory}>
                  {sectorStories
                    .filter((d) => d.group === g.id)
                    .map((d) => (
                      <a
                        key={d.slug}
                        href={`/secteurs/${d.slug}/`}
                        className={s.sectorCard}
                      >
                        <h3>{d.name}</h3>
                        <p>{sectorSummaries[d.slug]}</p>
                        <span className={s.cardBottom}>
                          Découvrir les usages
                          <ArrowUpRight size={18} aria-hidden="true" />
                        </span>
                      </a>
                    ))}
                </div>
              </div>
            ))}
          </div>
        </section>
        <PreAuditCTA
          title="Parlons de votre activité."
          description="Votre secteur n’est pas dans la liste ? Décrivez-nous votre activité et une tâche que vous aimeriez simplifier."
        />
        <div className={b.container}>
          <RelatedExpertise
            links={[
              {
                label: "Les usages IA par métier",
                href: "/agent-ia/",
                text: "",
              },
              { label: "Nos guides pratiques", href: "/guides/", text: "" },
            ]}
          />
        </div>
      </main>
      <Footer showCta={false} />
    </>
  );
}

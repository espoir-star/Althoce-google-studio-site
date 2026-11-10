import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { FaqSection, PreAuditCTA } from "./brand/Sections";
import { MetierDirectory } from "./metiers/MetierPage";
import RelatedExpertise from "./expertise/RelatedExpertise";
import { metierHubFaq } from "@/lib/metiers-content";
import b from "./brand/Brand.module.css";
import s from "./expertise/Expertise.module.css";
export default function AgentIAHubPageClient() {
  return (
    <main className={b.page}>
      <section className={s.hero}>
        <div className={`${b.container} ${s.heroGrid}`}>
          <div>
            <nav className={b.breadcrumb} aria-label="Fil d’Ariane">
              <a href="/">Accueil</a>
              <span>/</span>
              <span aria-current="page">Usages IA par métier</span>
            </nav>
            <h1>Des agents IA pour le travail qui se répète.</h1>
            <p className={b.lead}>
              Préparer une relance, comparer des devis, retrouver une pièce :
              Althoce crée des agents sur mesure dans vos outils et forme les
              équipes qui les utilisent.
            </p>
            <div className={s.actions}>
              <a href="#metiers" className={b.primary}>
                Trouver les usages de mon équipe
                <ArrowUpRight size={18} aria-hidden="true" />
              </a>
            </div>
          </div>
          <div className={s.photo}>
            <Image
              src="/images/services/metiers-collaboration.webp"
              alt="Des collègues échangent autour de leurs documents au bureau."
              fill
              priority
              sizes="(max-width:800px) 90vw, 46vw"
            />
          </div>
        </div>
      </section>
      <section className={`${b.section} ${s.soft}`} id="metiers">
        <div className={b.container}>
          <div className={s.heading}>
            <h2>Quelle équipe souhaitez-vous aider ?</h2>
          </div>
          <MetierDirectory />
        </div>
      </section>
      <section className={b.section} id="agents">
        <div className={`${b.container} ${s.split}`}>
          <div className={`${s.photo} ${s.photoWide}`}>
            <Image
              src="/images/services/diagnostic.webp"
              alt="Deux professionnels préparent un projet à partir de leurs documents."
              fill
              sizes="(max-width:800px) 90vw, 46vw"
            />
          </div>
          <div>
            <h2>Un premier usage utile, puis la suite.</h2>
            <div className={s.projectSteps}>
              <div>
                <h3>Choisir la tâche</h3>
                <p>
                  Nous regardons ce qui prend du temps, les outils utilisés et
                  le résultat attendu par votre équipe.
                </p>
              </div>
              <div>
                <h3>Construire et tester</h3>
                <p>
                  L’agent est adapté à vos documents et à vos règles. Votre
                  équipe l’essaie avant sa mise en service.
                </p>
              </div>
              <div>
                <h3>Former et accompagner</h3>
                <p>
                  Nous transmettons la méthode d’utilisation et organisons le
                  suivi pour ajuster l’agent aux retours du quotidien.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <FaqSection
        id="faq"
        title="Avant de choisir votre premier agent."
        description="Le fonctionnement et l’accompagnement Althoce."
        items={metierHubFaq}
        showContactLink={false}
      />
      <PreAuditCTA
        id="footer-pre-audit"
        title="Quelle tâche aimeriez-vous déléguer à un agent ?"
        description="Partons d’un exemple de votre quotidien. Nous vous aiderons à voir ce qui peut être simplifié et comment commencer."
      />
      <div className={b.container}>
        <RelatedExpertise
          links={[
            { label: "L’IA dans votre secteur", href: "/secteurs/", text: "" },
            {
              label: "La Centrale, pour réunir vos agents",
              href: "/ia-souveraine/",
              text: "",
            },
          ]}
        />
      </div>
    </main>
  );
}

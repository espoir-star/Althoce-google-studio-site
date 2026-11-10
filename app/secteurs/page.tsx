import type { Metadata } from 'next';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import Footer from '@/components/Footer';
import { Breadcrumb, TextLink, PreAuditCTA } from '@/components/brand/Sections';
import { sectorStories } from '@/lib/sectors-content';
import b from '@/components/brand/Brand.module.css';
import s from '@/components/expertise/Expertise.module.css';
const title = 'IA par secteur : professions, santé et entreprises';
const description =
  'Découvrez les formations et agents IA sur mesure d’Althoce pour les cabinets comptables, le droit, la santé, l’industrie, le commerce et les organisations.';
export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: 'https://althoce.com/secteurs/' },
  openGraph: {
    title,
    description,
    url: 'https://althoce.com/secteurs/',
    images: [{ url: '/images/sectors/finance-formation.webp' }],
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: ['/images/sectors/finance-formation.webp'],
  },
};
const groups = [
  {
    id: 'professions',
    title: 'Cabinets, professions et santé',
    text: 'Des dossiers qui engagent votre responsabilité, avec des données à protéger et des validations propres à votre activité.',
  },
  {
    id: 'organisations',
    title: 'Entreprises et organisations',
    text: 'Des cycles de vente, des documents techniques ou une mission collective : l’IA se construit autour du travail à accomplir.',
  },
];
export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'ItemList',
            name: title,
            itemListElement: sectorStories.map((d, i) => ({
              '@type': 'ListItem',
              position: i + 1,
              name: d.name,
              url: `https://althoce.com/secteurs/${d.slug}/`,
            })),
          }).replace(/</g, '\\u003c'),
        }}
      />
      <main className={b.page}>
        <section className={s.hero}>
          <div className={`${b.container} ${s.heroGrid}`}>
            <div>
              <Breadcrumb label="Secteurs" />
              <h1>
                Votre activité a ses exigences.<span>Partons de vos vrais dossiers.</span>
              </h1>
              <p className={b.lead}>
                Un cabinet comptable ne travaille pas comme une clinique ou une entreprise de
                négoce. Althoce adapte la formation, les agents IA et les connexions aux documents,
                aux responsabilités et aux décisions de votre organisation.
              </p>
              <div className={s.actions}>
                <a className={b.primary} href="#vos-secteurs">
                  Trouver mon secteur
                  <ArrowUpRight size={18} aria-hidden="true" />
                </a>
                <TextLink href="/agent-ia/">Entrer par mon métier</TextLink>
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
              <div key={g.id}>
                <div className={s.heading}>
                  <h2 className={s.groupTitle}>{g.title}</h2>
                  <p>{g.text}</p>
                </div>
                <div className={s.directory}>
                  {sectorStories
                    .filter((d) => d.group === g.id)
                    .map((d) => (
                      <a key={d.slug} href={`/secteurs/${d.slug}/`} className={s.sectorCard}>
                        <span>{d.audience}</span>
                        <h3>{d.name}</h3>
                        <p>{d.promise}</p>
                        <span className={s.cardBottom}>
                          Voir les enjeux et les usages
                          <ArrowUpRight size={18} aria-hidden="true" />
                        </span>
                      </a>
                    ))}
                </div>
              </div>
            ))}
          </div>
        </section>
        <section className={b.section}>
          <div className={b.container}>
            <div className={s.heading}>
              <h2>
                Votre secteur donne le contexte.
                <br />
                <span>Votre métier précise le besoin.</span>
              </h2>
              <p>
                Un directeur financier, un acheteur et un responsable commercial peuvent appartenir
                à la même entreprise sans rencontrer les mêmes difficultés.
              </p>
            </div>
            <div className={s.hubSwitch}>
              <div>
                <h3>Vous pilotez une fonction ?</h3>
                <p>
                  Explorez les processus : prospection, commandes, contrats, pièces financières,
                  support ou ressources humaines.
                </p>
                <TextLink href="/agent-ia/">Découvrir les usages IA par métier</TextLink>
              </div>
              <div>
                <h3>Vous dirigez la finance ?</h3>
                <p>
                  Priorités, fiabilité des sources, reporting et compétences : structurez l’IA à
                  l’échelle de votre direction financière.
                </p>
                <TextLink href="/secteurs/finance/">Accompagner la direction financière</TextLink>
              </div>
            </div>
          </div>
        </section>
        <section className={`${b.section} ${s.soft}`}>
          <div className={`${b.container} ${s.headingRow}`}>
            <div>
              <h2>
                Une première idée.
                <br />
                <span>Des repères pour l’évaluer.</span>
              </h2>
              <p className={b.lead}>
                Nos guides prolongent les situations présentées : préparation des dossiers,
                utilisation des outils et vérification des résultats.
              </p>
            </div>
            <div>
              <TextLink href="/guides/">Parcourir nos guides</TextLink>
              <br />
              <TextLink href="/services/">Comprendre l’accompagnement Althoce</TextLink>
            </div>
          </div>
        </section>
        <PreAuditCTA
          title="Votre quotidien est le point de départ."
          description="Une tâche qui revient, un dossier qui attend, un outil mal relié aux autres : parlons de ce qui mérite d’être amélioré dans votre organisation."
        />
      </main>
      <Footer showCta={false} />
    </>
  );
}

import Image from 'next/image';
import {
  ArrowUpRight,
  Check,
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
} from 'lucide-react';
import { FaqSection, PreAuditCTA, TextLink } from '../brand/Sections';
import ResourceSection from '../resources/ResourceSection';
import WorkflowExamples from '../expertise/WorkflowExamples';
import RelatedExpertise from '../expertise/RelatedExpertise';
import AgentMarquee from '../AgentMarquee';
import { metierGuideSlugs } from '@/lib/resources';
import { metierStories, type MetierStory } from '@/lib/metiers-content';
import b from '../brand/Brand.module.css';
import s from '../expertise/Expertise.module.css';
import m from './Metiers.module.css';
const cases: Record<string, string> = {
  marketing: 'saas-b2b-agent-ia-marketing',
  commercial: 'negoce-vins-bordelais-agent-ia-sdr',
  finance: 'cabinet-comptable-lyon',
  operations: 'distributeur-b2b-agent-ia-ops',
  juridique: 'eti-agroalimentaire-agent-ia-juridique',
  achats: 'eti-industrielle-agent-ia-achats',
  'service-client': 'saas-b2b-agent-ia-service-client',
  telephonique: 'cabinet-avocats-agent-ia-telephonique',
};
const icons: Record<string, typeof Megaphone> = {
  marketing: Megaphone,
  commercial: Handshake,
  'service-client': Headphones,
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
      {metierStories
        .filter((x) => x.slug !== current)
        .map((x) => {
          const Icon = icons[x.slug];
          return (
            <a key={x.slug} href={`/agent-ia/${x.slug}/`} className={s.sectorCard}>
              <Icon size={24} strokeWidth={1.5} aria-hidden="true" />
              <h3>{x.dossier.label}</h3>
              <p>{x.dossier.focus}</p>
              <span className={s.cardBottom}>
                Explorer les processus
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
            <p className={s.audience}>{f.focus}</p>
            <h1>
              {d.name} sur mesure.<span>{f.headline}</span>
            </h1>
            <p className={b.lead}>{d.intro}</p>
            <div className={s.actions}>
              <a href="/contact/" className={b.primary}>
                Parlons de votre processus
                <ArrowUpRight size={18} aria-hidden="true" />
              </a>
              <TextLink href="#agents">Explorer les scénarios</TextLink>
            </div>
          </div>
          <div className={s.photo}>
            <Image
              src={`/images/services/${d.image}.webp`}
              alt={`Des collègues préparent des documents au bureau, pour illustrer le travail en ${f.label.toLowerCase()}.`}
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
              Le sur-mesure commence
              <br />
              <span>par votre façon de travailler.</span>
            </h2>
            <p className={b.lead}>{d.situation}</p>
            <div className={s.deliverables}>
              <div>
                <span>01</span>
                <p>{d.tools}</p>
              </div>
              <div>
                <span>02</span>
                <p>{d.guard}</p>
              </div>
            </div>
            <TextLink href="/services/agents-ia/">Comprendre la conception de votre agent</TextLink>
          </div>
          <div className={s.dossier}>
            <small>SCÉNARIO DE TRAVAIL · EXEMPLE ILLUSTRATIF</small>
            <p>{f.brief}</p>
            <div className={s.dossierResult}>
              <h3>{f.deliverable}</h3>
              <ul>
                {f.checks.map((x) => (
                  <li key={x}>
                    <Check size={16} aria-hidden="true" />
                    {x}
                  </li>
                ))}
              </ul>
            </div>
            <div className={s.dossierFoot}>
              <ShieldCheck size={16} aria-hidden="true" />
              Préparé par l’agent, vérifié par votre équipe.
            </div>
          </div>
        </div>
      </section>
      <section className={b.section} id="agents">
        <div className={b.container}>
          <div className={s.headingRow}>
            <h2>
              Entrer dans le détail
              <br />
              <span>du travail à préparer.</span>
            </h2>
            <p>
              Un agent peut couvrir une partie de ces tâches. Nous choisissons ensemble le périmètre
              utile, les sources et les exceptions à traiter.
            </p>
          </div>
          <WorkflowExamples items={f.scenarios} id={`scenarios-${d.slug}`} />
          <p className={s.caption}>
            Ces exemples servent à cadrer une solution. Ils ne sont pas des agents standard vendus à
            la carte.
          </p>
        </div>
      </section>
      {metierGuideSlugs[d.slug] && (
        <ResourceSection
          slugs={metierGuideSlugs[d.slug]}
          id={`guides-${d.slug}`}
          description="Des ressources liées à ces tâches pour préparer votre réflexion et vos premiers essais."
        />
      )}
      <section className={`${b.section} ${s.soft}`}>
        <div className={`${b.container} ${s.split}`}>
          <div className={`${s.photo} ${s.photoWide}`}>
            <Image
              src="/images/home/atelier-equipes.webp"
              alt="Des collaborateurs vérifient ensemble un exercice pendant un atelier de formation."
              fill
              sizes="(max-width:800px) 90vw, 46vw"
            />
          </div>
          <div>
            <h2>
              Une équipe qui sait utiliser,
              <br />
              <span>vérifier et reprendre la main.</span>
            </h2>
            <p className={b.lead}>{f.training}</p>
            <div className={s.metrics}>
              <div>
                <h3>Observer les progrès</h3>
                <p>{d.measure} Les objectifs sont définis à partir de votre situation de départ.</p>
              </div>
              <div>
                <h3>Faire évoluer l’usage</h3>
                <p>
                  Les erreurs et les exceptions alimentent les ajustements, la documentation et le
                  suivi convenu avec vous.
                </p>
              </div>
            </div>
            <TextLink href="/services/formation-ia/">
              Former l’équipe sur ses propres tâches
            </TextLink>
            <br />
            <TextLink href="/services/pilotage-ia/">
              Organiser le pilotage après le déploiement
            </TextLink>
          </div>
        </div>
      </section>
      <section className={b.section}>
        <div className={b.container}>
          {cases[d.slug] && (
            <a href={`/cas-clients/${cases[d.slug]}/`} className={s.caseLink}>
              <div>
                <span>Approfondir avec un projet présenté sur le site</span>
                <strong>Découvrir un cas lié à ce métier</strong>
              </div>
              <ArrowUpRight size={22} aria-hidden="true" />
            </a>
          )}
          <div className={s.heading}>
            <h2>
              Un même processus.
              <br />
              <span>Des exigences selon votre activité.</span>
            </h2>
            <p>
              Les documents, les responsabilités et les validations changent d’un secteur à l’autre.
              Retrouvez le contexte qui ressemble au vôtre.
            </p>
          </div>
          <RelatedExpertise type="sectors" slugs={f.sectors} />
          {d.slug === 'finance' && (
            <TextLink href="/secteurs/finance/">
              Structurer le projet avec votre direction financière
            </TextLink>
          )}
          {['operations', 'finance', 'juridique'].includes(d.slug) && (
            <TextLink href="/ia-souveraine/">Réunir plusieurs agents dans La Centrale</TextLink>
          )}
        </div>
      </section>
      <FaqSection
        id="faq"
        title={`Vos questions sur l’${d.name.replace(/^Agent /, 'agent ')}.`}
        description="Les sources, les actions possibles et les contrôles à prévoir."
        items={d.faq}
        showContactLink={false}
      />
      <PreAuditCTA
        id="footer-pre-audit"
        title="Quel dossier vous prend trop de temps ?"
        description="Décrivez-nous une situation, les outils concernés et ce que votre équipe doit vérifier. Nous chercherons avec vous le premier usage qui mérite d’être testé."
      />
      <section className={m.marqueeSection}>
        <div className={b.container}>
          <AgentMarquee />
        </div>
      </section>
    </main>
  );
}

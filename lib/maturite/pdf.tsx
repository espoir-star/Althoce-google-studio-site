/**
 * Test de maturité IA — résultat complet au format PDF (côté serveur uniquement).
 * Joint à l’email envoyé par n8n quand le visiteur ouvre son plan d’action ou demande un échange.
 * Même contenu que le rapport affiché sur le site, mis en page pour l’impression ; les liens pointent vers althoce.com.
 * Voir docs/test-maturite-ia/emails.md.
 */
import path from 'node:path';
import { Children } from 'react';
import { Document, Font, Link, Page, Path, Polygon, Line, Circle, Rect, StyleSheet, Svg, Text, View, renderToBuffer } from '@react-pdf/renderer';
import { DIMENSIONS, QUESTIONS, QUESTION_IDS, ROLES, SIZES, UNKNOWN_LABEL, nextOption, questionText, sectorLabel, type Answers, type DimensionId, type Profile } from './questions';
import { MIN_ANSWERS, STAGES, computeResult, nextStage, type Result } from './model';
import { ACTION_TEXTS, DIMENSION_TEXTS, DISCUSSION_QUESTIONS, OFFER_TEXTS, SIGNAL_TEXTS, STAGE_TEXTS, STRENGTH_TEXTS, actionLink, monthPlan } from './report-content';
import type { SectorNote } from './sector-notes';
import { brand, contact as althoce } from '../brand-content';

const SITE = 'https://althoce.com';
const INK = '#09090b', TEXT = '#27272a', MUTED = '#52525b', SOFT_TEXT = '#71717a', BLUE = '#2563eb', DEEP = '#1e3a8a', LINE = '#e4e4e7', SOFT = '#f4f7fe', SOFT_LINE = '#d7e4fb', WARM = '#fff7ed', WARM_LINE = '#fed7aa';

let fontsReady = false;
function registerFonts() {
  if (fontsReady) return;
  const dir = path.join(process.cwd(), 'lib/maturite/fonts');
  Font.register({ family: 'Geist', fonts: [400, 500, 600, 700].map(fontWeight => ({ src: path.join(dir, `Geist-${fontWeight}.ttf`), fontWeight })) });
  // Pas de césure automatique : elle suit les règles de l’anglais.
  Font.registerHyphenationCallback(word => [word]);
  fontsReady = true;
}

const s = StyleSheet.create({
  page: { fontFamily: 'Geist', fontSize: 9.5, lineHeight: 1.5, color: TEXT, paddingTop: 54, paddingBottom: 56, paddingHorizontal: 50 },
  header: { position: 'absolute', top: 22, left: 50, right: 50, flexDirection: 'row', justifyContent: 'space-between', fontSize: 7.5, color: SOFT_TEXT },
  footer: { position: 'absolute', bottom: 24, left: 50, right: 50, flexDirection: 'row', justifyContent: 'space-between', fontSize: 7.5, color: SOFT_TEXT, borderTopWidth: 0.5, borderTopColor: LINE, paddingTop: 6 },
  coverTop: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start' },
  brand: { flexDirection: 'row', alignItems: 'center' },
  wordmark: { fontSize: 17, fontWeight: 700, color: INK, marginLeft: 6, letterSpacing: -0.4, lineHeight: 1.2 },
  coverContact: { fontSize: 8.5, color: MUTED, textAlign: 'right', lineHeight: 1.5 },
  eyebrow: { fontSize: 9, fontWeight: 600, color: BLUE, marginTop: 30 },
  title: { fontSize: 25, fontWeight: 700, color: INK, letterSpacing: -0.6, marginTop: 4, lineHeight: 1.2 },
  meta: { fontSize: 9.5, color: MUTED, marginTop: 6 },
  rule: { height: 1.5, backgroundColor: BLUE, marginTop: 14, marginBottom: 18 },
  hero: { backgroundColor: SOFT, borderRadius: 10, borderWidth: 0.75, borderColor: SOFT_LINE, padding: 18 },
  heroLabel: { fontSize: 9, color: MUTED },
  heroScore: { flexDirection: 'row', alignItems: 'flex-end', marginTop: 2 },
  heroNumber: { fontSize: 40, fontWeight: 700, color: BLUE, letterSpacing: -1.5, lineHeight: 1.05 },
  heroOf: { fontSize: 14, color: BLUE, marginLeft: 4, marginBottom: 6 },
  heroStage: { fontSize: 16, fontWeight: 700, color: DEEP, marginTop: 4, lineHeight: 1.3 },
  heroTagline: { fontSize: 10, color: MUTED, marginTop: 2, lineHeight: 1.45 },
  scale: { flexDirection: 'row', marginTop: 14 },
  scaleItem: { flex: 1, marginRight: 6 },
  scaleBar: { height: 3, borderRadius: 2, backgroundColor: '#d7deea', marginBottom: 5 },
  scaleName: { fontSize: 8, color: MUTED },
  scaleRange: { fontSize: 7.5, color: SOFT_TEXT },
  lead: { fontSize: 10.5, color: TEXT, marginTop: 14, lineHeight: 1.55 },
  twoCols: { flexDirection: 'row', marginTop: 12 },
  col: { flex: 1, marginRight: 14 },
  colTitle: { fontSize: 8.5, fontWeight: 600, color: DEEP, marginBottom: 3 },
  hint: { fontSize: 8.5, color: SOFT_TEXT, marginTop: 8 },
  section: { marginTop: 22 },
  h2: { fontSize: 15, fontWeight: 700, color: INK, letterSpacing: -0.3, marginBottom: 3, lineHeight: 1.3 },
  sectionLead: { fontSize: 9.5, color: MUTED, marginBottom: 10 },
  numbered: { flexDirection: 'row', marginTop: 8 },
  badge: { width: 18, height: 18, borderRadius: 9, backgroundColor: INK, color: '#fff', fontSize: 8.5, fontWeight: 700, textAlign: 'center', paddingTop: 3.5, marginRight: 10 },
  itemTitle: { fontSize: 10, fontWeight: 600, color: INK },
  flex1: { flex: 1 },
  dimRow: { borderTopWidth: 0.5, borderTopColor: LINE, paddingVertical: 8 },
  dimTop: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'baseline' },
  dimName: { fontSize: 10.5, fontWeight: 600, color: INK },
  dimLabel: { fontSize: 8.5, color: SOFT_TEXT, fontWeight: 400 },
  dimScore: { fontSize: 10.5, fontWeight: 700, color: INK },
  bar: { height: 5, borderRadius: 3, backgroundColor: '#e8edf5', marginTop: 5, marginBottom: 5 },
  barFill: { height: 5, borderRadius: 3, backgroundColor: BLUE },
  small: { fontSize: 8.5, color: MUTED },
  strong: { fontWeight: 600, color: INK },
  lever: { borderTopWidth: 0.5, borderTopColor: LINE, paddingVertical: 7 },
  moveRow: { flexDirection: 'row', marginTop: 3 },
  moveCell: { flex: 1, marginRight: 12 },
  moveLabel: { fontSize: 7.5, fontWeight: 600, color: SOFT_TEXT, textTransform: 'uppercase', letterSpacing: 0.4 },
  moveNext: { fontSize: 7.5, fontWeight: 600, color: BLUE, textTransform: 'uppercase', letterSpacing: 0.4 },
  signal: { backgroundColor: WARM, borderWidth: 0.75, borderColor: WARM_LINE, borderRadius: 8, padding: 11, marginBottom: 8 },
  signalTitle: { fontSize: 10, fontWeight: 700, color: '#9a3412', marginBottom: 3 },
  strength: { flexDirection: 'row', marginTop: 6 },
  sheet: { borderWidth: 0.75, borderColor: LINE, borderRadius: 10, padding: 14, marginBottom: 10 },
  sheetHead: { flexDirection: 'row', alignItems: 'flex-start' },
  sheetTitle: { fontSize: 12, fontWeight: 700, color: INK, lineHeight: 1.35 },
  sheetWhy: { fontSize: 9.5, color: TEXT, marginTop: 8, fontWeight: 500 },
  step: { flexDirection: 'row', marginTop: 4 },
  stepNum: { width: 14, fontSize: 9, fontWeight: 700, color: BLUE },
  facts: { flexDirection: 'row', marginTop: 10, borderTopWidth: 0.5, borderTopColor: LINE, paddingTop: 8 },
  fact: { flex: 1, marginRight: 10 },
  link: { color: BLUE, textDecoration: 'none', fontSize: 9, fontWeight: 600, marginTop: 8 },
  week: { flexDirection: 'row', borderTopWidth: 0.5, borderTopColor: LINE, paddingVertical: 7 },
  weekLabel: { width: 70, fontSize: 8.5, fontWeight: 600, color: BLUE },
  bullet: { flexDirection: 'row', marginTop: 2 },
  dot: { width: 10, color: SOFT_TEXT },
  offer: { borderWidth: 0.75, borderColor: LINE, borderRadius: 10, padding: 12, marginBottom: 8 },
  offerPrimary: { borderColor: BLUE, backgroundColor: SOFT },
  offerTag: { fontSize: 7.5, fontWeight: 700, color: BLUE, textTransform: 'uppercase', letterSpacing: 0.5, marginBottom: 3 },
  example: { borderTopWidth: 0.5, borderTopColor: LINE, paddingVertical: 7 },
  answerGroup: { marginTop: 12 },
  answerGroupTitle: { fontSize: 11, fontWeight: 700, color: INK, lineHeight: 1.4 },
  answer: { borderTopWidth: 0.5, borderTopColor: LINE, paddingVertical: 6 },
  dots: { flexDirection: 'row' },
  stepDot: { width: 12, height: 3.5, borderRadius: 2, marginLeft: 3 },
  question: { borderTopWidth: 0.5, borderTopColor: LINE, paddingVertical: 7 },
  method: { backgroundColor: '#fafafa', borderWidth: 0.75, borderColor: LINE, borderRadius: 10, padding: 14 },
  methodTerm: { fontSize: 9, fontWeight: 700, color: INK, marginTop: 6 },
  contact: { backgroundColor: SOFT, borderWidth: 0.75, borderColor: SOFT_LINE, borderRadius: 10, padding: 16, marginTop: 22 },
  contactRow: { flexDirection: 'row' },
  contactLink: { color: BLUE, textDecoration: 'none', fontWeight: 600, fontSize: 9.5 },
  contactDate: { borderTopWidth: 0.5, borderTopColor: SOFT_LINE, marginTop: 12, paddingTop: 8, fontSize: 8.5, color: MUTED },
});

const ARTICLES: Record<DimensionId, string> = { cap: 'le cap', usages: 'les usages', cadre: 'le cadre', competences: 'les compétences', integration: 'l’intégration' };
const absolute = (href: string) => href.startsWith('http') ? href : `${SITE}${href}`;
const shown = (href: string) => absolute(href).replace(/^https:\/\//, '').replace(/\/$/, '');

function Mark({ size = 22 }: { size?: number }) {
  return <Svg width={size} height={size} viewBox="0 0 100 100">
    <Rect x="10" y="15" width="20" height="70" rx="3" fill={INK} />
    <Path d="M45 15 L65 15 L65 50 L80 50 L62.5 85 L45 50 L45 15 Z" fill={INK} />
    <Circle cx="42" cy="50" r="7" fill={BLUE} />
  </Svg>;
}
function Wordmark({ size = 17 }: { size?: number }) {
  return <View style={s.brand}><Mark size={size + 5} /><Text style={[s.wordmark, { fontSize: size }]}>althoce<Text style={{ color: BLUE }}>.</Text></Text></View>;
}

/** Radar à cinq axes, comme sur le site. */
function Radar({ dims }: { dims: Result['dims'] }) {
  const cx = 150, cy = 112, radius = 78;
  const point = (index: number, ratio: number) => {
    const angle = -Math.PI / 2 + index * 2 * Math.PI / DIMENSIONS.length;
    return [cx + Math.cos(angle) * radius * ratio, cy + Math.sin(angle) * radius * ratio];
  };
  const ring = (ratio: number) => DIMENSIONS.map((_, i) => point(i, ratio).map(n => n.toFixed(1)).join(',')).join(' ');
  const shape = DIMENSIONS.map((dimension, i) => point(i, (dims[dimension.id] ?? 0) / 100).map(n => n.toFixed(1)).join(',')).join(' ');
  return <Svg width={300} height={224} viewBox="0 0 300 224">
    {[1 / 3, 2 / 3, 1].map(ratio => <Polygon key={ratio} points={ring(ratio)} fill="none" stroke="#d5e0f2" strokeWidth={1} />)}
    {DIMENSIONS.map((dimension, i) => { const [x, y] = point(i, 1); return <Line key={dimension.id} x1={cx} y1={cy} x2={x} y2={y} stroke="#e3e9f3" strokeWidth={1} />; })}
    <Polygon points={shape} fill={BLUE} fillOpacity={0.16} stroke={BLUE} strokeWidth={2} />
    {DIMENSIONS.map((dimension, i) => { const [x, y] = point(i, (dims[dimension.id] ?? 0) / 100); return <Circle key={dimension.id} cx={x} cy={y} r={3} fill={BLUE} />; })}
  </Svg>;
}
/** Étiquettes du radar, placées en surimpression (le texte SVG de react-pdf ne gère pas l’alignement). */
function RadarLabels({ dims }: { dims: Result['dims'] }) {
  const cx = 150, cy = 112, radius = 78;
  return <>{DIMENSIONS.map((dimension, i) => {
    const angle = -Math.PI / 2 + i * 2 * Math.PI / DIMENSIONS.length;
    const x = cx + Math.cos(angle) * radius * 1.2, y = cy + Math.sin(angle) * radius * 1.2;
    const width = 90, centered = Math.abs(x - cx) < 8;
    const left = centered ? x - width / 2 : x > cx ? x - 4 : x - width + 4;
    return <Text key={dimension.id} style={{ position: 'absolute', left, top: y - 7, width, fontSize: 8, color: MUTED, textAlign: centered ? 'center' : x > cx ? 'left' : 'right' }}>
      {dimension.name} <Text style={{ color: INK, fontWeight: 600 }}>{dims[dimension.id] ?? '–'}</Text>
    </Text>;
  })}</>;
}
function Dots({ value }: { value: number }) {
  return <View style={s.dots}>{[0, 1, 2, 3].map(i => <View key={i} style={[s.stepDot, { backgroundColor: i <= value ? BLUE : '#e4e4e7' }]} />)}</View>;
}
/** Un titre de partie ne reste jamais seul en bas de page : il voyage avec le premier élément qui le suit. */
function Section({ title, lead, children }: { title: string; lead?: string; children: React.ReactNode }) {
  const [first, ...rest] = Children.toArray(children);
  return <View style={s.section}>
    <View wrap={false}><Text style={s.h2}>{title}</Text>{lead && <Text style={s.sectionLead}>{lead}</Text>}{first}</View>
    {rest}
  </View>;
}

export type MaturitePdfInput = { profile: Profile; answers: Answers; sector?: SectorNote; prenom?: string; date?: Date };

function MaturiteDocument({ profile, answers, sector, prenom, date = new Date() }: MaturitePdfInput) {
  const result = computeResult(profile, answers);
  const stage = result.stage;
  const readable = DIMENSIONS.some(dimension => result.dims[dimension.id] !== null);
  const ranked = DIMENSIONS.filter(dimension => result.dims[dimension.id] !== null).sort((a, b) => result.dims[a.id]! - result.dims[b.id]!);
  const weakest = ranked[0], strongest = ranked[ranked.length - 1];
  const first = ACTION_TEXTS[result.priorities[0]];
  const progress = nextStage(result, answers);
  const today = date.toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'Europe/Paris' });
  const meta = [sectorLabel(profile), SIZES.find(size => size.id === profile.size)?.label, ROLES.find(role => role.id === profile.role)?.label].filter(Boolean).join(' · ');

  return <Document title="Test de maturité IA — Résultat et plan d’action" author="Althoce" subject={meta} language="fr">
    <Page size="A4" style={s.page}>
      <View style={s.header} fixed render={({ pageNumber }) => pageNumber > 1 ? <>
        <Text>althoce. · Test de maturité IA</Text><Text>{meta}</Text>
      </> : null} />
      <View style={s.footer} fixed>
        <Text>{althoce.company} · {althoce.site} · {althoce.email}</Text>
        <Text render={({ pageNumber, totalPages }) => `${pageNumber} / ${totalPages}`} />
      </View>

      {/* Couverture */}
      <View style={s.coverTop}>
        <Wordmark />
        <Text style={s.coverContact}>{althoce.site}{'\n'}{althoce.email}</Text>
      </View>
      <Text style={s.eyebrow}>Test de maturité IA</Text>
      <Text style={s.title}>Résultat et plan d’action</Text>
      <Text style={s.meta}>{prenom ? `Préparé pour ${prenom} · ` : ''}{meta} · {today}</Text>
      <View style={s.rule} />

      {stage !== null && result.total !== null ? <>
        <View style={s.hero} wrap={false}>
          <Text style={s.heroLabel}>Stade {stage + 1} sur 4</Text>
          <View style={s.heroScore}><Text style={s.heroNumber}>{result.total}</Text><Text style={s.heroOf}>/ 100</Text></View>
          <Text style={s.heroStage}>{STAGES[stage].name}</Text>
          <Text style={s.heroTagline}>{STAGES[stage].tagline}</Text>
          <View style={s.scale}>{STAGES.map((item, i) => <View key={item.name} style={s.scaleItem}>
            <View style={[s.scaleBar, { backgroundColor: i === stage ? BLUE : i < stage ? '#93b4f3' : '#d7deea' }]} />
            <Text style={[s.scaleName, i === stage ? { color: DEEP, fontWeight: 700 } : {}]}>{item.name}</Text>
            <Text style={s.scaleRange}>{item.min} à {item.max}</Text>
          </View>)}</View>
        </View>
        <Text style={s.lead}>{STAGE_TEXTS[stage].diagnostic}</Text>
        <View style={s.twoCols}>
          <View style={s.col}><Text style={s.colTitle}>Ce qui se passe ensuite, en général</Text><Text>{STAGE_TEXTS[stage].next}</Text></View>
          <View style={[s.col, { marginRight: 0 }]}><Text style={s.colTitle}>La priorité à ce stade</Text><Text>{STAGE_TEXTS[stage].priority}</Text></View>
        </View>
      </> : <View style={s.signal}><Text style={s.signalTitle}>Score non établi</Text><Text>Vous avez répondu « Je ne sais pas » à {QUESTION_IDS.length - result.answered} questions sur {QUESTION_IDS.length}. Il en faut au moins {MIN_ANSWERS} renseignées, sur quatre dimensions, pour établir un score. C’est déjà un enseignement : faites préciser ces points par un associé ou un responsable d’équipe.</Text></View>}
      {result.scored && result.unknown.length > 0 && <Text style={s.hint}>Score établi sur {result.answered} réponses sur {QUESTION_IDS.length}. {result.unknown.length > 1 ? `Les ${result.unknown.length} questions sans réponse ne sont pas comptées : les faire préciser` : 'La question sans réponse n’est pas comptée : la faire préciser'} affinera le résultat.</Text>}

      {stage !== null && weakest && <Section title="L’essentiel en trois messages" lead="À reprendre tel quel avec vos associés ou votre équipe.">
        {[
          ['Où vous en êtes', `Stade ${stage + 1} sur 4 : ${STAGES[stage].name}. ${STAGES[stage].tagline}`],
          ['Ce qui tient, ce qui manque', result.dims[strongest.id] === result.dims[weakest.id]
            ? `Vos dimensions évaluées sont au même niveau (${result.dims[weakest.id]} sur 100) : aucune ne tire les autres.`
            : `Votre point le plus solide : ${ARTICLES[strongest.id]} (${result.dims[strongest.id]} sur 100). Le plus fragile : ${ARTICLES[weakest.id]} (${result.dims[weakest.id]} sur 100). ${DIMENSION_TEXTS[weakest.id][result.bands[weakest.id]!].reading}`],
          ['Par où commencer', `${first.title}. ${first.why}`],
        ].map(([title, text], i) => <View key={title} style={s.numbered} wrap={false}>
          <Text style={s.badge}>{i + 1}</Text>
          <View style={s.flex1}><Text style={s.itemTitle}>{title}</Text><Text>{text}</Text></View>
        </View>)}
      </Section>}

      {readable && <>
        <Section title="Cinq dimensions">
          <View style={{ alignItems: 'center', marginBottom: 6 }} wrap={false}>
            <View style={{ width: 300, height: 224 }}><Radar dims={result.dims} /><RadarLabels dims={result.dims} /></View>
          </View>
          {DIMENSIONS.map(dimension => {
            const score = result.dims[dimension.id], band = result.bands[dimension.id];
            return <View key={dimension.id} style={s.dimRow} wrap={false}>
              <View style={s.dimTop}><Text style={s.dimName}>{dimension.name}  <Text style={s.dimLabel}>{dimension.label}</Text></Text><Text style={s.dimScore}>{score === null ? 'Non évalué' : `${score} / 100`}</Text></View>
              <View style={s.bar}><View style={[s.barFill, { width: `${score ?? 0}%` }]} /></View>
              {band ? <><Text>{DIMENSION_TEXTS[dimension.id][band].reading}</Text><Text style={[s.small, { marginTop: 2 }]}><Text style={s.strong}>Prochain pas. </Text>{DIMENSION_TEXTS[dimension.id][band].step}</Text></> : <Text style={s.small}>Trop peu de réponses pour lire cette dimension.</Text>}
            </View>;
          })}
        </Section>

        {progress && progress.levers.length > 0 && <Section title={progress.target !== null ? 'Ce qui vous sépare du stade suivant' : 'Ce qu’il reste à consolider'} lead={progress.target !== null
          ? `Il vous manque ${progress.gap} point${progress.gap > 1 ? 's' : ''} pour atteindre le stade ${progress.target + 1}, « ${STAGES[progress.target].name} ». Les évolutions qui comptent le plus :`
          : 'Vous êtes au dernier stade. Les évolutions qui restent à votre portée :'}>
          {progress.levers.map(lever => { const question = QUESTIONS.find(item => item.id === lever.id)!, text = questionText(question, profile.size); return <View key={lever.id} style={s.lever} wrap={false}>
            <Text style={s.itemTitle}>{question.topic}</Text>
            <View style={s.moveRow}>
              <View style={s.moveCell}><Text style={s.moveLabel}>Aujourd’hui</Text><Text style={{ color: MUTED }}>{text.opts[lever.from]}</Text></View>
              <View style={s.moveCell}><Text style={s.moveNext}>Étape suivante</Text><Text>{text.opts[lever.to]}</Text></View>
            </View>
          </View>; })}
          <Text style={s.hint}>Ensemble, ces évolutions représentent environ {progress.gain} point{progress.gain > 1 ? 's' : ''}.{(result.bands.cadre === 'low' || result.bands.usages === 'low') ? ' Relier l’IA à vos outils viendra ensuite : le cadre et les usages passent d’abord.' : ''}</Text>
        </Section>}

        <Section title="Ce que vos réponses révèlent">
          {result.signals.length > 0 ? result.signals.map(id => { const item = SIGNAL_TEXTS[id]; return <View key={id} style={s.signal} wrap={false}>
            <Text style={s.signalTitle}>{item.title}</Text>
            <Text>{item.finding} {item.effect}</Text>
            <Text style={{ marginTop: 4 }}><Text style={s.strong}>Premier pas. </Text>{item.step}</Text>
          </View>; }) : <Text style={s.small}>Aucun déséquilibre marqué entre vos dimensions.</Text>}
          {result.strengths.length > 0 && <View style={{ marginTop: 6 }}>
            <Text style={[s.colTitle, { marginTop: 4 }]}>Vos points d’appui</Text>
            {result.strengths.map(id => <View key={id} style={s.strength} wrap={false}><Svg width={11} height={11} viewBox="0 0 24 24" style={{ marginRight: 8, marginTop: 1.5 }}><Path d="M5 12.5l4.5 4.5L19 7.5" stroke="#15803d" strokeWidth={3} fill="none" /></Svg><View style={s.flex1}><Text style={s.itemTitle}>{STRENGTH_TEXTS[id].title}</Text><Text style={s.small}>{STRENGTH_TEXTS[id].text}</Text></View></View>)}
          </View>}
        </Section>

        <Section title="Vos trois priorités" lead="Dans l’ordre : quatre étapes, le résultat attendu et le piège à éviter.">
          {result.priorities.map((id, i) => { const item = ACTION_TEXTS[id], link = actionLink(id, profile.size, result.sensitive); return <View key={id} style={s.sheet} wrap={false}>
            <View style={s.sheetHead}><Text style={s.badge}>{i + 1}</Text><View style={s.flex1}><Text style={s.sheetTitle}>{item.title}</Text><Text style={s.small}>{item.text}</Text></View></View>
            <Text style={s.sheetWhy}>{item.why}</Text>
            {item.steps.map((step, n) => <View key={step} style={s.step}><Text style={s.stepNum}>{n + 1}.</Text><Text style={s.flex1}>{step}</Text></View>)}
            <View style={s.facts}>
              <View style={s.fact}><Text style={s.moveLabel}>Résultat attendu</Text><Text style={s.small}>{item.outcome}</Text></View>
              <View style={s.fact}><Text style={s.moveLabel}>Délai indicatif</Text><Text style={s.small}>{item.horizon}</Text></View>
              <View style={[s.fact, { marginRight: 0 }]}><Text style={s.moveLabel}>Piège à éviter</Text><Text style={s.small}>{item.pitfall}</Text></View>
            </View>
            <Link style={s.link} src={absolute(link.href)}>{link.label} → {shown(link.href)}</Link>
          </View>; })}
        </Section>

        <Section title="Vos 30 premiers jours" lead="Un rythme indicatif, à adapter à votre activité.">
          {monthPlan(result.priorities).map(week => <View key={week.week} style={s.week} wrap={false}>
            <Text style={s.weekLabel}>Semaine {week.week}</Text>
            <View style={s.flex1}><Text style={s.itemTitle}>{week.title}</Text>{week.items.map(item => <View key={item} style={s.bullet}><Text style={s.dot}>•</Text><Text style={s.flex1}>{item}</Text></View>)}</View>
          </View>)}
          <Text style={s.hint}>Au-delà de ce premier mois, une feuille de route se construit avec vos équipes, vos outils et vos contraintes.</Text>
        </Section>

        <Section title="L’accompagnement adapté">
          {result.offers.map((id, i) => { const offer = OFFER_TEXTS[id]; return <View key={id} style={[s.offer, i === 0 ? s.offerPrimary : {}]} wrap={false}>
            {i === 0 && <Text style={s.offerTag}>Recommandé pour vous</Text>}
            <Text style={s.itemTitle}>{offer.title}</Text><Text>{offer.text}</Text>
            <Text style={[s.small, { marginTop: 3 }]}>{offer.format}</Text>
            <Link style={[s.link, { marginTop: 4 }]} src={absolute(offer.href)}>{shown(offer.href)}</Link>
          </View>; })}
          <Text style={s.hint}>Chaque accompagnement est indépendant : une formation peut être engagée directement, sans diagnostic préalable.</Text>
        </Section>
      </>}

      {sector && <Section title={`Dans votre secteur : ${sector.name}`} lead="Trois usages à étudier, avec ce que prépare l’agent et ce qui reste entre vos mains.">
        {sector.examples.map(example => <View key={example.title} style={s.example} wrap={false}>
          <Text style={s.itemTitle}>{example.title}</Text>
          <Text>{example.output}</Text>
          <Text style={[s.small, { marginTop: 2 }]}><Text style={s.strong}>Contrôle humain. </Text>{example.review}</Text>
        </View>)}
        <Text style={{ marginTop: 6 }}>{sector.boundaries}</Text>
        <Link style={s.link} src={absolute(sector.href)}>Voir les usages de l’IA dans votre secteur → {shown(sector.href)}</Link>
        {sector.caseStudy && <Link style={[s.link, { marginTop: 3 }]} src={absolute(sector.caseStudy.href)}>{sector.caseStudy.label} → {shown(sector.caseStudy.href)}</Link>}
        {sector.guides.map(guide => <Link key={guide.href} style={[s.link, { marginTop: 3 }]} src={absolute(guide.href)}>Guide : {guide.title}</Link>)}
      </Section>}

      <Section title="Vos réponses, point par point" lead="Pour chaque sujet : votre situation aujourd’hui, et l’étape à viser ensuite.">
        {DIMENSIONS.map(dimension => <View key={dimension.id} style={s.answerGroup}>
          <Text style={s.answerGroupTitle} minPresenceAhead={60}>{dimension.name}  <Text style={s.dimLabel}>{dimension.label}</Text></Text>
          {QUESTIONS.filter(question => question.dim === dimension.id).map(question => { const value = answers[question.id] ?? -1, text = questionText(question, profile.size); return <View key={question.id} style={s.answer} wrap={false}>
            <View style={s.dimTop}><Text style={s.itemTitle}>{question.topic}</Text>{value >= 0 && <Dots value={value} />}</View>
            <View style={s.moveRow}>
              <View style={s.moveCell}><Text style={s.moveLabel}>Aujourd’hui</Text><Text style={{ color: MUTED }}>{value === -1 ? UNKNOWN_LABEL : text.opts[value]}</Text></View>
              <View style={s.moveCell}><Text style={s.moveNext}>Étape suivante</Text><Text>{value === -1 ? 'À faire préciser en interne.' : value === 3 ? 'Vous êtes au cran le plus avancé sur ce point.' : text.opts[nextOption(question, value)]}</Text></View>
            </View>
          </View>; })}
        </View>)}
      </Section>

      {readable && <Section title="Cinq questions à vous poser en interne" lead="En commençant par vos dimensions les plus fragiles.">
        {[...ranked, ...DIMENSIONS.filter(dimension => result.dims[dimension.id] === null)].map(dimension => <View key={dimension.id} style={s.question} wrap={false}>
          <Text style={[s.moveNext, { textTransform: 'none', fontSize: 8.5 }]}>{dimension.name}</Text>
          <Text style={{ fontSize: 10.5, color: INK }}>{DISCUSSION_QUESTIONS[dimension.id]}</Text>
        </View>)}
      </Section>}

      <Section title="Comment ce résultat est-il calculé ?">
        <View style={s.method} wrap={false}>
          <Text style={[s.methodTerm, { marginTop: 0 }]}>Quatre situations par question</Text><Text style={s.small}>De la moins avancée à la plus avancée, notées de 0 à 3. « Je ne sais pas » n’est pas compté.</Text>
          <Text style={s.methodTerm}>Cinq dimensions sur 100</Text><Text style={s.small}>Chaque dimension est la moyenne de ses trois questions. Elle se lit sur au moins deux réponses.</Text>
          <Text style={s.methodTerm}>Pondération</Text><Text style={s.small}>{DIMENSIONS.map(dimension => `${dimension.name} ${result.weights[dimension.id]} %`).join(' · ')}.{result.sensitive ? ' Dans votre secteur, le cadre pèse davantage que l’intégration.' : ''}</Text>
          <Text style={s.methodTerm}>Quatre stades</Text><Text style={s.small}>{STAGES.map(item => `${item.name} : ${item.min} à ${item.max}`).join(' · ')}.</Text>
          <Text style={[s.small, { marginTop: 8 }]}>Cette auto-évaluation repose sur vos déclarations. Elle situe et ouvre la discussion ; elle ne remplace pas un diagnostic mené avec vos équipes et vos outils.</Text>
        </View>
      </Section>

      <View style={s.contact} wrap={false}>
        <View style={s.contactRow}>
          <View style={{ width: 120, marginRight: 14 }}><Wordmark size={14} /><Text style={[s.small, { marginTop: 6 }]}>{brand.title}</Text></View>
          <View style={[s.flex1, { marginRight: 14 }]}><Text style={s.itemTitle}>Parlons de votre résultat.</Text><Text style={s.small}>Un premier échange de 30 minutes, offert et sans engagement, pour confronter ce résultat à votre réalité.</Text></View>
          <View style={{ width: 170 }}>
            <Link style={s.contactLink} src={`mailto:${althoce.email}`}>{althoce.email}</Link>
            <Link style={s.contactLink} src={`${SITE}/contact/`}>{althoce.site}/contact</Link>
            <Text style={[s.small, { marginTop: 4 }]}>{althoce.company}</Text>
            <Text style={s.small}>{althoce.street}, {althoce.city}</Text>
            <Text style={s.small}>{althoce.hours}</Text>
          </View>
        </View>
        <Text style={s.contactDate}>Auto-évaluation réalisée le {today} sur althoce.com/test-maturite-ia/.</Text>
      </View>
    </Page>
  </Document>;
}

/** Nom du fichier joint, sans donnée personnelle. */
export function maturitePdfName(date = new Date()): string {
  return `Althoce-test-maturite-IA-${date.toLocaleDateString('fr-CA', { timeZone: 'Europe/Paris' })}.pdf`;
}

export async function renderMaturitePdf(input: MaturitePdfInput): Promise<Buffer> {
  registerFonts();
  return renderToBuffer(<MaturiteDocument {...input} />);
}

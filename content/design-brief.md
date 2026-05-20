# Althoce — Design Brief (Home Page v2.1)

> **Destinataire** : Claude Design
> **Source contenu** : `content/home-v2.md` (v2.1, avril 2026)
> **Objectif** : transformer le brief contenu en maquettes détaillées pour une home SEO-ready, conversion-first, ton pédagogue
> **Ville** : Bordeaux (Nouvelle-Aquitaine) · France entière
> **Cible** : PME 20–200 salariés, ETI, agences & cabinets

---

## 1. Philosophie visuelle (v2.1)

**Le pivot** : on s'éloigne du look « agence premium dark / orbites colorées » du v1 et on passe à un style **éditorial, lumineux, technique et pédagogue**, qui inspire confiance à un dirigeant de PME non-tech.

### Les trois mots directeurs

1. **Lumineux** — fond dominant clair, air, lisibilité maximale. Le sombre n'apparaît que dans des encadrés illustratifs ou des cartes produit.
2. **Précis** — grille stricte, typo display généreuse, micro-détails soignés (bords, icônes, pills). Aucun flou marketing.
3. **Vivant** — les agents IA sont mis en scène (tags, cartes animées, marquees). On montre du volume (les ~30 agents) sans saturer.

### Référentiel mental

Imaginer un croisement entre :
- **Linear.app** pour la rigueur typographique et la densité d'information maîtrisée
- **Vercel.com** pour la pureté du fond + les accents bleu/violet sur les CTA
- **Anthropic.com** pour le côté éditorial, presque académique, des sections pédagogiques
- **Stripe.com** pour le storytelling produit (sections qui "parlent" au lecteur)

---

## 2. Design System

### 2.1 Palette de couleurs

| Token | Usage | Valeur |
|-------|-------|--------|
| `bg-base` | Fond principal de la page | `#FAFAF7` (off-white tirant sur le crème — rassurant, chaleureux) |
| `bg-surface` | Cartes claires (services, métiers) | `#FFFFFF` |
| `bg-dark` | Encadrés illustratifs (exemples, stats, agent-in-action) | `#0B0D10` (presque noir, chaud) |
| `bg-subtle` | Sections alternées (preuve, FAQ) | `#F3F4EF` |
| `text-primary` | Titres, corps de texte principal | `#0B0D10` |
| `text-secondary` | Sous-titres, descriptions | `#52555A` |
| `text-muted` | Labels, légendes | `#8B8E93` |
| `accent-primary` | CTA principal, liens | `#2563EB` (bleu électrique) |
| `accent-primary-hover` | Hover CTA | `#1D4ED8` |
| `accent-violet` | Gradient H1 (mots mis en avant : « agents IA », « 100% autonomes ») | `#7C3AED → #2563EB` |
| `accent-success` | Chiffres positifs (+150, +958, +7M€) | `#059669` |
| `border-subtle` | Bordures de cartes, séparateurs | `#E5E4DF` |

**Règle gradients** : un seul gradient utilisé dans la page = le gradient violet→bleu sur les mots-clés du H1 et les chiffres hero. Ailleurs, aplats unis.

### 2.2 Typographie

- **Display (H1, H2)** : `Instrument Serif` ou `Fraunces` (serif moderne, élégant, éditorial). Fallback : `Georgia, serif`.
- **Sans-serif (corps, H3, UI)** : `Inter` ou `Geist`. Fallback : `-apple-system, BlinkMacSystemFont, sans-serif`.
- **Monospace (code, stats)** : `JetBrains Mono` ou `Geist Mono`.

**Échelle typographique**

| Usage | Taille (desktop) | Poids | Line-height |
|-------|------------------|-------|-------------|
| H1 hero | 72–88px (clamp) | 400 (serif) | 1.05 |
| H2 section | 48–56px | 400 (serif) | 1.1 |
| H3 carte | 22–24px | 600 (sans) | 1.3 |
| Body large | 18–20px | 400 (sans) | 1.55 |
| Body | 16px | 400 (sans) | 1.6 |
| Caption / Label | 13–14px | 500 (sans) · uppercase · letter-spacing 0.08em | 1.4 |
| Stat giant | 96–120px | 400 (serif) | 1 |

### 2.3 Espacements

Grille 8pt. Section padding vertical : `py-24` desktop, `py-16` mobile. Gap entre cartes : `gap-6` (24px). Container principal : `max-w-6xl` (1152px) centré avec `px-6`.

### 2.4 Composants

#### Bouton primaire (CTA)
Fond `accent-primary`, texte blanc, radius `rounded-xl`, padding `px-6 py-3.5`, label sans + flèche `→`. Hover : fond `accent-primary-hover` + translate-x de la flèche de 2px.

#### Bouton secondaire (lien texte)
Fond transparent, texte `text-primary`, underline animé au hover (droite→gauche).

#### Card service / métier
Fond `bg-surface`, bordure 1px `border-subtle`, radius `rounded-2xl`, padding `p-6`. Contient : icône `lucide-react` 24px en haut à gauche, H3, description 2 lignes, lien ancre « Découvrir → ». Hover : bordure passe en `accent-primary`, ombre portée soft.

#### AgentTag (pill)
Composant réutilisable `<AgentTag name icon href />`. Fond `bg-surface`, bordure `border-subtle`, radius `rounded-full`, padding `px-4 py-2`, typo sans 14px, icône 14px à gauche, text-primary. Hover : scale 1.03 + bordure `accent-primary` + léger glow.

#### StatCard
Transparent (pas de card). Stat giant en display serif gradient, puis label sans 14px uppercase en `text-muted`, puis description 16px.

#### DarkBlock (encadré illustratif)
Fond `bg-dark`, texte blanc, radius `rounded-3xl`, padding généreux `p-10`. Utilisé pour : l'exemple concret « agent qui traite un mail client » (section 4), le bloc cas clients (section 9). Jamais pour du texte long.

---

## 3. Structure section par section (14 sections)

### Hero — Section 1

**Disposition**
- Conteneur pleine largeur, fond `bg-base`.
- Grille en arrière-plan : points ou lignes 1px `border-subtle` (très subtile, `opacity-30`).
- Layout : centré, max-w-4xl, padding-top important (`pt-32`).

**Composition**
```
[Label pill en haut]          Agence IA · Bordeaux · France entière

[H1 display énorme]           Agence IA & Automatisation.
                              On déploie des (agents IA)(gradient violet→bleu)
                              100% autonomes.(fin gradient)

[Sous-titre large]            Nous concevons des employés IA sur-mesure
                              pour les PME et ETI françaises...

[Micro-preuves pills x4]      [+150 PME accompagnées] [+7 M€ économisés]
                              [Données en UE] [Audit offert 48h]

[CTA primaire] [CTA secondaire text]

[Marquee logos tech partenaires — bande fine en bas]
```

**Animations**
- H1 : animation mot-par-mot au load (y: 20 → 0, opacity 0 → 1, stagger 0.1s).
- Label et pills : fade-in différé après le H1.
- Marquee logos : défilement horizontal infini lent.

### Bande de confiance — Section 2
Fond `bg-subtle`. Accroche courte en `text-muted` uppercase + logos clients en grayscale, max 6–8 logos. `section.py-12`.

### Chiffres-clés — Section 3
Fond `bg-base`. 4 `StatCard` en grille 4 colonnes (2×2 mobile). Les chiffres (+150, −80%, +958, +7 M€) en gradient violet→bleu, display serif 100px. Animation `animate(0, numericValue)` au scroll pour chaque stat.

### Qu'est-ce qu'un agent IA — Section 4

Fond `bg-base`, alterné avec un gros `DarkBlock` central pour l'exemple concret.

**Disposition**
- H2 centré + paragraphe pédagogue large (max-w-3xl centré).
- `DarkBlock` plein largeur avec l'exemple « mail client → agent lit → décide → agit → CRM mis à jour ». Ajouter une illustration schématique (4 étapes connectées par des flèches animées au scroll).
- En dessous : grille 3 colonnes « Agent commercial / Agent opérationnel / Agent support » — chaque carte a une icône `lucide-react` différenciante (Briefcase, Settings2, MessageSquare).
- CTA bas de section : lien ancré vers `/services/agents-ia/`.

### À qui on parle — Section 5
Fond `bg-subtle`. 3 cartes PME / ETI / Agences en grille 3 colonnes desktop. Chaque carte = une icône illustrative + H3 + description 3 lignes + lien interne avec flèche. Hauteur uniforme.

### Services IA (Silo 1) — Section 6
Fond `bg-base`. Grille 4×2 (8 cartes services). Carte hover → lift léger + bordure accent. CTA central sous la grille.

### Agent IA par métier (Silo 2) — Section 7 ⭐ *section clé v2.1*

**C'est la section "signature" de la page. Traitement visuel soigné.**

**Disposition**
- Label pill uppercase : `Silo agents métiers`.
- H2 display serif : « L'IA transforme votre métier. »
- Sous-titre pédagogue, max-w-2xl.

**Bloc 1 — Grille 8 cartes métier** *(4 colonnes × 2 rangées, responsive 2×4 tablette, 1×8 mobile)*
Chaque carte métier :
- Icône lucide-react colorée (différente par métier).
- Nom du métier en H3 sans 22px.
- Bénéfice pédagogue 2 lignes en `text-secondary`.
- Petit chevron `→` en bas à droite, animé au hover.
- URL : `/agent-ia/[metier]/`.
- Ordre : Marketing · Commercial · Service client · RH · Finance · Opérations · Juridique · Secteurs.

**Bloc 2 — Marquee ~30 AgentTags scrollable horizontal**
- Juste en-dessous de la grille 8 cartes, séparateur d'espace (`mt-16`).
- Label au-dessus : `Tous nos agents IA spécialisés` en caption.
- Composant `<AgentMarquee />` : 2 rangées de pills, défilant en sens inversé, vitesse lente, pause au hover.
- Chaque pill = icône 14px + nom d'agent (ex : « Agent SEO IA »), cliquable vers la page métier parent.
- Respecter `prefers-reduced-motion` : si activé, figer et permettre scroll horizontal manuel.

**Bloc 3 — CTA central**
`Voir toutes les automatisations métier →` (pointe vers `/automatisation/`, hub unique).

**Rendu visuel attendu**
Inspiration : la section "ecosystem" de Vercel où des logos défilent. Ici ce sont des tags agents, pas des logos. Le contraste entre la grille statique 8 cartes (structure) + le marquee dynamique 30 tags (volume) raconte l'offre.

### Méthode 4 étapes — Section 8
Fond `bg-base`. Layout horizontal desktop : une timeline 4 étapes avec ligne de connexion. Chaque étape a un grand numéro 01/02/03/04 en display serif, un H3, un paragraphe, une icône discrète. Sur mobile : stack vertical avec ligne verticale connective.

### Cas clients — Section 9
Fond `bg-subtle`. 4 cartes cas clients en grille 2×2.
- Chaque carte : chiffre phare en display serif énorme (ex : « ×4 »), label dessous, description 3 lignes, lien « Lire le cas complet → ».
- Icône secteur en haut à droite.
- Hover : la carte bascule en `bg-dark` (inversion de contraste), texte blanc, chiffre reste en gradient.

### Prix & délais — Section 10
Fond `bg-base`. 3 cartes pricing en grille 3 colonnes.
- La carte du milieu (Système multi-agents) est légèrement surélevée, bordure `accent-primary`, badge « Le plus choisi » en haut.
- Chaque carte : titre + prix en display serif gradient + bullet list features + CTA.
- En dessous, une note discrète centrée : « L'audit initial (48h) est toujours offert ».

### Sécurité & souveraineté — Section 11
Fond `bg-subtle`. Layout 2 colonnes desktop :
- Gauche : H2 + paragraphe pédagogue + CTA.
- Droite : grille 2×2 des 4 engagements en mini-cards.

### Géographie — Section 12
Fond `bg-base`. H2 + paragraphe principal + 2 blocs :
- Bloc 1 : 5 villes prioritaires en pills grandes (Paris, Lyon, Bordeaux, Toulouse, Marseille) — Bordeaux mise en avant (gradient, icône épingle).
- Bloc 2 : 15 villes secondaires en pills discrètes grises.
- Optionnel : petite carte de France SVG stylisée avec points animés sur chaque ville.

### FAQ — Section 13
Fond `bg-base`. Layout 1 colonne centrée, max-w-3xl. Accordéon `<details>` natif stylé : question en sans 18px bold, chevron animé à droite, réponse en body 16px `text-secondary`. Animation fluide d'ouverture. 12 Q/R.

### CTA final — Section 14
Fond `bg-dark` plein largeur. Texte blanc. H2 display serif énorme centré. Sous-titre. CTA primaire (fond accent-primary) + micro-garantie en caption uppercase dessous.

---

## 4. Animations & interactions

### Principes
- **Sobriété avant tout.** Aucune animation gratuite. Chaque mouvement sert la lecture ou la preuve.
- **Respect de `prefers-reduced-motion`.** Systématique.
- **Smooth scrolling** activé (`html { scroll-behavior: smooth }`).

### Patterns à utiliser (Framer Motion)

| Pattern | Usage |
|---------|-------|
| `initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }}` | Entrée de chaque section |
| `stagger 0.1s` | Mots du H1, cartes d'une grille |
| `animate` sur `count` | Stats chiffrées |
| `scale 1.03` au hover | Cards et AgentTags |
| Marquee infinie | Tags agents section 7, logos tech hero |

### Easing standard
`[0.22, 1, 0.36, 1]` (out-expo doux) sur toutes les transitions d'UI.

---

## 5. Responsive

- **Mobile-first.** Tous les composants dessinés d'abord en 375px, puis adaptés.
- **Breakpoints Tailwind standards** : `sm: 640px / md: 768px / lg: 1024px / xl: 1280px`.
- **Règles clés** :
  - H1 : clamp(40px, 8vw, 88px).
  - Grilles 4 cols → 2 cols (md) → 1 col (sm).
  - Marquee agents section 7 : sur mobile, réduire la vitesse et la hauteur.
  - Les `DarkBlock` gardent leur padding généreux même sur mobile (`p-6` minimum).

---

## 6. Accessibilité (obligatoire)

- Contraste AA minimum partout, AAA sur le texte de corps.
- Tous les boutons et liens ont un `:focus-visible` avec ring `accent-primary`.
- Navigation clavier testée sur chaque composant interactif (accordéon FAQ, tags agents, cartes hover).
- `alt` descriptifs sur images (voir brief SEO `content/home-v2.md`).
- Marquees et animations : `prefers-reduced-motion` respecté.
- Icônes décoratives : `aria-hidden="true"`. Icônes porteuses de sens : `aria-label`.

---

## 7. Livrables attendus de Claude Design

1. **Maquettes statiques** (Figma ou images) pour chaque section clé :
   - Hero (desktop + mobile)
   - Section 4 « Qu'est-ce qu'un agent IA » avec DarkBlock
   - Section 7 « Agent IA par métier » (grille 8 + marquee 30 tags)
   - Section 9 cas clients (état normal + hover inversé)
   - Section 10 pricing
   - Section 14 CTA final
2. **Design tokens** exportés en fichier (JSON ou CSS variables) — palette, typo, spacing, radius.
3. **Composants clés définis** :
   - `<AgentTag />`
   - `<AgentMarquee />`
   - `<StatCard />`
   - `<ServiceCard />`
   - `<MetierCard />`
   - `<PricingCard />`
   - `<DarkBlock />`
   - `<FAQItem />`
4. **Spécifications d'interaction** : hover, focus, transitions, scroll animations.
5. **Note d'accessibilité** : comment le design traite contraste, focus, motion.

---

## 8. Cohérence avec le reste du site (future)

Ce design system devra être réutilisé pour :
- Les 8 pages `/services/[service]/` (Silo 1)
- La page hub `/automatisation/` + les 8 pages `/agent-ia/[métier]/` (Silo 2)
- Les 20 pages `/agence-ia-[ville]/` (Silo 3)
- Les 4+ pages `/cas-clients/[slug]/` (Silo 6)
- Le blog `/blog/`
- Les pages légales et transactionnelles

→ **Tous les composants doivent être pensés comme réutilisables**, avec props documentées. Le design system Althoce est un **produit** à part entière.

---

## 9. Inspirations visuelles (moodboard)

À titre indicatif pour Claude Design :
- **linear.app** — rigueur, densité, accents bleu
- **vercel.com** — pureté, gradients, marquees logos
- **anthropic.com** — ton éditorial, serif sur sans
- **stripe.com** — storytelling produit, sections denses
- **mistral.ai** — rigueur technique française, accents ocres

**À éviter** :
- Illustrations 3D génériques "IA / cerveau / robot".
- Fonds dégradés violet/rose saturés (trop "startup 2022").
- Effets glassmorphism / glow excessifs.

---

## 10. Contraintes techniques (pour Claude Code ensuite)

Le design devra être implémentable en :
- **Next.js 15 App Router**
- **Tailwind CSS** uniquement (pas de CSS-in-JS custom)
- **Framer Motion** pour les animations
- **Lucide React** pour les icônes
- **TypeScript strict**

Donc : pas de SVG complexes non-exportables, pas de filters CSS non-standards, pas de typos qui n'existent pas sur Google Fonts ou Adobe Fonts avec license web.

---

## 11. Checklist validation avant handoff Claude Code

- [ ] Toutes les sections du brief `home-v2.md` v2.1 ont une maquette correspondante.
- [ ] Chaque composant réutilisable est nommé, isolé, documenté.
- [ ] Le marquee agents IA section 7 est défini pixel-perfect.
- [ ] La palette, la typo et les tokens sont exportés.
- [ ] Le responsive (mobile 375 / tablette 768 / desktop 1280) est couvert.
- [ ] Les 4 CTA clés sont identifiables (hero primaire, hero secondaire, pricing, CTA final).
- [ ] La section Stats utilise bien les 4 chiffres v2.1 : +150, −80%, +958, +7 M€.
- [ ] Le H1 est rendu avec gradient violet→bleu sur « agents IA » et « 100% autonomes ».

---

*Document généré par Claude (content strategist) · v1.0 · avril 2026*
*À valider par Vincent avant transmission à Claude Design.*

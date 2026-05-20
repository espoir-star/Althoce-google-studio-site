# `/cas-clients/cabinet-comptable-lyon/` — Cas client (Silo 6)

> **Cas client #1. Cabinet d'expertise comptable lyonnais, 12 collaborateurs, 320 clients TPE/PME. Référencé depuis `/agent-ia/finance/`.**

---

## 0. Préambule

### Sections héritées

| # | Section | Source | Composant |
|---|---------|--------|-----------|
| 8 | Méthode | `home-v2.md` | `<MethodologySection />` |
| 10 | CTA final | `home-v2.md` | `<CTAFinalSection />` |

Pas de section Pricing héritée (cohérent avec Silo 6). Pas de section Souveraineté héritée (le sujet est abordé via un callout métier en sec.3).

### Slots variables propres à cette page

| Slot | Section | Variation |
|------|---------|-----------|
| `Hero stat huge` | sec.1 | « ×2 capacité » en display serif géant |
| `Le client` | sec.2 | Long paragraphe journalistique sur le cabinet |
| `Avant Althoce` | sec.3 | Split éditorial : journée type avant |
| `La solution` | sec.4 | Timeline déploiement + schéma SVG architecture |
| `Résultats` | sec.5 | 4 KPI bands pleine largeur |
| `Témoignage` | sec.6 | Citation pleine page display serif XL |
| `Apprentissages` | sec.7 | Blocs ✅ / 🔧 / ⚠️ |
| `Votre cas est-il similaire` | sec.9 | Encart vers /agent-ia/finance/ |

### Blocs immuables

- **Breadcrumb pattern** : `Accueil › Cas clients › Cabinet d'expertise comptable Lyon`
- **CTA primaire** : « Discuter de votre projet → »
- **JSON-LD obligatoires** : `Article` (ou `CaseStudy` si schéma personnalisé) + `BreadcrumbList`
- **Chiffres marque** : `+758 agents en production · +150 PME équipées · −70 % temps de saisie · +5 M€ économisés` (en pied de page)

### Règle créativité visuelle

Pas de grille de cartes. Patterns : stat hero géante, split éditorial, timeline, schéma SVG, KPI bands pleine largeur, citation pleine page, blocs ✅/🔧/⚠️.

---

## 1. Méta-info SEO / éditoriale

### Silo
**Silo 6 — Cas clients** (cas #1)

### Rôle dans l'architecture

Cas client référencé par `/agent-ia/finance/` (Silo 2). Sert de **preuve sociale chiffrée** pour les prospects du métier finance (cabinets d'expertise comptable, services compta PME, DAF). Démontre concrètement le passage de la saisie manuelle à la production assistée par agent IA, sans suppression de poste.

### Objectif trafic

1. Capter les requêtes preuve sociale métier finance : « cas client agent IA comptable », « ROI agent IA cabinet comptable », « automatisation comptabilité PME exemple », « expert comptable IA témoignage ».
2. Convertir les prospects en fin de cycle d'achat finance (avant le RDV de 30 min).
3. Distribuer vers la page métier `/agent-ia/finance/` pour ceux qui veulent l'offre détaillée.

### Mots-clés cibles principaux

cas client agent IA comptable · ROI agent IA cabinet comptable · automatisation comptabilité PME exemple · expert comptable IA témoignage · agent IA factures fournisseurs cas concret

### Mots-clés longue traîne

« comment un cabinet comptable a doublé sa capacité avec l'IA », « témoignage agent IA cabinet expertise comptable Lyon », « ROI 4 mois agent IA comptable »

---

## 2. Title / Meta description / Open Graph

```html
<title>Cabinet d'expertise comptable Lyon : ×2 capacité grâce aux agents IA Althoce | Cas client</title>

<meta name="description" content="Comment un cabinet d'expertise comptable lyonnais de 12 collaborateurs a doublé sa capacité de production en 4 mois avec 2 agents IA Althoce (factures fournisseurs + rapprochement bancaire), sans embaucher et sans aucun départ d'équipe.">

<meta name="keywords" content="cas client agent IA comptable, ROI agent IA cabinet comptable, automatisation comptabilité PME exemple, expert comptable IA témoignage, agent IA factures fournisseurs cas concret">

<link rel="canonical" href="https://althoce.com/cas-clients/cabinet-comptable-lyon/">

<meta property="og:title" content="×2 capacité en 4 mois pour un cabinet comptable lyonnais grâce à l'IA | Althoce">
<meta property="og:description" content="80 % de la saisie absorbée. 80 nouveaux clients en 4 mois. Zéro départ d'équipe. Voici le cas concret d'un cabinet comptable PME qui a doublé son activité avec les agents IA Althoce.">
<meta property="og:type" content="article">
<meta property="og:locale" content="fr_FR">
<meta property="og:url" content="https://althoce.com/cas-clients/cabinet-comptable-lyon/">
```

---

## 3. Plan de page

| # | Section | Type | Pattern visuel |
|---|---------|------|----------------|
| 1 | 🟢 Hero | Propre | Split éditorial : à gauche H1+CTA, à droite stat hero géante « ×2 capacité » en display serif XL |
| 2 | 🟢 Le client | Propre | Long paragraphe journalistique pleine largeur |
| 3 | 🟢 Avant Althoce | Propre | Split éditorial (constat sobre) + callout sur la souveraineté comptable |
| 4 | 🟢 La solution déployée | Propre | Timeline déploiement + schéma SVG architecture agents |
| 5 | 🟢 Résultats | Propre | 4 KPI bands pleine largeur empilées |
| 6 | 🟢 Témoignage client | Propre | Citation pleine page display serif XL |
| 7 | 🟢 Apprentissages (✅ / 🔧 / ⚠️) | Propre | Blocs colorés |
| 8 | 🏠 Méthode | Hérité | `<MethodologySection />` |
| 9 | 🟢 Votre cas est-il similaire ? | Propre | Encart + 3 questions de qualification |
| 10 | 🏠 CTA final | Hérité | `<CTAFinalSection />` |

---

## 4. Section 1 — Hero

### Layout

Split éditorial. À gauche : H1, sous-titre, CTA. À droite : stat hero géante en display serif XL.

### H1

> **×2 capacité en 4 mois pour un cabinet d'expertise comptable lyonnais.**

### Sous-titre

> 12 collaborateurs, 320 clients TPE/PME, 1 cabinet qui refusait de nouveaux clients par peur de la surcharge. 2 agents IA Althoce déployés en 8 semaines. Voici comment Madame [Nom anonymisé], directrice associée, a transformé son cabinet.

### Identité client (bandeau)

> *Cabinet d'expertise comptable · 12 collaborateurs · 320 clients TPE/PME · Lyon · 2025-2026 · cas anonymisé*

### Stat hero géante (à droite)

> **×2**
>
> capacité gérée à effectif constant en 4 mois

### CTA principal

> Discuter de votre projet →

---

## 5. Section 2 — Le client

### H2

> **Le cabinet : 12 personnes, 320 clients, croissance bloquée par la saisie**

### Paragraphe principal (style éditorial, journalistique)

> Le cabinet d'expertise comptable lyonnais (nom anonymisé) existe depuis 2014. Implanté dans le 6ᵉ arrondissement, il compte 12 collaborateurs : 2 associés expert-comptable, 4 collaborateurs comptables, 3 assistants, 2 chargés de mission, 1 office manager. Sa clientèle est composée de 320 TPE et PME locales : artisans, professions libérales, restaurateurs, e-commerçants, structures de services. Spécialité : la comptabilité fine de TPE en croissance avec accompagnement DAF externalisé pour les plus matures. Croissance organique de 8 % par an depuis la pandémie, sans démarche commerciale active : la clientèle vient par recommandation. Ambiance familiale, exigence technique, fidélité client. Le cabinet ne s'est jamais positionné comme leader prix, mais comme partenaire de proximité.

### Paragraphe contexte 2

> En 2024, la direction se retrouve face à un dilemme classique : **refuser de nouveaux clients ou recruter**. Deux prospects refusés sur quatre faute de capacité. Le marché de l'embauche en expertise comptable est tendu à Lyon (turnover sur les collaborateurs débutants, montée en compétence longue, coût en hausse). L'équipe en place est experte mais saturée : 70 % de son temps part en saisie (factures fournisseurs, rapprochements bancaires, écritures, déclarations TVA). Les associés sentent que cette situation n'est plus tenable : impossible de scaler, équipe en frustration croissante, croissance compromise. C'est dans ce contexte que la directrice associée nous a contactés via une recommandation d'un autre cabinet client.

---

## 6. Section 3 — Avant Althoce

### H2

> **La journée type avant : 70 % de saisie, frustration croissante**

### Split éditorial (sobre, constat)

**Côté équipe**

> 70 % du temps des collaborateurs comptables passe en saisie.
> 4 minutes par facture fournisseur en moyenne.
> Rapprochement bancaire mensuel = 2 jours par client.
> Reporting client mensuel = chronique du retard.
> Frustration croissante : "je ne fais plus mon métier".
> Plaintes informelles aux associés sur la charge.

**Côté commercial**

> 2 prospects refusés sur 4 faute de capacité (chiffre Q4 2024).
> Recommandations entrantes non converties.
> Sentiment de plafonner à 320 clients.
> Recrutement junior considéré mais coût et délai dissuasifs.
> Estimation interne du manque à gagner : 80 à 120 k€ / an de prestations refusées.

### Callout souveraineté (avant déploiement)

> **Inquiétude souveraineté.** Avant de signer, la directrice associée pose une exigence non négociable : aucune donnée comptable client ne doit transiter par OpenAI ou Anthropic. Le cabinet est soumis au secret professionnel (CNCC, CSOEC) et la confidentialité des comptes clients est sacrée. La réponse Althoce : Mistral hébergé en France ou modèles open-source auto-hébergés. Confidentialité contractuellement garantie. Cette exigence est devenue la norme pour tous nos clients comptables.

---

## 7. Section 4 — La solution déployée

### H2

> **2 agents IA déployés en 8 semaines, sur les outils existants**

### Paragraphe intro

> Plutôt que de promettre une refonte totale, nous avons commencé par les 2 processus à plus haut ROI identifiés au cadrage : factures fournisseurs et rapprochement bancaire. Ces 2 processus représentaient à eux seuls 60 % du temps de saisie du cabinet.

### Timeline déploiement (`<DeploymentTimeline />`)

**Semaine 0 — Cadrage initial · 30 min avec un expert + 5 jours de structuration**

- 30 minutes téléphoniques pour qualifier le besoin
- Cartographie de 3 processus candidats (factures fournisseurs, rapprochement bancaire, génération reporting)
- Devis ferme livré sous 5 jours
- Validation et signature par les 2 associés

**Semaines 1-2 — Cadrage approfondi**

- Ateliers avec 4 collaborateurs (les 2 plus en charge de saisie + 1 expert + 1 assistant)
- Spécification fonctionnelle détaillée des 2 agents prioritaires
- Cartographie des outils : Sage (cloud), 4 banques principales clients (BNP, CIC, Crédit Agricole, Caisse d'Épargne), boîte mail dédiée factures
- Définition des règles de validation humaine (seuils, fournisseurs nouveaux, comptes sensibles)
- Définition de la souveraineté : Mistral hébergé OVH France

**Semaines 3-5 — Build agent factures fournisseurs**

- Développement de l'agent par l'équipe Althoce
- Intégration Sage cloud (API officielle)
- OCR et extraction structurée des factures (PDF reçus par mail)
- Tests sur 200 factures historiques fournies par le cabinet
- Calibrage des seuils de validation et règles métier

**Semaine 6 — POC factures**

- 1 semaine de fonctionnement en parallèle de la saisie humaine
- Comparaison ligne à ligne des écritures générées par l'agent vs saisies humaines
- Taux de concordance observé : 99,2 %
- Ajustements finaux sur les 0,8 % d'écart (fournisseurs particuliers, conventions cabinet)

**Semaine 7 — Build agent rapprochement bancaire**

- Développement et intégration des 4 banques (formats OFX et CSV variables)
- Tests sur 3 mois de relevés bancaires historiques

**Semaine 8 — Mise en production complète**

- Bascule complète des 2 agents en production
- Formation des 4 collaborateurs comptables au pilotage (revue mensuelle, validation, ajustement règles)
- Mise en place du monitoring continu (alertes Slack, reporting hebdo)
- Documentation technique et fonctionnelle livrée au cabinet

### Schéma SVG architecture (`<ArchitectureSchemaSVG />`)

Schéma SVG horizontal en flux :

**Mails fournisseurs (entrée)** → **OCR Mindee + agent IA Althoce (Mistral France)** → **Validation collaborateur via interface Althoce (1 clic)** → **Écritures dans Sage cloud (API officielle)** → **Reporting hebdo automatique**

Et en parallèle :

**Relevés bancaires OFX/CSV (4 banques)** → **Agent IA rapprochement Althoce** → **Lettrer automatique + isoler anomalies** → **Validation collaborateur (cas litigieux uniquement)** → **Écritures Sage**

### Callout sur la souveraineté

> **Infrastructure 100 % France garantie.** Tous les modèles tournent sur Mistral hébergé OVH France. Aucune donnée comptable client ne sort du territoire. Audit annuel de conformité fourni au cabinet pour archivage ordinal (CSOEC).

---

## 8. Section 5 — Résultats

### H2

> **Ce qui a changé : la mesure 4 mois après mise en production**

### KPI bands pleine largeur (`<KPIBand />`)

| KPI | Avant Althoce | Après Althoce (4 mois post-MEP) |
|-----|---------------|----------------------------------|
| **Volume documents traités / mois** | 2 100 | 4 200 |
| **Temps saisie / collaborateur / jour** | 5h30 | 1h45 |
| **Taux d'erreur observé sur écritures** | 1,4 % (saisie manuelle) | 0,3 % (validations agent + humain) |
| **Nouveaux clients acceptés** | 0 sur 4 derniers mois | 80 sur 4 mois |
| **Démissions équipe** | 0 (mais frustration croissante) | 0 (et équipe ré-engagée) |
| **Recrutement junior** | Reporté faute de bande passante | 1 expert-comptable junior recruté pour absorber croissance |

### Récit conclusion (court paragraphe)

> Le cabinet a accepté 80 nouveaux clients sur les 4 mois suivant la mise en production. L'expert-comptable junior recruté en mois 3 ne fait pas de saisie : il monte directement en compétence sur le conseil et la relation client. Le cabinet a augmenté son chiffre d'affaires de 22 % la première année, sans recruter de saisisseur. Les associés peuvent enfin se concentrer sur le développement et le conseil DAF à valeur ajoutée.

---

## 9. Section 6 — Témoignage client

### H2 (discret)

> Le mot de la directrice associée

### Citation pleine page display serif XL (`<TestimonialFullPage />`)

> « On pensait que l'IA allait remplacer mes équipes. En réalité, elle a remplacé la partie de leur job qu'elles détestaient. Elles ont retrouvé du sens, on a doublé notre activité, on a embauché un junior pour le conseil pur, et personne n'a démissionné. Et la souveraineté est totale : mes données clients n'ont jamais quitté la France. Le projet le plus impactant qu'on ait fait depuis l'ouverture du cabinet en 2014. »
>
> *— Directrice associée du cabinet · 12 ans d'expertise comptable · 4 mois après mise en production*

---

## 10. Section 7 — Apprentissages

### H2

> **Trois choses qui ont fait la réussite de ce déploiement**

### Blocs ✅ / 🔧 / ⚠️ (`<LessonsBlocks />`)

**✅ Ce qui a très bien marché**

> Le **choix de commencer par 2 processus seulement** plutôt que 5. Concentration sur le ROI maximum, déploiement maîtrisé, succès rapide qui crédibilise pour la suite.
>
> La **souveraineté Mistral hébergé France** posée dès le cadrage initial, qui a levé l'objection majeure de la directrice et a évité tout sujet de confidentialité ensuite.
>
> Le **rituel mensuel de revue agent** mis en place dès le go-live. L'équipe pilote, ajuste, fait évoluer les règles. Personne ne subit l'agent.

**🔧 Ce qu'on ajusterait**

> Le **POC de 1 semaine en parallèle humain** s'est avéré trop court pour le rapprochement bancaire (variabilité saisonnière des opérations bancaires). Sur les prochains déploiements similaires, nous allongeons à 3 semaines.
>
> La **formation initiale** des collaborateurs comptables aurait gagné à être plus structurée. Première fois pour eux de "manager un agent IA". Format à formaliser avec [Formation IA Althoce](/services/formation-ia/).

**⚠️ Le piège à éviter**

> **Ne pas réduire l'effectif après déploiement.** Tentation classique du dirigeant : "on a doublé la capacité, on pourrait peut-être réduire d'un poste". Erreur stratégique. La capacité libérée doit aller **sur de nouvelles missions à valeur ajoutée** (conseil, DAF externalisé, accompagnement transition numérique des clients). Sinon l'équipe se démotive (on les avait libérés pour rien) et la croissance qui devait financer l'investissement ne se matérialise pas.

---

## 11. Section 8 — Méthode (HÉRITÉE DE LA HOME)

> **🏠 Section héritée.**

---

## 12. Section 9 — Votre cas est-il similaire ?

### H2

> **Vous êtes un cabinet d'expertise comptable ou un service compta PME ?**

### Encart `<DarkBlock />`

> Trois questions pour évaluer si ce cas est transposable au vôtre :
>
> 1. Vous avez **8 à 25 collaborateurs**, dont au moins 4 affectés à la saisie comptable.
> 2. Vous traitez **plus de 1 500 documents comptables par mois** (factures fournisseurs, écritures, rapprochements).
> 3. Votre **équipe est saturée** et vous refusez des clients ou repoussez des recrutements faute de soutenabilité.
>
> Si vous répondez oui aux 3, la transposition est très probable. Les **30 minutes offertes avec un expert** servent à valider en détail.

### CTA

> [Découvrir Agent IA pour la finance →](/agent-ia/finance/)
>
> [Discuter de votre projet (30 min offertes) →](#contact)

---

## 13. Section 10 — CTA final (HÉRITÉ DE LA HOME)

> **🏠 Section héritée.**

---

## 14. JSON-LD complet

```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": "https://althoce.com/cas-clients/cabinet-comptable-lyon/#article",
      "headline": "×2 capacité en 4 mois pour un cabinet d'expertise comptable lyonnais",
      "description": "Cas client Althoce : comment un cabinet comptable lyonnais de 12 collaborateurs a doublé sa capacité avec 2 agents IA factures et rapprochement bancaire, sans embaucher et sans départ d'équipe.",
      "author": { "@type": "Organization", "@id": "https://althoce.com/#organization", "name": "Althoce" },
      "publisher": { "@type": "Organization", "@id": "https://althoce.com/#organization", "name": "Althoce" },
      "datePublished": "2026-05-08",
      "image": "https://althoce.com/og/cas-cabinet-comptable-lyon.jpg",
      "url": "https://althoce.com/cas-clients/cabinet-comptable-lyon/"
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://althoce.com/" },
        { "@type": "ListItem", "position": 2, "name": "Cas clients", "item": "https://althoce.com/cas-clients/" },
        { "@type": "ListItem", "position": 3, "name": "Cabinet d'expertise comptable Lyon", "item": "https://althoce.com/cas-clients/cabinet-comptable-lyon/" }
      ]
    }
  ]
}
```

---

## 15. Maillage interne (récap éditorial)

Liens **placés directement dans la prose** :

- Sec.10 (apprentissage 🔧) : lien vers `/services/formation-ia/`
- Sec.12 (encart "votre cas") : lien vers `/agent-ia/finance/`

### Liens entrants attendus

- `/agent-ia/finance/` (sec.5 cas client, lien "Voir le cas client complet")
- `/cas-clients/` (hub, position 1 dans la liste)
- Articles blog cluster finance / comptabilité

---

## 16. Notes Claude Design

### Composants HOME

`<MethodologySection />` (sec.8), `<CTAFinalSection />` (sec.10).

### Composants existants à réutiliser

`<HeroStatHuge />` (sec.1 hero), `<DeploymentTimeline />` (sec.4), `<KPIBand />` (sec.5), `<TestimonialFullPage />` (sec.6), `<LessonsBlocks />` (sec.7), `<ArchitectureSchemaSVG />` (sec.4), `<DarkBlock />` (sec.3, sec.4, sec.9).

### Règle d'intégration au site

1. **Breadcrumb** : `Accueil → Cas clients → Cabinet d'expertise comptable Lyon`.
2. **Reading time** estimé : 7 min de lecture.
3. **Pages cousines** : lien retour vers `/cas-clients/` (hub) et `/agent-ia/finance/` (métier).
4. **Sitemap.xml** avec `<priority>0.7</priority>` et `<changefreq>yearly</changefreq>` (cas client = contenu stable).

### Règle créativité visuelle

Patterns : stat hero géante, split éditorial, timeline déploiement, schéma SVG architecture, KPI bands pleine largeur, citation pleine page display serif XL, blocs ✅/🔧/⚠️. Pas de grille de cartes.

### Tons / langage visuel

Bg `#000000`, accent azure `#38BDF8`. Le stat hero "×2" en display serif XL. Citation pleine page en typo display serif XL avec guillemets typographiques larges.

---

## 17. Informations à valider avant publication

1. **Accord nominatif du cabinet** : à ce jour anonymisé par défaut. Si la directrice donne son accord écrit pour publication nominative, nous pouvons remplacer "cabinet anonymisé" par le nom réel.
2. **Vérification croisée des KPI** : 2 100 → 4 200 documents/mois, 5h30 → 1h45 saisie/jour, taux d'erreur 1,4 % → 0,3 %, 80 nouveaux clients en 4 mois, CA +22 %. Recroiser avec la directrice avant publication.
3. **Stat "taux de concordance POC 99,2 %"** : valider.
4. **Architecture technique** : confirmer que la description (Sage cloud + 4 banques + Mistral OVH) reflète le déploiement réel.
5. **Apprentissages ✅/🔧/⚠️** : valider que les 3 leçons correspondent bien à la rétrospective interne du projet.

---

*Document de référence rédigé le 2026-05-08. Cas client #1 de Silo 6. Référencé depuis `/agent-ia/finance/`. Anonymisé par défaut.*

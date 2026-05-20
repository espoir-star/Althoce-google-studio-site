# `/contact/` — Page contact (conversion-first, version simplifiée)

> **Cette page a un seul objectif : convertir le visiteur en RDV qualifié. Tout y est orienté conversion sans pression : 4 promesses concrètes, formulaire qualifié simple, FAQ contact courte pour lever les frictions ultimes, infos pratiques en pied. Pas de section pricing, pas de storytelling marque (déjà fait sur /agences/ et /a-propos/), pas d'argumentaire produit (déjà fait sur /services/), pas de section process redondante (les 4 promesses font le job).**

---

## 0. Préambule

### Sections héritées

> Aucune section héritée. Page courte centrée sur le formulaire.

> Pas de section Pricing. Pas de section Méthode. Pas de section Souveraineté. Pas de CTA final hérité (le formulaire est lui-même le CTA principal).

### Positionnement éditorial

Page de conversion pure. Le visiteur arrive ici depuis un CTA « Discuter de votre projet → » placé sur 30+ pages du site. À ce stade, il a déjà compris l'offre, la mission, et la souveraineté. Il vient pour **passer à l'action**.

Trois publics :
1. Le **dirigeant qualifié** (60 % du trafic estimé) — veut un formulaire rapide.
2. Le **curieux en exploration** (30 % du trafic) — rassurance via les 4 promesses + FAQ.
3. Le **visiteur en quête d'infos pratiques** (10 % du trafic) — adresse, email, horaires en pied de page.

### Slots variables

| Slot | Section | Variation |
|---|---|---|
| `Pill au-dessus du H1` | Hero | « Disponible cette semaine » |
| `H1` | Hero | « Discutons de votre projet. » |
| `Sous-titre H1` | Hero | « 30 minutes pour comprendre vos enjeux et identifier les automatisations qui vont vraiment libérer votre équipe. Aucune obligation, aucun discours commercial. » |
| `4 promesses` | Hero col gauche | 30 min offertes / 3 idées concrètes / Sans engagement / Réponse 24 h |
| `Formulaire` | Hero col droite | 7 champs (Nom, Entreprise, Email, Téléphone, Taille équipe, Budget, Description) |
| `Footer formulaire` | Hero col droite | « Sans engagement · Réponse sous 24 h · Données hébergées en UE » |
| `FAQ contact` | sec.2 | 4 Q/R courtes anti-frictions |
| `Infos pratiques` | sec.3 | Email, adresse, horaires |

### Blocs immuables

- **Breadcrumb** : `Accueil › Contact`
- **CTA primaire unique** : « Envoyer ma demande → » (submit du formulaire)
- **Pricing** : pas de section pricing.
- **Découverte offerte** : « 30 minutes offertes avec un expert » (intégrée dans les 4 promesses)
- **JSON-LD** : `ContactPage` + `Organization` + `BreadcrumbList` + `FAQPage`

### Règle créativité visuelle

Page **ultra simple, hero suffit**. Le formulaire est immédiatement visible sans scroll sur desktop. Pas de hero illustré envahissant. Pas de testimonial. Pas de bandeau process. **Friction minimum.**

---

## 1. Méta-info SEO / éditoriale

### Silo
Page institutionnelle (conversion).

### Rôle dans l'architecture

Page de conversion centrale. Destination de tous les CTA « Discuter de votre projet → » du site. Sert également de page de contact officielle (info pratique).

### Objectif trafic

1. Capter « contact Althoce », « contacter Althoce », « rendez-vous Althoce », « 30 minutes Althoce ».
2. Convertir le trafic interne (CTA des pages produit) en RDV qualifié.

### Mots-clés cibles principaux

contact Althoce · contacter Althoce · prendre RDV Althoce · 30 minutes Althoce · rendez-vous expert IA Althoce · contact agence IA Bordeaux

---

## 2. Title / Meta description

```html
<title>Discutons de votre projet — 30 minutes offertes | Althoce</title>

<meta name="description" content="30 minutes pour comprendre vos enjeux et identifier les automatisations qui vont libérer votre équipe. Sans engagement, sans discours commercial. Réponse sous 24 h. Données hébergées en UE.">

<meta name="keywords" content="contact Althoce, contacter Althoce, prendre RDV Althoce, 30 minutes Althoce, rendez-vous expert IA Althoce">

<link rel="canonical" href="https://althoce.com/contact/">

<meta property="og:title" content="Discutons de votre projet — 30 minutes offertes | Althoce">
<meta property="og:description" content="30 minutes pour comprendre vos enjeux. Sans engagement. Réponse sous 24 h. Données hébergées en UE.">
<meta property="og:type" content="website">
<meta property="og:locale" content="fr_FR">
<meta property="og:url" content="https://althoce.com/contact/">
```

---

## 3. Plan de page

| # | Section | Type | Pattern visuel |
|---|---|---|---|
| 1 | 🟢 Hero éditorial : split 4 promesses + formulaire | Propre | Split éditorial : à gauche pill + H1 + sous-titre + 4 features icônées, à droite carte formulaire avec 7 champs |
| 2 | 🟢 FAQ contact | Propre | Accordéon `<FAQItem />` 4 Q/R |
| 3 | 🟢 Infos pratiques | Propre | Bloc 3 colonnes : email / adresse / horaires |

**Trois sections, c'est tout. Page volontairement courte.**

---

## 4. Section 1 — Hero : 4 promesses + formulaire

### Layout

**Split éditorial 1fr/1fr** (col texte = col formulaire en largeur). Le formulaire est immédiatement visible sans scroll sur desktop 1440 px. Le formulaire est dans une carte distincte (fond `bg-surface` clair sur fond de page sombre).

### Colonne gauche

#### Pill au-dessus du H1

> **⚡ Disponible cette semaine**

(Pill verte ou neutre avec un petit indicateur de disponibilité. Signal de capacité immédiate.)

#### H1

> **Discutons de votre projet.**

#### Sous-titre (2 lignes)

> 30 minutes pour comprendre vos enjeux et identifier les automatisations qui vont vraiment libérer votre équipe. Aucune obligation, aucun discours commercial.

#### Les 4 promesses (sous le H1, en stack vertical avec icônes)

Pattern visuel : pour chaque promesse, une carte ronde claire à gauche avec une icône Lucide, et à droite un titre H4 + un paragraphe d'1 à 2 lignes.

**⚡ 30 minutes offertes**

> Pas de démo commerciale. Un échange direct sur vos défis et vos processus.

**🗺️ 3 idées concrètes garanties**

> Vous repartez avec au moins 3 automatisations à fort ROI identifiées pour votre cas.

**🔒 Sans engagement**

> Aucune obligation de travailler ensemble. La valeur est dans l'échange lui-même.

**⏱️ Réponse sous 24 h**

> On confirme le créneau rapidement. Bordeaux et toute la France, présentiel ou visio.

### Colonne droite — Formulaire

#### Pattern visuel

Carte `bg-surface` (fond clair contrastant avec le fond sombre de la page), bordure `border-subtle`, radius `rounded-3xl`, padding `p-8`. Champs étiquettes au-dessus, espacement vertical généreux entre champs. Sur desktop, les champs Nom/Entreprise et Email/Téléphone et Taille/Budget sont disposés en grille 2 colonnes pour densifier ; la description occupe 100 % de la largeur.

#### Titre du formulaire

> **Votre projet en quelques lignes**

#### Sous-titre

> On lit chaque message attentivement avant de vous rappeler.

#### Champ 1 — Nom et prénom (col 1/2)

```
Label : Nom & Prénom *
Placeholder : Jean Dupont
Type : text
Required : oui
```

#### Champ 2 — Entreprise (col 2/2)

```
Label : Entreprise *
Placeholder : Acme SAS
Type : text
Required : oui
```

#### Champ 3 — Email professionnel (col 1/2)

```
Label : Email professionnel *
Placeholder : jean@acme.fr
Type : email
Required : oui
```

#### Champ 4 — Téléphone (col 2/2)

```
Label : Téléphone
Placeholder : +33 6 00 00 00 00
Type : tel
Required : non
```

#### Champ 5 — Taille de l'équipe (col 1/2)

```
Label : Taille de l'équipe
Type : select
Placeholder : Sélectionner...
Options :
  - 1 à 9 personnes
  - 10 à 49 personnes
  - 50 à 199 personnes
  - 200 à 499 personnes
  - 500 à 4 999 personnes
  - 5 000 personnes et plus
Required : non (mais qualifie le lead)
```

#### Champ 6 — Budget envisagé (col 2/2)

```
Label : Budget envisagé
Type : select
Placeholder : Sélectionner...
Options :
  - Moins de 5 000 € HT
  - 5 000 € à 15 000 € HT
  - 15 000 € à 50 000 € HT
  - 50 000 € à 100 000 € HT
  - Plus de 100 000 € HT
  - À évaluer ensemble
Required : non (mais qualifie le lead)
```

#### Champ 7 — Description du projet (pleine largeur)

```
Label : Décrivez votre projet *
Placeholder : Quelles tâches vous font perdre le plus de temps ? Quel outil utilisez-vous ? Quel résultat attendez-vous ?
Type : textarea (5 lignes)
Required : oui
```

#### Mention RGPD obligatoire (sous le bouton, taille 13px text-muted)

```
« En soumettant ce formulaire, j'accepte que mes données soient traitées par
ALTHOCE CONSEIL pour répondre à ma demande, conformément à la
[politique de confidentialité](/confidentialite/). Mes données ne sont jamais
revendues. Je peux exercer mes droits à tout moment à
espoir@contact.althoce.com. »
```

#### Bouton submit

```
Label : Envoyer ma demande →
Style : CTA primaire fond noir (cohérent avec la maquette), texte blanc, large 100 % du formulaire, radius full ou rounded-2xl
État loading : « Envoi en cours... »
État succès : Remplace le formulaire par un message confirmant la réception + délai 24 h ouvrées
État erreur : Message d'erreur clair + invitation à réessayer ou écrire à espoir@contact.althoce.com
```

#### Footer du formulaire (rassurance sous le bouton)

> Sans engagement · Réponse sous 24 h · Données hébergées en UE

---

## 5. Section 2 — FAQ contact

### H2

> **Quelques questions fréquentes avant la prise de contact**

### Liste accordéon `<FAQItem />` (4 Q/R)

**Q1. Combien de temps avant le premier RDV ?**

Nous vous proposons un créneau dans les **24 à 72 heures ouvrées** qui suivent la réception de votre formulaire. Si votre demande est urgente (projet à lancer dans la semaine, contrainte de réponse à appel d'offres), précisez-le dans le champ « décrivez votre projet » et nous nous adapterons. Pour les demandes hors urgence, vous pouvez aussi proposer plusieurs créneaux dans votre message.

**Q2. Est-ce que c'est vraiment gratuit ? Quelle est la contrepartie ?**

Oui, c'est vraiment gratuit. La contrepartie pour nous est simple : ces 30 minutes nous permettent de **qualifier le besoin** et de **proposer un devis pertinent** plutôt qu'un devis générique. Vous n'avez aucune obligation de signer ensuite. Statistiquement, environ une qualification sur deux ne donne pas suite à un projet immédiat — et c'est très bien comme ça. Notre approche est de servir d'abord, vendre ensuite.

**Q3. Je ne suis pas sûr d'avoir un « vrai » besoin IA. Est-ce que ça vaut le coup de prendre RDV ?**

**Oui.** Une grande partie de nos clients arrivent avec « on aimerait comprendre par où commencer, on hésite ». Les 30 minutes servent justement à clarifier : est-ce que votre situation se prête à un agent IA, à un workflow d'automatisation classique, à une formation, ou à rien du tout pour l'instant. Notre réponse est sincère, même si elle est « pas maintenant ». C'est précisément ce qui rend la conversation utile.

**Q4. Faut-il signer un NDA avant l'échange ?**

Pas obligatoire. Pendant les 30 minutes, l'échange reste à un niveau **fonctionnel et organisationnel** (« quel est votre besoin », « combien de personnes concernées », « quelle est la volumétrie »). Aucune information stratégique sensible n'est nécessaire à ce stade. Si vous préférez signer un NDA mutuel avant l'échange, dites-le dans la description et nous vous en proposerons un dans les 24 h. Pour la phase de cadrage qui suit (si vous décidez d'avancer), un NDA peut être signé en amont du devis.

---

## 6. Section 3 — Infos pratiques *(ancre `#infos-pratiques`)*

### H2

> **Infos pratiques**

### Bloc 3 colonnes (`<InfoCard />`)

**📧 Email général**

> espoir@contact.althoce.com
>
> Réponse sous 24 heures ouvrées. Pour les demandes RGPD et données personnelles, même adresse.

**📍 Siège social**

> ALTHOCE CONSEIL
> 5 rue Fénelon
> 33000 Bordeaux, France
>
> Visite sur rendez-vous uniquement.

**🕐 Horaires de réponse**

> Du lundi au vendredi, 9 h – 18 h (heure de Paris).
>
> Réponses aux emails sous 24 heures ouvrées. Hors horaires, retour le jour ouvré suivant.

---

## 7. JSON-LD complet

```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ContactPage",
      "@id": "https://althoce.com/contact/#webpage",
      "name": "Discutons de votre projet — 30 minutes offertes",
      "url": "https://althoce.com/contact/",
      "mainEntity": { "@id": "https://althoce.com/#organization" }
    },
    {
      "@type": "Organization",
      "@id": "https://althoce.com/#organization",
      "name": "Althoce",
      "legalName": "ALTHOCE CONSEIL",
      "url": "https://althoce.com/",
      "logo": "https://althoce.com/logo.svg",
      "email": "espoir@contact.althoce.com",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "5 rue Fénelon",
        "addressLocality": "Bordeaux",
        "postalCode": "33000",
        "addressCountry": "FR"
      },
      "contactPoint": [
        {
          "@type": "ContactPoint",
          "contactType": "Sales",
          "email": "espoir@contact.althoce.com",
          "areaServed": "FR",
          "availableLanguage": "French"
        },
        {
          "@type": "ContactPoint",
          "contactType": "Customer Service",
          "email": "espoir@contact.althoce.com",
          "areaServed": "FR",
          "availableLanguage": "French"
        }
      ]
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://althoce.com/" },
        { "@type": "ListItem", "position": 2, "name": "Contact", "item": "https://althoce.com/contact/" }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        { "@type": "Question", "name": "Combien de temps avant le premier RDV ?", "acceptedAnswer": { "@type": "Answer", "text": "Créneau proposé dans les 24 à 72 heures ouvrées. Urgence ? Précisez-le dans le formulaire." } },
        { "@type": "Question", "name": "Les 30 minutes sont-elles vraiment gratuites ?", "acceptedAnswer": { "@type": "Answer", "text": "Oui. Aucune contrepartie. Les 30 minutes servent à qualifier le besoin et proposer un devis pertinent. Vous n'avez aucune obligation de signer." } },
        { "@type": "Question", "name": "Sans certitude d'avoir un besoin IA, est-ce que ça vaut le coup ?", "acceptedAnswer": { "@type": "Answer", "text": "Oui. Les 30 minutes servent à clarifier si votre situation se prête à un agent IA, à un workflow, à une formation, ou à rien pour l'instant. Réponse sincère même si c'est « pas maintenant »." } },
        { "@type": "Question", "name": "Faut-il signer un NDA avant l'échange ?", "acceptedAnswer": { "@type": "Answer", "text": "Pas obligatoire pour les 30 minutes (échange fonctionnel uniquement). NDA mutuel possible sur demande dans les 24 h." } }
      ]
    }
  ]
}
```

---

## 8. Maillage interne (récap éditorial)

Liens **placés directement dans la prose** :

- Formulaire mention RGPD : lien vers `/confidentialite/`

### Liens entrants attendus (≥ 30)

- **Très important** : toutes les pages du site ont un CTA « Discuter de votre projet → » qui pointe vers `/contact/`. Soit ≥ 30 liens entrants depuis :
  - Home (hero, sec.6, sec.10, footer)
  - 8 pages services (CTA principal + ancres)
  - 8 pages agent-ia métier (CTA principal)
  - 20 pages SEO local (CTA + ancres FAQ)
  - 9 cas clients (CTA bottom)
  - Hub `/agences/` (CTA hero + CTA final)
  - Hub `/services/`, `/agent-ia/`, `/cas-clients/`
  - Page `/a-propos/` (CTA hero + CTA final + FAQ)
  - Header du site (entrée « Discuter de votre projet »)
  - Footer (lien permanent + CTA)
  - Articles blog (cluster « passer à l'action » à venir Silo 5)

---

## 9. Notes Claude Design

### Composants existants à réutiliser

`<FAQItem />` (sec.2).

### Nouveaux composants à concevoir

- `<ContactForm />` : formulaire qualifié 7 champs avec validation client + serveur, gestion des états (idle, loading, success, error), mention RGPD obligatoire, soumission async API route Next.js. Sur desktop, layout 2 colonnes pour les 6 premiers champs (paires Nom/Entreprise, Email/Téléphone, Taille/Budget) ; description en pleine largeur ; bouton submit en pleine largeur. Stack technique recommandée : React Hook Form + Zod (validation) + Next.js API route + envoi email transactionnel (préférer Brevo UE pour cohérence souveraineté) + écriture dans Google Sheet « Prospects Althoce — Pipeline commercial » (sheet déjà créé sur le Drive du fondateur) + stockage CRM optionnel.
- `<PromiseItem />` : item d'une des 4 promesses dans le hero col gauche (sec.1). Pattern : carte ronde claire à gauche avec icône Lucide (Zap, Map, Lock, Clock), titre H4 + paragraphe 1-2 lignes à droite. Composant réutilisable pour d'autres pages.
- `<InfoCard />` : 3 colonnes infos pratiques avec icône emoji ou Lucide (sec.3).

### Règle d'intégration du formulaire au site (CRITIQUE)

1. **API route** : `app/api/contact/route.ts` qui (a) valide les données via Zod, (b) protège anti-spam via Cloudflare Turnstile, (c) envoie un email transactionnel à espoir@contact.althoce.com via Brevo ou équivalent UE, (d) ajoute une ligne au **Google Sheet « Prospects Althoce — Pipeline commercial »** (sheet ID `1qGaLUScYCra5UX7JrelDL9CSHxAh5ph0EQwzh_TJzgc`, déjà créé sur le Drive du fondateur), (e) envoie un email de confirmation au visiteur, (f) renvoie une réponse JSON pour le state success/error côté client.

2. **Mapping des champs formulaire → colonnes du Sheet** :

| Champ formulaire | Colonne Sheet |
|---|---|
| (auto) Date soumission | Date réception |
| (auto) « À traiter » | Statut |
| Nom & Prénom | Nom et prénom |
| Entreprise | Société |
| Taille de l'équipe | Taille équipe |
| Email professionnel | Email |
| Téléphone | Téléphone |
| Budget envisagé | (à ajouter au Sheet — voir note ci-dessous) |
| Décrivez votre projet | Sujet / Besoin |
| (auto) « Formulaire site » | Source |
| (vide à la création) | Date RDV, Référent, Date devis, Montant, Date signature, Notes, Dernière relance |

⚠️ **Note importante sur le Sheet** : le Sheet existant a une colonne « Fonction » (que le nouveau formulaire ne contient plus) et n'a pas de colonne « Budget envisagé » (que le nouveau formulaire contient). Le Sheet doit être mis à jour :
- Supprimer la colonne « Fonction »
- Renommer « Taille entreprise » en « Taille équipe »
- Ajouter une colonne « Budget envisagé » entre « Téléphone » et « Sujet / Besoin »
- Adapter les exemples en conséquence

3. **Sécurité formulaire** : honeypot caché + rate limiting (max 3 soumissions / IP / 10 min) + **Cloudflare Turnstile** (au lieu de Google reCAPTCHA pour cohérence souveraineté).

4. **Confirmation utilisateur** : email automatique envoyé au visiteur après soumission, confirmant la réception et précisant le délai 24 h ouvrées. Template : « Bonjour [prénom], nous avons bien reçu votre demande concernant [première ligne description tronquée]. Un expert Althoce vous recontacte sous 24 heures ouvrées pour caler un créneau de 30 minutes. À très bientôt. — L'équipe Althoce. »

### Règle d'intégration au site (CRITIQUE)

1. **Menu principal** : entrée « Contact » qui pointe vers `/contact/`. CTA primaire global « Discuter de votre projet → » pointe également ici.
2. **Breadcrumb** : `Accueil → Contact`.
3. **Footer** : entrée « Contact » + email permanent affiché.
4. **Sitemap.xml** : `<priority>0.9</priority>` (très haute priorité, page de conversion centrale), `<changefreq>monthly</changefreq>`.
5. **Indexation** autorisée. JSON-LD `ContactPage` + `Organization` + `BreadcrumbList` + `FAQPage` validés.

### Règle créativité visuelle

Patterns par section :
- Hero : split éditorial 1fr/1fr (capture Claude Design). Pill en haut, H1 display serif XL, sous-titre, 4 promesses en stack vertical avec icônes Lucide. Carte formulaire à droite, fond clair, bordure douce.
- Sec.2 : accordéon FAQ classique
- Sec.3 : 3 colonnes infos pratiques (icône + label + valeur)

**Pas de hero illustré envahissant. Pas de stock photo. Pas de section process redondante. Friction visuelle minimum.**

### Tons / langage visuel

Cohérent avec la maquette Claude Design : le formulaire est sur **carte claire `bg-surface`** détachée d'un fond plus sombre ou éditorial. Le H1 est en **typographie display serif XL** (Instrument Serif ou équivalent). Les 4 promesses utilisent **icônes Lucide** (Zap, Map, Lock, Clock) dans des **cartes rondes claires** à gauche du texte.

**Bouton submit** : fond noir ou très foncé, texte blanc, radius `rounded-full` ou `rounded-2xl`, pleine largeur du formulaire (cohérent capture).

### Mobile

Sur mobile, le formulaire passe sous le hero col gauche en stack vertical. Les 4 promesses restent visibles avant le formulaire. Les paires de champs (Nom/Entreprise, Email/Téléphone, Taille/Budget) passent en stack vertical à 1 colonne. Espacement vertical entre champs : 16 px minimum.

---

## 10. Informations à valider avant publication

1. ✅ **Email contact** : espoir@contact.althoce.com — validé.
2. ✅ **Adresse siège** : 5 rue Fénelon, 33000 Bordeaux — validé.
3. ✅ **Sheet Prospects** : créé sur le Drive (`1qGaLUScYCra5UX7JrelDL9CSHxAh5ph0EQwzh_TJzgc`). **Adapter les colonnes** : retirer Fonction, renommer Taille entreprise en Taille équipe, ajouter Budget envisagé.
4. **Visites au siège sur rendez-vous** : confirmer si on accepte les visites au siège ou si on garde 100 % distanciel.
5. **Outil email transactionnel** : Brevo (UE) recommandé pour cohérence souveraineté. Confirmer.
6. **Cloudflare Turnstile** : confirmer l'usage (alternative au reCAPTCHA Google) pour cohérence souveraineté.
7. **Template email confirmation utilisateur** : valider le ton et la signature.
8. **Plages de budget proposées** : valider les paliers (< 5 k€, 5-15 k€, 15-50 k€, 50-100 k€, > 100 k€, à évaluer). Cohérent avec ta grille tarifaire.
9. **Plages de taille d'équipe** : valider les paliers (1-9, 10-49, 50-199, 200-499, 500-4999, 5000+).
10. **Pill « Disponible cette semaine »** : c'est un signal de capacité immédiate. À valider si on l'affiche systématiquement (et donc à maintenir disponible toute la semaine) ou si on prévoit un état alternatif « Disponible la semaine prochaine » géré dynamiquement.

---

*Document de référence rédigé le 2026-05-16, simplifié le 2026-05-16 après validation maquette Claude Design. Page de conversion centrale. 3 sections : hero (4 promesses + formulaire 7 champs) / FAQ 4 Q/R / infos pratiques. JSON-LD ContactPage + FAQPage. Très haute priorité sitemap.*

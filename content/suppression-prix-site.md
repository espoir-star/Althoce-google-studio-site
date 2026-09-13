# Suppression des prix du site et remplacement par une section devis

**Objectif** : retirer tous les tarifs affichés publiquement sur althoce.com et les remplacer par une section unique orientée demande de devis.
**Source du copy** : logique commerciale de l'espace Notion « Prix & livrables ».
**Date** : 27 août 2026

---

## Principe directeur

Le copy s'appuie sur trois règles issues de la doctrine commerciale interne :

- On vend une mission et des livrables, jamais un taux horaire
- Le chiffrage dépend de facteurs concrets qu'on ne peut pas connaître avant l'échange
- Si un outil du marché suffit, on le dit et on ne développe pas

Le résultat n'est pas une page qui esquive la question du prix. C'est une page qui explique pourquoi le prix se construit avec le client, et qui liste les critères qui le font varier. Le prospect comprend qu'on ne lui cache rien, on lui explique la méthode.

---

# NOUVELLE SECTION — Remplace la section Pricing

## Emplacement

Cette section remplace le composant `Pricing()` sur les pages qui en contiennent une, et sert de bloc de référence partout où un prix était affiché.

## Copy

**Titre** : Chaque projet est chiffré sur mesure

**Sous-titre** : Voici ce qui fait varier le devis.

---

### Les 4 facteurs

**Composant** : grille de 4 cartes, style des cartes existantes du site

**Vos outils**
Un connecteur natif ne demande pas le même travail qu'un logiciel sans API.

**Le périmètre**
Une tâche bornée et un processus complet ne sont pas le même projet.

**La souveraineté**
Hébergement dédié, conformité IA Act, supervision renforcée : ces exigences changent l'architecture.

**Votre organisation**
Un site avec un décideur, ou plusieurs sites avec plusieurs directions.

---

### Bloc engagement

**Composant** : `<DarkBlock />`

**Titre** : Un devis ferme, pas une fourchette

**Corps** :
Après 30 minutes d'échange, vous repartez avec un chiffrage engageant et un périmètre écrit.

Si un outil du marché suffit, on vous le dit et on ne développe pas.

**CTA** : Obtenir un devis → `/contact/`

---

### Réassurance sous le CTA

Trois points en ligne, format compact :

- Devis sous 48 heures
- Aucun engagement
- Réponse honnête si nous ne sommes pas le bon partenaire

---

# INVENTAIRE DES SUPPRESSIONS À FAIRE

## 1. Source centrale : `lib/data.ts`

Le tableau `pricingPlans` (ligne 222) contient le prix « 1 400 € ». Deux options :

**Option retenue** : supprimer entièrement `pricingPlans` et l'interface `PricingPlan`, puisque les sections qui l'utilisent sont remplacées par la nouvelle section devis.

Vérifier les imports dans `AgentsIAPageClient.tsx` et `AutomatisationIAPageClient.tsx` et les nettoyer.

## 2. Composants avec section Pricing à remplacer

- `components/AgentsIAPageClient.tsx` : fonction `Pricing()` ligne 780, titre « Combien ça coûte, en combien de temps ? », appel du composant ligne 933
- `components/AutomatisationIAPageClient.tsx` : fonction `Pricing()` ligne 555

Remplacer par le nouveau composant `<DevisSection />` à créer.

## 3. Mentions « 1 400 € HT » à retirer ou reformuler

| Fichier | Ligne | Contexte | Action |
|---|---|---|---|
| `AgentIAHubPageClient.tsx` | 264 | Tableau comparatif, colonne « Coût typique » | Remplacer la valeur par « Sur devis » sur les 3 colonnes, ou supprimer la ligne du tableau |
| `AgentIAHubPageClient.tsx` | 592 | Réponse FAQ | Réécrire (voir copy FAQ ci-dessous) |
| `AgentsIAPageClient.tsx` | 43 | Réponse FAQ | Réécrire |
| `AuditIAPageClient.tsx` | 41 | Réponse FAQ | Réécrire |
| `AuditIAPageClient.tsx` | 215 | Paragraphe de corps de page | Retirer « à 1 400 € HT » de la phrase |
| `AutomatisationIAPageClient.tsx` | 43 | Réponse FAQ | Réécrire |
| `ChatbotIAPageClient.tsx` | 43 | Réponse FAQ | Réécrire |
| `ChatbotIAPageClient.tsx` | 204 | Paragraphe de corps | Retirer la mention tarif fixe |
| `ChatbotIAPageClient.tsx` | 238 | Tableau comparatif, ligne « Pricing entrée » | Supprimer la ligne du tableau |
| `DeveloppementIAPageClient.tsx` | 44 | Réponse FAQ | Réécrire |
| `EmployeIAPageClient.tsx` | 44 | Réponse FAQ | Réécrire |
| `EmployeIAPageClient.tsx` | 247 | Paragraphe de corps | Retirer « à 1 400 € HT » |
| `IntegrationIAPageClient.tsx` | 44 | Réponse FAQ | Réécrire |
| `ServicesHubPageClient.tsx` | 520 | Description service | Retirer « Tarif fixe 1 400 € HT » |
| `ServicesHubPageClient.tsx` | 577 | Description service | Retirer « 1 400 € HT pour un chatbot simple » |
| `ServicesHubPageClient.tsx` | 578 | Badge affiché « 1 400 € HT » | Remplacer par « Format d'entrée » ou supprimer le badge |

## 4. Grille de prix dans `AutomatisationIAPageClient.tsx`

Lignes 371 à 382 : liste de cas d'usage avec une propriété `prix` (`'1 400 €'`, `'3 500 €'`, `'12 000 €'`).

Retirer la propriété `prix` de chaque objet et supprimer la colonne correspondante dans le rendu. Conserver `title` et `delai`, qui restent des informations utiles sans exposer de tarif.

## 5. Vérification finale

Après modifications, aucune de ces recherches ne doit remonter de résultat dans `components/`, `app/` et `lib/` :

```bash
grep -rn "1 400 €\|1400 €\|3 500 €\|3500 €\|6 500 €\|12 000 €" components/ app/ lib/
grep -rn "Tarif fixe\|tarif fixe" components/ app/ lib/
grep -rni "pricingPlans" components/ app/ lib/
```

Exception acceptable : `AgentIAachatsPageClient.tsx` ligne 55 contient `price: '11 400 €'` dans une donnée de démonstration d'interface (comparatif fournisseurs fictif affiché dans une maquette produit). Ce n'est pas un tarif Althoce, à conserver.

---

# NOUVEAU COPY DES RÉPONSES FAQ

Toutes les réponses FAQ qui mentionnaient un prix sont réécrites sur le même modèle. Adapter le premier paragraphe au service concerné.

## Modèle générique

> Le chiffrage dépend de vos outils, du périmètre et de vos exigences de conformité.
>
> Tout démarre par 30 minutes offertes. Vous repartez avec un devis ferme et un périmètre écrit.

## Déclinaisons par page

**AgentsIAPageClient et AgentIAHubPageClient**
> Le chiffrage dépend des outils à connecter, de la qualité de leurs API et du périmètre visé. Une tâche bornée sur un outil avec connecteur natif n'a pas le même coût qu'un système multi-agents sur un ERP fermé.
>
> Tout démarre par 30 minutes offertes. Vous repartez avec un devis ferme.

**ChatbotIAPageClient**
> Le chiffrage dépend du volume de votre base de connaissances, du nombre de sources à indexer et des actions que le chatbot doit déclencher.
>
> Tout démarre par 30 minutes offertes.

**AutomatisationIAPageClient**
> Le chiffrage dépend du nombre d'outils dans la chaîne, de la qualité de leurs interfaces et du volume traité. Nous cadrons le périmètre avant de chiffrer.
>
> Tout démarre par 30 minutes offertes.

**EmployeIAPageClient**
> Un agent IA couvre une tâche bornée. Un employé IA couvre un poste entier : plusieurs agents orchestrés, une mémoire long terme, des outils branchés. Le chiffrage reflète cet écart de périmètre.
>
> Tout démarre par 30 minutes offertes.

**IntegrationIAPageClient**
> Le chiffrage dépend de vos outils. Un connecteur natif, une API documentée ou un logiciel fermé ne demandent pas le même travail. S'ajoutent vos exigences de sécurité.
>
> Tout démarre par 30 minutes offertes.

**DeveloppementIAPageClient**
> Le chiffrage dépend de la complexité fonctionnelle et du nombre de systèmes à intégrer. Nous vendons une mission et des livrables, jamais un volume de jours.
>
> Tout démarre par 30 minutes offertes.

**AuditIAPageClient** (question sur la différence 30 min contre audit payant)
> Les 30 minutes offertes qualifient un besoin précis. C'est gratuit et sans engagement.
>
> L'audit IA est une prestation à part entière : il cartographie toutes les opportunités d'automatisation, chiffre le retour projet par projet et produit six livrables. Il s'adresse aux structures qui veulent une vue d'ensemble avant de lancer plusieurs chantiers.

---

# COMPOSANT À CRÉER

## `<DevisSection />`

Section réutilisable qui remplace les anciennes sections Pricing.

```tsx
interface DevisSectionProps {
  variant?: 'default' | 'compact';
}
```

Structure du rendu :

1. Titre H2 et chapô
2. Grille de 4 cartes des facteurs de variation, responsive 2 colonnes desktop et 1 colonne mobile
3. Bloc sombre `<DarkBlock />` avec l'engagement sur le devis ferme
4. CTA vers `/contact/`
5. Ligne de réassurance en 3 points

La variante `compact` affiche uniquement le bloc sombre et le CTA, pour les pages où la section complète alourdirait la lecture.

---

# CONTRÔLE JSON-LD

Vérifier qu'aucun schéma structuré n'expose de prix. Rechercher et retirer si présent :

```bash
grep -rn "priceSpecification\|\"price\"\|offers" app/ components/ | grep -i "schema\|json-ld\|@type"
```

Les schémas `Service` et `Offer` peuvent rester, mais sans propriété `price` ni `priceSpecification`.

---

# ORDRE D'EXÉCUTION RECOMMANDÉ

1. Créer le composant `<DevisSection />`
2. Nettoyer `lib/data.ts` : supprimer `pricingPlans` et `PricingPlan`
3. Remplacer les sections `Pricing()` dans les 2 composants concernés
4. Réécrire les 8 réponses FAQ
5. Nettoyer les mentions dans les paragraphes de corps et les tableaux comparatifs
6. Retirer la propriété `prix` de la grille des cas d'usage automatisation
7. Vérifier les JSON-LD
8. Lancer les commandes de vérification finale
9. `npx tsc --noEmit` puis `npm run build`

---

*Rédigé le 27 août 2026. Copy inspiré de la doctrine commerciale interne, sans exposer les grilles tarifaires.*

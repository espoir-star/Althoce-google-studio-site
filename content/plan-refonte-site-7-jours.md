# Althoce — refonte globale sur sept jours

Créé le 13 septembre 2026. Autorisation utilisateur : étendre le branding et le nouveau discours à l’ensemble des pages, produire les visuels pertinents, préserver les bases SEO et exécuter le travail par étapes. Publication non incluse. Calendrier confirmé : chaque jour à 7 h, heure de Paris, du 13 au 19 septembre 2026 inclus. Jour 1 lancé immédiatement ; jours 2 à 7 à 7 h du 14 au 19 septembre. Questions à 19 h la veille (13 au 18 septembre), via la même automatisation refonte-althoce-7-jours.

## Références et périmètre

- Direction : `content/direction-editoriale-design.md`, en tenant compte des ajustements les plus récents, qui priment sur les anciennes itérations.
- Home actuelle : référence visuelle, éditoriale et de conversion. Conserver ses choix approuvés.
- Méthode : page Notion « Althoce — Notre approche, notre méthode, nos offres » ; URL dans `lib/home-content.ts`. Les résumés locaux sont utiles, mais consulter la source pour les détails d’offre à confirmer.
- Cabinet IA pour PME : comprendre, équiper, automatiser, faire durer ; formations IA visibles. Ne pas confondre le pré-audit offert de 30 minutes et le diagnostic complet.
- Toutes les pages publiques : pages institutionnelles, services, formations, métiers, cas clients, pages locales, blog et articles, calculateur, pages légales et page 404. Inventorier les routes générées, pas seulement les fichiers page.tsx.
- Les pages « agence IA » conservent leur intention de recherche ; ne pas remplacer mécaniquement tous les termes agence par cabinet. Vérifier le public réel de `/agences/` avant réécriture.

## Programme

| Jour | Lot à exécuter | Résultat attendu |
| --- | --- | --- |
| 1 | Inventaire complet et état SEO initial ; composants visuels communs ; navigation et footer ; À propos et Contact ; vérification de la home | Un socle commun stable, une présentation fidèle du cabinet et un parcours de prise de contact cohérent |
| 2 | `/services/`, audit IA, agents IA, automatisation IA, intégration IA, développement IA, chatbot IA, employé IA | Des offres différenciées, reliées à la méthode réelle, avec périmètre clair et bénéfices concrets |
| 3 | Formation IA, IA Fondamentaux, IA Avancée ; calculateur ROI | La formation devient un pilier visible ; parcours cohérent pour équipes et dirigeants ; calculateur conservé et contextualisé |
| 4 | `/agent-ia/` et ses neuf pages métiers : marketing, commercial, service client, téléphonique, RH, finance, opérations, juridique, achats | Des cas d’usage spécifiques à chaque métier et des visuels variés, sans répéter la même page |
| 5 | Index cas clients et neuf études de cas existantes | Une narration problème → accompagnement → adoption → résultats, avec visuels pertinents et chiffres sourcés |
| 6 | Toutes les pages locales « agence IA » et `/agences/` | Branding harmonisé et discours adapté à chaque intention, en conservant les spécificités locales vérifiables |
| 7 | Index blog et tous les articles publics, pages légales et 404 ; revue exhaustive du site | Site cohérent, contrôles finaux, corrections et bilan avant publication éventuelle |

La charge n’est pas identique chaque jour. Les composants communs du jour 1 servent à accélérer les lots suivants, sans imposer une composition ou une photo identique partout. Si un lot déborde ou qu’une information manque, le signaler et poursuivre les travaux indépendants ; ne pas marquer une page terminée avant les vérifications.

## Déroulement de chaque étape

1. Relire le plan, le journal, les retours et l’état du dépôt ; préserver les modifications existantes. Identifier les pages exactes du lot et leur intention de recherche.
2. Poser uniquement les questions dont la réponse change réellement le contenu ou le parcours. Continuer les travaux indépendants pendant l’attente. Ne pas inventer la réponse à une question factuelle bloquante.
3. Réécrire les textes avec une narration courte, des formations explicites quand pertinentes et des CTA cohérents.
4. Définir des scènes adaptées à chaque page. Générer les nouvelles photos avec image_gen si utiles, ou réemployer un visuel adapté ; éviter une nouvelle image gratuite sur une page légale. Optimiser les images et vérifier leur cadrage. Ne pas présenter les personnes synthétiques comme des clients identifiés ou attribuer une identité à un collègue inventé.
5. Implémenter les changements et vérifier les interactions, le mobile et le SEO technique.
6. Mettre à jour le journal et le graphe du projet, puis fournir l’aperçu, les pages terminées, les vérifications et les éventuels points en attente.

## Questions possibles, au moment utile

- Jour 1 : quels engagements humains, composition de l’équipe et modalités de contact sont vérifiables ? Réutiliser les faits et préférences déjà fournis, ne pas les redemander.
- Jour 2 : uniquement les écarts non résolus entre les pages actuelles et les offres Notion (périmètre, livrables, maintenance).
- Jour 3 : publics, formats, durée, financement et coaching, si les sources ne suffisent pas. Ne pas promettre une prise en charge automatique.
- Jour 4 : priorités métiers ou exemples réels si nécessaires ; pas d’affirmations sectorielles inventées.
- Jour 5 : validation des chiffres, témoignages et autorisation d’identifier les clients si ces éléments sont insuffisamment documentés.
- Jour 6 : implantation et couverture géographique réelles ; ne pas inventer une présence physique locale.
- Jour 7 : arbitrages restants et éventuel souhait de publication, qui constitue une étape distincte.

## Contrôles et critères de fin

Avant/après : routes, statuts et redirections, titres, descriptions, H1/H2, canoniques, liens internes, données structurées, sitemap et indexabilité. Conserver les URL par défaut. Justifier les modifications éditoriales SEO et synchroniser les schémas avec le contenu réel. Ne pas garantir l’absence de variation de classement.

Tester les gabarits à 320, 390, 768, 1024 et 1440 px, et les pages individuellement pour leurs différences de contenu. Vérifier navigation, formulaires sans envoyer de message, calculateur, FAQ, clavier, contraste, animation réduite et images. Exécuter TypeScript/build et `graphify update .` après les modifications. Éviter les régressions sur les pages déjà traitées.

Terminé signifie : contenu et images intégrés, aperçu disponible, contrôles passés, aucun point factuel bloquant masqué. Développement local uniquement jusqu’à demande de publication.

## Suivi

- Plan : prêt.
- Déclenchement : automatique, 7 h Europe/Paris, du 13 au 19 septembre 2026 inclus.
- Jour 1 : terminé le 13 septembre 2026 — bibliothèque commune, navigation/footer, À propos, Contact et vérification de la home.
- Jour 2 : terminé en avance le 13 septembre 2026, à la demande « construit la suite » — huit pages Services.
- Jour 3 : terminé en avance le 13 septembre 2026 — formations et calculateur ROI.
- Jour 4 : terminé en avance le 13 septembre 2026 — hub Agents IA et neuf pages métiers.
- Jour 5 : design local terminé ; chiffres des neuf dossiers validés par l’utilisateur puis intégrés aux cartes et résultats. Citations non utilisées.
- Jour 6 : terminé le 13 septembre 2026 — dix-neuf pages villes et présentation nationale /agences/.
- Jour 7 : terminé le 13 septembre 2026 — blog/articles, pages utilitaires et revue globale ; détails dans le bilan ci-dessous.

Ajouter ici, à chaque étape, les routes traitées, les fichiers/visuels livrés, les contrôles, les réponses utilisateur et les points restants. Arrêter la série après les sept étapes ; aucun cycle de refonte indéfini.

## Précisions utilisateur

Mutualiser les sections qui reviennent avant d’étendre les gabarits. Pour chaque ville : générer une photo d’un lieu emblématique propre à la ville, avec références visuelles vérifiées ; ne pas simplement changer le nom ou une image de bureau générique. Pour les autres pages : visuels de bureau dans la même direction artistique que la home. Préparer les questions à 19 h la veille, exécuter à 7 h. Le jour 1 démarre immédiatement le 13 septembre.

## Bilan du jour 1

- Audit des répétitions : 50 Hero, 48 méthodes, 22 FAQ, 21 CTA finaux ; inventaire et guide `content/refonte/sections-partagees.md`.
- Composants mutualisés : PhotoHero, Breadcrumb, TextLink, MethodSection, FaqItem, FaqSection, PreAuditCTA et styles Brand. Méthode, FAQ et CTA utilisés dans la home et les nouvelles pages.
- Navigation : cabinet, formations IA, diagnostic et CTA cohérents ; ouverture au clavier et au clic, fermeture Échap ; suppression de trois navigations locales en doublon (agences, mentions légales, confidentialité) puisque le layout contient déjà la navigation globale.
- Footer : CTA commun et présentation cabinet avec formations ; liens existants conservés, diagnostic et formations ajoutés.
- À propos et Contact réécrits et simplifiés ; titres SEO/canoniques inchangés, descriptions et FAQ adaptées au discours réel. Aucun inventaire fictif de rôles d’équipe, aucun engagement de trois automatismes garantis ni devis promis après l’appel offert.
- Nouvelle image Contact : `public/images/home/premier-echange-bureau.webp`. La photo de groupe approuvée de la home est réutilisée sur À propos.
- Formulaire : sept champs/payload et endpoint inchangés, événements Meta conservés ; validation native rétablie, états accessibles ; aucun envoi réel effectué.
- Validation : build de 68 pages réussi ; 62 documents HTML comparés à l’état initial, mêmes titres/canoniques/nombres de H1, une seule navigation principale par page. FAQ et JSON-LD identiques sur home, À propos, Contact. Tests 320/390/768/1024/1440 px sans débordement et essais du menu/clavier et des champs obligatoires.
- Limite de validation : la livraison d’un vrai message par le webhook n’a pas été déclenchée, pour ne pas envoyer de faux prospect. API inchangée. Pas de publication.
- Pour la préparation du jour 2 à 19 h : relire les offres Notion et les huit pages services avant de poser une question. Vérifier uniquement les écarts de périmètre/livrables qui restent sans réponse ; conserver les quatre offres visibles dans la home sans supprimer les URL spécialisées.

#### Complément jour 1 — À propos
Section équipes/formation ajoutée, engagements réécrits et redisposés, ancrage Bordeaux + couverture nationale enrichis, bandeau des huit références partagé avec la home. Build réussi ; 62 documents HTML, titres, canoniques et nombres de H1 conservés ; FAQ structurées cohérentes. À propos vérifié à 320, 390, 768, 1024 et 1440 px sans débordement. Bandeau et rendu home vérifiés également.

#### Ajustement visuel À propos
Suite au retour « trop d'écriture, trop peu de design » : narration condensée, photo d'écoute avec question superposée, nouveau visuel d'atelier généré et optimisé WebP, section formation bleue, parcours compact, quatre engagements typographiques et carte graphique de France. Aucun changement de métadonnées ni de FAQ. Build et contrôles SEO réussis ; responsive 320/390/768/1024/1440 sans débordement, toutes les images chargées. Nouvelle direction consignée pour les lots suivants.


## Bilan du jour 2 — exécuté en avance à la demande utilisateur
- Pages : `/services/`, `/services/audit-ia/`, `/services/agents-ia/`, `/services/automatisation-ia/`, `/services/integration-ia/`, `/services/developpement-ia/`, `/services/chatbot-ia/`, `/services/employe-ia/`.
- Nouveau point d'entrée organisé par situation : clarifier, former, simplifier. Quatre accompagnements visibles et liens vers les offres spécialisées.
- Textes spécifiques centralisés dans `lib/services-content.ts`. Gabarit commun `components/services/ServicePage.tsx`, parcours MissionPath, annuaires discrets ServiceLinks/MetierLinks, FAQ et schémas synchronisés par ServiceSchema.
- Photos générées puis intégrées : diagnostic (86 Ko), construction (102 Ko), support (96 Ko), dans `public/images/services/`. Atelier formation réemployé sur le hub. Scènes illustratives sans attribution à un client identifié.
- Corrigé dans textes, descriptions et schémas : autonomie totale, délai universel d'une semaine, remplacement d'un poste, hébergement France universel, devis garanti à l'issue des 30 min et anciens formats d'audit non confirmés. Le pré-audit offert est distinct du diagnostic complet.
- SEO : URL, titres principaux, canoniques et mots-clés conservés ; descriptions et métadonnées sociales actualisées. Contenu HTML rendu serveur. FAQ identiques au JSON-LD. Les destinations anciennes sans route `/agent-ia/secteurs/` et `/agent-ia/comptabilite/` ne sont pas reprises ; le métier comptabilité reste couvert par `/agent-ia/finance/`. Anciennes ancres de sections conservées.
- Vérifications : build 68 pages, inventaire 62 HTML stable, un H1 et une navigation globale par page. Huit pages x cinq largeurs (320/390/768/1024/1440) sans débordement. Visuels inspectés, accordéons testés au clavier. Pas de formulaire envoyé ni publication.
- Prochain lot inachevé : jour 3, formations et calculateur. L'automatisation doit lire cet état pour ne pas refaire le jour 2 et préparer uniquement les questions utiles pour le lot suivant.

### Retour sur le lot Services — personnalisation
Agents IA et Automatisation IA : sur-mesure explicite dans l'introduction, le contexte, les exemples et une FAQ dédiée synchronisée au schéma. Les usages sont des exemples, pas des produits à la carte. Toutes les sept pages spécialisées ont désormais deux photos, avec une nouvelle section de travail en équipe. Audit : « Partir du terrain pour décider où agir », trois gestes concrets et livrables disposés en documents successifs. Annuaire Services enrichi avec intention par lien, conservé dans un accordéon discret. Build réussi, titres/canoniques/H1 conservés et responsive vérifié. Directive enregistrée pour les pages métiers du lot suivant.

### Nouvelle offre Pilotage IA & maintenance
Page `/services/pilotage-ia/` créée à la demande utilisateur, au-delà des huit routes initiales du lot. Contenu : suivi de l'adoption, maintenance dans un périmètre défini, priorisation des évolutions et accompagnement annuel. Distinguer le mois inclus au déploiement de l'accompagnement continu ; ne pas inventer de SLA ou de prestations illimitées.
Intégrations : homeOffers (donc home et données structurées), hub Services, annuaires d'offres, liens contextuels depuis les autres services, navigation desktop/mobile et footer. Sitemap automatique vérifié. Nouvelle photo de revue de projet `public/images/services/pilotage.webp`, atelier existant en second visuel.
Validation : build 69 pages réussi ; 63 documents HTML (62 initiaux + la nouvelle route), métadonnées principales des anciennes pages conservées, nouvelle canonique et sept FAQ synchronisées, présence dans le sitemap, deux images chargées, responsive 320/390/768/1024/1440 sans débordement. Les audits comparant l'inventaire initial doivent désormais autoriser cette route supplémentaire.

## Bilan du jour 3 — formations et calculateur
- Pages : `/services/formation-ia/`, `/services/formation-ia/ia-fondamentaux/`, `/services/formation-ia/ia-avancee/`, `/calculateur-roi/`.
- Formations : gabarit partagé, deux photos par page, choix des parcours simplifié, programme complet conservé en accordéons natifs utilisables au clavier, formation/adoption et accompagnement après atelier mis en avant. Nouveau visuel `public/images/services/formation.webp`.
- Contenus existants préservés : durée 7 h, taille des groupes, prérequis, modules et suivi. Prise en charge OPCO présentée comme conditionnelle, à étudier avec le partenaire et le financeur.
- Calculateur : introduction illustrée, exemples d'usages sur mesure, clarification des hypothèses de coûts et des gains estimés. Moteur de calcul et données inchangés. Libellé « agents recommandés » remplacé par « Des exemples à explorer ».
- Validation : build réussi (69 pages générées), 63 documents HTML, routes/titres/nombres de H1 conservés. Canonique du calculateur ajoutée car absente. Six FAQ de formation synchronisées avec le JSON-LD, deux schémas Course conservés. Gabarits contrôlés de 320 à 1440 px sans débordement ; parcours calculateur jusqu'aux résultats testé et nom de simulation effacé.
- Limite : aucun formulaire prospect envoyé ; rapport conditionné à ce formulaire non testé par soumission réelle. Pas de publication.
- Prochain lot inachevé : jour 4, hub agents et neuf pages métiers. Lire ce suivi avant tout déclenchement automatique pour ne pas refaire le jour 3.

### Ajustement calculateur après capture utilisateur
Grille formulaire élargie, estimation latérale limitée à 330 px et remplacée par une barre compacte sous 1100 px. Cartes de sélection contraintes à leur conteneur, espacement réduit, état sélectionné accessible. Suppression du grand aperçu flouté au profit de deux indicateurs utiles ; bouton rapport désactivé sans scénario. Navigation entre étapes recentrée sur le calculateur. Calculs et SEO inchangés.

### Ajout du parcours Coaching IA Dirigeant
Source lue : page Notion publique « Formation 3 — Coaching IA Dirigeant (4 sessions × 1h30) », identifiant 3b0c7d01a0e881a288d3fed1b08c384d, le 13 septembre 2026.
Nouvelle route `/services/formation-ia/coaching-dirigeant/`. Quatre séances de 1 h 30, modalités individuelles et cohorte 4–6, programme ajustable, livrables, micro-missions, accès formateur sous 48 h, évaluations/certificat et suivi à 30 jours. Pas de promesse OPCO ajoutée au coaching. Tarifs non affichés conformément à la direction commerciale du site ; recommandations internes et référent « à désigner » non publiés.
Intégration au hub Formations (troisième parcours), aux deux pages de programme existantes et à l’ItemList. Métadonnées et FAQ du hub actualisées. Photo coaching générée et optimisée WebP (~100 Ko), second visuel de revue de projet réutilisé.
Contrôles : build 70 pages réussi, deux photos chargées, programme au clavier, nouvelle canonique, Course PT6H, six FAQ exactes et sitemap vérifiés. Coaching et hub contrôlés de 320 à 1440 px sans débordement. Lien hub vers coaching testé. Pas de publication ni soumission de formulaire. Le prochain lot reste le jour 4.

### Raffinement des pages Formation et financement dirigeant
À la demande utilisateur : financement OPCO conditionnel ajouté au coaching (bloc visible et septième FAQ synchronisée). Nouveau composant Program partagé par les trois programmes : parcours numéroté, repères horaires, cartes dépliables et livrables/ateliers mis en valeur. Contenu intégral conservé. Composant Funding partagé par les quatre pages. Repères pratiques, listes, cartes de parcours et fonds enrichis dans Formation.module.css.
Validation : build 70 pages réussi, quatre pages x cinq largeurs 320/390/768/1024/1440 sans débordement, accordéon clavier vérifié, canoniques et H1 conservés, FAQ HTML/JSON-LD synchronisées. Aucun envoi ni publication.

### Références sur les programmes
Bandeau TrustStrip partagé ajouté sous le hero de IA Fondamentaux, IA Avancée et Coaching IA Dirigeant. Huit logos existants, même présentation que la home et le hub Formations. Build réussi, présence unique vérifiée sur les trois pages.

## Bilan du jour 4 — usages IA par métier
- Routes : `/agent-ia/` et marketing, commercial, service-client, telephonique, rh, finance, operations, juridique, achats.
- Nouveau gabarit serveur MetierPage, annuaire MetierDirectory et schémas MetierSchema. Données éditoriales centralisées dans `lib/metiers-content.ts`, styles `components/metiers/Metiers.module.css`. Réemploi TrustStrip, MissionPath, FAQ, PreAuditCTA et annuaire Services.
- Narration : quotidien métier, scénario illustratif en trois étapes, trois familles d’usages, outils/règles/mesure, adoption et formation, méthode, cas lié, FAQ et CTA. Sur-mesure explicite ; les exemples ne sont pas des produits prêts à acheter.
- Promesses non étayées retirées du contenu rendu et des métadonnées sociales : ROI garanti, échéances universelles, souveraineté France universelle, remplacement de postes, précision chiffrée sans preuve. Les titres SEO principaux et URL sont conservés. Les textes et FAQ sont reformulés : changement éditorial réel, pas promesse de maintien des positions.
- Particularités métier : validation commerciale/éditoriale, relais humain au support/téléphone, permissions RH et absence de décision autonome de recrutement, contrôles finance, revue juridique humaine et validation des engagements achats.
- Deux nouvelles scènes générées (collaboration marketing/commercial, revue de dossiers opérationnels), WebP ~110 Ko chacune. Réemploi des photos support/formation et atelier en seconde photo. Deux photos sur chaque page, sans attribution à un client nommé.
- Contrôles : build 70 pages réussi. Dix pages x cinq largeurs (320/390/768/1024/1440) sans débordement horizontal, screenshots desktop/mobile inspectés, FAQ au clavier. Titres/canoniques/nombres de H1 comparés à `seo-avant-jour-4.json`, une navigation globale par page, liens internes valides et cinq FAQ exactes par page. Pas de soumission ni publication.
- Prochain lot : jour 5, cas clients. Vérifier les éléments de preuve et les métriques avant de réécrire les cas. L’automatisation doit lire ce suivi pour ne pas refaire le jour 4.

### Ajustement navigation entre usages
Accordéon « D’autres usages dans votre entreprise » remplacé sur les neuf pages métiers par AgentMarquee, identique à la home (pause/reprise, arrêt au survol, gestion du mouvement réduit). Build réussi et présence vérifiée dans les neuf HTML.

Bandeau défilant métiers déplacé après le CTA bleu de pré-audit, juste avant le footer, conformément à la capture utilisateur. Ordre vérifié dans les neuf pages générées ; build réussi.

### Finitions du lot métiers
Espacements, cartes d’usages, scénarios en dégradé bleu, pictogrammes de contexte et cartes de navigation affinés. Bandeau final compact conservé entre CTA et footer. Trois liens du bandeau vers la route absente /agent-ia/secteurs/ retirés du composant partagé (home également corrigée). Build réussi, titres/canoniques/H1 et liens des dix pages vérifiés. Gabarits hub et métier contrôlés à 320/390/768/1024/1440 sans débordement ; bouton pause testé.


## Bilan du jour 5 — cas clients
- Hub et neuf dossiers refondus avec un gabarit serveur commun, galerie de contextes, récit terrain/réponse/transmission, deux photos par fiche, lectures associées et CTA de pré-audit.
- Nouvelle scène de bilan d’équipe générée et optimisée dans `public/images/services/cas-equipe.webp`. Autres photos de bureau réemployées dans la DA existante.
- Chiffres et citations des briefs signalés « à valider » : question utilisateur en attente ; KPI non rendus dans les nouvelles pages. Descriptions SEO/sociales et schémas reformulés. Voir `content/refonte/cas-clients-validation.md` avant toute réintégration de résultats.
- Build réussi : 70 pages. Dix URL, titres SEO, canoniques et nombres de H1 comparés à `seo-avant-jour-5.json`, liens internes contrôlés. JSON-LD Article/CollectionPage/Breadcrumb présents. Gabarits index et détail contrôlés à 320/390/768/1024/1440 px ; les neuf fiches contrôlées à 320 px, sans débordement. Rendus ordinateur et mobile inspectés, ouverture d’un dossier depuis la galerie testée.
- Pas de publication ni envoi de formulaire. La vérification factuelle reste ouverte ; ne pas annoncer les cas comme validés.
- Prochain lot de design : jour 6, pages villes et annuaire. Ne pas refaire les cas clients lors du prochain déclenchement, sauf réponse à la question ou retour utilisateur.

### Retour utilisateur — cartes et résultats
Les chiffres des neuf cas sont explicitement validés par l’utilisateur (« Oui, les chiffres sont validés »). Ce retour remplace le statut de réserve des KPI ci-dessus. Galerie éditoriale à deux colonnes avec un premier cas en grand format, deux indicateurs par carte, sept nouvelles ambiances de bureau (neuf images distinctes au total). Section CaseResults commune avec trois comparaisons avant/après et période propre à chaque dossier.
Validation du retour cartes/résultats : build réussi (70 pages), dix pages contrôlées sur cinq largeurs 320/390/768/1024/1440, aucun débordement horizontal. Rendus desktop et mobile inspectés ; correction du titre de la première carte et du grand indicateur sur mobile. Sept nouveaux WebP de 66 à 111 Ko environ, inspectés. Titres/canoniques/H1 et liens conservés ; une section résultats par fiche. Prompts et chemins des visuels dans `content/refonte/prompts-visuels-cas-clients.md`. Pas de publication.


## Bilan du jour 6 — présence nationale et villes
- Routes : `/agences/` et dix-neuf `/agence-ia-{ville}/` existantes. CityPage/NationalPage et CitySchema mutualisés ; données locales dans `lib/cities-content.ts`.
- Discours : cabinet IA, conception sur mesure, formation des équipes et dirigeants, cadre partagé et suivi. Introductions, exemples d’usages et liens de proximité spécifiques. Pas de bureau local inventé : Bordeaux comme ancrage, accompagnement national, modalités sur site convenues lors du cadrage.
- Les LocalBusiness répétés avec adresses/implantations non établies sont remplacés par Service/areaServed. FAQ et JSON-LD partagent la même source. `/agences/` conserve une vocation de mission et confiance, avec un accès discret aux villes.
- Dix-neuf images générées de lieux emblématiques, 1400 px WebP, environ 4,3 Mo au total. Image de bureau et logos réemployés. Prompts, fichiers et références des lieux : `content/refonte/prompts-visuels-villes.md`. Les images sont des représentations générées, pas des documents architecturaux exacts. Une interruption de génération a nécessité un second lot ; les dix-neuf fichiers sont intégrés et leur chargement vérifié.
- Validation : build réussi (70 pages), vingt pages × cinq largeurs 320/390/768/1024/1440 sans débordement. Rendus desktop/mobile inspectés, annuaire et FAQ testés au clavier. Titres/canoniques/H1 conservés, liens internes valides, 95 FAQ HTML/JSON-LD synchronisées. Les reformulations éditoriales ne garantissent pas le maintien des positions SEO.
- Pas de publication ni soumission de formulaire. Graphe mis à jour.
- Prochain lot : jour 7, blog/articles, pages légales, 404 et revue globale. Ne pas reprendre les pages villes sans nouveau retour utilisateur.

### Ajustement du 13 septembre — formations sur les pages villes

Section dédiée aux formations IA intégrée au modèle partagé des 19 villes : titre localisé, photo d’atelier, trois cartes (Fondamentaux 7 h, Avancée 7 h, Coaching Dirigeant 4 × 1 h 30), bénéfices et liens directs vers les programmes. Aucun changement d’URL ou de métadonnées. Build validé (70 pages), présence des trois programmes vérifiée sur 19 pages et absence de débordement contrôlée à 320, 390, 768, 1024 et 1440 px sur Bordeaux.

### Ajustement demandé — formation concise et navigation France

La section formation des 19 villes se limite désormais à une photo, un court texte et un lien vers le hub formation ; les trois cartes de programmes sont retirées. Sur /agences/, le tiroir est remplacé par CityMarquee après le pré-audit et avant le footer : 19 liens, pause/reprise, adaptation au mouvement réduit et navigation clavier via les styles partagés de la home. Finitions des usages, étapes et blocs de proximité dans le modèle commun. Build 70 pages validé ; contrôles de structure sur les 19 villes et vérifications responsive Bordeaux/France à 320, 390, 768, 1024 et 1440 px sans débordement ; pause/reprise vérifiée.

## Bilan du jour 7 — blog, lecture et pages utilitaires
- Blog : nouvelle mise en page éditoriale, article principal et grille responsive, filtres issus des catégories réellement publiées (correction du filtre Guide pratique), compte de résultats annoncé, CTA partagé de pré-audit.
- Trois articles publiés : titres, texte intégral, ancres et canoniques conservés. Lecture aérée, sommaire latéral et mobile natif, deux lectures associées. Schéma Article conservé, référence au Blog corrigée. Planification des articles inchangée.
- Trois scènes de bureau générées et optimisées en WebP : confidentialité, relation avec un partenaire, cabinet comptable. Les couvertures et métadonnées sociales pointent vers ces nouveaux visuels ; les anciens fichiers restent disponibles.
- Mentions légales/confidentialité : contraste, typographie, tableaux, sommaire et fond affinés ; texte juridique inchangé, pas de nouvelle validation juridique. Correction du sommaire mobile de confidentialité qui restait masqué.
- Page 404 personnalisée avec accès accueil/services/contact ; noindex et HTTP 404 vérifiés.
- Validation : build 70 pages, contrôle global des 64 HTML (un H1, une navigation, liens internes vers des routes existantes). Sept pages du lot contrôlées sur cinq largeurs 320/390/768/1024/1440 sans débordement. Filtres et sommaires mobiles testés ; rendus ordinateur/mobile inspectés. Titres/canoniques des articles et pages légales conservés.
- Les sept lots de refonte sont désormais réalisés en local. Aucune publication ni soumission de formulaire. Prochaine intervention : retours utilisateur et préparation de mise en ligne si demandée ; ne pas relancer automatiquement des lots déjà terminés.

### Articles — lecture épurée, gabarit durable
Colonne de lecture limitée à 680 px, texte 16 px, rythme des H2/H3, interlignes et marges harmonisés. Les paragraphes commençant par du gras reçoivent automatiquement la classe article-point au rendu Markdown : intitulé détaché et repère discret. Listes espacées, citations et tableaux retravaillés (défilement horizontal sur petit écran). Sommaire latéral allégé.
Les paragraphes longs des trois articles publiés sont scindés aux frontières de phrases ; contenu comparé avant/après à espaces normalisés, sans changement de mots. Titres SEO, canoniques, H1 et ancres de sommaire vérifiés. Build réussi et trois articles × cinq largeurs sans débordement. Ces styles sont communs à tous les futurs articles ; consignes de rédaction ajoutées à content/blog/_template.md. Pas de publication ni revue juridique du contenu.

### Navigation et footer — identité bleu nuit
Navigation flottante bleu nuit, monogramme avec nom Althoce et CTA bleu clair. Suppression du menu Agents IA. Services limités aux quatre offres de la home : Diagnostic, Déploiement & agents IA, Pilotage & maintenance, Formation. Menu À propos : Le cabinet et Contact. Ressources conservées. Même structure sur mobile, sous-menus au clic, fermeture Échap avec retour de focus, fermeture au clic extérieur, verrouillage du défilement arrière sur mobile.
Footer assorti en dégradé bleu ardoise/nuit, liens plus contrastés, marque explicite et focus clavier visible. Liens du footer conservés. Build réussi ; contrôles menus sur 320/390/768/901/1024/1440, quatre liens de service et deux liens À propos vérifiés, aucun débordement ; contrôle des 64 HTML et liens internes valide. Pas de publication.

### Menu compact et transparence
Bleu nuit conservé avec opacité 80–86 %, flou 22 px et bord translucide ; repli opaque si préférence de transparence réduite. Menu mobile à hauteur de contenu (environ 250 px fermé, 462 px services ouverts), plafond adapté au viewport, liens courts sans descriptions, pictogrammes réduits et CTA compact. Fond du panneau opaque pour éviter la superposition des textes. Build validé ; contrôles à 320×568, 390×844 et 768×650 sans débordement, Échap et fermeture au bouton vérifiés.

### Revue finale après validation de la navigation
Contrôle global : 64 documents, H1/navigation uniques, liens internes et ancres valides. Ancien lien /#souverainete de la confidentialité corrigé vers sa section sécurité. Sommaires d’articles extraits du HTML final pour garantir la concordance avec les ancres, y compris titres mis en forme et exemples de code ; test ciblé réussi. Défilement fluide désactivé en préférence de mouvement réduit. Build 70 pages réussi, 12 gabarits × 3 largeurs (320/768/1440) sans débordement. Toutes les modifications restent locales. Aucun nouveau lot de refonte en attente ; prochaine étape : retours ou préparation de publication explicitement demandée.


### Préparation GitHub et contrôle du suivi — 13 septembre 2026
Revue de sécurité et rangement réalisés à la demande de l’utilisateur après les sept lots. Rapport : `docs/security/audit-2026-09-13.md`. Dépendances corrigées (audit npm sans vulnérabilité signalée), validations et protections des API, confirmation des envois ROI, choix préalable au pixel Meta, en-têtes HTTP, exclusions Git, documentation et CI. Installation npm ci, tests sécurité, typecheck et build réussis ; graphify actualisé. Aucun push ni publication. Configuration anti-abus distribuée et validation des vrais webhooks restent à effectuer chez l’hébergeur avant mise en ligne.
Contrôle automatique à 21 h 08 Europe/Paris : les sept étapes sont déjà terminées en avance. Aucun lot à préparer pour demain ni question nouvelle nécessaire. Ne pas redémarrer la refonte ; attendre un nouveau retour utilisateur.

### FAQ formations — 13 septembre 2026
Ajout de 7 questions propres à IA Fondamentaux et de 7 propres à IA Avancée, via le composant FAQ commun, avant le CTA. Hub enrichi (10 questions), coaching enrichi (9 questions). Réponses issues des programmes existants : niveaux, durée, usages, ateliers, limites du déploiement pédagogique, accompagnement, territoire et financement conditionnel. Source commune au rendu HTML et JSON-LD ; compilation réussie, 33 questions/réponses identiques entre HTML et FAQPage, H1 uniques sur les quatre routes. Aucun changement de route ou de canonical. Une FAQ n’est pas une garantie de visibilité Google/IA ; les performances et l’indexation de production restent à mesurer.

### Services — parcours simplifié
À la demande de l’utilisateur, suppression des trois sections concurrentes d’orientation/catalogue. Présentation unique des quatre accompagnements avec une intention, un bénéfice et un lien par offre. Méthode associée à une scène de construction ; section humaine avec photo d’atelier et un lien cabinet. Expertises complémentaires accessibles dans un bloc discret en fin de page, maillage du footer conservé. FAQ conservée sans CTA secondaire ; CTA final du footer inchangé. Styles isolés dans ServicesHub.module.css. Compilation réussie, H1/canonical/JSON-LD et quatre liens vérifiés ; rendu ordinateur 1440 px et mobile 320 px inspecté. Routes et métadonnées conservées.

# Sécurité

Ne publiez pas de secret ni de données de formulaire dans une issue publique. Signalez une vulnérabilité en privé au responsable du dépôt ou via le contact du site Althoce.

Voir le [rapport de revue locale](docs/security/audit-2026-09-13.md) et les [instructions de déploiement](README.md#github-et-hébergement).

Les dépendances sont verrouillées par `package-lock.json` et vérifiées en CI. Les changements sur les API doivent conserver les tests `npm run test:security`. Aucune clé ni URL privée de webhook ne doit être préfixée `NEXT_PUBLIC_`.

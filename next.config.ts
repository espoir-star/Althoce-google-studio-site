import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  // ───────────────────────────────────────────────────────────────
  // Trailing slash : true
  // Tous les canoniques déclarés dans les `metadata.alternates.canonical`
  // portent un / final (ex. /services/chatbot-ia/). Sans ce flag, Next.js
  // sert /services/chatbot-ia (sans /) et redirige /services/chatbot-ia/
  // → /services/chatbot-ia avec un 308. Conséquence : l'URL canonique
  // elle-même redirige, ce que Google interprète comme une erreur de
  // redirection et bloque l'indexation (erreur "Erreur liée à des
  // redirections" dans Search Console, +52 pages bloquées en
  // "Détectée, non indexée"). Avec trailingSlash: true, la version avec /
  // est servie en 200, la version sans / est 308 redirigée vers la version
  // avec /. Alignement parfait avec les canoniques.
  // ───────────────────────────────────────────────────────────────
  trailingSlash: true,

  async redirects() {
    return [
      // ─────────────────────────────────────────────────────────────
      // Canonical host : www.althoce.com → althoce.com (308 permanent)
      // Aligne le host avec le canonical déclaré dans metadataBase et
      // résout l'erreur Search Console "Autre page avec balise
      // canonique correcte" qui marque les URLs www comme non
      // indexées. Le canonical du site est non-www, partout.
      // ─────────────────────────────────────────────────────────────
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'www.althoce.com',
          },
        ],
        destination: 'https://althoce.com/:path*',
        permanent: true,
      },
      // ─────────────────────────────────────────────────────────────
      // Renommages de routes internes
      // ─────────────────────────────────────────────────────────────
      {
        source: '/agent-ia/ops',
        destination: '/agent-ia/operations',
        permanent: true,
      },
      {
        source: '/agent-ia/ops/:path*',
        destination: '/agent-ia/operations/:path*',
        permanent: true,
      },
      {
        source: '/agent-ia/secteurs',
        destination: '/agent-ia/achats',
        permanent: true,
      },
      {
        source: '/agent-ia/secteurs/:path*',
        destination: '/agent-ia/achats/:path*',
        permanent: true,
      },
    ];
  },
}

export default nextConfig

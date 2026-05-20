import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  async redirects() {
    return [
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

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./*.tsx",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
        display: ['"Plus Jakarta Sans"', 'sans-serif'],
      },
      colors: {
        // v2 design system
        accent: '#2563eb',
        ink: '#09090b',
        muted: '#71717a',
        'v2-border': '#e4e4e7',
        'surface-dark': '#09090b',
        'surface-dark-2': '#0f0f0f',
        // legacy kept for blog/secondary pages
        midnight: '#f8fafc',
        darkbase: '#0f172a',
        electric: '#7c3aed',
        amber: '#f59e0b',
        surface: '#ffffff',
      },
      backgroundImage: {
        'noise': "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
      },
      animation: {
        // v2
        'ticker': 'ticker 40s linear infinite',
        'ticker-slow': 'ticker 60s linear infinite',
        'fade-up': 'fadeUp .6s ease both',
        'float-card': 'floatCard 4s ease-in-out infinite',
        'pulse-dot': 'pulseDot 2s ease-in-out infinite',
        'spin-slow': 'spin 20s linear infinite',
        // legacy
        'orbit-slow': 'orbit 20s linear infinite',
        'orbit-medium': 'orbit 15s linear infinite',
        'orbit-fast': 'orbit 10s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'float-delayed': 'float 6s ease-in-out 3s infinite',
        'pulse-glow': 'pulse-glow 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'shimmer': 'shimmer 2s linear infinite',
        'text-reveal': 'text-reveal 1.5s cubic-bezier(0.77, 0, 0.175, 1) 0.5s',
        'scroll': 'scroll 20s linear infinite',
      },
      keyframes: {
        // v2
        ticker: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' },
        },
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(20px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        floatCard: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        pulseDot: {
          '0%, 100%': { transform: 'scale(1)', opacity: '1' },
          '50%': { transform: 'scale(1.4)', opacity: '0.7' },
        },
        // legacy
        orbit: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.8' },
        },
        shimmer: {
          from: { backgroundPosition: '0 0' },
          to: { backgroundPosition: '-200% 0' }
        },
        scroll: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-100%)' },
        }
      }
    }
  },
  plugins: [],
}

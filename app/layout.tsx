import { brand } from '@/lib/brand-content';
import { organizationJsonLd } from '@/lib/organization';
import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import NavigationProvider from '@/components/NavigationProvider';
import Navbar from '@/components/Navbar';
import TrackingConsent from '@/components/TrackingConsent';

export const metadata: Metadata = {
  metadataBase: new URL('https://althoce.com'),
  title: {
    default: 'Althoce | Conseil & intégration IA',
    template: '%s | Althoce',
  },
  description: brand.shortDescription,
  verification: {
    google: 'owLvah_UoMEisk_eKugO4bY_aFaklREE1wmT9jPImPo',
    other: {
      'facebook-domain-verification': 'c8b485spmu8rltrnv0p6khyhg8pmuw',
    },
  },
  icons: {
    icon: [
      { url: '/favicons/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicons/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: { url: '/favicons/apple-touch-icon.png', sizes: '180x180' },
  },
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://althoce.com/',
    siteName: 'Althoce',
    title: 'Althoce | Conseil & intégration IA',
    description: brand.shortDescription,
    images: [
      {
        url: '/og-default.png',
        width: 1200,
        height: 630,
        alt: 'Althoce, cabinet de conseil et intégration IA',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@althoce',
    title: 'Althoce | Conseil & intégration IA',
    description: brand.shortDescription,
    images: ['/og-default.png'],
  },
};

/* Police commune du site, des ressources et des mails : Geist (standard davinci). */
const geist = Geist({ subsets: ['latin'], variable: '--font-geist', weight: ['400', '500', '600', '700'], display: 'swap' });
const geistMono = Geist_Mono({ subsets: ['latin'], variable: '--font-geist-mono', weight: ['400', '500'], display: 'swap' });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${geist.variable} ${geistMono.variable} scroll-smooth scroll-pt-28`}>
      <head>
        {/* Organization : une seule définition (lib/organization.ts), présente sur toutes les pages */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
      </head>
      <body className="bg-white text-ink font-sans min-h-screen selection:bg-accent/20 selection:text-accent">
        <TrackingConsent />
        <NavigationProvider>
          <Navbar />
          {children}
        </NavigationProvider>
      </body>
    </html>
  );
}

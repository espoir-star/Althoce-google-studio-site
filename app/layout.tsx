import { brand } from '@/lib/brand-content';
import type { Metadata } from 'next';
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

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className="scroll-smooth scroll-pt-28">
      <head>
        <link rel="preload" href="/fonts/plus-jakarta-sans-latin-wght-normal.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        {/* Organization — présent sur toutes les pages */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "@id": "https://althoce.com/#organization",
              "name": "Althoce",
              "url": "https://althoce.com/",
              "description": brand.shortDescription,
              "foundingDate": "2024",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "5 RUE FENELON",
                "addressLocality": "Bordeaux",
                "postalCode": "33000",
                "addressCountry": "FR"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "email": "contact@althoce.com",
                "contactType": "customer service",
                "availableLanguage": "French"
              },
              "areaServed": {
                "@type": "Country",
                "name": "France"
              },
              "sameAs": []
            })
          }}
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

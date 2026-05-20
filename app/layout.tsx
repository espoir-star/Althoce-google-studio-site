import type { Metadata } from 'next';
import './globals.css';
import NavigationProvider from '@/components/NavigationProvider';
import Navbar from '@/components/Navbar';

export const metadata: Metadata = {
  metadataBase: new URL('https://althoce.com'),
  title: {
    default: 'Althoce | Agents IA & Automatisation pour PME françaises',
    template: '%s | Althoce',
  },
  description: 'Althoce conçoit des agents IA 100% autonomes et des automatisations métier pour les PME et ETI françaises. Premier agent opérationnel en 1 semaine, à partir de 1 400€.',
  icons: {
    icon: [
      { url: '/favicons/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicons/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicons/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: { url: '/favicons/apple-touch-icon.png', sizes: '180x180' },
    other: [
      { rel: 'manifest', url: '/favicons/site.webmanifest' },
    ],
  },
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://althoce.com',
    siteName: 'Althoce',
  },
  twitter: {
    card: 'summary_large_image',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className="scroll-smooth scroll-pt-28">
      <head>
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
        {/* Organization — présent sur toutes les pages */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "@id": "https://althoce.com/#organization",
              "name": "Althoce",
              "url": "https://althoce.com",
              "description": "Agence spécialisée en agents IA et automatisation pour PME françaises",
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
        <NavigationProvider>
          <Navbar />
          {children}
        </NavigationProvider>
      </body>
    </html>
  );
}

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
  description: 'Althoce conçoit des agents IA et automatisations sur-mesure pour libérer vos équipes des tâches répétitives. +5M€ économisés, +758 flows créés, -70% de temps administratif.',
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
        <link rel="dns-prefetch" href="https://api.fontshare.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
        <link href="https://api.fontshare.com/v2/css?f[]=satoshi@400,500,700&display=swap" rel="stylesheet" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Althoce",
              "url": "https://althoce.com",
              "description": "Agence spécialisée en agents IA et automatisation pour PME françaises",
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
                "contactType": "customer service"
              }
            })
          }}
        />
      </head>
      <body className="bg-slate-50 text-slate-900 font-sans min-h-screen selection:bg-electric/20 selection:text-electric">
        <NavigationProvider>
          <Navbar />
          {children}
        </NavigationProvider>
      </body>
    </html>
  );
}

import './globals.css';

import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import type { Metadata } from 'next';
import { Lato, Playfair_Display } from 'next/font/google';

import CookieConsent from '@/components/Cookie/CookieConsent';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { ScrollBtn } from '@/components/ScrollBtn';

const lato = Lato({
  weight: ['400'],
  subsets: ['latin-ext'],
  variable: '--font-lato',
});

const playfairDisplay = Playfair_Display({
  weight: ['400', '600'],
  subsets: ['latin-ext'],
  variable: '--font-playfairDisplay',
});

export const metadata: Metadata = {
  title: 'Головна Simple IT News',
  description: 'Стрічка IT новин',
  viewport:
    'width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no',
  icons: [
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '32x32',
      url: '/favicon/favicon-32x32.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '16x16',
      url: '/favicon/favicon-16x16.png',
    },
    {
      rel: 'apple-touch-icon',
      sizes: '180x180',
      url: '/favicon/apple-touch-icon.png',
    },
  ],
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const websiteJsonLd = {
    '@context': 'https://schema.org/',
    '@type': 'WebSite',
    name: 'Simple IT News',
    url: 'https://www.simpleitnews.tech/',
  };

  return (
    <html lang="uk" className={`${playfairDisplay.variable} ${lato.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
          key="website-jsonld"
        />
      </head>
      <body className="relative flex h-screen flex-col">
        <Header />
        <main className="relative flex-grow py-4 text-dark">
          {children}
          <ScrollBtn />
          <Analytics />
          <SpeedInsights />
        </main>
        <Footer />
        <CookieConsent />
      </body>
    </html>
  );
}

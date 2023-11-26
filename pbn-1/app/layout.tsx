import './globals.css';

import { Analytics } from '@vercel/analytics/react';
import cn from 'classnames';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Link from 'next/link';

import { Header } from '@/components/Header';

const inter = Inter({ subsets: ['latin'] });

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

import { Lato } from 'next/font/google';

const lato = Lato({
  weight: ['400'],
  subsets: ['latin-ext'],
});

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
    <html lang="uk" className={lato.className}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
          key="website-jsonld"
        />
      </head>
      <body className={cn('relative flex h-screen flex-col', inter.className)}>
        <Header />
        <main className="flex-grow py-4 text-dark">
          {children}
          <Analytics />
        </main>
        <footer className="bg-black py-4">
          <div className="container">
            <Link href="/">
              <span className="text-lg font-bold text-white">
                Simple IT News
              </span>
            </Link>
            <p className="text-xs font-bold text-white">
              Copyright © {new Date().getFullYear()} Simple IT News
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}

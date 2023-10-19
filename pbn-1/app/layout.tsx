import './globals.css';

import { Analytics } from '@vercel/analytics/react';
import cn from 'classnames';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Link from 'next/link';

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
  openGraph: {
    title: 'Simple IT News',
    description: 'Просто ІТ новини. Читайте новини зі світу АйТі.',
    url: 'https://www.simpleitnews.tech',
    siteName: 'Simple IT News',
    images: [
      {
        url: 'https://nextjs.org/android-chrome-512x512.png',
        width: 512,
        height: 512,
      },
      {
        url: 'https://nextjs.org/android-chrome-192x192.png',
        width: 192,
        height: 192,
        alt: 'Прості ІТ Новини',
      },
    ],
    locale: 'uk',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="uk">
      <body className={cn('flex flex-col h-screen', inter.className)}>
        <header className="bg-black py-4">
          <div className="container">
            <Link href="/">
              <span className="text-lg font-bold text-white">
                Simple IT News
              </span>
            </Link>
          </div>
        </header>
        <main className="flex-grow py-4">
          {children} <Analytics />
        </main>
        <footer className="bg-black py-4">
          <div className="container">
            <p className="text-lg font-bold text-white">Simple IT News</p>
            <p className="text-xs font-bold text-white">
              Copyright © {new Date().getFullYear()}
              Simple IT News
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}

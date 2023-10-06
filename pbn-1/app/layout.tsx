import './globals.css';

import cn from 'classnames';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Головна',
  description: 'Стрічка IT новин',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
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
        <main className="flex-grow py-4">{children}</main>
        <footer className="bg-black py-4">
          <div className="container">
            <p className="text-lg font-bold text-white">Simple IT News</p>
          </div>
        </footer>
      </body>
    </html>
  );
}

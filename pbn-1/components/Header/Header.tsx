import Link from 'next/link';

import Logo from '@/public/header/logo.svg';

import { Menu } from './Menu';

export const Header = () => {
  return (
    <header className="bg-dark py-3" id="header">
      <div className="container">
        <div className="flex flex-row items-center justify-between">
          <Link href="/">
            <Logo className="h-6 w-[106px]" />
          </Link>
          <Menu />
        </div>
      </div>
    </header>
  );
};

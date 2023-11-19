import Link from 'next/link';

import Burger from '@/public/header/burger.svg';
import Logo from '@/public/header/logo.svg';

export const Header = () => {
  return (
    <header className="bg-black py-3" id="header">
      <div className="container">
        <div className="flex flex-row items-center justify-between">
          <Link href="/">
            <Logo className="w-[106px] h-6" />
          </Link>
          {/* TODO: replace button with component */}
          <button>
            <Burger className="w-10 h-10" />
          </button>
        </div>
      </div>
    </header>
  );
};

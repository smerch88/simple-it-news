import Link from 'next/link';

import Logo from '@/public/header/logo.svg';

import { Menu } from './Menu';

const menuItems = [
  { title: 'Новини', route: '/news' },
  { title: 'Пости', route: '/posts' },
  { title: 'Статті', route: '/articles' },
  // { title: 'Інтерв’ю', route: '/interviews' },
  { title: 'Автори', route: '/authors' },
  // { title: 'Подкасти', route: '/podcasts' },
];

export const Header = () => {
  return (
    <header
      id="header"
      className="xl:border-b xl:border-solid xl:border-dark/50"
    >
      <div className="bg-dark py-3 xl:py-4">
        <div className="container">
          <div className="flex flex-row items-center">
            <Link href="/">
              <Logo className="h-6 w-[106px]" />
            </Link>
            <Menu />

            <nav className="invisible h-0 w-0 overflow-hidden xl:visible xl:ml-auto xl:h-auto xl:w-auto">
              <ul className="flex flex-row gap-1 text-white">
                <li>
                  <Link href="/about-us" className="menuTitleMob px-3 py-1">
                    Про нас
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about-us/contancts"
                    className="menuTitleMob px-3 py-1"
                  >
                    Контакти
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
      <div className="container invisible h-0 w-0 overflow-hidden bg-white xl:visible xl:h-auto xl:w-auto xl:pb-3 xl:pt-4">
        <ul className="flex flex-row gap-1 text-menuItemsMob xl:pb-0">
          {menuItems &&
            menuItems.map(item => (
              <li key={item.title}>
                <Link href={item.route} className="px-4 py-2 text-t20">
                  {item.title}
                </Link>
              </li>
            ))}
        </ul>
      </div>
    </header>
  );
};

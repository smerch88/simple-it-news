import Link from 'next/link';
import { getServerSession } from 'next-auth';

import { menuItems } from '@/data/routes';
import { menuItemsCat } from '@/data/routes';
import { authLoggedUser } from '@/lib/api';
import { authConfig } from '@/lib/auth';
import Logo from '@/public/header/logo.svg';

import {
  GoogleLogOutButton,
  GoogleSignInButton,
} from '../AuthButtons/AuthButtons';
import { Menu } from './Menu';

export const Header = async () => {
  const session = await getServerSession(authConfig);
  await authLoggedUser({
    first_name: session?.user?.name?.split(' ')[0] || 'none',
    surname: session?.user?.name?.split(' ')[1] || 'none',
    profile_image: session?.user?.image || 'none',
    email: session?.user?.email || 'none',
  });
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
            <nav className="invisible h-0 w-0 overflow-hidden xl:visible xl:ml-auto xl:h-auto xl:w-auto xl:overflow-visible">
              <ul className="align-center flex flex-row items-center gap-5 text-white">
                <li className="group relative bg-dark">
                  <Link
                    href="/about-us"
                    className="menuTitleMob relative z-40 inline-block rounded px-3 py-1 ring-white group-hover:ring-2"
                  >
                    Про нас
                  </Link>
                  <ul className="invisible absolute top-full z-30 flex flex-col gap-3 rounded-b bg-dark pb-6 pr-3 pt-2 duration-300 group-hover:visible">
                    {menuItemsCat &&
                      menuItemsCat.map(item => (
                        <li key={item.title} className="first:pt-4">
                          <Link
                            href={item.route}
                            className="menuTitleMob inline-block w-full whitespace-nowrap border-b border-solid border-white px-2 py-1"
                          >
                            {item.title}
                          </Link>
                        </li>
                      ))}
                  </ul>
                </li>
                <li>
                  <Link
                    href="/about-us/contacts"
                    className="menuTitleMob rounded px-3 py-1 ring-white hover:ring-2"
                  >
                    Контакти
                  </Link>
                </li>
                <li className="ml-[300px]">
                  {session?.user?.name ? (
                    <GoogleLogOutButton name={session.user.name} />
                  ) : (
                    <GoogleSignInButton />
                  )}
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
                <Link
                  href={item.route}
                  className="rounded px-4 py-2 text-t20 hover:shadow-[1px_1px_5px_0px_rgba(0,_0,_0,_0.25)] duration-300"
                >
                  {item.title}
                </Link>
              </li>
            ))}
        </ul>
      </div>
    </header>
  );
};

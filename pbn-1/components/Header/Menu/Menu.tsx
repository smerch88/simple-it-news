'use client';

import Link from 'next/link';
import { useState } from 'react';

import { menuItems } from '@/data/routes';
import { menuItemsCat } from '@/data/routes';
import Burger from '@/public/header/burger.svg';
import BurgerCross from '@/public/header/burgerCross.svg';
import Logo from '@/public/header/logo.svg';
import Facebook from '@/public/socials/facebook.svg';
import LinkedIn from '@/public/socials/linkedin.svg';
import Telegram from '@/public/socials/telegram.svg';
import Twitter from '@/public/socials/twitter.svg';

export const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const setMenuOpened = () => {
    setIsOpen(true);
  };

  const setMenuClosed = () => {
    setIsOpen(false);
  };

  // TODO: find new decision for this component to make it server-side
  return (
    <>
      {/* TODO: make animation for buttons */}
      <button className="ml-auto xl:hidden" onClick={() => setMenuOpened()}>
        <Burger className="h-10 w-10" />
      </button>
      {isOpen ? (
        <div className="fixed inset-0 z-10 overflow-scroll bg-white">
          <header id="headermob" className="mb-32">
            {/* TODO:stick to top */}
            <div className="bg-dark py-3">
              <div className="container">
                <div className="flex flex-row items-center justify-between">
                  <Link href="/">
                    <Logo className="h-6 w-[106px]" />
                  </Link>
                  <button onClick={() => setMenuClosed()}>
                    <BurgerCross className="h-10 w-10" />
                  </button>
                </div>
              </div>
            </div>
            <div className="bg-white">
              <div className="container mt-3">
                <h1 className="mb-10 text-quot text-dark/50">Меню</h1>
                <nav>
                  <h2 className="mb-8 text-menuTitleMob">Категорії</h2>
                  {/* TODO: add custom data instead of mocked one + links*/}
                  <ul className="mb-12 flex flex-col gap-1 text-menuItemsMob">
                    {menuItems &&
                      menuItems.map(item => (
                        <li
                          key={item.title}
                          className="border-b border-solid border-dark/50 pb-2 pt-5"
                        >
                          <Link
                            href={item.route}
                            onClick={() => setMenuClosed()}
                          >
                            {item.title}
                          </Link>
                        </li>
                      ))}
                  </ul>
                  <h2 className="mb-8 text-menuTitleMob">Про нас</h2>
                  {/* TODO: add custom data instead of mocked one + links*/}
                  <ul className="mb-12 flex flex-col gap-1 text-menuItemsMob">
                    {menuItemsCat &&
                      menuItemsCat.map(item => (
                        <li
                          key={item.title}
                          className="border-b border-solid border-dark/50 pb-2 pt-5"
                        >
                          <Link
                            href={item.route}
                            onClick={() => setMenuClosed()}
                          >
                            {item.title}
                          </Link>
                        </li>
                      ))}
                  </ul>
                  <Link
                    href="/about-us/contacts"
                    className="text-menuTitleMob"
                    onClick={() => setMenuClosed()}
                  >
                    Контакти
                  </Link>
                </nav>
              </div>
            </div>
          </header>
          <footer
            id="footermob"
            className="fixed inset-x-0 bottom-0 mt-auto bg-dark py-3"
          >
            <div className="container flex flex-col gap-2">
              {/* TODO: add real links */}
              <ul className="flex flex-row justify-center gap-4 text-white">
                <li>
                  <Link
                    href="https://t.me/simpleitnewschannel"
                    target="blank"
                    rel="noreferrer nofollow"
                  >
                    <Telegram className="h-10 w-10" />
                  </Link>
                </li>
                <li>
                  <Link href="#" target="blank" rel="noreferrer nofollow">
                    <LinkedIn className="h-10 w-10" />
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://twitter.com/simpleitnews"
                    target="blank"
                    rel="noreferrer nofollow"
                  >
                    <Twitter className="h-10 w-10" />
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://www.facebook.com/groups/297247483170966"
                    target="blank"
                    rel="noreferrer nofollow"
                  >
                    <Facebook className="h-10 w-10" />
                  </Link>
                </li>
              </ul>
              <div className="flex flex-col text-center text-quot text-white">
                <Link href="/">Simple IT News</Link>
                <small>
                  Copyright © {new Date().getFullYear()} Simple IT News
                </small>
              </div>
            </div>
          </footer>
        </div>
      ) : null}
    </>
  );
};

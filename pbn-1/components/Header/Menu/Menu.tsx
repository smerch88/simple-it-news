'use client';

import Link from 'next/link';
import { useState } from 'react';

import Facebook from '@/public/footer/socials/facebook.svg';
import LinkedIn from '@/public/footer/socials/linkedin.svg';
import Telegram from '@/public/footer/socials/telegram.svg';
import X from '@/public/footer/socials/x.svg';
import Burger from '@/public/header/burger.svg';
import BurgerCross from '@/public/header/burgerCross.svg';
import Logo from '@/public/header/logo.svg';

const menuItems = [
  { title: 'Новини', route: '/news' },
  { title: 'Статті', route: '/articles' },
  { title: 'Подкасти', route: '/podcasts' },
  { title: 'Пости', route: '/posts' },
  { title: 'Автори', route: '/authors' },
  { title: "Інтерв'ю", route: '/interviews' },
];

const menuItemsCat = [
  { title: 'Ідея створення', route: '/idea' },
  { title: 'Наша команда', route: '/team' },
  { title: 'Політика конфіденційності', route: '/policy' },
  { title: 'FAQ', route: '/faq' },
];

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
      <button className="xl:hidden" onClick={() => setMenuOpened()}>
        <Burger className="h-10 w-10" />
      </button>
      {isOpen ? (
        <div className="fixed inset-0 z-10 overflow-scroll bg-white">
          <div id="headermob" className="mb-32">
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
                          <Link href={item.route}>{item.title}</Link>
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
                          <Link href={item.route}>{item.title}</Link>
                        </li>
                      ))}
                  </ul>
                </nav>
              </div>
            </div>
          </div>
          <div id="footermob" className="mt-auto bg-dark py-3 fixed bottom-0 inset-x-0">
            <div className="container flex flex-col gap-2">
              {/* TODO: add real links */}
              <ul className="flex flex-row justify-center gap-4">
                <li>
                  <Link href="#" target="blank" rel="noreferrer nofollow">
                    <Telegram className="h-10 w-10" />
                  </Link>
                </li>
                <li>
                  <Link href="#" target="blank" rel="noreferrer nofollow">
                    <LinkedIn className="h-10 w-10" />
                  </Link>
                </li>
                <li>
                  <Link href="#" target="blank" rel="noreferrer nofollow">
                    <X className="h-10 w-10" />
                  </Link>
                </li>
                <li>
                  <Link href="#" target="blank" rel="noreferrer nofollow">
                    <Facebook className="h-10 w-10" />
                  </Link>
                </li>
              </ul>
              <div className="flex flex-col text-center text-quot text-white">
                <Link href="/">Simple IT News</Link>
                <span>
                  Copyright © {new Date().getFullYear()} Simple IT News
                </span>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

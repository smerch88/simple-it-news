'use client';

import { hasCookie, setCookie } from 'cookies-next';
import Link from 'next/link';
import React from 'react';

const CookieConsent = () => {
  const [showConsent, setShowConsent] = React.useState(true);

  React.useEffect(() => {
    setShowConsent(hasCookie('localConsent'));
  }, []);

  const acceptCookie = () => {
    setShowConsent(true);
    setCookie('localConsent', 'true', {});
  };

  const resolveCookie = () => {
    setShowConsent(true);
  };

  if (showConsent) {
    return null;
  }

  return (
    <div className="fixed inset-0 flex items-end justify-center bg-black bg-opacity-20 mdOnly:items-center">
      <div className=" flex flex-col items-center justify-between gap-y-6 bg-white px-4 py-10 md:w-[494px] md:rounded md:px-10 xl:w-[1204px] xl:flex-row xl:items-start xl:justify-start xl:gap-x-[196px] xl:gap-y-0 xl:py-6">
        <p className="font-playfair text-menuTitleTab md:text-t32  xl:text-t40">
          Cookie
        </p>
        <div className="text-center text-t14 md:text-t16 xl:w-[727px] xl:text-left xl:text-t18">
          <p className="mb-3">Цей сайт використовує файли cookie</p>
          <p className="mb-6 xl:mb-4">
            Деякі з цих файлів cookie є необхідними, а інші допомагають нам
            покращити ваш досвід, надаючи інформацію про те, як ви
            використовуєте сайт. Дізнатись
            <Link href="#" className="text-blue hover:text-blue_hover">
              більше
            </Link>
          </p>

          <ul className="flex flex-col gap-y-4 xl:flex-row xl:gap-x-6 xl:gap-y-0">
            <li>
              <button
                className="btn_black w-full xl:w-[184px]"
                onClick={() => acceptCookie()}
              >
                Прийняти
              </button>
            </li>
            <li>
              <button
                className="btn_white w-full  xl:w-[184px]"
                onClick={() => resolveCookie()}
              >
                Не приймати
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;

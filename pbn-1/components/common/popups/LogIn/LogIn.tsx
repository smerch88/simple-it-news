'use client';

import { signIn } from 'next-auth/react';

export const LogIn = () => {
  const handleClick = () => {
    signIn('google');
  };
  return (
    <div className="visible fixed inset-0 z-50 flex items-center justify-center bg-black/20">
      <div className="flex flex-col items-center justify-between gap-y-6 bg-white px-4 py-10 md:w-[494px] md:rounded md:px-10 xl:w-[1204px] xl:flex-row xl:items-start xl:justify-start xl:gap-x-[196px] xl:gap-y-0 xl:py-6">
        <p className="font-playfair text-menuTitleTab md:text-t32  xl:text-t40">
          Cookie
        </p>
        <div className="text-center text-t14 md:text-t16 xl:w-[727px] xl:text-left xl:text-t18">
          <button
            className="btn_black w-full xl:w-[184px]"
            onClick={handleClick}
          >
            Увійти через Google
          </button>
        </div>
      </div>
    </div>
  );
};

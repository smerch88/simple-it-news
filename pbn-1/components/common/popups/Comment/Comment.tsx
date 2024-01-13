'use client';
import { signIn } from 'next-auth/react';

import Cross from '@/public/notsorted/cross.svg';
import Google from '@/public/socials/google.svg';

export const Comment = ({ handleClose }: { handleClose: () => void }) => {
  const handleClick = () => {
    signIn('google');
  };
  return (
    <div className="visible fixed inset-0 z-50 flex items-center justify-center bg-black/20">
      <div className="flex flex-col items-center justify-between gap-y-6 bg-white px-10 py-10 text-center md:w-[494px] md:rounded md:px-10">
        <p className="tex-t20 font-playfair text-dark md:text-t32">
          Увійдіть або створіть обліковий запис
        </p>
        <p className="text-t14 text-dark md:text-t16">
          Щоб зберігати статті і коментувати, вам потрібно увійти, або створіть
          обліковий запис
        </p>
        <button
          className="flex w-full flex-row items-center justify-center gap-3 rounded border border-solid border-dark bg-white px-5 py-2 text-t24 md:text-t18"
          onClick={handleClick}
        >
          <Google className="h-8 w-8" />
          <span className="text-dark"></span>
        </button>
        <button onClick={handleClose} className="text-dark/50">
          <Cross className="h-10 w-10" />
        </button>
      </div>
    </div>
  );
};

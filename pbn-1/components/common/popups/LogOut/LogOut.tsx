'use client';
import { signOut } from 'next-auth/react';

export const LogOut = ({
  handleClose,
  name,
}: {
  handleClose: () => void;
  name: string;
}) => {
  const handleClick = () => {
    signOut();
  };
  return (
    <div className="visible fixed inset-0 z-50 flex bg-black/20">
      <div className="absolute right-36 top-24 flex flex-col items-center justify-between gap-y-6 bg-white px-10 py-10 text-center md:w-[494px] md:rounded md:px-10">
        <p className="tex-t20 font-playfair text-dark md:text-t32">
          {name || 'User'}
          {','}
        </p>
        <p className="text-t14 text-dark md:text-t16">
          Ви дійсно хочете вийти?
        </p>
        <button onClick={handleClose} className="btn_black w-full">
          Ні
        </button>
        <button className="btn_white w-full" onClick={handleClick}>
          Так
        </button>
      </div>
    </div>
  );
};

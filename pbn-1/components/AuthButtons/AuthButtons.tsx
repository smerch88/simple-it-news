'use client';

import { useState } from 'react';

import Person from '@/public/auth/person.svg';

import { LogIn } from '../common/popups/LogIn';
import { LogOut } from '../common/popups/LogOut';

export function GoogleSignInButton() {
  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = () => {
    setIsOpen(true);
  };
  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      <button
        onClick={handleOpen}
        className="rounded border border-solid border-dark bg-white px-6 py-3 text-buttonDesk text-dark"
      >
        Підписатись
      </button>
      {isOpen && <LogIn handleClose={handleClose} />}
    </>
  );
}

export function GoogleLogOutButton({ name }: { name: string }) {
  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = () => {
    setIsOpen(true);
  };
  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      <button
        onClick={handleOpen}
        className="relative flex rounded border border-solid border-white bg-dark px-6 py-3 text-buttonDesk text-white"
      >
        <Person className="h-6 w-6" />
        <span className="ml-2">{name || 'Log Out'}</span>
      </button>
      {isOpen && <LogOut handleClose={handleClose} name={name} />}
    </>
  );
}

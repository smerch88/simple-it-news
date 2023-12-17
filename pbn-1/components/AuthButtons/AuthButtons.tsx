'use client';

import { signIn, signOut } from 'next-auth/react';

import Person from '@/public/auth/person.svg';

export function GoogleSignInButton() {
  const handleClick = () => {
    signIn('google');
  };

  return (
    <button
      onClick={handleClick}
      className="rounded border border-solid border-dark bg-white px-6 py-3 text-buttonDesk text-dark"
    >
      Підписатись
    </button>
  );
}

export function GoogleLogOutButton({ name }: { name: string }) {
  const handleClick = () => {
    signOut();
  };

  return (
    <button
      onClick={handleClick}
      className="flex rounded border border-solid border-white bg-dark px-6 py-3 text-buttonDesk text-white"
    >
      <Person className="h-6 w-6" />
      <span className="ml-2">{name || 'Log Out'}</span>
    </button>
  );
}

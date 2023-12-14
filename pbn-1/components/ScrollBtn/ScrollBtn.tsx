'use client';

import { FC } from 'react';
import { Link as Scroll } from 'react-scroll';

import { useScrollVisibility } from '@/hooks/useScrollVisibility';
import ScrollBtnImg from '@/public/notsorted/arrow.svg';

import { ScrollBtnProps } from './ScrollBtn.props';

export const ScrollBtn: FC<ScrollBtnProps> = () => {
  const isVisible = useScrollVisibility('footer');

  return (
    <Scroll
      to="header"
      href="header"
      smooth={true}
      duration={100}
      aria-label="Повернутись догори"
      className={`${
        !isVisible ? 'opacity-0' : 'opacity-1'
      } fixed bottom-28 right-10 flex h-10 w-10 items-center justify-center rounded bg-black transition-opacity duration-300 md:right-[calc((100vw_-_688px)_*_0.5)] xl:right-[calc((100vw_-_1204px)_*_0.5)]`}
    >
      <ScrollBtnImg className="h-10 w-10 -rotate-90 fill-white" />
    </Scroll>
  );
};

'use client';
// import { useEffect, useRef, useState } from 'react';

// import AiOutlineVerticalLeft from '@/public/AiOutlineVerticalLeft.svg';
// import AiOutlineVerticalRight from '@/public/AiOutlineVerticalRight.svg';
import { SliderCard } from '../SliderCard';

// Data

const data = [
  {
    id: 1,
    category: 'Новини',
    imgSrc: '/card/card_mobile.png',
    title: 'Курси IT з Працевлаштуванням: чому не всі стають айтішниками?',
    link: '/',
  },
  {
    id: 2,
    category: 'Новини',
    imgSrc: '/card/card_mobile2.png',
    title: 'Курси IT з Працевлаштуванням: чому не всі стають айтішниками?',
    link: '/',
  },
  {
    id: 3,
    category: 'Новини',
    imgSrc: '/card/card_mobile3.png',
    title: 'Курси IT з Працевлаштуванням: чому не всі стають айтішниками?',
    link: '/',
  },
  {
    id: 4,
    category: 'Новини',
    imgSrc: '/card/card_mobile.png',
    title: 'Курси IT з Працевлаштуванням: чому не всі стають айтішниками?',
    link: '/',
  },
];

// const featuredProducts = [
//   '/card_mobile.png',
//   '/card_mobile.png',
//   '/card_mobile.png',
// ];

export default function Carousel() {
  return (
    <div className="inline-flex w-full flex-nowrap overflow-hidden">
      <ul className="flex animate-infinite-scroll items-center justify-center md:justify-start [&_img]:max-w-none [&_li]:mx-8">
        {data.map(slider => {
          return <SliderCard slider={slider} key={slider.id} />;
        })}
      </ul>
      <ul
        className="flex animate-infinite-scroll items-center justify-center md:justify-start [&_img]:max-w-none [&_li]:mx-8"
        aria-hidden="true"
      >
        {data.map(slider => {
          return <SliderCard slider={slider} key={slider.id} />;
        })}
      </ul>
    </div>
  );
}

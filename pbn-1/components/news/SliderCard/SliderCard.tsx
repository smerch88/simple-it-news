import Image from 'next/image';
import Link from 'next/link';

import defaultImg from '@/public/card/card_mobile.png';

import { SliderProps } from './SliderCard.props';

export const SliderCard = ({ slider }: SliderProps) => {
  return (
    <li className="carousel-item  min-w-[260px] rounded border-[0.5px] border-lightgrey px-2 py-3">
      <Link href={slider.link} className="">
        <Image
          src={slider.imgSrc ? slider.imgSrc : defaultImg}
          alt=""
          width={244}
          height={150}
          className="mb-2 h-auto w-auto"
        />
        <p className="md:text-t16 xl:text-t18 font-lato mb-1 text-t14 text-red">
          {slider.category}
        </p>
        <h3 className="text-lg md:text-2xl">{slider.title}</h3>
      </Link>
    </li>
  );
};

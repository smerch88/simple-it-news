import Image from 'next/image';
import Link from 'next/link';

import defaultImg from '@/public/card/card_mobile.png';

import { SliderProps } from './SliderCard.props';

export const SliderCard = ({ slider }: SliderProps) => {
  return (
    <li className="carousel-item w-[260px] rounded border-[0.5px] border-lightgrey px-2 py-3">
      <Link href={slider.link} className="">
        <Image
          src={slider.imgSrc ? slider.imgSrc : defaultImg}
          alt=""
          width={244}
          height={150}
          className="mb-2 "
        />
        <p className="mb-1 text-sm text-red">{slider.category}</p>
        <h3 className="">{slider.title}</h3>
      </Link>
    </li>
  );
};

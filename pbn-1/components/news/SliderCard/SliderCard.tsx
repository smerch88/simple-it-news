import Image from 'next/image';
import Link from 'next/link';

import defaultImg from '@/public/card/card_mobile.png';
import { getBase64 } from '@/utils/getBase64';
import { shimmer } from '@/utils/shimmer';

import { SliderProps } from './SliderCard.props';

export const SliderCard = ({
  slider,
  custom_category,
}: {
  slider: SliderProps;
  custom_category: string;
}) => {
  return (
    <li className="carousel-item h-[280px] w-[260px] rounded border-[0.5px] border-lightgrey px-2 py-3 md:h-[310px] md:w-[365px] xl:h-[390px] xl:w-[388px]">
      <Link href={'/news/' + slider.custom_url} className="">
        <div className="mb-2 h-[150px] object-cover xl:h-[200px]">
          <Image
            src={slider.image_url ? slider.image_url : defaultImg}
            alt=""
            width={244}
            height={150}
            className="h-full  w-full object-cover"
            placeholder="blur"
            blurDataURL={`data:image/svg+xml;base64,${getBase64(
              shimmer(700, 475),
            )}`}
          />
        </div>

        <p className="mb-1 font-lato text-t14 text-red md:text-t16 xl:text-t18">
          {custom_category}
        </p>
        <h3 className="line-clamp-3 text-lg md:text-2xl">{slider.title}</h3>
      </Link>
    </li>
  );
};

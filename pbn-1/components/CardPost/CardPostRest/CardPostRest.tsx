import cn from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

import { StarTime } from '@/components/common/StartTime';
import NotFound from '@/public/img/img.png';

import { CmsPostProps } from './CardPostRest.props';

export const CardPostRest: FC<CmsPostProps> = ({
  article,
  type = 'main',
  leadsTo = 'news',
}) => {
  const publishedDate = new Date(article.pub_date);

  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
  };

  const formattedDate = publishedDate.toLocaleDateString('uk-UA', options);

  const HeadingTag = type === 'main' ? 'h3' : 'h2';

  return (
    <li
      className={cn(
        type === 'main'
          ? 'flex xl:[&:not(:nth-child(3n+1))]:w-[calc(50%-16px)]'
          : '',
      )}
    >
      <article className="relative overflow-hidden border-b border-dark">
        {article.image_url && (
          <div className="relative h-[176px] w-full md:h-[296px] xl:h-[242px]">
            <Image
              src={article.image_url || NotFound}
              fill
              // Find how to manage sizes of image
              className="rounded object-contain object-left xl:object-cover"
              // TODO:change to alt from back
              alt={'Abstract illustration of ' + article.title}
              sizes="100vw"
            />
          </div>
        )}
        <b className="mb-2 text-menuItemsTab14 text-red md:text-t16 xl:text-t18">
          {leadsTo === 'news' ? 'Новини' : 'Пости'}
        </b>
        <StarTime
          time={article.time_to_read}
          rating={article.rating_avg}
          className="py-4"
        />
        <Link
          href={`/${leadsTo}/${article.custom_url}`}
          rel="canonical"
          className="group after:absolute after:inset-0"
        >
          <HeadingTag className="mb-2 font-playfair text-menuTitleMob text-dark group-hover:text-blue_hover md:mb-3 md:text-t24 xl:text-t24">
            {article.title}
          </HeadingTag>
        </Link>
        <p className="xl:text-18 mb-2 line-clamp-3 text-t14 text-grey md:mb-3 md:text-t16">
          {article.description}
        </p>

        <div className="mb-2 flex flex-col text-gray-400/80">
          <Link
            href={'/authors/' + article?.author?.route}
            rel="canonical"
            className="mb-2 text-t14 text-blue underline underline-offset-2 hover:text-blue_hover md:text-t16 xl:text-t18"
          >
            {article?.author?.name}
          </Link>
          <time className="text-base italic text-grey">{formattedDate}</time>
        </div>
      </article>
    </li>
  );
};

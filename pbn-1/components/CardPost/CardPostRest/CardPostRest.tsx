import cn from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

import { StarTime } from '@/components/common/StartTime';
import NoImg from '@/public/noimg.png';

import { CmsPostProps } from './CardPostRest.props';

export const CardPostRest: FC<CmsPostProps> = ({ article, type = 'main' }) => {
  const publishedDate = new Date(article.pub_date);

  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
  };

  const formattedDate = publishedDate.toLocaleDateString('uk-UA', options);

  const Tag = type === 'main' ? 'h3' : 'h2';

  return (
    <li
      className={cn(
        type === 'main'
          ? 'flex xl:[&:not(:nth-child(3n+1))]:w-[calc(50%-16px)]'
          : '',
      )}
    >
      <article className="overflow-hidden border-b border-dark ">
        {article.image_url && (
          <div className="relative mb-4 h-[176px] w-full md:h-[296px] xl:h-[242px]">
            <Image
              src={article.image_url || NoImg}
              fill
              // Find how to manage sizes of image
              className="rounded object-contain object-left xl:object-cover"
              // TODO:change to alt from back
              alt={article.title}
            />
          </div>
        )}
        <span className="text-menuItemsTab14 text-red">Новини</span>
        <StarTime time={article.time_to_read} rating={article.rating} />
        {/* TODO: add real route */}
        <Link href={`/news/${article.custom_url}`} rel="canonical">
          <Tag className="md:menuTitleTab mb-2 font-playfair text-menuTitleMob text-dark md:mb-3 xl:text-t24 xl:font-normal">
            {article.title}
          </Tag>
        </Link>
        <p className="md:t-16 xl:t-18 mb-2 line-clamp-3 text-t14 text-grey md:mb-3">
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

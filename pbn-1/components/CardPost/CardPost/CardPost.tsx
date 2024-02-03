// TODO: make 1 component instead of 2, it was made before as it is due to some circumstances
import cn from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

import { StarTime } from '@/components/common/StartTime';
import NotFound from '@/public/img/img.png';

import { CmsPostProps } from './CardPost.props';

export const CardPost: FC<CmsPostProps> = ({ article, type = 'main' }) => {
  const HeadingTag = type === 'main' ? 'h3' : 'h2';

  const publishedDate = new Date(article._publishedAt);

  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
  };

  const formattedDate = publishedDate.toLocaleDateString('uk-UA', options);

  return (
    <li
      className={cn(
        type === 'main'
          ? 'flex xl:[&:not(:nth-child(3n+1))]:w-[calc(50%-16px)]'
          : '',
      )}
    >
      <article className="relative overflow-hidden border-b border-dark">
        {article.articlepicture.url && (
          <div className="relative h-[176px] w-full md:h-[296px] xl:h-[242px]">
            <Image
              src={article.articlepicture.url || NotFound}
              fill
              className="rounded object-cover"
              alt={'Abstract illustration of ' + article.articlepicture.alt}
              sizes="100vw"
            />
          </div>
        )}
        <b className="mb-2 text-menuItemsTab14 text-blue md:text-t16 xl:text-t18">
          Пости
        </b>

        <StarTime
          time={Math.ceil(article.shortdescription.length / 45)}
          rating={5}
          className="py-4"
        />
        <Link
          href={`/posts/${article.route}`}
          rel="canonical"
          className="group after:absolute after:inset-0"
        >
          <HeadingTag className="mb-2 font-playfair text-menuTitleMob text-dark group-hover:text-blue_hover md:mb-3 md:text-t24 xl:text-t24">
            {article.title}
          </HeadingTag>
        </Link>
        <p className="xl:text-18 mb-2 line-clamp-3 text-t14 text-grey md:mb-3 md:text-t16">
          {article.shortdescription}
        </p>
        <div className="mb-2 flex flex-col text-gray-400/80">
          <Link
            href={'/authors/' + article.author.route}
            rel="canonical"
            className="mb-2 text-t14 text-blue underline underline-offset-2 hover:text-blue_hover md:text-t16 xl:text-t18"
          >
            {article.author.authorname}
          </Link>
          <time className="text-base italic text-grey">{formattedDate}</time>
        </div>
      </article>
    </li>
  );
};

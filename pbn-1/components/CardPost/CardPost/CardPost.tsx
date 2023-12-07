'use client';

import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

import { StarTime } from '@/components/common/StartTime';
import { Playfair_Display } from 'next/font/google';
import { ArticleTypeProps } from './CardPost.props';

const playfairDisplay = Playfair_Display({ subsets: ['latin'] });

export const CardPost: FC<ArticleTypeProps> = ({ article }) => {
  const publishedDate = new Date(article.update_date);

  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
  };

  const formattedDate = publishedDate.toLocaleDateString('uk-UA', options);

  // const handleBookMark = (id: string) => {
  //   console.log(id);
  // };

  return (
    <li className="flex xl:[&:not(:nth-child(3n+1))]:w-[calc(50%-16px)]">
      <article className="flex flex-col overflow-hidden border-b border-dark">
        {article.image_url && (
          <div className="relative mb-4 h-[176px] w-full md:h-[296px] xl:h-[242px]">
            <Image
              src={article.image_url}
              fill
              className="rounded object-cover"
              alt={''}
            />
          </div>
        )}
        <div className="flex flex-shrink-0 flex-grow flex-col">
          <p className="text-base font-normal text-red">Новини</p>
          <StarTime time={article.time_to_read} rating={article.rating} />
          <Link href={`/posts/${article.route}`} rel="canonical">
            <div
              className={`${playfairDisplay.className} mb-3 text-2xl font-bold text-dark`}
            >
              {article.title}
            </div>
          </Link>
          <p className="mb-4 text-grey">{article.description}</p>
        </div>
        <div className="mb-2 flex flex-col text-gray-400/80">
          <Link
            href={'/authors/' + article.author.route}
            rel="noopener noreferrer nofollow"
            target="blank"
            className="mb-5 text-base font-normal text-blue underline decoration-solid"
          >
            {article.author.name}
          </Link>
          <time className="text-base italic text-grey">{formattedDate}</time>
        </div>
      </article>
    </li>
  );
};

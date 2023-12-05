import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

// import BookMark from '@/public/card/bookmark.svg';
import Clock from '@/public/card/clock.svg';
import Star from '@/public/card/star.svg';

import { CmsPostProps } from './CardPost.props';

export const CardPost: FC<CmsPostProps> = ({ article }) => {
  const publishedDate = new Date(article._publishedAt);

  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
  };

  const formattedDate = publishedDate.toLocaleDateString('uk-UA', options);

  // const handleBookMark = (id: string) => {
  //   console.log('id', id);
  // };

  return (
    <li className="flex xl:[&:not(:nth-child(3n+1))]:w-[calc(50%-16px)]">
      <article className="overflow-hidden border-b border-dark ">
        {article.articlepicture.url && (
          <div className="relative mb-4 h-[176px] w-full md:h-[296px] xl:h-[242px]">
            <Image
              src={article.articlepicture.url}
              fill
              className="rounded object-cover"
              alt={article.articlepicture.alt}
            />
          </div>
        )}
        <p className="text-base font-normal text-red">Новини</p>
        <div className="flex w-full flex-row items-center justify-between">
          <div className="flex gap-3">
            <div className="flex gap-1 py-3">
              <Clock className="h-4 w-4" />
              <span className="text-xs font-normal text-grey">15 хв.</span>
            </div>
            <div className="flex gap-1 py-3">
              <Star className="h-4 w-4" />
              <span className="text-xs font-normal text-grey">5/5</span>
            </div>
          </div>
          {/* <div className="flex">
            <button type="button" onClick={() => handleBookMark(article.id)}>
              <BookMark className="h-10 w-10" />
            </button>
          </div> */}
        </div>
        <Link href={`/posts/${article.route}`} rel="canonical">
          <h3 className="mb-3 text-2xl font-bold text-dark">{article.title}</h3>
        </Link>
        <p className="mb-4 text-grey">{article.shortdescription}</p>

        <div className="mb-2 flex flex-col text-gray-400/80">
          <Link
            href={'/authors/' + article.author.route}
            rel="noopener noreferrer nofollow"
            target="blank"
            className="mb-5 text-base font-normal text-blue underline decoration-solid"
          >
            {article.author.authorname}
          </Link>
          <time className="text-base italic text-grey">{formattedDate}</time>
        </div>
      </article>
    </li>
  );
};

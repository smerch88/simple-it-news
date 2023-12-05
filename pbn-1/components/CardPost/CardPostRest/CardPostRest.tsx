import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

import { StarTime } from '@/components/common/StartTime';

import { CmsPostProps } from './CardPostRest.props';

export const CardPostRest: FC<CmsPostProps> = ({ article }) => {
  const publishedDate = new Date(article.pub_date);

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
        {article.image_url && (
          <div className="relative mb-4 h-[176px] w-full md:h-[296px] xl:h-[242px]">
            <Image
              src={article.image_url}
              fill
              className="rounded object-cover"
              // TODO:change to alt from back
              alt={article.title}
            />
          </div>
        )}
        <p className="text-base font-normal text-red">Новини</p>
        <StarTime time={article.time_to_read} rating={article.rating} />
        {/* TODO: add real route */}
        <Link href={`/posts/${1}`} rel="canonical">
          <h3 className="mb-3 text-2xl font-bold text-dark">{article.title}</h3>
        </Link>
        <p className="mb-4 text-grey">{article.description}</p>

        <div className="mb-2 flex flex-col text-gray-400/80">
          <Link
            href={'/authors/' + article?.author?.route}
            rel="noopener noreferrer nofollow"
            target="blank"
            className="mb-5 text-base font-normal text-blue underline decoration-solid"
          >
            {article?.author?.authorname}
          </Link>
          <time className="text-base italic text-grey">{formattedDate}</time>
        </div>
      </article>
    </li>
  );
};

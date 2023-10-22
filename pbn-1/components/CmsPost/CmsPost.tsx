import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

import { CmsPostProps } from './CmsPost.props';

export const CmsPost: FC<CmsPostProps> = ({ article }) => {
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
    <li>
      <article className="overflow-hidden">
        <Link href={`/news/${article.id}`} rel="canonical">
          <h3 className="text-xl font-bold mb-2">{article.title}</h3>
        </Link>
        <p className="mb-2">{article.shortdescription}</p>
        <div className="flex justify-between text-gray-400/80 mb-2">
          {/* <Link
            href={article.url}
            rel="noopener noreferrer nofollow"
            target="blank"
          > */}
          автор: {article.author.authorname}
          {/* </Link> */}
          <time>{formattedDate}</time>
        </div>
        <div className="relative w-full h-40 mb-2">
          <Image
            src={article.articlepicture.url}
            fill
            className="object-contain"
            alt={article.articlepicture.alt}
          />
        </div>
      </article>
    </li>
  );
};

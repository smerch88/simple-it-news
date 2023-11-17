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
        {article.articlepicture.url && (
          <div className="relative w-full mb-10 sm:h-40 md:h-80">
            <Image
              src={article.articlepicture.url}
              fill
              className="object-cover rounded"
              alt={article.articlepicture.alt}
            />
          </div>
        )}
        <Link href={`/posts/${article.route}`} rel="canonical">
          <h3 className="text-xl font-bold mb-2">{article.title}</h3>
        </Link>
        <p className="mb-2">{article.shortdescription}</p>
        <div className="flex justify-between text-gray-400/80 mb-2 flex-col md:flex-row">
          <Link
            href={'/authors/' + article.author.route}
            rel="noopener noreferrer nofollow"
            target="blank"
          >
            автор: {article.author.authorname}
          </Link>
          <time>{formattedDate}</time>
        </div>
      </article>
    </li>
  );
};

import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

import { PostProps } from './Post.props';

export const Post: FC<PostProps> = ({ article }) => {
  if (article.title.length < 10) {
    return null;
  }

  const cleanTitle = article.title
    .replace(/[^a-zA-Z0-9\s]/g, '')
    .replace(/\s+/g, '-')
    .toLowerCase();

  const publishedDate = new Date(article.publishedAt);

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
        <Link href={`/post/${encodeURIComponent(cleanTitle)}`}>
          <h3 className="text-xl font-bold mb-2">{article.title}</h3>
        </Link>
        <p className="mb-2">{article.description}</p>
        <div className="flex justify-between text-gray-400/80 mb-2">
          <Link
            href={article.url}
            rel="noopener noreferrer nofollow"
            target="blank"
          >
            джерело
          </Link>
          <time>{formattedDate}</time>
        </div>
        {article?.urlToImage && article.urlToImage.startsWith('https://') && (
          <div className="relative w-full h-40 mb-2">
            <Image
              src={article.urlToImage}
              fill
              className="object-contain"
              alt={article.title + 'Image'}
            />
          </div>
        )}
      </article>
    </li>
  );
};

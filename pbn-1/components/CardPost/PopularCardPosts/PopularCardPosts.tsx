'use client';

import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

import { ArticleTypeProps } from './PopularCardPosts.props';

export const PopularCardPosts: FC<ArticleTypeProps> = ({ articles }) => {
  return (
    <>
      <div className="inline-flex w-full flex-nowrap overflow-hidden">
        <ul className="mb-2 flex items-center justify-center gap-6 md:justify-start xl:flex-wrap notXl:animate-infinite-scroll [&_img]:max-w-none">
          {articles?.map(article => (
            <li
              key={article.id}
              className="min-w-[260px] rounded border border-lightgrey px-4 py-5 xl:w-full notXl:h-full"
            >
              <div className="relative mb-2 hidden h-40 w-full smOnly:flex">
                <Image
                  src={article.image_url}
                  fill
                  className="rounded object-cover"
                  alt={''}
                />
              </div>
              <div className="mb-1 text-lg font-normal tracking-wide text-red">
                Новини
              </div>
              <Link href={`/posts/${article.route}`} rel="canonical">
                <h3 className="mb-2 text-2xl font-normal">{article.title}</h3>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

'use client';

import { FC } from 'react';
import { CmsPostProps } from './PopularCardPosts.props';
import { CmsArticleType } from '@/types';
import Image from 'next/image';
import Link from 'next/link';

export const PopularCardPosts: FC<CmsPostProps> = ({ articles }) => {
  return (
    <>
      <ul className="mb-2 flex flex-wrap gap-6">
        {articles?.map((article: CmsArticleType) => (
          <li
            key={article.id}
            className="rounded border border-lightgrey px-4 py-5"
          >
            <div className="relative mb-2 hidden h-40 w-full smOnly:flex">
              <Image
                src={article.articlepicture.url}
                fill
                className="rounded object-cover"
                alt={article.articlepicture.alt}
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
    </>
  );
};

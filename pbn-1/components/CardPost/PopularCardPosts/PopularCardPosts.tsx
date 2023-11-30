'use client';

import { FC } from 'react';
import { CmsPostProps } from './PopularCardPosts.props';
import { CmsArticleType } from '@/types';
import useMediaQuery from '@/hooks/useMediaQuery';
import Image from 'next/image';
import Link from 'next/link';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

export const PopularCardPosts: FC<CmsPostProps> = ({ articles }) => {
  const isSm = useMediaQuery('(max-width: 767.98px)');
  const isMd = useMediaQuery('(min-width:768px) and (max-width: 1199.98px)');
  const isXl = useMediaQuery('(min-width: 1200px)');

  return (
    <>
      {isSm && (
        <Swiper
          slidesPerView={1.3}
          spaceBetween={16}
          pagination={{
            clickable: true,
          }}
          className="h-full w-full"
        >
          {articles?.map((article: CmsArticleType) => (
            <SwiperSlide
              key={article.id}
              className="overflow-hidden rounded border border-lightgrey px-2 py-5"
            >
              <div className="relative mb-2 h-40 w-full">
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
                <h3 className="mb-2 text-lg font-normal">{article.title}</h3>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      )}

      {isMd && (
        <Swiper
          slidesPerView={2.3}
          spaceBetween={16}
          pagination={{
            clickable: true,
          }}
          className="h-full w-full"
        >
          {articles?.map((article: CmsArticleType) => (
            <SwiperSlide
              key={article.id}
              className="overflow-hidden rounded border border-lightgrey px-2 py-5"
            >
              <div className="mb-1 text-lg font-normal tracking-wide text-red">
                Новини
              </div>
              <Link href={`/posts/${article.route}`} rel="canonical">
                <h3 className="mb-2 text-lg font-normal">{article.title}</h3>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      )}

      {isXl && (
        <ul className="mb-2 flex flex-wrap gap-6">
          {articles?.map((article: CmsArticleType) => (
            <li
              key={article.id}
              className="rounded border border-lightgrey px-4 py-5"
            >
              <div className="mb-1 text-lg font-normal tracking-wide text-red">
                Новини
              </div>
              <Link href={`/posts/${article.route}`} rel="canonical">
                <h3 className="mb-2 text-2xl font-normal">{article.title}</h3>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

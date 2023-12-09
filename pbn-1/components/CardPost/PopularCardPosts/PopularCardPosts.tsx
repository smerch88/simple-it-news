import Link from 'next/link';
import { FC } from 'react';

import { CmsArticleType } from '@/types';

import { CmsPostProps } from './PopularCardPosts.props';

export const PopularCardPosts: FC<CmsPostProps> = ({ articles }) => {
  return (
    <>
      {/* {isSm && (
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
      )} */}

      {/* {isMd && (
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
      )} */}

      <ul className="mb-2 flex-wrap gap-6 flex">
        {articles?.slice(0, 4).map((article: CmsArticleType) => (
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
    </>
  );
};

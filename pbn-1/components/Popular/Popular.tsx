'use client';

import { PopularPost } from './PopularPost';
import { CmsArticleType } from '@/types';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

export const Popular = ({ popularPosts }) => {
  return (
    <section>
      <h2 className="sm:text-sm md:text-base text-white mb-6 px-2 py-3 rounded bg-black ">
        Популярні новини
      </h2>
      <div className="mb-2">
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            320: { slidesPerView: 1.3, spaceBetween: 16 },
            834: {
              slidesPerView: 2.3,
              spaceBetween: 16,
            },
          }}
        >
          {popularPosts?.map((article: CmsArticleType) => (
            <SwiperSlide
              key={article.id}
              className="overflow-hidden border border-current px-2 py-5 rounded"
            >
              <PopularPost article={article} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

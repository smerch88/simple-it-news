//import { gql } from '@apollo/client';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

import { Playfair_Display } from 'next/font/google';

import { CardPost } from '@/components/CardPost/CardPost';
import { PopularCardPosts } from '@/components/CardPost/PopularCardPosts/PopularCardPosts';
import { ArticleType } from '@/types';
// import { getClient } from '@/utils/apollo-client';

const playfairDisplay = Playfair_Display({ subsets: ['latin'] });

// const query = gql`
//   {
//     allNewsposts {
//       id
//       title
//       _status
//       _firstPublishedAt
//       shortdescription
//       articlepicture {
//         width
//         url
//         height
//         alt
//       }
//       _createdAt
//       _publishedAt
//       author {
//         authorname
//         route
//       }
//       route
//       tags
//     }
//   }
// `;

export async function generateMetadata(): Promise<Metadata> {
  return {
    openGraph: {
      title: 'Simple IT News',
      description: 'Просто ІТ новини. Читайте новини зі світу АйТі.',
      url: process.env.DB_HOST,
      siteName: 'Simple IT News',
      images: [
        {
          url: `/favicon/android-chrome-512x512.png`,
          width: 512,
          height: 512,
        },
        {
          url: `/favicon/android-chrome-192x192.png`,
          width: 192,
          height: 192,
          alt: 'Прості ІТ Новини',
        },
      ],
      locale: 'uk',
      type: 'website',
    },
  };
}

async function getNews() {
  const res = await fetch('http://82.180.160.12:8000/api/ApprovedNews/', {
    next: { revalidate: 60 },
  });
  return res.json();
}

export default async function Home() {
  const newsData = getNews();
  const [news] = await Promise.all([newsData]);

  // const { data } = await getClient().query({
  //   query,
  //   context: {
  //     fetchOptions: {
  //       next: { revalidate: 60 },
  //     },
  //   },
  // });

  // eslint-disable-next-line no-console
  // console.log('news', news);

  return (
    <>
      <div className="container relative">
        <ul className="mb-6 flex flex-row text-[10px] md:mb-10 md:text-xs xl:text-sm">
          <li>
            <Link href="/" rel="canonical">
              Головна
            </Link>
          </li>
        </ul>
        <div className="mb-10 flex flex-col gap-2">
          <h1
            className={`${playfairDisplay.className} text-t24 md:text-t32 xl:text-t40`}
          >
            Всі новини у сфері IT
          </h1>
          <p className="text-base font-normal italic">
            Останне оновлення 11.11.2023 19:28
          </p>
        </div>
        <div className="xl:grid-row-8 flex flex-col gap-6 xl:grid xl:grid-flow-row-dense xl:grid-cols-[796px_minmax(365px,_auto)] xl:gap-5">
          <div className="order-1 flex w-full flex-col xl:col-start-1 xl:col-end-1 xl:row-start-1 xl:row-end-4">
            <h2 className="mb-8 flex w-full rounded bg-red px-3 py-2 text-2xl text-white">
              Новини
            </h2>
            <ul className="mb-2 flex flex-wrap gap-8">
              {news?.map((article: ArticleType) => (
                <CardPost key={article.id} article={article} />
              ))}
            </ul>
          </div>

          <div className="order-3 flex w-full flex-col xl:col-start-1 xl:col-end-1">
            <h2 className="mb-8 flex w-full rounded bg-blueDark px-3 py-2 text-2xl text-white">
              Пости
            </h2>
            <ul className="mb-2 flex flex-wrap gap-8">
              {news?.map((article: ArticleType) => (
                <CardPost key={article.id} article={article} />
              ))}
            </ul>
          </div>

          <div className="order-4 flex flex-col xl:col-start-2 xl:col-end-2">
            <Image src={'/img/Grade.jpg'} width={388} height={581} alt="" />
          </div>

          <div className="order-2 flex flex-col xl:col-start-2 xl:col-end-2">
            <h2
              className={`${playfairDisplay.className} mb-6 rounded bg-black px-3 py-2 text-white sm:text-sm md:text-3xl`}
            >
              Популярне :
            </h2>
            <PopularCardPosts articles={news} />
          </div>
        </div>
      </div>
    </>
  );
}

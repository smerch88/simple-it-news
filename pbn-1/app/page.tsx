import { gql } from '@apollo/client';
import { Metadata } from 'next';

import { CmsPost } from '@/components/CmsPost';
import { CmsArticleType } from '@/types';
import { getClient } from '@/utils/apollo-client';
import { PopularPost } from '@/components/Popular/PopularPost';
import { Popular } from '@/components/Popular/Popular';

const query = gql`
  {
    allNewsposts {
      id
      title
      _status
      _firstPublishedAt
      shortdescription
      articlepicture {
        width
        url
        height
        alt
      }
      _createdAt
      _publishedAt
      author {
        authorname
        route
      }
      route
      tags
    }
  }
`;

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

// async function getNews() {
//   const res = await fetch(
//     'https://newsapi.org/v2/everything?q=programming&sortBy=publishedAt&apiKey=2d80d99cb4a646c8b306a0a9cfee8dba',
//     { next: { revalidate: 43200 } },
//   );
//   return res.json();
// }

export default async function Home() {
  // const newsData = getNews();
  // const [news] = await Promise.all([newsData]);

  const { data } = await getClient().query({
    query,
    context: {
      fetchOptions: {
        next: { revalidate: 60 },
      },
    },
  });

  return (
    <>
      <div className="container relative">
        <div className="flex flex-col gap-2 mb-10">
          <h1 className="text-[40px]/[60px] font-semibold">
            Всі новини у сфері IT
          </h1>
          <p className="text-base font-normal italic">
            Останне оновлення 11.11.2023 19:28
          </p>
        </div>
        <div className="relative flex h-full w-full flex-col gap-4 bg-white xl:mb-20 xl:flex-row xl:gap-5">
          <div className="flex w-full basis-full flex-col xl:basis-4/6 xl:gap-4">
            <ul className="mb-2 gap-8 flex flex-col">
              {data.allNewsposts.map((article: CmsArticleType) => (
                <CmsPost key={article.id} article={article} />
              ))}
            </ul>
          </div>

          <div className="h-full basis-full  xl:basis-2/6"></div>
        </div>

        {/* <ul className="flex flex-col gap-8">
          {news.articles.map((article: ArticleType, index: number) => (
            <Post key={'article' + index} article={article} />
          ))}
        </ul> */}
      </div>
    </>
  );
}

import { gql } from '@apollo/client';
import { Metadata } from 'next';

import { CardPost } from '@/components/CardPost/CardPost';
import { CardPostRest } from '@/components/CardPost/CardPostRest';
import { PopularCardPosts } from '@/components/CardPost/PopularCardPosts/PopularCardPosts';
import { CmsArticleType, RESTAPIPost } from '@/types';
import { getClient } from '@/utils/apollo-client';

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
      url: process.env.HOST,
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
  const res = await fetch(
    process.env.NEXT_PUBLIC_API_BASE_URL +
      '/api/ApprovedNews/?ordering=-pub_date',
    {
      next: { revalidate: 60 },
    },
  );
  return res.json();
}

export default async function Home() {
  const newsData = getNews();
  const [news] = await Promise.all([newsData]);

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
        <h1 className="mb-6 font-playfair text-t24 md:mb-7 md:text-t32 xl:text-t40">
          Всі новини у сфері IT
        </h1>
        <div className="xl:grid-row-12 flex flex-col gap-6 xl:grid xl:grid-flow-row-dense xl:grid-cols-[796px_minmax(365px,_auto)] xl:gap-5">
          <div className="order-1 flex w-full flex-col xl:col-start-1 xl:col-end-1 xl:row-start-1 xl:row-end-4">
            <h2 className="mb-8 flex w-full rounded bg-red px-3 py-2 text-2xl text-white">
              Новини
            </h2>
            <ul className="mb-2 flex flex-wrap gap-8">
              {news.results.slice(0, 3).map((article: RESTAPIPost) => (
                <CardPostRest
                  key={article.id}
                  article={article}
                  leadsTo="news"
                />
              ))}
            </ul>
          </div>
          <div className="order-3 flex w-full flex-col xl:col-start-1 xl:col-end-1">
            <h2 className="mb-8 flex w-full rounded bg-blueDark px-3 py-2 text-2xl text-white">
              Пости
            </h2>
            <ul className="mb-2 flex flex-wrap gap-8">
              {data.allNewsposts
                ?.slice(0, 3)
                .map((article: CmsArticleType) => (
                  <CardPost key={article.id} article={article} />
                ))}
            </ul>
          </div>
          <div className="order-4 flex w-full flex-col xl:col-start-1 xl:col-end-1">
            <ul className="mb-2 flex flex-wrap gap-8">
              {news.results.slice(3).map((article: RESTAPIPost) => (
                <CardPostRest
                  key={article.id}
                  article={article}
                  leadsTo="news"
                />
              ))}
            </ul>
          </div>

          {/* <div className="order-4 flex flex-col xl:col-start-2 xl:col-end-2">
            <Image src={'/img/Grade.jpg'} width={388} height={581} alt="" />
          </div> */}

          <section className="order-2 hidden flex-col xl:col-start-2 xl:col-end-2 xl:flex">
            <h2 className="mb-8 rounded bg-black px-3 py-2 font-playfair text-t18 text-white sm:text-sm md:text-t32 xl:text-t40">
              Популярне :
            </h2>
            <PopularCardPosts articles={data.allNewsposts} />
          </section>
        </div>
      </div>
    </>
  );
}

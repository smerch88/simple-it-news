import { gql } from '@apollo/client';
import { Metadata } from 'next';
import Link from 'next/link';

import { AdvertisingBox } from '@/components/AdvertisingBox';
import { AlsoRead } from '@/components/AlsoRead';
import { BreadCrumbs } from '@/components/BreadCrumbs';
import PopularCardSecond from '@/components/CardPost/PopularCardPosts/PopularCardSecond';
import Star from '@/public/notsorted/star.svg';
import { Author } from '@/types';
import { getClient } from '@/utils/apollo-client';

export const metadata: Metadata = {
  title: 'Автори',
  description: 'Сторінка про авторів',
  openGraph: {
    title: 'Автори',
    description: 'Сторінка про авторів',
    url: `${process.env.HOST}/authors`,
    siteName: 'Simple IT News',
    images: [
      {
        url: '/favicon/android-chrome-512x512.png',
        width: 512,
        height: 512,
      },
      {
        url: '/favicon/android-chrome-192x192.png',
        width: 192,
        height: 192,
      },
    ],
    locale: 'uk',
    type: 'website',
  },
};

const breadCrumbsList = [
  {
    link: '/',
    text: 'Головна',
  },

  {
    link: '/authors',
    text: 'Автори',
  },
];

const breadCrumbsJsonLD = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: '1',
      item: {
        '@id': `${process.env.HOST}]}`,
        name: 'Головна',
      },
    },
    {
      '@type': 'ListItem',
      position: '2',
      item: {
        '@id': `${process.env.HOST}/about-us]}`,
        name: 'Автори',
      },
    },
  ],
};

const query = gql`
  {
    allAuthors {
      authorname
      id
      route
      articles {
        route
        title
        _publishedAt
      }
    }
  }
`;

export default async function Authors() {
  const { data } = await getClient().query({
    query,
    context: {
      fetchOptions: {
        next: { revalidate: 60 },
      },
    },
  });

  const authors = data.allAuthors;

  return (
    <section className="container">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadCrumbsJsonLD) }}
        key="breadcrumbs-jsonld"
      />
      <BreadCrumbs list={breadCrumbsList} />

      <div className="xl:flex">
        <div className=" mr-3 w-full xl:w-[796px]">
          <div className=" overflow-x-auto">
            <h1
              className={
                'mb-6 font-playfair text-t24 text-dark md:mb-8 md:text-t32 xl:text-t40 '
              }
            >
              Автори
            </h1>
            <table className="md:mb-13 mb-12 w-[768px] table-auto md:w-full xl:mb-24 xl:w-11/12 ">
              <thead className="bg-#FFF shadow-ss relative rounded">
                <tr>
                  <th className="w-1/2 px-4 py-2 text-left text-t18 xl:text-t20 ">
                    Автор
                  </th>
                  <th className="text-centert w-1/4 px-4 py-2 text-t18 xl:text-t20">
                    Кіл-ть постів
                  </th>
                  <th className="w-1/4 px-4 py-2 text-center text-t18 xl:text-t20">
                    Рейтинг
                  </th>
                </tr>
              </thead>
              <tbody>
                {authors.map(
                  ({
                    id,
                    authorname,
                    route,
                    articles,
                  }: {
                    id: string;
                    authorname: string;
                    route: string;
                    articles: Author[];
                  }) => (
                    <tr key={id} className="bg-white">
                      <td className="border-b-[0.5px] border-lightgrey px-4 pt-6 text-t18 text-blue underline">
                        <Link href={'/authors/' + route}> {authorname} </Link>
                      </td>
                      <td className="border-b-[0.5px] border-lightgrey px-4 pt-6 text-center text-t18">
                        {articles?.length}
                      </td>
                      <td className="flex justify-center border-b-[0.5px] border-lightgrey px-4 pt-6 text-center text-t18">
                        <div className="flex items-center">
                          <Star className="mr-2 h-6 w-6 fill-black" />5 / 5
                        </div>
                      </td>
                    </tr>
                  ),
                )}
              </tbody>
            </table>
          </div>
          <PopularCardSecond />
        </div>
        <div className="xl:w-[388px]">
          <AdvertisingBox />
          <h3 className="md:mt-13 mb-4 mt-11 rounded bg-black px-3 py-2 font-playfair text-t18 text-white md:text-t32 xl:mt-[100px]">
            Також читайте :
          </h3>
          <AlsoRead />
        </div>
      </div>
    </section>
  );
}

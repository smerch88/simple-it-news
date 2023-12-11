import { gql } from '@apollo/client';
import { Metadata } from 'next';

import { BreadCrumbs } from '@/components/BreadCrumbs';
import { CardPost } from '@/components/CardPost/CardPost';
import { CmsArticleType } from '@/types';
import { getClient } from '@/utils/apollo-client';

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

const breadCrumbsList = [
  {
    link: '/',
    text: 'Головна /',
  },
  {
    link: '/posts',
    text: 'Пости',
  },
];

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

export default async function Posts() {
  const { data } = await getClient().query({
    query,
    context: {
      fetchOptions: {
        next: { revalidate: 60 },
      },
    },
  });

  return (
    <div className="container">
      <BreadCrumbs list={breadCrumbsList} />
      <h1 className="mb-8 font-playfair text-menuTitleTab md:text-t32 xl:mb-10 xl:text-t40">
        Пости
      </h1>
      <div className="order-1 flex w-full flex-col xl:col-start-1 xl:col-end-1 xl:row-start-1 xl:row-end-4">
        <ul className="mb-2 flex flex-wrap gap-12">
          {data.allNewsposts?.map((article: CmsArticleType) => (
            <CardPost key={article.id} article={article} type="category" />
          ))}
        </ul>
      </div>
    </div>
  );
}

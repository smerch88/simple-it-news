import { gql } from '@apollo/client';
import { Metadata } from 'next';

import { CmsPost } from '@/components/CmsPost';
import { Post } from '@/components/Post';
import { ArticleType, CmsArticleType } from '@/types';
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
      }
    }
  }
`;

export async function generateMetadata(): Promise<Metadata> {
  return {
    openGraph: {
      title: 'Simple IT News',
      description: 'Просто ІТ новини. Читайте новини зі світу АйТі.',
      url: 'https://www.simpleitnews.tech',
      siteName: 'Simple IT News',
      images: [
        {
          url: 'https://nextjs.org/android-chrome-512x512.png',
          width: 512,
          height: 512,
        },
        {
          url: 'https://nextjs.org/android-chrome-192x192.png',
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
    'https://newsapi.org/v2/everything?q=programming&sortBy=publishedAt&apiKey=2d80d99cb4a646c8b306a0a9cfee8dba',
  );
  return res.json();
}

export default async function Home() {
  const newsData = getNews();
  const [news] = await Promise.all([newsData]);

  const { data } = await getClient().query({ query });

  return (
    <div className="container relative">
      <h1 className="text-2xl uppercase text-center font-semibold">
        Актуальні IT Новини
      </h1>
      <h2 className="text-sm mb-2 uppercase text-center font-semibold">
        Читай про айті просто
      </h2>
      <ul className="mb-2">
        {data.allNewsposts.map((article: CmsArticleType) => (
          <CmsPost key={article.id} article={article} />
        ))}
      </ul>
      <ul className="flex flex-col gap-8">
        {news.articles.map((article: ArticleType, index: number) => (
          <Post key={'article' + index} article={article} />
        ))}
      </ul>
    </div>
  );
}

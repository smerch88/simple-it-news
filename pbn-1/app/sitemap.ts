/* eslint-disable @typescript-eslint/ban-ts-comment */
import { gql } from '@apollo/client';
import type { MetadataRoute } from 'next';

import { ArticleType } from '@/types';
import { getClient } from '@/utils/apollo-client';

const defaultUrl = 'https://www.simpleitnews.tech';

interface Author {
  route: string;
  _updatedAt: string;
}

interface NewsPost {
  route: string;
  _updatedAt: string;
}

interface SitemapRoutes {
  allAuthors: Author[];
  allNewsposts: NewsPost[];
}

const GET_ROUTES = gql`
  query GetRoutes {
    allAuthors {
      route
      _updatedAt
    }
    allNewsposts {
      route
      _updatedAt
    }
  }
`;

async function getNews() {
  const res = await fetch(
    'https://newsapi.org/v2/everything?q=programming&sortBy=publishedAt&apiKey=2d80d99cb4a646c8b306a0a9cfee8dba',
    { next: { revalidate: 43200 } },
  );
  return res.json();
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const { data } = await getClient().query<SitemapRoutes>({
    query: GET_ROUTES,
    context: {
      fetchOptions: {
        next: { revalidate: 60 },
      },
    },
  });
  const authors = data.allAuthors;
  const posts = data.allNewsposts;

  const newsData = getNews();
  const [news] = await Promise.all([newsData]);

  const postsUrls = posts.map(post => ({
    url: `${defaultUrl}/posts/${post.route}`,
    lastModified: new Date(post._updatedAt),
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  const authorsUrls = authors.map(author => ({
    url: `${defaultUrl}/authors/${author.route}`,
    lastModified: new Date(author._updatedAt),
    changeFrequency: 'monthly',
    priority: 0.5,
  }));

  const newsUrlsRaw = news.articles.map((item: ArticleType) =>
    item.title
      .replace(/[^a-zA-Z0-9\s]/g, '')
      .replace(/\s+/g, '-')
      .toLowerCase(),
  );

  const newsUrls = newsUrlsRaw.map((url: string) => ({
    url: `${defaultUrl}/news/${url}`,
    lastModified: new Date(),
    changeFrequency: 'daily',
    priority: 0.5,
  }));

  return [
    {
      url: 'https://www.simpleitnews.tech',
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    //@ts-ignore
    ...postsUrls,
    //@ts-ignore
    ...authorsUrls,
    //@ts-ignore
    ...newsUrls,
  ];
}

/* eslint-disable @typescript-eslint/ban-ts-comment */
import { gql } from '@apollo/client';
import type { MetadataRoute } from 'next';

import { RESTAPIPost } from '@/types';
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
    process.env.NEXT_PUBLIC_API_BASE_URL + '/api/ApprovedNews/',
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

  const newsUrls = news.results.map((item: RESTAPIPost) => ({
    url: `${defaultUrl}/news/${item.custom_url}`,
    // TODO: add actual data to all links
    lastModified: new Date(),
    changeFrequency: 'monthly',
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

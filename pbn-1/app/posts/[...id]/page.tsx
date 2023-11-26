import { gql } from '@apollo/client';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { StructuredText } from 'react-datocms';

import { getClient } from '@/utils/apollo-client';

export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  const { id } = params;
  const { data } = await getClient().query({
    query: GET_ARTICLE,
    variables: { id: id[0].toString() },
  });

  const article = data.allNewsposts[0];
  return {
    title: article.title,
    description: article.shortdescription,
    openGraph: {
      title: article.title,
      description: article.shortdescription,
      url: `${process.env.HOST}/posts/${id}`,
      siteName: 'Simple IT News',
      images: [
        {
          url: article.articlepicture.url,
          width: 512,
          height: 512,
          alt: article.articlepicture.alt,
        },
        {
          url: article.articlepicture.url,
          width: 192,
          height: 192,
          alt: article.articlepicture.alt,
        },
      ],
      locale: 'uk',
      type: 'profile',
    },
  };
}

const GET_ARTICLE = gql`
  query GetArticle($id: String!) {
    allNewsposts(filter: { route: { eq: $id } }) {
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
      _updatedAt
      author {
        authorname
        route
      }
      articletext {
        value
      }
      route
      tags
    }
  }
`;

export default async function Page({ params }: { params: { id: string } }) {
  const { id } = params;
  const { data } = await getClient().query({
    query: GET_ARTICLE,
    variables: { id: id[0].toString() },
  });

  const article = data.allNewsposts[0];
  const publishedDate = new Date(article._publishedAt);

  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
  };

  const formattedDate = publishedDate.toLocaleDateString('uk-UA', options);

  const breadCrumbsJsonLD = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: {
      '@type': 'ListItem',
      position: '1',
      item: {
        '@id': `${process.env.HOST}/posts/${id[0]}`,
        name: `${article.title}`,
      },
    },
  };

  const articleJsonLD = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${process.env.HOST}/posts/${id[0]}`,
    },
    headline: `${article.title}`,
    description: `${article?.shortdescription?.slice(0, 150)}`,
    image: article.articlepicture.url,
    author: {
      '@type': 'Person',
      name: article.author.authorname,
      url: `${process.env.HOST}/authors/${article.author.route}`,
    },
    publisher: {
      '@type': 'Organization',
      name: process.env.HOST,
      logo: {
        '@type': 'ImageObject',
        url: `/favicon/android-chrome-512x512.png`,
      },
    },
    datePublished: `${article._publishedAt}`,
    dateModified: `${article._updatedAt}`,
  };

  return (
    <div className="container">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadCrumbsJsonLD) }}
        key="breadcrumbs-jsonld"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLD) }}
        key="article-jsonld"
      />
      <nav>
        <ul className="mb-2 flex flex-row md:mb-4">
          <li>
            <Link href="/" rel="canonical">
              Головна
            </Link>
          </li>
          <li className="before:content-['/'] hover:opacity-75">
            {' '}
            <Link
              href={'/posts/' + id[0]}
              rel="canonical"
              className="underline underline-offset-2"
            >
              Пост
            </Link>
          </li>
        </ul>
      </nav>
      <article>
        <h1 className="mb-2 text-xl font-bold">{article.title}</h1>
        <div className="mb-2 flex justify-between text-gray-400/80">
          <div className="flex flex-col md:flex-row">
            <address>
              <Link
                href={'/authors/' + article.author.route}
                rel="canonical"
                className="mr-2"
              >
                {article.author.authorname}
              </Link>
            </address>
            <time>{formattedDate}</time>
          </div>
        </div>
        <h2 className="mb-2 [text-wrap:balance] md:mb-8">
          {article.shortdescription}
        </h2>
        <div className="relative mb-2 h-80 w-full md:mb-8">
          <Image
            src={article.articlepicture.url}
            fill
            className="object-contain"
            alt={article.articlepicture.alt}
          />
        </div>
        <div className="mb-2">
          <StructuredText data={article.articletext} />
        </div>
      </article>
    </div>
  );
}

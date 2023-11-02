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
      url: `https://www.simpleitnews.tech/posts/${id}`,
      siteName: 'Simple IT News',
      images: [
        {
          url: article.articlepicture.url,
          width: 512,
          height: 512,
        },
        {
          url: article.articlepicture.url,
          width: 192,
          height: 192,
          alt: article.title,
        },
      ],
      locale: 'uk',
      type: 'website',
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
  return (
    <div className="container">
      <nav>
        <ul className="flex flex-row mb-2 md:mb-4">
          <li>
            <Link href="/" rel="canonical">
              Головна
            </Link>
          </li>
          <li className="before:content-['/'] hover:opacity-75">
            {' '}
            <Link
              href={'/news/' + id[0]}
              rel="canonical"
              className="underline underline-offset-2"
            >
              Пост
            </Link>
          </li>
        </ul>
      </nav>
      <article>
        <h1 className="text-xl font-bold mb-2">{article.title}</h1>
        <div className="flex justify-between text-gray-400/80 mb-2">
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
        <h2 className="[text-wrap:balance] mb-2 md:mb-8">
          {article.shortdescription}
        </h2>
        <div className="relative w-full h-80 mb-2 md:mb-8">
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

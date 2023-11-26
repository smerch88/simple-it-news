import { gql } from '@apollo/client';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

import { Author } from '@/types';
import { getClient } from '@/utils/apollo-client';

interface PageData {
  allAuthors: Author[];
}

export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  const { id } = params;
  const { data } = await getClient().query<PageData>({
    query: GET_AUTHOR,
    variables: { id: id[0].toString() },
  });

  const author = data.allAuthors[0];
  return {
    title: author.authorname,
    description: author.authordescription,
    openGraph: {
      title: author.authorname,
      description: author.authordescription,
      url: `${process.env.HOST}/authors/${id}`,
      siteName: 'Simple IT News',
      images: [
        {
          url: author.authorimage.url,
          width: 512,
          height: 512,
          alt: author.authorimage.alt || 'author',
        },
        {
          url: author.authorimage.url,
          width: 192,
          height: 192,
          alt: author.authorimage.alt || 'author',
        },
      ],
      locale: 'uk',
      type: 'website',
    },
  };
}

const GET_AUTHOR = gql`
  query GetArticle($id: String!) {
    allAuthors(filter: { route: { eq: $id } }) {
      authordescription
      authorname
      route
      socials
      articles {
        route
        title
      }
      authorimage {
        width
        url
        height
        alt
      }
    }
  }
`;

export default async function Page({ params }: { params: { id: string } }) {
  const { id } = params;
  const { data } = await getClient().query<PageData>({
    query: GET_AUTHOR,
    variables: { id: id[0].toString() },
  });

  const author = data.allAuthors[0];

  const breadCrumbsJsonLD = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: {
      '@type': 'ListItem',
      position: '1',
      item: {
        '@id': `${process.env.HOST}/authors/${id[0]}`,
        name: `${author.authorname}`,
      },
    },
  };

  const authorJsonLD = {
    '@context': 'https://schema.org/',
    '@type': 'Person',
    name: author.authorname,
    url: `${process.env.HOST}/authors/${id[0]}`,
    image: author.authorimage.url,
    sameAs: [author.socials.facebook, author.socials.twitter],
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(authorJsonLD) }}
        key="author-jsonld"
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
              href={'/authors/' + id[0]}
              className="underline underline-offset-2"
              rel="canonical"
            >
              Автор
            </Link>
          </li>
        </ul>
      </nav>
      <section>
        <h1 className="mb-2 text-xl font-bold">{author.authorname}</h1>
        <h2 className="mb-2 [text-wrap:balance] md:mb-8">
          {author.authordescription}
        </h2>
        <div className="relative mb-2 h-80 w-full md:mb-8">
          <Image
            src={author.authorimage.url}
            fill
            className="object-contain"
            alt={author.authorimage.alt || 'author'}
          />
        </div>
        <h3 className="mb-2">Статті:</h3>
        <ul className="mb-2">
          {author.articles.map(article => (
            <li key={article.route} className="hover:underline">
              <Link href={'/posts/' + article.route}>{article.title}</Link>
            </li>
          ))}
        </ul>
        <h3 className="mb-2">Соціальні мережі:</h3>
        <ul className="mb-2">
          {Object.entries(author.socials).map(([platform, link]) => (
            <li key={platform} className="hover:underline">
              <Link href={link} target="_blank" rel="noopener noreferrer">
                {platform}
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

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
        <h1 className="text-xl font-bold mb-2">{author.authorname}</h1>
        <h2 className="[text-wrap:balance] mb-2 md:mb-8">
          {author.authordescription}
        </h2>
        <div className="relative w-full h-80 mb-2 md:mb-8">
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

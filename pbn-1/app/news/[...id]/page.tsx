// import { Metadata } from 'next';
import { gql } from '@apollo/client';
import Image from 'next/image';
import Link from 'next/link';
import { StructuredText } from 'react-datocms';

import { getClient } from '@/utils/apollo-client';

// import { ArticleType } from '@/types';

// export async function generateMetadata({
//   params,
// }: {
//   params: { id: string };
// }): Promise<Metadata> {
//   const { id } = params;
//   const title = id[0].split('-').join(' ');
//   return {
//     title: title,
//     description: title,
//   };
// }
const GET_ARTICLE = gql`
  query GetArticle($id: ItemId) {
    allNewsposts(filter: { id: { eq: $id } }) {
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
      articletext {
        value
      }
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
            className="underline underline-offset-2"
          >
            Пост
          </Link>
        </li>
      </ul>
      <article>
        <h1 className="text-xl font-bold mb-2">{article.title}</h1>
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
        <div className="flex justify-between text-gray-400/80 mb-2">
          <div className="flex flex-row">
            <address>
              <span className="mr-2" rel="author">
                {article.author.authorname}
              </span>
            </address>
            <time>{formattedDate}</time>
          </div>
        </div>
      </article>
    </div>
  );
}

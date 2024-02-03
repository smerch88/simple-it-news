import { gql } from '@apollo/client';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

import { BreadCrumbs } from '@/components/BreadCrumbs';
import { RightSection } from '@/components/RightSection/RightSection';
import { SocialNetworksAuthor } from '@/components/SocialNetworksAuthor';
import Star from '@/public/notsorted/star.svg';
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
        _createdAt
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
          '@id': `${process.env.HOST}/authors`,
          name: 'Автор',
        },
      },
      {
        '@type': 'ListItem',
        position: '3',
        item: {
          '@id': `${process.env.HOST}/authors/${id[0]}`,
          name: `${author.authorname}`,
        },
      },
    ],
  };

  const authorJsonLD = {
    '@context': 'https://schema.org/',
    '@type': 'Person',
    name: author.authorname,
    url: `${process.env.HOST}/authors/${id[0]}`,
    image: author.authorimage.url,
    sameAs: [author.socials.facebook, author.socials.twitter],
  };

  const breadCrumbsList = [
    {
      link: '/',
      text: 'Головна',
    },

    {
      link: '/authors/',
      text: 'Автор',
    },

    {
      link: '/authors/' + id[0],
      text: author.authorname,
    },
  ];

  return (
    <section className="container">
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
      <BreadCrumbs list={breadCrumbsList} />
      <div className="xl:flex">
        <div className="xl:mr-5 xl:w-[796px]">
          <div className="mb-11 flex">
            <div className="relative mb-2 mr-2 h-[52px] w-[52px] md:mb-8 xl:h-[60px] xl:w-[60px]">
              <Image
                src={author.authorimage.url}
                fill
                className="rounded-full object-contain"
                alt={author.authorimage.alt || 'author'}
              />
            </div>
            <h1 className="mb-2 font-playfair text-t24 font-bold md:text-t32 xl:text-t40">
              {author.authorname}
            </h1>
          </div>
          <p className="mb-6 text-t14 [text-wrap:balance] md:mb-8 md:text-t16 xl:text-t18">
            {author.authordescription}
          </p>
          <div className="flex flex-row items-center gap-1">
            <Star className="h-3 w-3  fill-black" />
            5/5
          </div>
          <h3 className="mb-4 text-t10 text-grey md:text-quot xl:text-t14">
            Рейтинг автора на думку читачів
          </h3>
          <div className="mb-6">
            <h3 className="mb-2 text-menuItemsMob13 md:text-t14 xl:text-t16">
              Будь ласка оцініть автора і ви
            </h3>
            {/* <Stars /> */}
          </div>
          <h3 className="mb-2 text-t10 text-grey md:text-quot xl:text-t14">
            Соціальні мережі:
          </h3>

          <SocialNetworksAuthor socials={Object.entries(author.socials)} />

          <h3 className="mb-2 mt-4 font-playfair text-t18 md:text-t24">
            Публікації:
          </h3>
          <ul className="mb-12">
            {author.articles.map(article => {
              const publishedDate = new Date(article._createdAt);

              const options: Intl.DateTimeFormatOptions = {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
                hour: 'numeric',
                minute: 'numeric',
              };

              const formattedDate = publishedDate.toLocaleDateString(
                'uk-UA',
                options,
              );

              return (
                <li
                  key={article.route}
                  className="mb-3 text-t14 hover:underline md:w-96 xl:w-2/3"
                >
                  <p className="mb-1 text-t10 text-grey md:text-quot xl:text-t14">
                    {formattedDate}
                  </p>
                  <Link
                    className="text-t14 md:text-t16 xl:text-t18"
                    href={'/posts/' + article.route}
                  >
                    {article.title}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        <RightSection />
      </div>
    </section>
  );
}

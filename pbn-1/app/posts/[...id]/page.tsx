import { gql } from '@apollo/client';
import { Metadata } from 'next';
import { StructuredText } from 'react-datocms';

import { Post } from '@/components/common/Post/Post';
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

  const {
    author,
    id: postId,
    _publishedAt,
    title,
    articlepicture,
    shortdescription,
  } = article;

  return (
    <>
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
      <Post
        pub_date={_publishedAt}
        id={postId}
        title={title}
        image_url={articlepicture.url}
        author={author.authorname}
        author_url={author.route}
        time_to_read={15}
        rating={5}
        description={shortdescription}
      >
        <StructuredText data={article.articletext} />
      </Post>
    </>
  );
}

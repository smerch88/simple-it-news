import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

import { ArticleType } from '@/types';

export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  const { id } = params;
  const title = id[0].split('-').join(' ');
  return {
    title: title,
    description: title,
  };
}

async function getNews() {
  const res = await fetch(
    'https://newsapi.org/v2/everything?q=programming&sortBy=publishedAt&apiKey=2d80d99cb4a646c8b306a0a9cfee8dba',
    { next: { revalidate: 43200 } },
  );
  return res.json();
}

export default async function Page({ params }: { params: { id: string } }) {
  const newsData = getNews();
  const { id } = params;

  const [news] = await Promise.all([newsData]);

  const post = news.articles.find(
    (item: ArticleType) =>
      item.title
        .replace(/[^a-zA-Z0-9\s]/g, '')
        .replace(/\s+/g, '-')
        .toLowerCase() == id,
  );

  if (!post) {
    return <div>Post not found</div>;
  }

  const publishedDate = new Date(post?.publishedAt);

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
          <Link href={'/post/' + id} className="underline underline-offset-2">
            Пост {post?.source?.id}
          </Link>
        </li>
      </ul>
      <article>
        <h1 className="text-xl font-bold mb-2">{post?.title}</h1>
        <h2 className="[text-wrap:balance] mb-2 md:mb-8">
          {post?.description}
        </h2>
        {post?.urlToImage && post.urlToImage.startsWith('https://') ? (
          <div className="relative w-full h-80 mb-2 md:mb-8">
            <Image
              src={post.urlToImage}
              fill
              className="object-contain"
              alt={post.title + 'Image'}
            />
          </div>
        ) : null}
        <p className="mb-2 md:mb-8">{post?.content}</p>
        <div className="flex justify-between text-gray-400/80 mb-2">
          <Link href={post?.url} rel="canonical" target="blank">
            джерело
          </Link>
          <div className="flex flex-row">
            {post?.author ? (
              <address>
                <span className="mr-2" rel="author">
                  {post.author}
                </span>
              </address>
            ) : null}
            <time>{formattedDate}</time>
          </div>
        </div>
      </article>
    </div>
  );
}

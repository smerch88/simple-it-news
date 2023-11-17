// deprecated
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
      <ul className="flex flex-row mb-6 md:mb-4 text-[10px]">
        <li>
          <Link href="/" rel="canonical">
            Головна
          </Link>
        </li>
        <li className="before:content-['_/_'] before:whitespace-pre hover:opacity-75">
          <Link href="/" rel="canonical">
            Категорії
          </Link>
        </li>
        <li className="before:content-['_/_'] before:whitespace-pre hover:opacity-75">
          <Link
            href={'/news/' + id}
            rel="canonical"
            className="underline underline-offset-2"
          >
            Новини {post?.source?.id}
          </Link>
        </li>
      </ul>
      <article>
        <h1 className="text-2xl font-semibold mb-1">{post?.title}</h1>
        <p className="mb-6 text-[13px] italic">
          <time>{formattedDate}</time>
        </p>

        {post?.urlToImage && post.urlToImage.startsWith('https://') ? (
          <div className="relative w-full min-h-[150px] h-full mb-2">
            <Image
              src={post.urlToImage}
              fill
              className="object-contain"
              alt={post.title + 'Image'}
            />
          </div>
        ) : null}
        <div className="flex justify-between text-gray-400/80 text-sm mb-6">
          {post?.author ? (
            <Link href={post?.url} rel="canonical" target="blank">
              {post.author}
            </Link>
          ) : null}
        </div>
        <div>Управління</div>
        <p className="text-sm mb-2 md:mb-8">{post?.description}</p>

        <p className="text-sm  pb-4 border-b border-black mb-12">
          {post?.content}
        </p>
      </article>
      <div className="mb-12">Stars</div>
      <div>comments</div>
      <div>More news</div>
    </div>
  );
}

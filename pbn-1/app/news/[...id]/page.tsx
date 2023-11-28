// deprecated

import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

import Carousel from '@/components/news/Carousel/Carousel';
import { Comments } from '@/components/news/Comments';
import { SliderCard } from '@/components/news/SliderCard';
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
      <ul className="mb-6 flex flex-row text-[10px] md:mb-4">
        <li>
          <Link href="/" rel="canonical">
            Головна
          </Link>
        </li>
        <li className="before:whitespace-pre before:content-['_/_'] hover:opacity-75">
          <Link href="/" rel="canonical">
            Категорії
          </Link>
        </li>
        <li className="before:whitespace-pre before:content-['_/_'] hover:opacity-75">
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
        <h1 className="mb-1 text-2xl font-semibold">{post?.title}</h1>
        <p className="mb-6 text-[13px] italic text-grey">
          <time>{formattedDate}</time>
        </p>

        {post?.urlToImage && post.urlToImage.startsWith('https://') ? (
          <div className="relative mb-2 h-full min-h-[150px] w-full">
            <Image
              src={post.urlToImage}
              fill
              className="object-contain"
              alt={post.title + 'Image'}
            />
          </div>
        ) : null}
        <div className="hover:text-blue_hover mb-6 flex justify-between text-sm 	text-blue">
          {post?.author ? (
            <Link
              href={post?.url}
              rel="canonical"
              target="blank"
              className="underline underline-offset-2"
            >
              {post.author}
            </Link>
          ) : null}
        </div>
        <div>Управління</div>
        <p className="mb-2 text-sm md:mb-8">{post?.description}</p>

        <p className="mb-12  border-b border-black pb-4 text-sm">
          {post?.content}
        </p>
      </article>
      <div className="mb-12">Stars</div>
      <Comments />
      <div className="py-4">
        <h2 className="mb-3 block rounded bg-dark px-3 py-2 text-center text-lg font-semibold text-white">
          Інші публікації цього автора
        </h2>
        {/* Slider */}
        <Carousel />
      </div>
      <div className="py-4">
        <h2 className="mb-3 block rounded bg-dark px-3 py-2 text-center text-lg font-semibold text-white">
          Більше з категорії новини
        </h2>
        <Carousel />
      </div>
    </div>
  );
}

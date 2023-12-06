// deprecated

import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

import Carousel from '@/components/news/Carousel/Carousel';
import { Comments } from '@/components/news/Comments';
import { Management } from '@/components/news/Management';
import { Stars } from '@/components/news/Stars';
import defaultImg from '@/public/card/card_mobile.png';

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

async function getNews(id: string) {
  const res = await fetch(
    process.env.NEXT_PUBLIC_API_BASE_URL + `/api/News/${id}`,
    {
      method: 'GET',
      next: { revalidate: 43200 },
    },
  );
  return res.json();
}

export default async function Page({ params }: { params: { id: string } }) {
  const { id } = params;
  const post = await getNews(id);

  if (!post) {
    return <div>Post not found</div>;
  }

  const publishedDate = new Date(post?.pub_date);

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
      <ul className="text-menuItemsMob10 mb-6 flex flex-row text-lightgrey  md:mb-10 md:text-quot xl:text-t14">
        <li className="duration-300 hover:text-blue_hover">
          <Link href="/" rel="canonical">
            Головна
          </Link>
        </li>
        <li className="duration-300  before:whitespace-pre before:content-['_/_'] hover:text-blue_hover">
          <Link href="/news" rel="canonical">
            Новини
            {/* {post.categories[0].name} */}
          </Link>
        </li>
        <li className="duration-300 before:whitespace-pre before:content-['_/_'] hover:text-blue_hover">
          <Link
            href={'/news/' + id}
            target="blank"
            rel="noreferrer nofollow"
            className="underline underline-offset-2"
          >
            {post?.title}
          </Link>
        </li>
      </ul>
      <article>
        <h1 className="font-playfair md:text-title32 xl:text-title40 text-title24 mb-1 font-semibold">
          {post?.title}
        </h1>

        <time className="md:text-menuItemsTab14 text-menuItemsMob13 mb-6 inline-block italic text-grey xl:text-menuItemsMob">
          {formattedDate}
        </time>

        <div className="relative mb-2">
          <Image
            src={defaultImg}
            // src={post.image_url ? post.image_url : defaultImg}
            width={0}
            height={0}
            alt={post.title + 'Image'}
            className="h-full max-h-[150px] w-auto  md:max-h-[480px] "
          />
        </div>

        {post?.author ? (
          <Link
            href={post?.author}
            rel="canonical"
            target="blank"
            className="md:text-t16 xl:text-t18 mb-6 text-t14 text-blue underline underline-offset-2 hover:text-blue_hover"
          >
            {post.author}
          </Link>
        ) : null}

        <Management time={post.time_to_read} rating={post.rating} />
        <p className="md:text-t16 xl:text-t18 mb-2 text-t14 md:mb-8">
          {post?.description}
        </p>

        <p className="md:text-t16  xl:text-t18 mb-12 border-b border-dark pb-4 text-t14">
          {post?.content}
        </p>
      </article>
      <div className="mb-12">
        <p className="text-menuItemsMob13 md:text-menuItemsTab14 mb-2 italic text-dark xl:text-menuItemsMob">
          Будь ласка оцініть новину
        </p>
        <Stars />
      </div>
      <Comments />
      <div className="font-playfair md:text-menuTitleTab py-4 text-left text-menuTitleMob">
        <h2 className=" mb-3 block rounded bg-dark px-3  py-2  font-semibold text-white">
          Інші публікації цього автора
        </h2>
        <Carousel mode="author" author_id={post?.author?.id} />
      </div>
      <div className="font-playfair md:text-menuTitleTab py-4 text-left text-menuTitleMob">
        <h2 className="mb-3 block rounded bg-dark px-3 py-2   font-semibold text-white ">
          Більше з категорії новини
          {/* {post.categories[0].name} */}
        </h2>
        <Carousel mode="categories" categories={post?.categories[0]} />
      </div>
    </div>
  );
}

import Image from 'next/image';
import Link from 'next/link';
import { getServerSession } from 'next-auth';
import { FC } from 'react';

import { Comments } from '@/components/news/Comments';
import { Management } from '@/components/news/Management';
import { Stars } from '@/components/news/Stars';
import { authConfig } from '@/lib/auth';

import { PostProps } from './Post.props';

export const Post: FC<PostProps> = async ({
  pub_date,
  id,
  title,
  image_url,
  author,
  author_url,
  time_to_read,
  rating,
  description,
  content,
  children,
  custom_url,
  // categories,
  custom_category,
  link,
}) => {
  const publishedDate = new Date(pub_date);

  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
  };

  const formattedDate = publishedDate.toLocaleDateString('uk-UA', options);

  const session = await getServerSession(authConfig);

  return (
    <div className="container">
      <ul className="mb-6 flex flex-row text-menuItemsMob10 text-lightgrey  md:mb-10 md:text-quot xl:text-t14">
        <li className="duration-300 hover:text-blue_hover">
          <Link href="/" rel="canonical">
            Головна
          </Link>
        </li>
        <li className="duration-300 before:whitespace-pre before:content-['_/_'] hover:text-blue_hover">
          <Link href="/news" rel="canonical">
            {custom_category}
          </Link>
        </li>
        <li className="duration-300 before:whitespace-pre before:content-['_/_'] hover:text-blue_hover">
          <Link
            href={'/news/' + custom_url}
            target="blank"
            rel="noreferrer nofollow"
            className="underline underline-offset-2"
          >
            {title}
          </Link>
        </li>
      </ul>
      <article>
        <h1 className="mb-1 font-playfair text-t24 font-semibold md:text-t32 xl:text-t40">
          {title}
        </h1>
        <time className="mb-6 inline-block text-menuItemsMob13 italic text-grey md:text-menuItemsTab14 xl:text-menuItemsMob">
          {formattedDate}
        </time>
        <div className="relative mb-2 h-40 w-full md:h-[480px]">
          <Image
            src={image_url}
            fill
            className="object-scale-down object-left-top xl:object-cover"
            alt={title + 'Image'}
          />
        </div>
        {author ? (
          <Link
            href={'/authors/' + author_url}
            rel="canonical"
            className="mb-6 text-t14 text-blue underline underline-offset-2 hover:text-blue_hover md:text-t16 xl:text-t18"
          >
            {author}
          </Link>
        ) : null}
        <Management time={time_to_read} rating={rating} />
        <p className="mb-2 text-t14 md:mb-8 md:text-t16 xl:text-t18">
          {description}
        </p>
        {content ? (
          <>
            <p className="mb-4 whitespace-pre-wrap border-b border-dark pb-4 text-t14 md:text-t16 xl:text-t18">
              {content}
            </p>
            {link && (
              <Link
                href={link}
                className="mb-12 inline-block text-t14 text-grey xl:mb-[52px] xl:text-t16"
              >
                Першоджерело
              </Link>
            )}
          </>
        ) : children ? (
          children
        ) : null}
        {session && (
          <div className="mb-12">
            <p className="mb-2 text-menuItemsMob13 italic text-dark md:text-menuItemsTab14 xl:text-menuItemsMob">
              Будь ласка оцініть новину
            </p>
            <Stars custom_url={custom_url} session={session} />
          </div>
        )}
        <Comments session={session} postId={id} />
      </article>

      {/* TODO:uncomment after feature ready */}
      {/* <div className="py-4 text-left font-playfair text-menuTitleMob md:text-menuTitleTab">
        <h2 className=" mb-3 block rounded bg-dark px-3 py-2 font-semibold text-white">
          Інші публікації цього автора
        </h2>
        <Carousel
          mode="author"
          author={author}
          custom_category={custom_category}
        />
      </div>
      <div className="py-4 text-left font-playfair text-menuTitleMob md:text-menuTitleTab">
        <h2 className="mb-3 block rounded bg-dark px-3 py-2 font-semibold text-white ">
          Більше з категорії {custom_category.toLowerCase()}
        </h2>
        <Carousel
          // mode="categories"
          categories={categories ? categories[0]?.title : 'news'}
          custom_category={custom_category}
        />
      </div> */}
    </div>
  );
};

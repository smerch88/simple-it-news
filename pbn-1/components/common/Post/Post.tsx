import Image from 'next/image';
import Link from 'next/link';
import { FC, ReactNode } from 'react';

import { Management } from '@/components/news/Management';

interface PostProps {
  pub_date: string;
  id: string;
  title: string;
  image_url: string;
  author: string;
  author_url: string;
  time_to_read: number;
  rating: number;
  description: string;
  content?: string;
  children?: ReactNode;
}

export const Post: FC<PostProps> = ({
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
            Новини
            {/* {categories[0].name} */}
          </Link>
        </li>
        <li className="duration-300 before:whitespace-pre before:content-['_/_'] hover:text-blue_hover">
          <Link
            href={'/news/' + id}
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
        <div className="relative mb-2 h-40 w-full">
          <Image
            src={image_url}
            fill
            className="object-contain object-left"
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
          <p className="mb-12 border-b border-dark pb-4 text-t14 md:text-t16 xl:text-t18">
            {content}
          </p>
        ) : children ? (
          children
        ) : null}
      </article>
      {/* TODO:uncomment after login feature*/}
      {/* <div className="mb-12">
            <p className="mb-2 text-menuItemsMob13 italic text-dark md:text-menuItemsTab14 xl:text-menuItemsMob">
              Будь ласка оцініть новину
            </p>
            <Stars />
          </div> */}
      {/* <Comments /> */}
      {/* TODO:uncomment after feature ready */}
      {/* <div className="py-4 text-left font-playfair text-menuTitleMob md:text-menuTitleTab">
            <h2 className=" mb-3 block rounded bg-dark px-3 py-2 font-semibold text-white">
              Інші публікації цього автора
            </h2>
            <Carousel mode="author" author_id={author?.id} />
          </div> */}
      {/* <div className="py-4 text-left font-playfair text-menuTitleMob md:text-menuTitleTab">
            <h2 className="mb-3 block rounded bg-dark px-3 py-2 font-semibold text-white ">
              Більше з категорії новини
              {categories[0].name}
            </h2>
            <Carousel mode="categories" categories={categories[0]} />
          </div> */}
    </div>
  );
};

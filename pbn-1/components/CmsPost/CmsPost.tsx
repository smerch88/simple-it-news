import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

import { CmsPostProps } from './CmsPost.props';

export const CmsPost: FC<CmsPostProps> = ({ article }) => {
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
    <li>
      <article className="overflow-hidden border-b border-dark">
        {article.articlepicture.url && (
          <div className="relative w-full mb-4 sm:h-[176px] md:h-[296px] xl:h-[242px]">
            <Image
              src={article.articlepicture.url}
              fill
              className="object-cover rounded"
              alt={article.articlepicture.alt}
            />
          </div>
        )}
        <p className="text-base font-normal text-red">Новини</p>
        <div className="flex flex-row justify-between items-center w-full">
          <div className="flex">
            <div className="flex gap-1 py-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
              >
                <path
                  d="M12.551 6.52228C12.551 9.84807 9.85353 12.5446 6.5255 12.5446C3.19748 12.5446 0.5 9.84807 0.5 6.52228C0.5 3.1965 3.19748 0.5 6.5255 0.5C9.85353 0.5 12.551 3.1965 12.551 6.52228Z"
                  stroke="#666666"
                />
                <path
                  d="M3.17876 7.06579H6.60909C6.86536 7.06579 7.06909 6.88526 7.06909 6.64456V2.58923C7.06909 2.35458 6.86536 2.17407 6.60909 2.17407C6.35281 2.17407 6.15565 2.35458 6.15565 2.58923V6.2294H3.17876C2.91589 6.2294 2.71875 6.40992 2.71875 6.64456C2.71875 6.88526 2.91589 7.06579 3.17876 7.06579Z"
                  fill="#666666"
                />
              </svg>
              <span className="text-xs font-normal text-grey">15 хв.</span>
            </div>
            <div className="flex gap-1 py-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="13"
                height="14"
                viewBox="0 0 13 14"
                fill="none"
              >
                <path
                  d="M2.492 13.4026C2.71237 13.5709 2.97865 13.518 3.30462 13.268L6.5 10.8163L9.69538 13.268C10.0213 13.518 10.2922 13.5709 10.508 13.4026C10.7192 13.2344 10.7697 12.9555 10.6411 12.5517L9.38778 8.61942L12.6061 6.19657C12.9321 5.95141 13.0606 5.69662 12.9734 5.42742C12.8908 5.16783 12.652 5.02842 12.2388 5.03322L8.29051 5.05726L7.08307 1.11052C6.95911 0.701904 6.76628 0.5 6.5 0.5C6.23372 0.5 6.04089 0.701904 5.91693 1.11052L4.70949 5.05726L0.761171 5.03322C0.352567 5.02842 0.10924 5.16783 0.0266011 5.42742C-0.0606291 5.69662 0.0679207 5.95141 0.393886 6.19657L3.61222 8.61942L2.36345 12.5517C2.23031 12.9555 2.28081 13.2344 2.492 13.4026Z"
                  fill="#666666"
                />
              </svg>
              <span className="text-xs font-normal text-grey">5/5</span>
            </div>
          </div>
          <div className="flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="40"
              viewBox="0 0 30 40"
              fill="none"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M10.2222 8H19.7778C21.0056 8 22 9.19333 22 10.6667V32L15.0089 27.636L8 32V10.6667C8 9.19333 8.99444 8 10.2222 8Z"
                stroke="#070707"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
        <Link href={`/posts/${article.route}`} rel="canonical">
          <h3 className="text-2xl font-bold mb-3 text-dark">{article.title}</h3>
        </Link>
        <p className="mb-4 text-grey">{article.shortdescription}</p>

        <div className="flex text-gray-400/80 mb-2 flex-col">
          <Link
            href={'/authors/' + article.author.route}
            rel="noopener noreferrer nofollow"
            target="blank"
            className="text-base text-blue font-normal underline decoration-solid mb-5"
          >
            {article.author.authorname}
          </Link>
          <time className="text-base text-grey italic">{formattedDate}</time>
        </div>
      </article>
    </li>
  );
};

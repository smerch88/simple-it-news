import { FC } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { PopularPostProps } from './PopularPost.props';

export const PopularPost: FC<PopularPostProps> = ({ article }) => {
  return (
    <>
      {article.articlepicture.url && (
        <div className="relative w-full mb-2 sm:h-40 md:h-80">
          <Image
            src={article.articlepicture.url}
            fill
            className="object-cover rounded"
            alt={article.articlepicture.alt}
          />
        </div>
      )}
      <Link href={`/posts/${article.route}`} rel="canonical">
        <h3 className="text-xl font-bold mb-2">{article.title}</h3>
      </Link>
    </>
  );
};

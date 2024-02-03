import { gql } from '@apollo/client';
import Link from 'next/link';

import { CmsArticleType } from '@/types';
import { getClient } from '@/utils/apollo-client';

const query = gql`
  {
    allNewsposts {
      id
      route
      title
    }
  }
`;

export default async function PopularCardSecond() {
  const { data } = await getClient().query({
    query,
    context: {
      fetchOptions: {
        next: { revalidate: 60 },
      },
    },
  });

  const articles = data.allNewsposts;

  return (
    <div className="md:mb-13 mb-12">
      <h3 className="mb-4 rounded bg-black px-3 py-2 font-playfair text-t18 text-white md:text-t32">
        Популярне :
      </h3>

      <div className="overflow-x-auto">
        <ul className="mb-2 flex w-full gap-3 xl:flex xl:flex-wrap">
          {articles?.slice(0, 4).map((article: CmsArticleType) => (
            <li
              key={article.id}
              className="w-3/4 flex-shrink-0 rounded border border-lightgrey px-2 py-2 md:w-2/4 md:px-2 md:py-5 xl:w-[49%]  xl:px-4 xl:py-5"
            >
              <h3 className="mb-1 text-t14 font-normal tracking-wide text-red md:text-t16 xl:text-t18">
                Новини
              </h3>
              <Link href={`/posts/${article.route}`} rel="canonical">
                <h4 className="font-playfair text-t18 md:text-t24 ">
                  {article.title}
                </h4>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

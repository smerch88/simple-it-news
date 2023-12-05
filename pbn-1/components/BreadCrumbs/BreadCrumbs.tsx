import Link from 'next/link';
import { FC } from 'react';

type BreadCrumbsPropType = {
  link: string;
  text: string;
};

interface BreadCrumbsProps {
  list: BreadCrumbsPropType[];
}

export const BreadCrumbs: FC<BreadCrumbsProps> = ({ list }) => {
  return (
    <nav className="mb-6 md:mb-7 xl:mb-10">
      {list.map(({ link, text }, id) => {
        return (
          <Link
            key={id + text}
            rel="canonical"
            className="text-quot text-lightgrey md:text-quot xl:text-t14 "
            href={link}
          >
            {text}
          </Link>
        );
      })}
    </nav>
  );
};

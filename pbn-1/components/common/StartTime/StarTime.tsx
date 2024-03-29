import cn from 'classnames';
import { FC } from 'react';

import Star from '@/public/notsorted/star.svg';
import Time from '@/public/notsorted/time.svg';

import { StarTimeProps } from './StarTime.props';

export const StarTime: FC<StarTimeProps> = ({ time, rating, className }) => {
  return (
    <div
      className={cn(
        className,
        'flex flex-row gap-3 text-menuItemsMob10 text-grey md:text-quot xl:text-t14',
      )}
    >
      <div className="flex flex-row items-center gap-1">
        <Time className="h-3 w-3" />
        <time>{time}</time> хв.
      </div>
      <div className="flex flex-row items-center gap-1">
        <Star className="h-3 w-3 fill-grey" />
        {rating || 5}/5
      </div>
    </div>
  );
};

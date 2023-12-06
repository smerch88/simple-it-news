'use client';

import { useState } from 'react';

import StarImg from '@/public/notsorted/star.svg';

export const Stars = () => {
  const [rating, setRating] = useState(0);

  const handleStarClick = (clickedRating: number) => {
    setRating(clickedRating);
  };

  const renderStars = () => {
    const stars = [];
    const maxStars = 5;

    for (let i = 1; i <= maxStars; i++) {
      stars.push(
        <li className="cursor-pointer" key={i}>
          <StarImg
            className={`${i <= rating ? 'fill-dark' : 'fill-white'} h-6 w-6`}
            onClick={() => handleStarClick(i)}
          />
        </li>,
      );
    }

    return stars;
  };

  return <ul className="flex">{renderStars()}</ul>;
};

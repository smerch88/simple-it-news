'use client';

import { Session } from 'next-auth';
import { useState } from 'react';

import StarImg from '@/public/notsorted/star.svg';

export const Stars = ({
  custom_url,
  session,
}: {
  custom_url?: string;
  session: Session;
}) => {
  const [rating, setRating] = useState(0);
  const [showMessage, setShowMessage] = useState(false);

  const handleStarClick = async (clickedRating: number) => {
    setRating(clickedRating);
    const res = await fetch('/api/post-rating', {
      method: 'POST',
      next: { revalidate: 60 },
      body: JSON.stringify({
        clickedRating,
        custom_url,
        session,
      }),
    });

    if (res.status !== 200 && res.status !== 201) {
      setShowMessage(true);
    }
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

  return (
    <>
      <ul className="flex">{renderStars()}</ul>
      {showMessage && <p>Рейтинг вже було додано</p>}
    </>
  );
};

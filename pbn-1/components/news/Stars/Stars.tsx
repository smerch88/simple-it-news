'use client';

import { useState } from 'react';

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
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            className={`${i <= rating ? 'fill-dark' : 'fill-white'} `}
            onClick={() => handleStarClick(i)}
          >
            <path
              d="M6.45046 20.8652C6.75559 21.0981 7.12429 21.0249 7.57563 20.6788L12 17.2841L16.4244 20.6788C16.8757 21.0249 17.2508 21.0981 17.5495 20.8652C17.842 20.6322 17.9119 20.2461 17.7339 19.687L15.9985 14.2423L20.4546 10.8876C20.906 10.5481 21.0839 10.1953 20.9632 9.82258C20.8487 9.46314 20.5182 9.27011 19.9461 9.27677L14.4792 9.31005L12.8073 3.84533C12.6357 3.27956 12.3687 3 12 3C11.6313 3 11.3643 3.27956 11.1927 3.84533L9.52083 9.31005L4.05393 9.27677C3.48817 9.27011 3.15126 9.46314 3.03683 9.82258C2.91605 10.1953 3.09404 10.5481 3.54538 10.8876L8.00154 14.2423L6.27247 19.687C6.08812 20.2461 6.15805 20.6322 6.45046 20.8652Z"
              stroke="#070707"
              strokeOpacity="0.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </li>,
      );
    }

    return stars;
  };

  return <ul className="flex">{renderStars()}</ul>;
};

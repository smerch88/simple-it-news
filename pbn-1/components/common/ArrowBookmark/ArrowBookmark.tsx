'use client';
import { useState } from 'react';

import Bookmark from '@/public/notsorted/bookmark.svg';
import Share from '@/public/notsorted/share.svg';

import { ShareMenu } from '../ShareMenu';

export const ArrowBookmark = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isAddBookmark, setIsAddBookmark] = useState(false);

  const handleBookmarkClick = () => {
    setIsAddBookmark(!isAddBookmark);
    // console.log('bookmark click', isAddBookmark);
  };

  // const handleMessengeClick = (massengerName: strine) => {
  //   console.log('send messege to', massengerName);
  // };
  const handleMenuClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative flex items-center gap-x-1">
      <button
        onClick={handleMenuClick}
        className="flex h-10 w-10 items-center justify-center"
      >
        <Share />
      </button>
      <button
        onClick={handleBookmarkClick}
        className="flex h-10 w-10 items-center justify-center"
      >
        <Bookmark
          className={` ${isAddBookmark ? 'fill-black' : 'fill-white'}`}
        />
      </button>

      {isOpen && <ShareMenu />}
    </div>
  );
};

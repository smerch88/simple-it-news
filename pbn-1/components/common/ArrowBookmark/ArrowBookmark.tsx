'use client';
import { useState } from 'react';

import { ShareButton } from '@/components/Share';
import Bookmark from '@/public/notsorted/bookmark.svg';

export const ArrowBookmark = () => {
  const [isAddBookmark, setIsAddBookmark] = useState(false);

  const handleBookmarkClick = () => {
    setIsAddBookmark(!isAddBookmark);
    // console.log('bookmark click', isAddBookmark);
  };

  // const handleMessengeClick = (massengerName: strine) => {
  //   console.log('send messege to', massengerName);
  // };

  return (
    <div className="relative flex items-center gap-x-1">
      <ShareButton description="Share a post" />
      <button
        onClick={handleBookmarkClick}
        className="flex h-10 w-10 items-center justify-center"
      >
        <Bookmark
          className={` ${isAddBookmark ? 'fill-black' : 'fill-white'}`}
        />
      </button>
    </div>
  );
};

'use client';

import { Session } from 'next-auth';
import { useState } from 'react';

import { Comment } from '@/components/common/popups/Comment';

export const CommentsForm = ({
  session,
  postId,
}: {
  session: Session | null;
  postId: string;
}) => {
  const [textareaValue, setTextareaValue] = useState<string>('');
  const [isPopupShow, setIsPopupShow] = useState<boolean>(false);

  const handleClose = () => {
    setIsPopupShow(false);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    {
      !session && setIsPopupShow(true);
    }
    {
      if (session && textareaValue.length > 0) {
        fetch('/api/post-comment', {
          method: 'POST',
          body: JSON.stringify({
            comment_body: textareaValue,
            session: session,
            postId: postId,
          }),
        });
        setTextareaValue('');
      }
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="mb-6">
        <p className="mb-2 text-t14 md:text-t16 xl:text-t18">
          Залишити коментар
        </p>
        <textarea
          value={textareaValue}
          name="comment"
          rows={5}
          required
          placeholder="Введіть текст"
          onChange={e => setTextareaValue(e.target.value)}
          className="mb-2 flex w-full resize-none items-start rounded border-[0.5px] border-lightgrey p-1 text-t14 placeholder:text-center md:text-t16 md:placeholder:text-left xl:text-t18"
        />
        <button
          type="submit"
          className={` font-menuItemsMob ml-auto block rounded border-[0.5px] border-dark bg-white px-6 py-3 text-dark duration-200 hover:border-white hover:shadow-[1px_1px_5px_0px_rgba(0,_0,_0,_0.25)] md:text-lg xl:text-buttonDesk`}
        >
          Відправити
        </button>
      </form>
      {isPopupShow && <Comment handleClose={handleClose} />}
    </>
  );
};

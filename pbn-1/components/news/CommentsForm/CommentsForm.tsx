'use client';

import { useState } from 'react';

export const CommentsForm = () => {
  const [textareaValue, setTextareaValue] = useState<string>('');
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // console.log('send', textareaValue);
    //   onSubmit(textareaValue);
    setTextareaValue('');
  };
  return (
    <form onSubmit={handleSubmit} className="mb-6">
      <p className="md:text-t16 xl:text-t18 mb-2 text-t14">Залишити коментар</p>
      <textarea
        value={textareaValue}
        name="comment"
        rows={5}
        placeholder="Введіть текст"
        onChange={e => setTextareaValue(e.target.value)}
        className="md:text-t16 xl:text-t18 mb-2 flex w-full resize-none items-start rounded border-[0.5px] border-lightgrey p-1 text-t14 placeholder:text-center md:placeholder:text-left"
      />
      <button
        type="submit"
        className="font-menuItemsMob xl:text-buttonDesk ml-auto block rounded border-[0.5px] border-dark bg-white px-6 py-3 text-dark duration-200 hover:border-white hover:shadow-[1px_1px_5px_0px_rgba(0,_0,_0,_0.25)] md:text-lg"
      >
        Відправити
      </button>
    </form>
  );
};

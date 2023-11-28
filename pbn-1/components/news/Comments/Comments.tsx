'use client';

import { useState } from 'react';

export const Comments = () => {
  const [textareaValue, setTextareaValue] = useState<string>('');

  /* get Comments Api */

  const comments = [
    {
      id: 1,
      name: 'KRIS',
      text: 'Важливо ретельно вивчити умови і обов`язки, щоб уникнути неприємних сюрпризів.',
      date: '13.11.2023',
    },
    {
      id: 2,
      name: 'Арсен',
      text: 'Важливо ретельно вивчити умови і обов`язки, щоб уникнути неприємних сюрпризів.Важливо ретельно вивчити умови і обов`язки, щоб уникнути неприємних сюрпризів.',
      date: '14.11.2023',
    },

    { id: 3, name: 'Stas', text: 'Важливо', date: '13.11.2023' },
    {
      id: 4,
      name: 'KRIS',
      text: 'Важливо ретельно вивчити умови і обов`язки, щоб уникнути неприємних сюрпризів.',
      date: '13.11.2023',
    },
    {
      id: 5,
      name: 'Арсен',
      text: 'Важливо ретельно вивчити умови і обов`язки, щоб уникнути неприємних сюрпризів.Важливо ретельно вивчити умови і обов`язки, щоб уникнути неприємних сюрпризів.',
      date: '14.11.2023',
    },
    { id: 6, name: 'Stanislav', text: 'Важливо', date: '15.11.2023' },
  ];

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // console.log('send', textareaValue);
    //   onSubmit(textareaValue);
    setTextareaValue('');
  };

  const handleRemoveClick = () => {
    console.log('видалити');
  };

  return (
    <div>
      <h2 className="mb-6 text-lg font-semibold">Коментарі</h2>
      <form onSubmit={handleSubmit} className="mb-6">
        <p className="mb-2 text-sm">Залишити коментар</p>
        <textarea
          value={textareaValue}
          name="comment"
          rows={5}
          placeholder="Введіть текст"
          onChange={e => setTextareaValue(e.target.value)}
          className=" mb-2 flex w-full resize-none items-start rounded border-[0.5px] border-lightgrey p-1 placeholder:text-center"
        />
        <button
          type="submit"
          className="ml-auto block rounded border-[0.5px] border-dark bg-white px-6 py-3 font-semibold text-dark duration-200 hover:border-white hover:shadow-[1px_1px_5px_0px_rgba(0,_0,_0,_0.25)]"
        >
          Відправити
        </button>
      </form>

      {/* Other comments */}
      <ul className="flex flex-col ">
        {comments.map(comment => {
          return (
            <li key={comment.id} className={`item flex flex-col py-2`}>
              <div className="flex w-full items-center gap-x-4">
                <div className="w-12">
                  <div className={`avatar h-12 w-12 rounded-full`}>
                    {/* <img
                  src="#"
                  alt="аватарка юзера"
                  className="h-12 w-12 rounded-full "
                /> */}
                  </div>
                </div>
                <div className="flex w-full items-center justify-between">
                  <p className="text-xl font-semibold">{comment.name}</p>
                  <p className="text-[10px] text-lightgrey">{comment.date}</p>
                </div>
              </div>

              <p className="pl-[60px]">{comment.text}</p>
              {/* check comment owner */}
              <button
                className="ml-auto py-2 text-[13px] italic text-red"
                onClick={handleRemoveClick}
              >
                Видалити
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

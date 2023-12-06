import { CommentsForm } from '../CommentsForm';
import { CommentsRemoveButton } from '../CommentsRemoveButton';

export const Comments = () => {
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

  return (
    <div>
      <h2 className="mb-6 font-playfair text-menuTitleMob font-semibold md:text-menuTitleTab">
        Коментарі
      </h2>
      <CommentsForm />

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
                  <p className="text-title20">{comment.name}</p>
                  <p className="md:t16 text-menuItemsMob10 text-lightgrey xl:text-t18">
                    {comment.date}
                  </p>
                </div>
              </div>

              <p className="md:t16 pl-[60px] text-t10 xl:text-t18">
                {comment.text}
              </p>
              {/* check comment owner */}
              <CommentsRemoveButton />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

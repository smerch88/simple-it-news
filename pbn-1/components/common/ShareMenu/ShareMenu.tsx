import Copy from '@/public/notsorted/copy.svg';
import FaceBook from '@/public/socials/facebook.svg';
import Telegram from '@/public/socials/telegram.svg';
import Viber from '@/public/socials/viber.svg';
import Threads from '@/public/socials/x.svg';

export const ShareMenu = () => {
  return (
    <ul className="absolute bottom-[-50px] right-[26px] flex gap-x-1 rounded bg-white px-3 py-2">
      <li className="flex h-10 w-10 items-center justify-center rounded border-[0.5px] border-dark bg-white stroke-dark p-1 duration-300 hover:border-blue_hover hover:stroke-blue_hover">
        <button
          // onClick={() => handleMessengeClick('link')}
          aria-label="скопіювати посилання"
        >
          <Copy className="h-6 w-6 stroke-inherit" />
        </button>
      </li>
      <li className="flex h-10 w-10 items-center justify-center rounded border-[0.5px] border-dark bg-white stroke-dark p-1 duration-300 hover:border-blue_hover hover:stroke-blue_hover">
        <button
          aria-label="поділитися в телеграм"
          // onClick={() => handleMessengeClick('telegram')}
        >
          <Telegram className="h-6 w-6 stroke-inherit" />
        </button>
      </li>

      <li className="flex h-10 w-10 items-center justify-center rounded border-[0.5px] border-dark bg-white stroke-dark p-1 duration-300 hover:border-blue_hover hover:stroke-blue_hover ">
        <button
          aria-label="поділитися в фейсбук"
          // onClick={() => handleMessengeClick('facebook')}
        >
          <FaceBook className="h-6 w-6 stroke-inherit" />
        </button>
      </li>
      <li className="flex h-10 w-10 items-center justify-center rounded border-[0.5px] border-dark bg-white fill-dark duration-300 hover:border-blue_hover hover:fill-blue_hover">
        <button
          aria-label="поділитися в threads"
          // onClick={() => handleMessengeClick('threads')}
        >
          <Threads className="h-6 w-6 fill-inherit stroke-none" />
        </button>
      </li>
      <li className="flex h-10 w-10 items-center justify-center rounded border-[0.5px] border-dark bg-white stroke-dark p-1 duration-300 hover:border-blue_hover hover:stroke-blue_hover">
        <button
          aria-label="поділитися в вайбер"
          // onClick={() => handleMessengeClick('viber')}
        >
          <Viber className="h-6 w-6 stroke-inherit" />
        </button>
      </li>
    </ul>
  );
};

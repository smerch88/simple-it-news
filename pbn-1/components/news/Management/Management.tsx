'use client';

import Image from 'next/image';
import { useState } from 'react';

export const Management = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [bookmark, setBookmark] = useState(false);

  const handleMenuClick = () => {
    setIsOpen(!isOpen);
  };

  const handleBookmarkClick = () => {
    setBookmark(!bookmark);
    // console.log('bookmark click', bookmark);
  };

  // const handleMessengeClick = (massengerName: strine) => {
  //   console.log('send messege to', massengerName);
  // };
  return (
    <div className="flex items-center justify-between">
      <div className="flex">
        <div className="flex items-center gap-x-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
          >
            <path
              d="M12.551 6.52228C12.551 9.84807 9.85353 12.5446 6.5255 12.5446C3.19748 12.5446 0.5 9.84807 0.5 6.52228C0.5 3.1965 3.19748 0.5 6.5255 0.5C9.85353 0.5 12.551 3.1965 12.551 6.52228Z"
              stroke="#666666"
            />
            <path
              d="M3.17894 7.06579H6.60927C6.86554 7.06579 7.06927 6.88526 7.06927 6.64456V2.58923C7.06927 2.35458 6.86554 2.17407 6.60927 2.17407C6.353 2.17407 6.15583 2.35458 6.15583 2.58923V6.2294H3.17894C2.91608 6.2294 2.71893 6.40992 2.71893 6.64456C2.71893 6.88526 2.91608 7.06579 3.17894 7.06579Z"
              fill="#666666"
            />
          </svg>
          <p className="text-[10px] text-grey md:text-xs xl:text-sm">15 хв.</p>
        </div>
        <div className="ml-2 flex items-center gap-x-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="13"
            height="14"
            viewBox="0 0 13 14"
            fill="none"
          >
            <path
              d="M2.492 13.4026C2.71237 13.5709 2.97865 13.518 3.30462 13.268L6.5 10.8163L9.69538 13.268C10.0213 13.518 10.2922 13.5709 10.508 13.4026C10.7192 13.2344 10.7697 12.9555 10.6411 12.5517L9.38778 8.61942L12.6061 6.19657C12.9321 5.95141 13.0606 5.69662 12.9734 5.42742C12.8908 5.16783 12.652 5.02842 12.2388 5.03322L8.29051 5.05726L7.08307 1.11052C6.95911 0.701904 6.76628 0.5 6.5 0.5C6.23372 0.5 6.04089 0.701904 5.91693 1.11052L4.70949 5.05726L0.761171 5.03322C0.352567 5.02842 0.10924 5.16783 0.0266011 5.42742C-0.0606291 5.69662 0.0679207 5.95141 0.393886 6.19657L3.61222 8.61942L2.36345 12.5517C2.23031 12.9555 2.28081 13.2344 2.492 13.4026Z"
              fill="#666666"
            />
          </svg>
          <p className="text-[10px] text-grey md:text-xs xl:text-sm">5/5</p>
        </div>
      </div>
      <div className="relative flex items-center gap-x-1">
        <button
          onClick={handleMenuClick}
          className="flex h-10 w-10 items-center justify-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="20"
            viewBox="0 0 24 20"
          >
            <path
              d="M12.8501 19.9891C13.3842 19.9891 13.8202 19.7711 14.3434 19.2807L22.9428 11.1608C23.357 10.7684 23.4986 10.3542 23.4986 9.99456C23.4986 9.62402 23.3679 9.22071 22.9428 8.81744L14.3434 0.773842C13.7657 0.228883 13.406 0 12.8719 0C12.109 0 11.564 0.599455 11.564 1.3297V5.4496H11.248C3.41145 5.4496 0 10.4741 0 18.5286C0 19.466 0.53406 19.9891 1.12261 19.9891C1.58038 19.9891 2.08174 19.8801 2.46322 19.1826C4.35967 15.6186 7.02997 14.5504 11.248 14.5504H11.564V18.7139C11.564 19.4441 12.109 19.9891 12.8501 19.9891ZM13.4714 17.6458C13.3842 17.6458 13.3188 17.5803 13.3188 17.4823V13.2643C13.3188 13.0136 13.2098 12.9046 12.9591 12.9046H11.4987C6.32153 12.9046 3.01907 14.703 1.73297 17.4387C1.70027 17.515 1.67848 17.5477 1.62398 17.5477C1.58038 17.5477 1.54768 17.515 1.54768 17.4278C1.76567 12.2834 4.0109 7.09537 11.4987 7.09537H12.9591C13.2098 7.09537 13.3188 6.98638 13.3188 6.7357V2.40872C13.3188 2.32152 13.3842 2.25613 13.4823 2.25613C13.5477 2.25613 13.6131 2.29973 13.6676 2.34332L21.4278 9.78743C21.5041 9.86379 21.5367 9.92918 21.5367 9.99456C21.5367 10.0599 21.515 10.1144 21.4278 10.2017L13.6567 17.5477C13.6022 17.6131 13.5368 17.6458 13.4714 17.6458Z"
              fill="#070707"
            />
          </svg>
        </button>
        <button
          onClick={handleBookmarkClick}
          className="flex h-10 w-10 items-center justify-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="40"
            viewBox="0 0 30 40"
            className={` ${bookmark ? 'fill-black' : 'fill-white'}`}
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M10.2222 8H19.7778C21.0056 8 22 9.19333 22 10.6667V32L15.0089 27.636L8 32V10.6667C8 9.19333 8.99444 8 10.2222 8Z"
              stroke="#070707"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        {isOpen && (
          <ul className="absolute bottom-[-50px] right-[26px] flex gap-x-1 rounded bg-white px-3 py-2">
            <li className="flex h-10 w-10 items-center justify-center rounded border-[0.5px] border-dark bg-white p-1">
              <button
              // onClick={() => handleMessengeClick('link')}
              >
                <Image
                  src="/card/link.svg"
                  alt="скопіювати посилання"
                  width={24}
                  height={24}
                />
              </button>
            </li>
            <li className="flex h-10 w-10 items-center justify-center rounded border-[0.5px] border-dark bg-white p-1">
              <button
              // onClick={() => handleMessengeClick('telegram')}
              >
                <Image
                  src="/card/telegram.svg"
                  alt="поділитися в телеграм"
                  width={24}
                  height={24}
                />
              </button>
            </li>

            <li className="flex h-10 w-10 items-center justify-center rounded border-[0.5px] border-dark bg-white p-1">
              <button
              // onClick={() => handleMessengeClick('facebook')}
              >
                <Image
                  src="/card/facebook.svg"
                  alt="поділитися в фейсбук"
                  width={24}
                  height={24}
                />
              </button>
            </li>
            <li className="flex h-10 w-10 items-center justify-center rounded border-[0.5px] border-dark bg-white ">
              <button
              // onClick={() => handleMessengeClick('threads')}
              >
                <Image
                  src="/card/threads.svg"
                  alt="поділитися в threads"
                  width={24}
                  height={24}
                />
              </button>
            </li>
            <li className="flex h-10 w-10 items-center justify-center rounded border-[0.5px] border-dark bg-white p-1">
              <button
              // onClick={() => handleMessengeClick('viber')}
              >
                <Image
                  src="/card/viber.svg"
                  alt="поділитися в вайбер"
                  width={24}
                  height={24}
                />
              </button>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
};

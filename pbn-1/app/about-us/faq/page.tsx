import './Faq.css';
import Link from 'next/link';
import AskIcon from '@/public/notsorted/question-mark.svg';
import DownIcon from '@/public/notsorted/arrow-down.svg';
import data from '@/data/faq.json';
export default function Page() {
  return (
    <div className="container">
      <nav>
        <ul className="mb-2 flex flex-row md:mb-4">
          <li>
            <Link href="/" rel="canonical">
              Головна
            </Link>
          </li>{' '}
          <li className="before:content-['/'] hover:opacity-75">
            {' '}
            <Link href={'/posts/'} rel="canonical">
              Про нас
            </Link>
          </li>
          <li className="before:content-['/'] hover:opacity-75">
            {' '}
            <Link href={'/posts/'} rel="canonical">
              FAQ
            </Link>{' '}
          </li>
        </ul>
      </nav>
      <h1 className="text-t32 font-normal ">FAQ</h1>
      <div className="mt-6 text-base font-semibold">
        <p className="last:mt-3 ">Маєш питання? Знайди його тут.</p>
        <p className="last:mt-3 ">
          Не знайшов? Напиши нам на
          <Link className="text-blue" href="whatsApp">
            WhatsApp
          </Link>
        </p>
      </div>
      <ul className="mt-8">
        {data?.map(({ title, text, link, id }) => (
          <li className="no-select rounded-tl-8 rounded-tr-8 mb-2 flex cursor-pointer gap-2 last:mb-0">
            <details className="group relative w-full">
              <summary className="mb-2 flex list-none border-b border-dark pb-2 pr-5 text-t24 text-dark smOnly:text-menuTitleMob">
                <AskIcon className="mr-2 mt-1 h-5 w-5" />
                {title}
                <DownIcon className="arrwoIcon group:rotate-180 absolute right-0 top-2 h-5 w-5 rotate-0 transform bg-white transition-transform duration-300 group-open:rotate-180 group-focus:rotate-180 smOnly:top-1 smOnly:h-5 smOnly:w-5" />
              </summary>
              <p className="max-w-[653px] text-menuTitleMob text-grey smOnly:max-w-[262px] smOnly:text-t14 mdOnly:text-menuItemsMob">
                {text}
                <Link className="text-blue" href="/">
                  {link}
                </Link>
              </p>
            </details>
          </li>
        ))}
      </ul>
    </div>
  );
}

import Link from 'next/link';
import AskIcon from '@/public/faq/questionIcon.svg';
import UpIcon from '@/public/faq/state=chevron-up-big.svg';
import DownIcon from '@/public/faq/state=chevron-down-big.svg';
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
      <h1 className=" text-lg font-normal ">FAQ</h1>
      <div className="  mt-6 text-base font-semibold">
        <p className=" last:mt-3 ">Маєш питання? Знайди його тут.</p>
        <p className=" last:mt-3 ">
          Не знайшов? Напиши нам на{' '}
          <Link className="text-blue " href={'whatsApp'}>
            WhatsApp
          </Link>
        </p>
      </div>
      <ul className=" mt-8">
        <li className=" cursor-pointer rounded-tl-8  rounded-tr-8 flex gap-2   mb-2  last:mb-0 ">
          <details className=' w-full relative'>
            <summary className='  border-b border-dark list-none  text-dark  flex pr-5 pb-2 mb-2  smOnly:text-menuTitleMob   text-t24'>
              <AskIcon className=" mt-1 h-5 w-5 mr-2 " />
              Can I use FlowBite in open-source projects?
              <DownIcon className="absolute  smOnly:top-1 top-2 right-0 bg-white smOnly:h-5  smOnly:w-5  h-5 w-5" />
            </summary>
            <p  className='text-grey  smOnly:text-t14  smOnly:max-w-[262px]   mdOnly:text-menuItemsMob max-w-[653px]  text-menuTitleMob'>
              Generally, it is accepted to use FlowBite in open-source projects,
              as long as it is not a UI library, a theme, a template, a
              page-builder that would be considered as an alternative to
              FlowBite itself.<br />
              With that being said, feel free to use this design kit for your open-source projects.<br/>
              Find out more information by <Link className=' text-blue' href='/'> reading the license.</Link>
            </p>
            <UpIcon className="absolute  smOnly:top-1 top-2 right-0 bg-white smOnly:h-5 smOnly:w-5  h-5 w-5" />
          </details>
        </li>
        <li className=" cursor-pointer rounded-tl-8  rounded-tr-8 flex gap-2   mb-2  last:mb-0 ">
          <details className=' w-full relative'>
            <summary className='  border-b border-dark list-none  text-dark  flex pr-5 pb-2 mb-2  smOnly:text-menuTitleMob   text-t24'>
              <AskIcon className=" mt-1 h-5 w-5 mr-2 " />
              Can I use FlowBite in open-source projects?
              <DownIcon className="absolute  smOnly:top-1 top-2 right-0 bg-white smOnly:h-5  smOnly:w-5  h-5 w-5" />
            </summary>
            <p  className='text-grey  smOnly:text-t14  smOnly:max-w-[262px]   mdOnly:text-menuItemsMob max-w-[653px]  text-menuTitleMob'>
              Generally, it is accepted to use FlowBite in open-source projects,
              as long as it is not a UI library, a theme, a template, a
              page-builder that would be considered as an alternative to
              FlowBite itself.<br />
              With that being said, feel free to use this design kit for your open-source projects.<br/>
              Find out more information by <Link className=' text-blue' href='/'> reading the license.</Link>
            </p>
            <UpIcon className="absolute  smOnly:top-1 top-2 right-0 bg-white smOnly:h-5 smOnly:w-5  h-5 w-5" />
          </details>
        </li>
        <li className=" cursor-pointer rounded-tl-8  rounded-tr-8 flex gap-2   mb-2  last:mb-0 ">
          <details className=' w-full relative'>
            <summary className='  border-b border-dark list-none  text-dark  flex pr-5 pb-2 mb-2  smOnly:text-menuTitleMob   text-t24'>
              <AskIcon className=" mt-1 h-5 w-5 mr-2 " />
              Can I use FlowBite in open-source projects?
              <DownIcon className="absolute  smOnly:top-1 top-2 right-0 bg-white smOnly:h-5  smOnly:w-5  h-5 w-5" />
            </summary>
            <p  className='text-grey  smOnly:text-t14  smOnly:max-w-[262px]   mdOnly:text-menuItemsMob max-w-[653px]  text-menuTitleMob'>
              Generally, it is accepted to use FlowBite in open-source projects,
              as long as it is not a UI library, a theme, a template, a
              page-builder that would be considered as an alternative to
              FlowBite itself.<br />
              With that being said, feel free to use this design kit for your open-source projects.<br/>
              Find out more information by <Link className=' text-blue' href='/'> reading the license.</Link>
            </p>
            <UpIcon className="absolute  smOnly:top-1 top-2 right-0 bg-white smOnly:h-5 smOnly:w-5  h-5 w-5" />
          </details>
        </li>
        <li className=" cursor-pointer rounded-tl-8  rounded-tr-8 flex gap-2   mb-2  last:mb-0 ">
          <details className=' w-full relative'>
            <summary className='  border-b border-dark list-none  text-dark  flex pr-5 pb-2 mb-2  smOnly:text-menuTitleMob   text-t24'>
              <AskIcon className=" mt-1 h-5 w-5 mr-2 " />
              Can I use FlowBite in open-source projects?
              <DownIcon className="absolute  smOnly:top-1 top-2 right-0 bg-white smOnly:h-5  smOnly:w-5  h-5 w-5" />
            </summary>
            <p  className='text-grey  smOnly:text-t14  smOnly:max-w-[262px]   mdOnly:text-menuItemsMob max-w-[653px]  text-menuTitleMob'>
              Generally, it is accepted to use FlowBite in open-source projects,
              as long as it is not a UI library, a theme, a template, a
              page-builder that would be considered as an alternative to
              FlowBite itself.<br />
              With that being said, feel free to use this design kit for your open-source projects.<br/>
              Find out more information by <Link className=' text-blue' href='/'> reading the license.</Link>
            </p>
            <UpIcon className="absolute  smOnly:top-1 top-2 right-0 bg-white smOnly:h-5 smOnly:w-5  h-5 w-5" />
          </details>
        </li>
        <li className=" cursor-pointer rounded-tl-8  rounded-tr-8 flex gap-2   mb-2  last:mb-0 ">
          <details className=' w-full relative'>
            <summary className='  border-b border-dark list-none  text-dark  flex pr-5 pb-2 mb-2  smOnly:text-menuTitleMob   text-t24'>
              <AskIcon className=" mt-1 h-5 w-5 mr-2 " />
              Can I use FlowBite in open-source projects?
              <DownIcon className="absolute  smOnly:top-1 top-2 right-0 bg-white smOnly:h-5  smOnly:w-5  h-5 w-5" />
            </summary>
            <p  className='text-grey  smOnly:text-t14  smOnly:max-w-[262px]   mdOnly:text-menuItemsMob max-w-[653px]  text-menuTitleMob'>
              Generally, it is accepted to use FlowBite in open-source projects,
              as long as it is not a UI library, a theme, a template, a
              page-builder that would be considered as an alternative to
              FlowBite itself.<br />
              With that being said, feel free to use this design kit for your open-source projects.<br/>
              Find out more information by <Link className=' text-blue' href='/'> reading the license.</Link>
            </p>
            <UpIcon className="absolute  smOnly:top-1 top-2 right-0 bg-white smOnly:h-5 smOnly:w-5  h-5 w-5" />
          </details>
        </li>
            </ul>
    </div>
  );
}

import Link from 'next/link';
import AskIcon from '@/public/faq/questionIcon.svg'
import UpIcon from '@/public/faq/state=chevron-up-big.svg'
import DownIcon from '@/public/faq/state=chevron-down-big.svg'
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
      <h1 className=' text-lg font-normal '>FAQ</h1>
      <div className='  mt-6 text-base font-semibold'>
      <p className=' last:mt-3 '>Маєш питання? Знайди його тут.</p>
      <p className=' last:mt-3 '>Не знайшов? напиши нам на <Link className='text-blue ' href={'whatsApp'}>WhatsApp</Link></p>
      </div>
      <ul className=' mt-8'>
        <li className='last:mt-3  border-black rounded-tl-8 rounded-tr-8  border-b flex gap-2  text-lg font-semibold '> <details> <summary><AskIcon className=" mt-1 h-5 w-5"/>Can I use FlowBite in open-source projects?<DownIcon className=" mt-1 h-5 w-5"/> </summary> 
        <p>
        Generally, it is accepted to use FlowBite in open-source projects, as long as it is not a UI library, a theme, a template, a page-builder that would be considered as an alternative to FlowBite itself.
          </p> </details></li>
        <li className='last:mt-3  border-black rounded-tl-8 rounded-tr-8  border-b flex gap-2  text-lg font-semibold '><AskIcon className=" mt-1 h-5 w-5"/> Can I use FlowBite in open-source projects?<DownIcon className=" mt-1 h-5 w-5"/></li>
        <li className='last:mt-3  border-black rounded-tl-8 rounded-tr-8  border-b flex gap-2  text-lg font-semibold '><AskIcon className=" mt-1 h-5 w-5"/> Can I use FlowBite in open-source projects?<DownIcon className=" mt-1 h-5 w-5"/></li>
        <li className='last:mt-3  border-black rounded-tl-8 rounded-tr-8  border-b flex gap-2  text-lg font-semibold '><AskIcon className=" mt-1 h-5 w-5"/> Can I use FlowBite in open-source projects?<DownIcon className=" mt-1 h-5 w-5"/></li>
      </ul>
    </div>
  );
}

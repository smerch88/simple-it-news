import Link from 'next/link';

import Logo from '@/public/header/logo.svg';
import Facebook from '@/public/socials/facebook.svg';
import LinkedIn from '@/public/socials/linkedin.svg';
import Telegram from '@/public/socials/telegram.svg';
import Twitter from '@/public/socials/twitter.svg';

export const Footer = () => (
  <footer id="footer" className="bg-dark py-3 ">
    <div className="container flex flex-col gap-2">
      {/* TODO: add real links */}
      <div className="xl:flex xl:flex-row xl:items-center xl:justify-between">
        <Link href="/" className="hidden xl:flex">
          <Logo className="h-6 w-[106px]" />
        </Link>
        <ul className="mb-2 flex flex-row justify-center gap-4 text-white">
          <li>
            <Link href="#" target="blank" rel="noreferrer nofollow">
              <Telegram className="h-8 w-8" />
            </Link>
          </li>
          <li>
            <Link
              href="https://twitter.com/simpleitnews"
              target="blank"
              rel="noreferrer nofollow"
            >
              <LinkedIn className="h-8 w-8" />
            </Link>
          </li>
          <li>
            <Link href="#" target="blank" rel="noreferrer nofollow">
              <Twitter className="h-8 w-8" />
            </Link>
          </li>
          <li>
            <Link
              href="https://www.facebook.com/groups/297247483170966"
              target="blank"
              rel="noreferrer nofollow"
            >
              <Facebook className="h-8 w-8" />
            </Link>
          </li>
        </ul>
      </div>
      <div className="flex flex-col text-center text-quot text-white">
        <Link href="/" className="xl:hidden">
          Simple IT News
        </Link>
        <span>Copyright © {new Date().getFullYear()} Simple IT News</span>
      </div>
    </div>
  </footer>
);

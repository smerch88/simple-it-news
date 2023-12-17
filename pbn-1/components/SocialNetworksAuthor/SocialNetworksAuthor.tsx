import Link from 'next/link';
import { FC } from 'react';
import Facebook from '@/public/socials/facebook.svg';
import Twitter from '@/public/socials/twitter.svg';
import Linkedin from '@/public/socials/linkedin.svg';
import Telegram from '@/public/socials/telegram.svg';
type SocialIconsProps = {
  socials: [string, string][];
};

export const SocialNetworksAuthor: FC<SocialIconsProps> = ({ socials }) => {
  const renderSocialIcons = () => {
    return socials.map(([platform, link]) => {
      let IconComponent = null;

      switch (platform) {
        case 'facebook':
          IconComponent = <Facebook className="h-10 w-10 text-black" />;

          break;
        case 'twitter':
          IconComponent = <Twitter className="h-10 w-10 text-black" />;

          break;
        case 'linkedin':
          IconComponent = <Linkedin className="h-10 w-10 text-black" />;

          break;
        case 'telegram':
          IconComponent = <Telegram className="h-10 w-10 text-black" />;

          break;

        default:
          break;
      }

      if (IconComponent) {
        return (
          <li key={platform} className="mr-3 hover:underline">
            <Link href={link} target="_blank" rel="noopener noreferrer">
              {IconComponent}
            </Link>
          </li>
        );
      }

      return null;
    });
  };

  return <ul className="flex">{renderSocialIcons()}</ul>;
};

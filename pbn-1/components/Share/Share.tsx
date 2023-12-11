'use client';
import { useEffect, useState } from 'react';

import Share from '@/public/notsorted/share.svg';

type ShareItem = {
  func: () => void;
  icon: JSX.Element;
};

export const ShareButton = ({ description }: { description: string }) => {
  const [url, setUrl] = useState('');
  const [showList, setShowList] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setUrl(window.location.href);
    }
  }, []);

  const toggleList = () => {
    setShowList(!showList);
  };

  const handleShareWebAPI = () => {
    if (navigator.share) {
      navigator
        .share({
          title: description,
          url: url,
        })
        .catch(err => alert('Error Sharing: ' + err));
    }
  };

  const openWhatsapp = () => {
    window.open(`https://wa.me/?text=${encodeURI(description)}`);
  };

  const openTelegram = () => {
    window.open(
      `https://telegram.me/share/url?url=${url}&text=${encodeURI(description)}`,
    );
  };

  const openLinkedIn = () => {
    window.open(
      `https://www.linkedin.com/shareArticle?mini=true&url=${url}&title=${encodeURI(
        description,
      )}`,
    );
  };

  const openTwitter = () => {
    window.open(
      `https://twitter.com/intent/tweet?url=${url}&text=${encodeURI(
        description,
      )}`,
    );
  };

  const openFacebook = () => {
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`);
  };

  // TODO: refactor to common icons in future
  const shareList: ShareItem[] = [
    {
      func: handleShareWebAPI,
      icon: (
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="0.25"
            y="0.25"
            width="39.5"
            height="39.5"
            rx="3.75"
            fill="#FEFEFE"
          />
          <rect
            x="0.25"
            y="0.25"
            width="39.5"
            height="39.5"
            rx="3.75"
            stroke="#070707"
            strokeWidth="0.5"
          />
          <path
            d="M27.2177 21L30.2985 17.9192C32.5672 15.6505 32.5672 11.9715 30.2985 9.70151C28.0298 7.43283 24.3508 7.43283 22.0808 9.70151L19 12.7823"
            stroke="#070707"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M16 24L24 16"
            stroke="#070707"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12.7823 19L9.70151 22.0808C7.43283 24.3495 7.43283 28.0285 9.70151 30.2985V30.2985C11.9702 32.5672 15.6492 32.5672 17.9192 30.2985L21 27.2177"
            stroke="#070707"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      func: openTelegram,
      icon: (
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="0.25"
            y="0.25"
            width="39.5"
            height="39.5"
            rx="3.75"
            stroke="black"
            strokeWidth="0.5"
          />
          <path
            d="M19.9496 27.9383L17.4269 31.5603C16.9896 32.1877 16.2578 31.9101 16.0807 31.0483L13.9373 23.3823"
            stroke="black"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M24.7379 17.5487C24.7379 17.5487 20.6713 21.5243 18.5853 23.5649C17.9618 24.1742 18.0136 25.2464 18.689 25.7859L27.1364 32.5476C27.9673 33.2131 29.1548 32.7246 29.3699 31.6286L33.5182 10.4449C33.7193 9.42036 32.791 8.5643 31.8894 8.94042L7.51959 19.1247C6.80177 19.4242 6.83632 20.5355 7.56985 20.784L13.9373 22.8813"
            stroke="black"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      func: openLinkedIn,
      icon: (
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="0.25"
            y="0.25"
            width="39.5"
            height="39.5"
            rx="3.75"
            stroke="black"
            strokeWidth="0.5"
          />
          <path
            d="M11.3455 17.4985V32"
            stroke="black"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M17.0107 31.9999V23.5407C17.0107 20.2027 19.715 17.4984 23.053 17.4984V17.4984C26.3911 17.4984 29.0953 20.2027 29.0953 23.5407V31.9999"
            stroke="black"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M11.3401 8.7385C11.0071 8.7385 10.7358 9.00973 10.7385 9.34273C10.7385 9.67573 11.0097 9.94696 11.3427 9.94696C11.6757 9.94696 11.947 9.67573 11.947 9.34273C11.947 9.00705 11.6757 8.7385 11.3401 8.7385"
            stroke="black"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      func: openFacebook,
      icon: (
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="0.25"
            y="0.25"
            width="39.5"
            height="39.5"
            rx="3.75"
            stroke="black"
            strokeWidth="0.5"
          />
          <path
            d="M13 20.1818H26.2"
            stroke="black"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M26.2001 8.18176H24.4683C21.7809 8.18176 19.6001 10.8748 19.6001 14.1936V16.3323V32.1818"
            stroke="black"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      func: openTwitter,
      icon: (
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="0.25"
            y="0.25"
            width="39.5"
            height="39.5"
            rx="3.75"
            stroke="black"
            strokeWidth="0.5"
          />
          <path
            d="M8.05854 9L17.3256 22.2391L8 33H10.1L18.2622 23.5759L24.8585 33H32L22.2134 19.0182L30.8915 9H28.7951L21.2768 17.6775L15.2037 9H8.05854ZM11.1463 10.6495H14.428L28.9159 31.3466H25.6341L11.1463 10.6495Z"
            fill="black"
          />
        </svg>
      ),
    },

    {
      func: openWhatsapp,
      icon: (
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="0.25"
            y="0.25"
            width="39.5"
            height="39.5"
            rx="3.75"
            fill="#FEFEFE"
          />
          <rect
            x="0.25"
            y="0.25"
            width="39.5"
            height="39.5"
            rx="3.75"
            stroke="#070707"
            strokeWidth="0.5"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M20 32C26.6274 32 32 26.6274 32 20C32 13.3726 26.6274 8 20 8C13.3726 8 8 13.3726 8 20C8 26.6274 13.3726 32 20 32Z"
            stroke="#070707"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M16.7118 23.2833C19.768 26.341 23.6404 28.2899 25.9434 25.9966L26.502 25.438C27.2468 24.6946 27.1432 23.4625 26.278 22.8619C25.7334 22.4825 25.1482 22.0751 24.5014 21.6201C23.8322 21.1496 22.9152 21.2238 22.3342 21.7993L21.7028 22.4265C20.9202 21.9309 20.146 21.2939 19.4264 20.5756L19.4236 20.5728C18.7054 19.8546 18.0684 19.079 17.5728 18.2963L18.2 17.6649C18.7768 17.0853 18.8482 16.1669 18.3792 15.4976C17.9228 14.8508 17.5154 14.2656 17.1374 13.721C16.5368 12.8571 15.3048 12.7535 14.5614 13.497L14.0028 14.0556C11.711 16.3587 13.6584 20.2284 16.7146 23.2875"
            stroke="#070707"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
  ];

  return (
    <div>
      <button
        onClick={toggleList}
        className="flex h-10 w-10 items-center justify-center"
      >
        <Share />
      </button>
      {showList && (
        <ul className="absolute right-0 flex w-max content-center items-center gap-2 bg-white">
          {shareList.map(({ func, icon }, id) => (
            // TODO: check smth strange with styles if no fixed width and height
            <li key={id} className="h-10 w-10">
              <button onClick={func}>{icon}</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

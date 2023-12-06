import { SliderCard } from '../SliderCard';

// Data

const data = [
  {
    id: 1,
    category: 'Новини',
    imgSrc: '/card/card_mobile.png',
    title: 'Курси IT з Працевлаштуванням: чому не всі стають айтішниками?',
    link: '/',
  },
  {
    id: 2,
    category: 'Новини',
    imgSrc: '/card/card_mobile2.png',
    title: 'Курси IT з Працевлаштуванням: чому не всі стають айтішниками?',
    link: '/',
  },
  {
    id: 3,
    category: 'Новини',
    imgSrc: '/card/card_mobile3.png',
    title: 'Курси IT з Працевлаштуванням: чому не всі стають айтішниками?',
    link: '/',
  },
  {
    id: 4,
    category: 'Новини',
    imgSrc: '/card/card_mobile.png',
    title: 'Курси IT з Працевлаштуванням: чому не всі стають айтішниками?',
    link: '/',
  },
];

// const featuredProducts = [
//   '/card_mobile.png',
//   '/card_mobile.png',
//   '/card_mobile.png',
// ];

const getFilterPass = async (
  mode: string,
  author_id?: number | null,
  categories?: number | null,
) => {
  switch (mode) {
    case 'author':
      return `filter news by author ${author_id}`;
    case 'categories':
      return `filter news by category ${categories}`;

    default:
      break;
  }
};

const getSliders = async (filter: string | undefined) => {
  // const res = await fetch(
  //   process.env.NEXT_PUBLIC_API_BASE_URL + `/api/News?${filter}`,
  //   {
  //     method: 'GET',
  //     next: { revalidate: 43200 },
  //   },
  // );
  // return res.json();
  return filter;
};

export default async function Carousel({
  mode,
  author_id = null,
  categories = null,
}: {
  mode: string;
  author_id?: number | null;
  categories?: number | null;
}) {
  const filter = await getFilterPass(mode, author_id, categories);

  const filteredData = await getSliders(filter);
  /* eslint-disable */
  console.log(filteredData);
  /* eslint-enable */
  return (
    <div className="relative inline-flex w-full flex-nowrap overflow-hidden">
      <ul className="flex animate-infinite-scroll items-center justify-center md:justify-start [&_img]:max-w-none [&_li]:mx-8">
        {data.map(slider => {
          return <SliderCard slider={slider} key={slider.id} />;
        })}
      </ul>
      <ul
        className="flex animate-infinite-scroll items-center justify-center md:justify-start [&_img]:max-w-none [&_li]:mx-8"
        aria-hidden="true"
      >
        {data.map(slider => {
          return <SliderCard slider={slider} key={slider.id} />;
        })}
      </ul>
    </div>
  );
}

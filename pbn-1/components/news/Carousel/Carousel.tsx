import { SliderCard } from '../SliderCard';
import { SliderProps } from '../SliderCard/SliderCard.props';

const getFilterPass = async (
  mode: string,
  author?: string | null,
  categories?: string | null,
) => {
  switch (mode) {
    case 'author':
      return `${author}`;
    case 'categories':
      return `${categories}`;

    default:
      break;
  }
};

const getSliders = async (filter: string | undefined, mode: string) => {
  if (mode === 'categories') {
    const res = await fetch(
      process.env.NEXT_PUBLIC_API_BASE_URL +
        `/api/ApprovedNews/?category=${filter}`,
      {
        method: 'GET',
        next: { revalidate: 43200 },
      },
    );
    return res.json();
  }

  if (mode === 'author') {
    const res = await fetch(
      process.env.NEXT_PUBLIC_API_BASE_URL + `/api/Authors/${filter}/`,
      {
        method: 'GET',
        next: { revalidate: 43200 },
      },
    );
    return res.json();
  }

  // return filter;
};

export default async function Carousel({
  mode,
  author = '',
  categories = '',
  custom_category,
}: {
  mode: string;
  author?: string | null;
  categories?: string | null;
  custom_category: string;
}) {
  const filter = await getFilterPass(mode, author, categories);
  const filteredData = await getSliders(filter, mode);

  console.log('filteredData', filteredData.results, 'filteredData');
  return (
    <div className="relative inline-flex w-full flex-nowrap overflow-hidden">
      <ul className="flex animate-infinite-scroll items-center justify-center md:justify-start [&_img]:max-w-none [&_li]:mx-8">
        {filteredData?.map((slider: SliderProps) => {
          return (
            <SliderCard
              slider={slider}
              key={slider.id}
              custom_category={custom_category}
            />
          );
        })}
      </ul>
      <ul
        className="flex animate-infinite-scroll items-center justify-center md:justify-start [&_img]:max-w-none [&_li]:mx-8"
        aria-hidden="true"
      >
        {filteredData?.map((slider: SliderProps) => {
          return (
            <SliderCard
              slider={slider}
              key={slider.id}
              custom_category={custom_category}
            />
          );
        })}
      </ul>
    </div>
  );
}

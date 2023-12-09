import { Metadata } from 'next';

import { BreadCrumbs } from '@/components/BreadCrumbs';
import { CardPostRest } from '@/components/CardPost/CardPostRest';
import { RESTAPIPost } from '@/types';

export async function generateMetadata(): Promise<Metadata> {
  return {
    openGraph: {
      title: 'Simple IT News',
      description: 'Просто ІТ новини. Читайте новини зі світу АйТі.',
      url: process.env.DB_HOST,
      siteName: 'Simple IT News',
      images: [
        {
          url: `/favicon/android-chrome-512x512.png`,
          width: 512,
          height: 512,
        },
        {
          url: `/favicon/android-chrome-192x192.png`,
          width: 192,
          height: 192,
          alt: 'Прості ІТ Новини',
        },
      ],
      locale: 'uk',
      type: 'website',
    },
  };
}

const breadCrumbsList = [
  {
    link: '/',
    text: 'Головна /',
  },
  {
    link: '/news',
    text: 'Новини',
  },
];

async function getNews() {
  const res = await fetch(
    process.env.NEXT_PUBLIC_API_BASE_URL + '/api/ApprovedNews/?categorie=news',
    {
      next: { revalidate: 60 },
    },
  );
  return res.json();
}

export default async function News() {
  const newsData = getNews();
  const [news] = await Promise.all([newsData]);

  return (
    <div className="container">
      <BreadCrumbs list={breadCrumbsList} />
      <h1 className="mb-8 font-playfair text-menuTitleTab md:text-t32 xl:mb-10 xl:text-t40">
        Новини
      </h1>
      <div className="order-1 flex w-full flex-col xl:col-start-1 xl:col-end-1 xl:row-start-1 xl:row-end-4">
        <ul className="mb-2 flex flex-col gap-12">
          {news.map((article: RESTAPIPost) => (
            <CardPostRest key={article.id} article={article} type="category" />
          ))}
        </ul>
      </div>
    </div>
  );
}

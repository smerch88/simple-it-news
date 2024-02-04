import Link from 'next/link';

async function getNews() {
  const res = await fetch(
    process.env.NEXT_PUBLIC_API_BASE_URL + '/api/RandomApprovedNews/',
    {
      next: { revalidate: 7200 },
    },
  );
  return res.json();
}

export async function AlsoRead() {
  const newsData = getNews();
  const [news] = await Promise.all([newsData]);

  return (
    <ul>
      {news &&
        news.map(
          ({
            id,
            title,
            custom_url,
          }: {
            id: string;
            title: string;
            custom_url: string;
          }) => (
            <li className="mb-5 border-b-2" key={id}>
              <Link href={`/news/${custom_url}`} rel="canonical">
                <p className="mb-3 text-t16 md:mb-2 md:text-t18 xl:text-t20">
                  {title}
                </p>
              </Link>
            </li>
          ),
        )}
    </ul>
  );
}

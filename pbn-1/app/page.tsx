import { Post } from '@/components/Post';
import { ScrollBtn } from '@/components/ScrollBtn';
import { ArticleType } from '@/types';

async function getNews() {
  const res = await fetch(
    'https://newsapi.org/v2/everything?q=programming&sortBy=publishedAt&apiKey=2d80d99cb4a646c8b306a0a9cfee8dba',
  );
  return res.json();
}

export default async function Home() {
  const newsData = getNews();
  const [news] = await Promise.all([newsData]);

  return (
    <div className="container relative">
      <h1 className="text-2xl uppercase text-center font-semibold">
        Актуальні IT Новини
      </h1>
      <h2 className="text-sm mb-2 uppercase text-center font-semibold">
        Читай про айті просто
      </h2>
      <ul className="flex flex-col gap-8">
        {news.articles.map((article: ArticleType, index: number) => (
          <Post key={'arcticle' + index} article={article} />
        ))}
      </ul>
      <ScrollBtn>Нагору</ScrollBtn>
    </div>
  );
}

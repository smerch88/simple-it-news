/* eslint-disable no-console */
import { ArticleType } from '@/types';

async function getNews() {
  const res = await fetch(
    'https://newsapi.org/v2/everything?q=programming&sortBy=publishedAt&apiKey=2d80d99cb4a646c8b306a0a9cfee8dba',
  );
  return res.json();
}

export default async function Page({ params }: { params: { id: string } }) {
  const newsData = getNews();
  const { id } = params;

  const [news] = await Promise.all([newsData]);

  console.log(news.articles);
  console.log(decodeURI(id));

  const post = news.articles.find(
    (item: ArticleType) => item.title === decodeURI(id),
  );

  return <div>{post?.content}</div>;
}

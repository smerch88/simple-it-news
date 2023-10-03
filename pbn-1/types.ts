export type NewsType = {
  status: string;
  totalResults: number;
  articles: ArticleType[];
};

export type ArticleType = {
  source: Source;
  author: unknown;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
};

export interface Source {
  id: unknown;
  name: string;
}

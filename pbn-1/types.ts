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

export interface CmsArticleType {
  id: string;
  title: string;
  _status: string;
  _firstPublishedAt: string;
  shortdescription: string;
  articlepicture: {
    width: number;
    url: string;
    height: number;
    alt: string;
  };
  _createdAt: string;
  _publishedAt: string;
  author: {
    authorname: string;
  };
}

export interface Source {
  id: unknown;
  name: string;
}

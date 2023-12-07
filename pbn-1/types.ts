export type NewsType = {
  status: string;
  totalResults: number;
  articles: ArticleType[];
};

export type ArticleType = {
  id: number;
  title: string;
  author: Author;
  link: string;

  source: Source;
  image_url: string;
  description: string;
  update_date: string;
  country: string;
  content: string;
  tags: [];
  rating: number;
  categories: [];
  time_to_read: number;
  is_approved: boolean;
  // url: string;
  // urlToImage: string;
  // publishedAt: string;
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
    route: string;
  };
  route: string;
  tags: unknown;
}

export interface Author {
  id: number;
  name: string;
  description: string;
  route: string;

  authordescription: string;
  authorname: string;

  socials: { [platform: string]: string };
  articles: { route: string; title: string }[];
  authorimage: {
    width: number;
    url: string;
    height: number;
    alt: string | null;
  };
}

export interface Source {
  id: unknown;
  name: string;
}

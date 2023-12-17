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
    route: string;
  };
  route: string;
  tags: unknown;
}

export interface Author {
  authordescription: string;
  authorname: string;
  route: string;

  socials: { [platform: string]: string };
  articles: { route: string; title: string; _createdAt: string }[];
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

export interface RESTAPIPost {
  id: number;
  title: string;
  author: Author;
  link: string;
  image_url: string;
  description: string;
  pub_date: Date;
  update_date: Date;
  country: string;
  content: string;
  tags: Category[];
  rating: number;
  categories: Category[];
  time_to_read: number;
  custom_url: string;
  is_approved: boolean;
}

export interface Author {
  id: number;
  name: string;
  description: string;
  route: string;
  facebook: string | null;
  twitter: string | null;
  telegram: string | null;
  // TODO: fix this type
  articles: { route: string; title: string; _createdAt: string }[];
}

export interface Articles {
  articles: { route: string; title: string; _createdAt: string }[];
}

export interface Category {
  id: number;
  title: string;
}

export interface FAQItem {
  title: string;
  text: string;
  link?: string; // Make 'link' optional
  id: string;
}
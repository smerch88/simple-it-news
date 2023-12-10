import { CmsArticleType } from '@/types';

export type CmsPostProps = {
  article: CmsArticleType;
  type?: 'main' | 'category';
};

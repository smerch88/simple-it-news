import { RESTAPIPost } from '@/types';

export type CmsPostProps = {
  article: RESTAPIPost;
  type?: 'main' | 'category';
  leadsTo?: 'news' | 'posts';
};

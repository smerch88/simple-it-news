import { ReactNode } from 'react';

export interface PostProps {
  pub_date: string;
  id: string;
  title: string;
  image_url: string;
  author: string;
  author_url: string;
  time_to_read: number;
  rating: number;
  description: string;
  content?: string;
  children?: ReactNode;
  custom_url?: string;
  update_date?: string;
  link?: string;
  country?: string[];
  tags?: { id: number; title: string }[];
  categories?: { id: number; title: string }[];
  custom_category: string;
}

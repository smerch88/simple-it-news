export interface CommentsProps {
  id: number;
  created: string;
  body: string;
  author: {
    id: number;
    first_name: string;
    surname: string;
    profile_image: string;
    email: string;
  };
  news_id: number;
}

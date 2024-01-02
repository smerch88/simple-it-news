import { Metadata } from 'next';

import { Post } from '@/components/common/Post/Post';

export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  const { id } = params;
  const title = id[0].split('-').join(' ');
  return {
    title: title,
    description: title,
  };
}

async function getNews(id: string) {
  const res = await fetch(
    process.env.NEXT_PUBLIC_API_BASE_URL + `/api/ApprovedNews/?url=${id}`,
    {
      method: 'GET',
      next: { revalidate: 43200 },
    },
  );
  return res.json();
}

export default async function Page({ params }: { params: { id: string } }) {
  const { id } = params;
  const post = await getNews(id);

  if (!post) {
    return <div>Post not found</div>;
  }

  const {
    id: postId,
    pub_date,
    link,
    title,
    image_url,
    update_date,
    author,
    time_to_read,
    rating,
    description,
    content,
    country,
    categories,
    custom_url,
    tags,
  } = await post[0];

  return (
    <>
      <Post
        pub_date={pub_date}
        id={postId}
        title={title}
        link={link}
        update_date={update_date}
        image_url={image_url}
        author={author?.name}
        custom_url={custom_url}
        // TODO:add real author url
        author_url={author?.route}
        time_to_read={time_to_read}
        rating={rating}
        description={description}
        content={content}
        country={country}
        tags={tags}
        categories={categories}
        custom_category="Новини"
      />
    </>
  );
}

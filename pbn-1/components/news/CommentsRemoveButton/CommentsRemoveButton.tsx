'use client';

export const CommentsRemoveButton = ({
  news_id,
  author_email,
  comment_id,
}: {
  news_id: number;
  author_email: string;
  comment_id: number;
}) => {
  const handleRemoveClick = async () => {
    const res = await fetch(
      process.env.NEXT_PUBLIC_API_BASE_URL +
        `/api/Comments/${news_id}/?author_email=${author_email}&comment_id=${comment_id}`,
      {
        method: 'DELETE',
        next: { revalidate: 300 },
      },
    );

    if (res.status !== 200) {
      return null;
    }
    return res.json();
  };
  return (
    <button
      className="ml-auto py-2 text-menuItemsMob13 italic text-red md:text-menuItemsTab14 xl:text-menuItemsMob"
      onClick={handleRemoveClick}
    >
      Видалити
    </button>
  );
};

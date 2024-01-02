import { Session } from 'next-auth';

import { Comment } from '@/components/common/Comment';

import { CommentsForm } from '../CommentsForm';
import { CommentsProps } from './Comments.props';

async function getComments(postId: string) {
  const res = await fetch(
    process.env.NEXT_PUBLIC_API_BASE_URL + `/api/Comments/${postId}/`,
    {
      method: 'GET',
      next: { revalidate: 400 },
    },
  );

  if (res.status !== 200) {
    return null;
  }
  return res.json();
}

export const Comments = async ({
  session,
  postId,
}: {
  session: Session | null;
  postId: string;
}) => {
  const comments = await getComments(postId);

  return (
    <div>
      <h2 className="mb-6 font-playfair text-menuTitleMob font-semibold md:text-menuTitleTab">
        Коментарі
      </h2>
      <CommentsForm session={session} postId={postId} />

      {comments && comments.length ? (
        <ul className="flex flex-col ">
          {comments.map((comment: CommentsProps) => {
            return (
              <Comment comment={comment} key={comment.id} session={session} />
            );
          })}
        </ul>
      ) : (
        <p>Комментарів ще немає</p>
      )}
    </div>
  );
};

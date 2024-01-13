import Image from 'next/image';
import { Session } from 'next-auth';

import { CommentsProps } from '@/components/news/Comments/Comments.props';
import { CommentsRemoveButton } from '@/components/news/CommentsRemoveButton';

export const Comment = ({
  comment,
  session,
}: {
  comment: CommentsProps;
  session: Session | null;
}) => {
  const publishedDate = new Date(comment.created);

  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
  };

  const formattedDate = publishedDate.toLocaleDateString('uk-UA', options);

  return (
    <li key={comment.id} className={`item flex flex-col py-2`}>
      <div className="flex w-full items-center gap-x-4">
        <div className="w-12">
          <div className={`avatar h-12 w-12 rounded-full`}>
            <Image
              width={48}
              height={48}
              src={comment.author.profile_image}
              alt="аватарка юзера"
              className="h-12 w-12 rounded-full "
            />
          </div>
        </div>
        <div className="flex w-full items-center justify-between">
          <p className="text-t20">{comment.author.first_name}</p>
          <p className="text-menuItemsMob10 text-lightgrey ">{formattedDate}</p>
        </div>
      </div>

      <p className="md:t16 pl-[60px] text-t10 xl:text-t18">{comment.body}</p>

      {comment.author.email === session?.user?.email && (
        <CommentsRemoveButton
          news_id={comment.news_id}
          author_email={session.user.email}
          comment_id={comment.id}
        />
      )}
    </li>
  );
};

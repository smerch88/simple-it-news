import { ArrowBookmark } from '@/components/common/ArrowBookmark';
import { StarTime } from '@/components/common/StartTime';

export const Management = ({
  time,
  rating,
}: {
  time: number;
  rating: number;
}) => {
  return (
    <div className="flex items-center justify-between">
      <StarTime time={time} rating={rating} />
      <ArrowBookmark />
    </div>
  );
};

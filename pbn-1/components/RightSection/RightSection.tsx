import { PopularCardPosts } from '../CardPost/PopularCardPosts';
import { AlsoRead } from '../AlsoRead';
export const RightSection = () => {
  return (
    <div className="xl:w-[388px]">
      <h3 className="mb-4 rounded bg-black px-3 py-2 font-playfair text-t18 text-white md:text-t32">
        Популярне :
      </h3>

      <PopularCardPosts />
      {/* <div className="flex justify-center items-center mb-3 h-96 w-full border-solid border-2 border-black text-center bg-white xl:w-[388px] p-4">
        <p className="text-t40 text-black mx-auto">Тут може бути ваша реклама</p>
      </div>
      <h3 className="mb-4 rounded bg-black px-3 py-2 font-playfair text-t18 text-white md:text-t32">
        Також читайте :
      </h3>
      < AlsoRead /> */}
    </div>
  );
};

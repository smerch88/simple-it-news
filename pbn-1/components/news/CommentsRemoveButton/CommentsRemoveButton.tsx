'use client';

export const CommentsRemoveButton = () => {
  const handleRemoveClick = () => {
    // console.log('видалити');
  };
  return (
    <button
      className="text-menuItemsMob13 md:text-menuItemsTab14 ml-auto py-2 italic text-red xl:text-menuItemsMob"
      onClick={handleRemoveClick}
    >
      Видалити
    </button>
  );
};

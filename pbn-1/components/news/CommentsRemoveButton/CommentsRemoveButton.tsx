'use client';

export const CommentsRemoveButton = () => {
  const handleRemoveClick = () => {
    // console.log('видалити');
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

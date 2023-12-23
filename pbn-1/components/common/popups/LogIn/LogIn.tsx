'use client';
import { signIn } from 'next-auth/react';

// import { useEffect } from 'react';
// import { authLoggedUser } from '@/lib/api';
import Cross from '@/public/notsorted/cross.svg';
import Google from '@/public/socials/google.svg';

export const LogIn = ({ handleClose }: { handleClose: () => void }) => {
  // const newUser = {
  //   first_name: 'Arsenii',
  //   surname: 'Maksymenko',
  //   profile_image:
  //     'https://lh3.googleusercontent.com/a/ACg8ocId5i4nWeXBrrAS6ObCyKyIwIzHhDinHfFsILAEw0uUDy4=s96-c',
  //   email: 'maxarmyk@gmail.com',
  // };
  // first_name: session?.user?.name?.split(' ')[0] || 'none',
  // surname: session?.user?.name?.split(' ')[1] || 'none',
  // profile_image: session?.user?.image || 'none',
  // email: session?.user?.email || 'none',
  // const data = authLoggedUser(newUser);
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const data = await fetch('api/example', 
  //       {
  //         method: 'POST',
  //         body: JSON.stringify({hello: 'world'}),
  //       }
  //       );
  //       console.log('data', data);
  //     } catch (error) {
  //       console.error('Error fetching data:', error);
  //       // Handle error if needed
  //     }
  //   };

  //   fetchData();
  // }, []);

  const handleClick = () => {
    signIn('google');
  };
  return (
    <div className="visible fixed inset-0 z-50 flex items-center justify-center bg-black/20">
      <div className="flex flex-col items-center justify-between gap-y-6 bg-white px-10 py-10 text-center md:w-[494px] md:rounded md:px-10">
        <p className="tex-t20 font-playfair text-dark md:text-t32">
          Підписатися
        </p>
        <p className="text-t14 text-dark md:text-t16">
          Будьте у курсі останніх новину у сфері ІТ разом з Simple IT News.
        </p>
        <button
          className="flex w-full flex-row items-center justify-center gap-3 rounded border border-solid border-dark bg-white px-5 py-2 text-t24 md:text-t18"
          onClick={handleClick}
        >
          <Google className="h-8 w-8" />
          <span className="text-dark">Увійти через Google</span>
        </button>
        <button onClick={handleClose} className="text-dark/50">
          <Cross className="h-10 w-10" />
        </button>
      </div>
    </div>
  );
};

import { redirect, useRouter } from 'next/navigation';
import { getServerSession, NextAuthOptions } from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import { useSession } from 'next-auth/react';

export const authConfig: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
  ],
  secret: process.env.SECRET as string,
  // callbacks: {
  //   async session({ session, user, token }) {
  //     console.log(session,'sessionsessionsession')
  //     const newUser = {
  //       first_name: session?.user?.name?.split(' ')[0] || 'none',
  //       surname: session?.user?.name?.split(' ')[1] || 'none',
  //       profile_image: session?.user?.image || 'none',
  //       email: session?.user?.email || 'none',
  //     };
  //     authLoggedUser(newUser);
  //     // return { session, user, token };
  //   },
  // },
};

export async function loginIsRequiredServer() {
  const session = await getServerSession(authConfig);
  // eslint-disable-next-line no-console
  console.log('session', session);
  if (!session) return redirect('/');
}

export function loginIsRequiredClient() {
  if (typeof window !== 'undefined') {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const session = useSession();
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const router = useRouter();
    if (!session) router.push('/');
  }
}

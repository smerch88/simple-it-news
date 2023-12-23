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
  //   async session(data) {
  //     // Send properties to the client, like an access_token and user id from a provider.
  //     console.log('_________________________')
  //     console.log('data',data)
  //     console.log('_________________________')

  //     return data;
  //   },
  // },
  // callbacks: {
  //   async session({ session, token, user }) {
  //     // Send properties to the client, like an access_token and user id from a provider.
  //     session.accessToken = token.accessToken;
  //     session.user.id = token.id;
  //     console.log('_________________________')
  //     console.log('session',session)
  //     console.log('token',token)
  //     console.log('user',user)
  //     console.log('_________________________')

  //     return session;
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

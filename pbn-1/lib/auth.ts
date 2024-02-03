/* eslint-disable @typescript-eslint/no-explicit-any */
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
  callbacks: {
    async jwt({ token, user }: any) {
      if (user?._id) token._id = user._id;
      if (user?.isAdmin) token.isAdmin = user.isAdmin;
      return token;
    },
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    async session({ session, token, user }: any) {
      // user id is stored in ._id when using credentials provider
      if (token?._id) session.user._id = token._id;

      // user id is stored in ._id when using google provider
      if (token?.sub) session.user._id = token.sub;

      if (token?.isAdmin) session.user.isAdmin = token.isAdmin;
      return session;
    },
  },
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

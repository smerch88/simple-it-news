import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const rawBody = await req.json();
  const res = await fetch(
    process.env.NEXT_PUBLIC_API_BASE_URL +
      `/api/Comments/?news_id=${rawBody.postId}&author_email=${rawBody?.session?.user?.email}`,
    {
      method: 'POST',
      body: JSON.stringify({ comment_body: rawBody.comment_body }),
      headers: {
        'Content-Type': 'application/json',
      },
    },
  );
  // eslint-disable-next-line no-console
  console.log('res_____', res);
  return NextResponse.json({ message: '200' });
}

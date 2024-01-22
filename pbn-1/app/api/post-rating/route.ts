import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const rowBody = await req.json();
  const res = await fetch(
    process.env.NEXT_PUBLIC_API_BASE_URL +
      `/api/ApprovedNews/${rowBody.custom_url}/rate/`,
    {
      method: 'POST',
      body: JSON.stringify({
        rating: rowBody.clickedRating,
        user_email: rowBody?.session?.user?.email,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    },
  );

  return NextResponse.json(
    { error: 'Internal Server Error' },
    { status: res.status },
  );
}

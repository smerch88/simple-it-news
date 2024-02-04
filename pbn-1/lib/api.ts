/* eslint-disable no-console */
export async function authLoggedUser(user: {
  first_name: string;
  surname: string;
  profile_image: string;
  email: string;
  google_id: string;
}) {
  console.log('user', user);

  const res = await fetch(
    process.env.NEXT_PUBLIC_API_BASE_URL + '/api/NewsUser/',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=UTF-8',
      },
      body: JSON.stringify(user),
    },
  );

  // Check if the response is not OK
  if (!res.ok) {
    console.error(`Error: ${res.status}`);
    // throw new Error(`Request failed with status ${res.status}`);
  }

  // Await here to read the response body
  const data = await res.json();
  console.log('data', data);

  return data;
}

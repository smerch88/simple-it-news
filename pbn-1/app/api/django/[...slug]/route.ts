// eslint-disable-next-line import/no-anonymous-default-export
export async function POST(request: Request) {
  const apiUrl = 'http://82.180.160.12:8000/api/NewsUser/';
  console.log('request', request);


  // const res = await fetch(apiUrl, {
  //   method: 'POST',
  //   headers: {
  //     'Content-Type': 'application/json; charset=UTF-8',
  //   },
  //   body: JSON.stringify(user),
  // });

  // // Check if the response is not OK
  // if (!res.ok) {
  //   console.error(`Error: ${res.status}`);
  //   throw new Error(`Request failed with status ${res.status}`);
  // }

  // // Await here to read the response body
  // const data = await res.json();
  // console.log('data', data);

  // return data;

};

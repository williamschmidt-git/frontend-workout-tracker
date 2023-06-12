/* eslint-disable @typescript-eslint/naming-convention */
export const loginRequest = async (username: string, password: string) => {
  const server = 'http://localhost:3001/';
  console.log(server);
  const response = await fetch(`${server}login`, {
    body: JSON.stringify({username, password}),
    method: 'POST',
    headers: {'Content-type': 'application/json; charset=UTF-8'},
  });

  return response.json();
};

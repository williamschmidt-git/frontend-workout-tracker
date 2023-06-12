/* eslint-disable @typescript-eslint/naming-convention */
export const createUserRequest = async (username: string, password: string) => {
  const server = 'https://backend-workout-tracker-production.up.railway.app/';
  const response = await fetch(`${server}/user/create`, {
    method: 'POST',
    body: JSON.stringify({username, password}),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  return response.json();
};

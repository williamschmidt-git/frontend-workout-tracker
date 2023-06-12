export const workoutRequests = async () => {
  const server = 'http://localhost:3001/';

  const response = await fetch(`${server}workout`, {
    method: 'GET',
    headers: {'Content-type': 'application/json; charset=UTF-8'},
  });

  return response.json();
};

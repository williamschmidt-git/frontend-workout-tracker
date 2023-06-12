export const workoutRequests = async () => {
  const server = 'https://backend-workout-tracker-production.up.railway.app/';

  const response = await fetch(`${server}workout`, {
    method: 'GET',
    headers: {'Content-type': 'application/json; charset=UTF-8'},
  });

  return response.json();
};

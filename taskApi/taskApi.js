export const addTaskToDb = async (taskData) => {
  const url = `${process.env.NEXT_PUBLIC_API_URL}/tasks`;
  const res = await fetch(url, {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify({ ...taskData })
  });
  const data = await res.json();
  return data;
};
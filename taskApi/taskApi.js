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

export const updateComplete = async (id) => {
  const url = `${process.env.NEXT_PUBLIC_API_URL}/task/update/${id}`;
  const res = await fetch(url, {
    method: 'PUT',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify({ status: 'completed' })
  });
  const data = await res.json();
  return data;
}

export const updateIncomplete = async (id) => {
  const url = `${process.env.NEXT_PUBLIC_API_URL}/task/update/${id}`;
  const res = await fetch(url, {
    method: 'PUT',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify({ status: 'incomplete' })
  });
  const data = await res.json();
  return data;
}
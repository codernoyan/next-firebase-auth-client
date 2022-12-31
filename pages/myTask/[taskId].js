import React from 'react';

const TaskDetails = ({ task }) => {
  console.log(task);
  return (
    <div>
      <h1>hello task details</h1>
    </div>
  );
};

export default TaskDetails;

export const getServerSideProps = async (context) => {
  const { params } = context;
  // data fetch
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/task/details/${params.taskId}`);
  const data = await res.json();

  return {
    props: {
      task: data
    }
  }
};

export const getServerSidePaths = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/tasks`);
  const tasks = await res.json();
  // paths
  const paths = tasks.map(task => {
    return {
      params: {
        taskId: `${task._id}`
      }
    }
  })
  return {
    paths,
    fallback: false
  }
}
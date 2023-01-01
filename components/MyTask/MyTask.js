import { useRouter } from 'next/router';
import React from 'react';

const MyTask = ({ task, handleComplete, handleDelete }) => {
  // console.log(task);
  const {_id, title, status } = task;
  const router = useRouter();
  return (
    <div className="bg-sky-100 p-2 my-2 rounded-md flex justify-between items-center">
      <div>
        <h2 className="capitalize font-semibold">{title}</h2>
        <p>Status: <span className="capitalize text-sky-600">{status}</span></p>
      </div>
      <div className="flex gap-2">
        <button onClick={()=> router.push(`/myTask/${_id}`)} className="bg-sky-500 px-4 py-1 rounded-md text-white font-semibold text-sm">
          Details
        </button>
        <button onClick={()=> handleDelete(_id)} className="bg-sky-500 px-4 py-1 rounded-md text-white font-semibold text-sm">
          Delete
        </button>
        <button onClick={()=> handleComplete(_id)} className="bg-sky-500 px-4 py-1 rounded-md text-white font-semibold text-sm">
          Complete
        </button>
      </div>
    </div>
  );
};

export default MyTask;
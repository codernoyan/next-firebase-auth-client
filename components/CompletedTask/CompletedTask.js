import React from 'react';

const CompletedTask = ({ task, handleIncomplete }) => {
  const { _id, title, status } = task;

  return (
    <div className="bg-sky-100 p-2 my-2 rounded-md flex justify-between items-center">
      <div>
        <h2 className="capitalize font-semibold">{title}</h2>
        <p>Status: <span className="capitalize text-sky-600">{status}</span></p>
      </div>
      <div className="flex gap-2">
        <button className="bg-sky-500 px-4 py-1 rounded-md text-white font-semibold text-sm">
          Details
        </button>
        <button onClick={() => handleIncomplete(_id)} className="bg-sky-500 px-4 py-1 rounded-md text-white font-semibold text-sm">
          Incomplete
        </button>
      </div>
    </div>
  );
};

export default CompletedTask;
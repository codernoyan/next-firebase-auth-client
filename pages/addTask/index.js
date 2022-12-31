import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthProvider';

const AddTask = () => {
  const { user } = useContext(AuthContext);

  const handleAddTask = (e) =>{
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const description = form.description.value;
    const taskData = {
      title,
      description,
      userEmail: user?.email,
      addedTime: new Date().toLocaleString()
    };
    console.log(taskData);
  }

  return (
    <section className="md:w-1/2 mx-auto">
      <div>
        <h2 className="text-2xl font-semibold">Add Task</h2>
      </div>
      <div className="mt-2">
        <form onSubmit={handleAddTask} className="space-y-2">
          <div>
            <input name="title" type="text" className="w-full rounded-md border-2 border-sky-600 focus:border-sky-300" placeholder="Task Title Here" />
          </div>
          <div>
            <textarea name="description" cols="30" rows="5" className="w-full rounded-md border-2 border-sky-600 focus:border-sky-300" placeholder="Task Description Here"></textarea>
          </div>
          <div>
            <button type="submit" className="bg-sky-500 w-full py-2 text-white rounded-md font-bold">
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default AddTask;
import Head from 'next/head';
import { useRouter } from 'next/router';
import React, { useContext } from 'react';
import { toast } from 'react-hot-toast';
import useSWR from 'swr';
import CompletedTask from '../../components/CompletedTask/CompletedTask';
import Spinner from '../../components/Spinner/Spinner';
import { AuthContext } from '../../contexts/AuthProvider';
import { updateIncomplete } from '../../taskApi/taskApi';

const fetcher = (...args) => fetch(...args).then(res => res.json());

const Completed = () => {
  const { user } = useContext(AuthContext);
  const router = useRouter();
  const { data: tasks, isLoading, error, mutate } = useSWR(`${process.env.NEXT_PUBLIC_API_URL}/user/tasks/${user?.email}?status=completed`, fetcher);

  const handleIncomplete = (id) => {
    updateIncomplete(id)
      .then((data) => {
        if (data.modifiedCount) {
          toast.success("Task back to My Task");
          mutate();
        }
      }).catch((err) => {
        console.error(err);
        toast.error(err.message);
      })
  }

  if (error) {
    return (
      <div className="h-screen flex justify-center items-center">
        <div className="flex flex-col gap-2 items-center">
          <h2 className="text-xl font-bold text-sky-600">An Error Occurred</h2>
          <div>
            <button onClick={() => router.reload()} className="font-bold bg-sky-500 text-white py-1 px-4 rounded-md">Reload</button>
          </div>
        </div>
      </div>
    )
  }

  if (isLoading) {
    return <Spinner />
  }

  return (
    <>
      <Head>
        <title>Completed - Next Firebase</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="md:w-1/2 mx-auto">
        <div>
          <h2 className="text-2xl font-semibold">Completed Tasks</h2>
        </div>
        <div>
          {
            tasks?.length !== 0 ?
              <>
                {
                  tasks?.map(task => <CompletedTask
                    key={task._id}
                    task={task}
                    handleIncomplete={handleIncomplete}
                  ></CompletedTask>)
                }
              </>
              :
              <>
                <div className="mt-2">
                  <h2 className="text-sky-600 font-bold">You do not have any completed tasks.</h2>
                </div>
              </>
          }
        </div>
      </section>
    </>
  );
};

export default Completed;
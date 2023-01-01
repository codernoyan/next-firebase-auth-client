import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useContext, useState } from 'react';
import { toast } from 'react-hot-toast';
import { AuthContext } from '../../contexts/AuthProvider';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { user, logOutUser } = useContext(AuthContext);
  const router = useRouter();

  const handleLogOutExistingUser = () => {
    logOutUser()
      .then(() => {
        toast.success("Logout Successful");
      }).catch((err) => {
        console.log(err);
        toast.error(err.message);
      })
  };

  return (
    <section>
      {/* navbar */}
      <nav className="py-2 md:flex justify-between">
        <div className="flex justify-between items-center">
          <span>
            <Link href="/">
              <h2 className="font-semibold text-xl"><span className="font-bold text-sky-500">Next</span> Firebase</h2>
            </Link>
          </span>
          <span onClick={()=> setOpen(!open)} className="cursor-pointer block md:hidden">
            {
              open ?
                <>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>

                </>
                :
                <>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                  </svg>
                </>
            }
          </span>
        </div>
        <div>
          <ul className={`md:flex gap-10 md:items-center z-[-1] md:z-auto md:static absolute bg-white/50 md:bg-white w-full left-0 md:w-auto md:py-0 py-2 md:pl-0 pl-2 transition-all ease-in duration-500 ${open ? 'top-20 opacity-100 -mt-8 md:mt-0 z-10 h-80 md:h-auto' : 'top-[-490px] md:opacity-100 opacity-0'}`}>
            {
              user?.uid &&
              <>
                <li className="my-4 md:my-0">
                  <Link className="font-medium" href="/">Home</Link>
                </li>
                <li className="my-4 md:my-0">
                  <Link className="font-medium" href="/addTask">Add Task</Link>
                </li>
                <li className="my-4 md:my-0">
                  <Link className="font-medium" href="/myTask">My Task</Link>
                </li>
                <li className="my-4 md:my-0">
                  <Link className="font-medium" href="/completed">Completed</Link>
                </li>
              </>
            }
            {
              user?.uid ?
                <li>
                  <button onClick={handleLogOutExistingUser} className="bg-sky-500 text-white font-bold px-6 py-2 rounded-sm">Logout</button>
                </li>
                :
                <li>
                  <button onClick={() => router.push('/login')} className="bg-sky-500 text-white font-bold px-6 py-2 rounded-sm duration-500 hover:bg-sky-700">Login</button>
                </li>
            }
          </ul>
        </div>
      </nav>
    </section>
  );
};

export default Navbar;
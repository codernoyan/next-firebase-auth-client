import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useContext } from 'react';
import { toast } from 'react-hot-toast';
import { AuthContext } from '../../contexts/AuthProvider';

const Navbar = () => {
  const { user, logOutUser } = useContext(AuthContext);
  const router = useRouter();

  const handleLogOutExistingUser = () => {
    logOutUser()
      .then(() => {
        toast.success("Logout Successful")
      }).catch((err) => {
        console.log(err);
        toast.error(err.message);
      })
  }

  return (
    <section>
      {/* navbar */}
      <nav className="py-2 md:flex justify-between">
        <div>
          <Link href="/">
            <h2 className="font-semibold text-xl"><span className="font-bold text-sky-500">Next</span> Firebase</h2>
          </Link>
        </div>
        <div>
          <ul className="md:flex gap-10 items-center">
            {
              user?.uid &&
              <>
                <li>
                  <Link className="font-medium" href="/">Home</Link>
                </li>
                <li>
                  <Link className="font-medium" href="/addTask">Add Task</Link>
                </li>
                <li>
                  <Link className="font-medium" href="/myTask">My Task</Link>
                </li>
                <li>
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
                  <button onClick={() => router.push('/login')} className="bg-sky-500 text-white font-bold px-6 py-2 rounded-sm">Login</button>
                </li>
            }
          </ul>
        </div>
      </nav>
    </section>
  );
};

export default Navbar;
import { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';
import toast from 'react-hot-toast';

const NavBar = () => {
  const { user, logoutUser } = useContext(AuthContext);
  const handleLogout = () => {
    logoutUser()
      .then(() => {
        toast.success('Logged out successfully!');
      })
      .catch(error => toast.error(error.message));
  };
  const navLinks = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending
              ? 'pending'
              : isActive
              ? 'bg-amber-400 text-black text-base px-4 py-2 rounded-lg'
              : ''
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/upcoming"
          className={({ isActive, isPending }) =>
            isPending
              ? 'pending'
              : isActive
              ? 'bg-amber-400 text-black text-base px-4 py-2 rounded-lg'
              : ''
          }
        >
          Upcoming Events
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/about"
          className={({ isActive, isPending }) =>
            isPending
              ? 'pending'
              : isActive
              ? 'bg-amber-400 text-black text-base px-4 py-2 rounded-lg'
              : ''
          }
        >
          About Us
        </NavLink>
      </li>
      <li>
        {user ? (
          <button onClick={handleLogout} className=" block md:hidden">
            Logout
          </button>
        ) : (
          <Link to="/login" className=" block md:hidden">
            Login
          </Link>
        )}
      </li>
    </>
  );

  return (
    <div className="md:px-6 mx-auto py-4">
      <div className="navbar bg-transparent">
        <div className="navbar-start">
          <div className="dropdown">
            <label
              tabIndex={0}
              className="btn btn-ghost text-amber-300 lg:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navLinks}
            </ul>
          </div>
          <Link
            to="/"
            className="btn btn-warning btn-outline normal-case text-xl text-amber-300"
          >
            <i>EntertainmentFreak</i>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="flex flex-wrap items-center gap-8 text-sm menu-horizontal px-1 text-white">
            {navLinks}
          </ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <div className="flex flex-col md:flex-row items-center gap-2">
              <div className="avatar hidden md:block">
                <div className="w-8 h-8 rounded-full">
                  <img src={user?.photoURL} />
                </div>
              </div>
              <p className="text-white hidden md:block">{user?.displayName}</p>

              <button
                onClick={handleLogout}
                className="btn btn-warning btn-sm hidden md:block"
              >
                Logout
              </button>
            </div>
          ) : (
            <Link
              to="/login"
              className="btn btn-warning btn-sm py-2 hidden md:block"
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavBar;

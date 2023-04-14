import { useLocation,Link,NavLink } from "react-router-dom";
import { useState } from "react";

import { signInWithGoogle } from "../auth/firebase";

export default function SideMenu() {

    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    const toggleSidebar = () => {
        setIsOpen(!isOpen)
    }
    return(
      <div className="md:flex md:flex-row md:w-1/5 h-full md:fixed z-10">
        <button
          className="md:hidden bg-gray-800 text-white p-2"
          onClick={toggleSidebar}
        >
          <svg
            className="h-6 w-6 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z" />
          </svg>
        </button>
        <div
          className={`${
            isOpen ? 'block' : 'hidden'
          } md:block md:flex md:flex-col md:h-full w-full md:w-auto`}
        >
          <Link
            to="/"
            className={`p-4 border-l-4 ${
              location.pathname === '/' ? 'border-blue-400' : ''
            }`}
          >
            Home
          </Link>
          <NavLink
            to="/favorites"
            className={`p-4 border-l-4 ${
              location.pathname === '/favorites' ? 'border-blue-400' : ''
            }`}
          >
            Favorites
          </NavLink>
          <Link
            to="/login"
            className={`p-4 border-l-4 ${
              location.pathname === '/login' ? 'border-blue-400' : ''
            }`}
          >
            Login
          </Link>
        </div>
        <div>
          <button onClick={signInWithGoogle}>Sign in </button>
        </div>
    </div>
    )
}
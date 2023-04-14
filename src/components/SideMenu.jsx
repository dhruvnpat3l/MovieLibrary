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
        
        <div
          className={`md:block md:flex md:flex-col md:h-full w-full md:w-auto`}
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
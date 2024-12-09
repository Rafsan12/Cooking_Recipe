import { useContext } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../assets/Logo/Foodieland..png";
import { AuthContext } from "../../context";

export default function Header() {
  const { user, logOut } = useContext(AuthContext);

  const handleLogout = () => {
    logOut();
    console.log("User logged out");
  };

  const links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/blog">Blog</NavLink>
      </li>
      <li>
        <NavLink to="/contact">Contact</NavLink>
      </li>
      {user ? (
        <>
          <button onClick={handleLogout}>Logout</button>
        </>
      ) : (
        <NavLink className="mt-2" to="/login">
          Login
        </NavLink>
      )}
    </>
  );

  return (
    <div className="navbar bg-base-100">
      {/* Logo and Mobile Dropdown */}
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow gap-2"
          >
            {links}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">
          <img className="w-32" src={Logo} alt="Logo" />
        </a>
      </div>

      {/* Desktop Menu */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-4 bg-none">{links}</ul>
      </div>

      {/* User Info and Login/Logout */}
      <div className="navbar-end">
        <p className="mr-4">{user?.displayName}</p>
        <div
          tabIndex={0}
          role="button"
          className="btn btn-ghost btn-circle avatar ml-4"
        >
          <div className="w-10 rounded-full">
            {user ? (
              <img alt="User Avatar" src={user.photoURL} />
            ) : (
              <img
                alt="Default Avatar"
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

import { FaRegUserCircle } from "react-icons/fa";
import { IoMdHome } from "react-icons/io";
import { NavLink } from "react-router-dom";
import logo from "../../src/assets/repair.jpg";
import { AuthContext } from "../component/AuthProvider";
import { useContext, useEffect, useState } from "react";

const Navbar = () => {
  const [theme, setTheme] = useState("light");
  
  useEffect(() => {
  localStorage.setItem('theme', theme);
  const localTheme = localStorage.getItem('theme');
  document.querySelector('html').setAttribute('data-theme', localTheme);
  },[theme]);
  const handleToggle = (e) => {
    
    if (e.target.checked) {
      setTheme("synthwave");
    } else {
      setTheme("light");
    }
  };
  console.log(theme);
  useEffect(() => {
    document.title = "Navbar";
  });
  const { user, logOut } = useContext(AuthContext);
  // console.log(user);
  const navlink = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/allServices">Services</NavLink>
      </li>
      {/* <li>
            <NavLink to="/addtouristspot">Add Tourists Spot</NavLink>
          </li> */}
      {user ? (
        <li className="text-black">
          <div className="dropdown dropdown-bottom">
            <div tabIndex={0} role="button" className="">
              DashBoard
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content z-[10] menu p-2 shadow bg-base-100 rounded-box w-36"
            >
              <li>
                <NavLink to="/addServices">Add Service</NavLink>
              </li>
              <li>
                <NavLink to="/booked">Booked-Service</NavLink>
              </li>
              <li>
                <NavLink to="/manageServices">Manage Service</NavLink>
              </li>
              <li>
                <NavLink to={"/servicesToDo"}>Service-To-Do</NavLink>
              </li>
            </ul>
          </div>
        </li>
      ) : (
        <li></li>
      )}
      <li></li>
      {/* <li>
            <NavLink to="/mylist">My List </NavLink>
          </li> */}
      {/* <li>
            <NavLink to="/profile">Update Profile </NavLink>
          </li> */}

      {/* <li>
            <NavLink to="/about">About</NavLink>
          </li> */}
    </>
  );
  return (
    <div className="h-24 max-w-[1270px] mx-auto">
      <div className="navbar border-b-2 border-gray-100 rounded-md shadow-lg text-black font-bold fixed z-10 h-24 max-w-[1270px] mx-auto">
        <div className="flex justify-start w-[30%]">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
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
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-32"
            >
              {navlink}
            </ul>
          </div>
          <a className="btn btn-ghost lg:text-2xl sm:text-sm mb-6">
            <span className="text-[#474ae8] font-bold flex items-center leading-none justify-center">
              {" "}
              <img src={logo} className="h-16 w-16 rounded-full" />
              Repair <br />
              Zone
            </span>
          </a>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navlink}</ul>
        </div>
        <div className="navbar-end">
          <label className="input input-bordered flex items-center gap-2">
            {/* search button */}
            <input type="text" className="grow" placeholder="Search" />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="w-4 h-4 opacity-70"
            >
              <path
                fillRule="evenodd"
                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                clipRule="evenodd"
              />
            </svg>
          </label>
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          ></div>
          {/* <NavLink to='/login'><button className='btn sm:m-0'>Login</button></NavLink>
      <NavLink to='/register'><button className='btn ml-2'>Register</button></NavLink> */}
          <div className="rounded-full flex">
            {user ? (
              <div className="flex items-center">
                <div className="tooltip" data-tip={user.displayName}>
                  {" "}
                  <img
                    referrerPolicy="no-referrer"
                    className="rounded-full w-8 h-8"
                    src={user?.photoURL}
                  />
                </div>
                <div className="flex flex-col px-4">
                  <button onClick={() => logOut()}>Log Out</button>
                </div>
              </div>
            ) : (
              <div className="text-black font-medium flex">
                <NavLink to="/login">
                  <button className="btn btn-primary sm:m-0">Login</button>
                </NavLink>
                {/* <NavLink to="/register">
                    <button className="btn ml-2">Register</button>
                  </NavLink>
                  <div><FaRegUserCircle className="lg:text-3xl text-xl md:ml-2 mt-2 md:text-2xl text-black" /></div> */}
              </div>
            )}

<label className="cursor-pointer grid place-items-center">
  <input onChange={handleToggle} type="checkbox" className="toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2"/>
  <svg className="col-start-1 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4"/></svg>
  <svg className="col-start-2 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

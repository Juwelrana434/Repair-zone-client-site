import { FaRegUserCircle } from "react-icons/fa";
import { IoMdHome } from "react-icons/io";
import { NavLink } from "react-router-dom";
import logo from "../../src/assets/repair.jpg";
import { AuthContext } from "../component/AuthProvider";
import { useContext, useEffect } from "react";

const Navbar = () => {
  useEffect(() => {
    document.title = "Navbar";
    })
  const { user, logOut } = useContext(AuthContext);
  // console.log(user);
    const navlink = (
        <>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/alltourist">Services</NavLink>
          </li>
          {/* <li>
            <NavLink to="/addtouristspot">Add Tourists Spot</NavLink>
          </li> */}
          {user ? <li className="text-black"><div className="dropdown dropdown-bottom">
  <div tabIndex={0} role="button" className="">DashBoard</div>
  <ul tabIndex={0} className="dropdown-content z-[10] menu p-2 shadow bg-base-100 rounded-box w-36">
    <li><NavLink to='/addServices'>Add Service</NavLink></li>
    <li><a>Manage Service</a></li>
    <li><a>Booked-Service</a></li>
    <li><a>Service-To-Do</a></li>
  </ul>
</div></li>:( <li></li>)}
          <li>
            
          </li>
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
          <div className="navbar-start">
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
                <img src={logo}  className="h-16 w-16 rounded-full"/>
                Repair <br />Zone
              </span>
            </a>
          </div>
  
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">{navlink}</ul>
          </div>
          <div className="navbar-end">
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
                 
                  <div className="tooltip" data-tip={user.displayName}> <img referrerPolicy="no-referrer" className="rounded-full w-8 h-8" src={user?.photoURL} /></div>
                  <div className="flex flex-col px-4">
                  <button onClick={() => logOut()}>Log Out</button></div>
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
              
              
            </div>
          </div>
        </div>
      </div>
    );
  };

export default Navbar;
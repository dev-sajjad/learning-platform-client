import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider";
import { FaUserAlt } from "react-icons/fa";
import { CiLight } from "react-icons/ci";
import { BsMoonStars } from "react-icons/bs";
import { useState } from "react";

const Header = () => {
  const [dark, setDark] = useState(false);

  const { user, logOut } = useContext(AuthContext);

  const handleLogout = () => {
    logOut()
      .then(() => {})
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      <div className="navbar sticky top-0 shadow-lg bg-slate-100 ">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost z-auto lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-rose-600"
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
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-slate-100 rounded-box w-52"
            >
              <li className="text-black p-0">
                <Link to="/home">Home</Link>
              </li>
              <li className="text-black">
                <Link to="/courses">Courses</Link>
              </li>

              <li className="text-black">
                <Link to="/blog">Blog</Link>
              </li>
              <li className="text-black">
                <Link to="/faq">FAQ</Link>
              </li>
              <li>
                <div>
                  <label className="label cursor-pointer">
                    {dark ? (
                      <span>
                        <CiLight
                          onClick={() => setDark(!dark)}
                          className=" text-orange-500 font-bold text-2xl"
                        />
                      </span>
                    ) : (
                      <span>
                        <BsMoonStars
                          onClick={() => setDark(!dark)}
                          className="text-xl text-slate-800"
                        />
                      </span>
                    )}
                  </label>
                </div>
              </li>
            </ul>
          </div>
          <Link className="normal-case text-black lg:ml-24 font-semibold text-2xl">
            Learner<span className="text-rose-500">Edge.</span>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">
            <li className="text-black">
              <Link to="/home">Home</Link>
            </li>
            <li className="text-black">
              <Link to="/courses">Courses</Link>
            </li>

            <li className="text-black">
              <Link to="/blog">Blog</Link>
            </li>
            <li className="text-black">
              <Link to="/faq">FAQ</Link>
            </li>
            <li></li>
          </ul>
          <div>
            <label className="label cursor-pointer">
              {dark ? (
                <span>
                  <CiLight
                    onClick={() => setDark(!dark)}
                    className=" text-orange-500 font-bold text-2xl"
                  />
                </span>
              ) : (
                <span>
                  <BsMoonStars
                    onClick={() => setDark(!dark)}
                    className="text-xl text-slate-800"
                  />
                </span>
              )}
            </label>
          </div>
        </div>
        <div className="navbar-end">
          {user?.email ? (
            <div className="flex items-center">
              <>
                {" "}
                <p className="text-black font-thin">{user?.displayName}</p>
                <div
                  className="tooltip tooltip-bottom tooltip-success"
                  data-tip={user?.displayName}
                >
                  <img
                    className="rounded-full h-8 w-8 mx-1"
                    src={user?.photoURL}
                    alt=""
                  />
                </div>
              </>
              <Link onClick={handleLogout}>
                <button className="mr-4 lg:mr-24 border  py-1 px-3 rounded-md hover:text-white hover:bg-black  border-black text-black">
                  LogOut
                </button>
              </Link>
            </div>
          ) : (
            <>
              <Link to="/login">
                <button className="border mr-2 py-1.5 px-4 rounded-md hover:text-white hover:bg-black hover:border-none border-black text-black">
                  Login
                </button>
              </Link>
              <FaUserAlt className="mr-4 lg:mr-24 text-black" />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;

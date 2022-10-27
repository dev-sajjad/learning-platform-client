import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
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
              </ul>
            </div>
            <Link className="normal-case text-black lg:ml-24 font-semibold text-2xl">
              Learner<span className='text-rose-500'>Edge.</span>
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
            </ul>
          </div>
          <div className="navbar-end">
            <button className="mr-4 lg:mr-24 border py-1.5 px-4 rounded-md hover:text-white hover:bg-black hover:border-none border-black text-black">
              Login
            </button>
          </div>
        </div>
      </div>
    );
}; 

export default Header;
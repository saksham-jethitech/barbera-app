import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);

  return (
    <nav className="w-full bg-[#11120F] shadow">
      <div className="w-full bg-[#FBB034] flex flex-col md:flex-row p-3 space-y-3 md:space-y-0">
        <div className="w-full md:w-8/12 flex justify-end items-center">
          <p className="poppins text-sm font-medium">
            Opening Hour : Sunday - Friday , 08:00 am - 10:00 pm
          </p>
        </div>
        <div className="flex justify-center space-x-3 w-full md:w-4/12">
          <img src="/Assets/instagram2.png" />
          <img src="/Assets/facebook2.png" />
          <img src="/Assets/twitter2.png" />
          <img src="/Assets/linkedin2.png" />
        </div>
      </div>
      <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
        <div>
          <div className="flex items-center justify-between py-3 md:py-5 md:block">
            <a href="javascript:void(0)">
              <img src="/Assets/logo.png" className="h-12" />
            </a>
            <div className="md:hidden">
              <button
                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        <div>
          <div
            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
              navbar ? "block" : "hidden"
            }`}
          >
            <ul className="items-center justify-center space-y-8 md:flex md:space-x-20 md:space-y-0">
              <li className="text-white hover:text-[#FFA91A] font-semibold">
                <Link to="/">Home</Link>
              </li>
              <li className="text-white hover:text-[#FFA91A] font-semibold">
                <Link to="/about">About US</Link>
              </li>
              <li className="text-white hover:text-[#FFA91A] font-semibold">
                <Link to="/services">Services</Link>
              </li>
              <li className="text-white hover:text-[#FFA91A] font-semibold">
                <Link to="/contact">Contact</Link>
              </li>
              <li className="text-white hover:text-[#FFA91A] font-semibold">
                <Link to="/getApp">Get the APP</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

import React, { useState } from "react";
import { MdOutlineDashboard } from "react-icons/md";
import BrokenBag from "./Icons/BrokenBag";
import Users from "./Icons/Users";
import Setting from "./Icons/Setting";
import { useLocation, Link } from "react-router-dom";

const Sidebar = () => {
  const [open, setOpen] = useState(true);

  const location = useLocation();

  const toggleSidebar = () => {
    setOpen(!open);
  };
  return (
    <div className=" h-full z-50 fixed flex items-end justify-end ">
      <button
        className="fixed  lg:hidden z-90 bottom-10 right-8 bg-[#191919] w-10 h-10 rounded-full drop-shadow-lg flex justify-center items-center text-white text-4xl hover:bg-[#151515]   duration-300"
        onClick={toggleSidebar}
      >
        <span className="text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            className="w-6 m-auto"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M3.646 9.146a.5.5 0 0 1 .708 0L8 12.793l3.646-3.647a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 0-.708zm0-2.292a.5.5 0 0 0 .708 0L8 3.207l3.646 3.647a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 0 0 0 .708z"
            />
          </svg>
        </span>
      </button>

      <div
        className={` ${
          open ? "w-48 pr-2" : "w-0 "
        } lg:w-72 bg-[#191919] h-screen   relative duration-500 py-5 flex flex-col space-y-16`}
      >
        <div className="flex justify-center mt-3 w-[80%]">
          <img
            src="/Assets/logo.png"
            className="w-16"
            // className={`text-white  font-medium text-2xl text-center duration-200 ${
            //   !open && "invisible"
            // }`}
          />
        </div>
        <div
          className={`w-full ${open ? `flex flex-col space-y-5` : `hidden`} `}
        >
          <Link
            to="/admin/dashboard"
            className={`${
              location.pathname == "/admin/dashboard"
                ? "rounded-r-2xl text-[#FBB033]"
                : "text-white"
            } w-full flex p-2 cursor-pointer hover:rounded-r-2xl bg-[#0C0B0B] py-4 hover:text-[#FBB033] font-montserrat font-semibold  text-sm items-center gap-x-2 `}
          >
            <MdOutlineDashboard className="text-2xl" />
            <span>Dashboard</span>
          </Link>
          <Link
            to="/admin/bookings"
            className={`${
              location.pathname == "/admin/bookings"
                ? "rounded-r-2xl text-[#FBB033]"
                : "text-white"
            } svg-container w-full flex p-2 cursor-pointer hover:rounded-r-2xl bg-[#0C0B0B] py-4 hover:text-[#FBB033] font-montserrat font-semibold  text-sm items-center gap-x-2 `}
          >
            <BrokenBag
              fill={
                location.pathname == "/admin/bookings" ? "#FBB033" : `white`
              }
            />
            <span>Booking</span>
          </Link>
          <Link
            to="/admin/user-management"
            className={`${
              location.pathname == "/admin/user-management"
                ? "rounded-r-2xl text-[#FBB033]"
                : "text-white"
            } svg-container w-full flex p-2 cursor-pointer hover:rounded-r-2xl bg-[#0C0B0B] py-4 hover:text-[#FBB033] font-montserrat font-semibold  text-sm items-center gap-x-2 `}
          >
            <Users
              fill={
                location.pathname == "/admin/user-management"
                  ? "#FBB033"
                  : `white`
              }
            />
            <span>User Management</span>
          </Link>
          <Link
            to="/admin/services"
            className={`${
              location.pathname == "/admin/services"
                ? "rounded-r-2xl text-[#FBB033]"
                : "text-white"
            } svg-container w-full flex p-2 cursor-pointer hover:rounded-r-2xl bg-[#0C0B0B] py-4 hover:text-[#FBB033] font-montserrat font-semibold  text-sm items-center gap-x-2 `}
          >
            <Setting
              fill={
                location.pathname == "/admin/services" ? "#FBB033" : `white`
              }
            />
            <span>Services</span>
          </Link>
          <Link
            to="/admin/code-management"
            className={`${
              location.pathname == "/admin/code-management"
                ? "rounded-r-2xl text-[#FBB033]"
                : "text-white"
            } svg-container w-full flex p-2 cursor-pointer hover:rounded-r-2xl bg-[#0C0B0B] py-4 hover:text-[#FBB033] font-montserrat font-semibold  text-sm items-center gap-x-2 `}
          >
            <Users
              fill={
                location.pathname == "/admin/code-management"
                  ? "#FBB033"
                  : `white`
              }
            />
            <span>Code Management</span>
          </Link>
          <Link
            to="/admin/banners"
            className={`${
              location.pathname == "/admin/banners"
                ? "rounded-r-2xl text-[#FBB033]"
                : "text-white"
            } svg-container w-full flex p-2 cursor-pointer hover:rounded-r-2xl bg-[#0C0B0B] py-4 hover:text-[#FBB033] font-montserrat font-semibold  text-sm items-center gap-x-2 `}
          >
            <BrokenBag
              fill={location.pathname == "/admin/banners" ? "#FBB033" : `white`}
            />
            <span>Banners</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { AiOutlineDown } from "react-icons/ai";
import "./index.css";
import Sidebar from "./Components/Sidebar";
import Layout from "./Components/Layout";
import LogoutModal from "./Components/LogoutModal";

const AdminDashboard = () => {
  return (
    <>
      <div className=" h-screen flex">
        <Sidebar />
        <Layout>
          <div className="flex flex-col space-y-6">
            <div className="flex justify-center xl:justify-start   text-[#FBB033] items-center font-be-jost-pro text-xl font-bold space-x-3 pt-8 pl-5">
              <p>April Activity</p>
              <AiOutlineDown className="cursor-pointer" />
            </div>
            <div className="flex flex-col xl:flex-row space-y-6 xl:space-y-0 justify-around items-center xl:space-x-6">
              <div className="w-[90%] xl:w-1/5 bg-[#FBB033] rounded-3xl flex flex-col justify-around items-center space-y-10 px-5 py-7">
                <img src="/Assets/dashboard-1.png" />
                <div className="w-[90%] bg-[#ECF1FF] h-2"></div>
                <p className="text-[#39354E] font-semibold text-sm font-be-jost-pro">
                  Total Earnings
                </p>
                <div className="bg-white min-w-1/2 px-2 py-7 rounded-md h-16 flex justify-center items-center ">
                  <p className="text-[#39354E] font-bold text-base font-be-jost-pro">
                    ₹2,04,000
                  </p>
                </div>
              </div>
              <div className="w-[90%] xl:w-1/5 bg-[#FBB033] rounded-3xl flex flex-col justify-around items-center space-y-10 px-5 py-7">
                <img src="/Assets/Security.png" />
                <div className="w-[90%] bg-[#ECF1FF] h-2"></div>
                <p className="text-[#39354E] font-semibold text-sm font-be-jost-pro">
                  Total Bookings
                </p>
                <div className="bg-white min-w-1/2 px-2 py-7 rounded-md h-16 flex justify-center items-center">
                  <p className="text-[#39354E] font-bold text-xl font-be-jost-pro">
                    202
                  </p>
                </div>
              </div>
              <div className="flex flex-col space-y-4">
                <p className="text-center xl:text-left text-[#FBB033] font-be-jost-pro text-xl font-bold">
                  Bookings
                </p>
                <img src="/Assets/LineGraph.png" />
              </div>
            </div>
          </div>
        </Layout>
      </div>
    </>
  );
};

export default AdminDashboard;

import React, { useState } from "react";
import OTPModal from "./Components/OTPModal";

const AdminLogin = () => {
  const [number, setNumber] = useState("");
  const [isValidNumber, setIsValidNumber] = useState(true);
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = () => {
    setIsValidNumber(true);
    if (/\D/.test(number) || number.length != 10) {
      setIsValidNumber(false);
      return;
    }

    setShowModal(true);
  };

  return (
    <div className="w-full  h-auto ">
      <div className="flex flex-col space-y-5 md:space-y-0 lg:flex-row items-center md:items-end  justify-between w-full h-screen pt-5 bg-[#11120F] ">
        <div className="flex flex-col justify-center items-center w-full lg:w-1/2 h-screen space-y-20">
          <p className="text-[#FBB034] text-lg font-normal font-be-jost-pro text-center md:text-left">
            Welcome to Barbera
          </p>
          <div className="flex flex-col w-full space-y-10 items-center">
            <div className="flex flex-col w-full space-y-5 items-center">
              <p className="font-be-jost-pro font-normal text-xs text-white">
                Login With Mobile
              </p>
              <div className="w-3/4 lg:w-1/2 flex flex-row items-center bg-[#F5F8FE] rounded-md p-2">
                <span className="w-[10%] py-2 px-3">
                  <p className="font-poppins text-xs font-medium">+91</p>
                </span>
                <input
                  type="text"
                  placeholder="Enter Mobile Number"
                  className="w-[90%] py-2 px-3 rounded-md outline-none text-xs font-poppins font-medium placeholder-text-xs placeholder-font-poppins placeholder-font-medium"
                  value={number}
                  onChange={(e) => setNumber(e.target.value)}
                />
              </div>
              {!isValidNumber && (
                <p className="font-poppins text-xs font-medium text-red-600">
                  Please enter a valid number
                </p>
              )}
            </div>
            <button
              className="w-3/4 lg:w-1/2 py-4 text-center bg-[#FBB033] rounded-md font-be-jost-pro font-semibold text-xs"
              onClick={handleSubmit}
            >
              Send OTP
            </button>
          </div>
        </div>
        <div className="">
          <img src="/Assets/homepage-1.png" className="w-full" />
        </div>
      </div>
      {showModal && <OTPModal setShowModal={setShowModal} number={number} />}
    </div>
  );
};

export default AdminLogin;

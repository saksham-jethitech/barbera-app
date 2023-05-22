import React, { useState } from "react";
import Footer from "./Components/Footer";

const Carrer = () => {
  const [isDatePickerVisible, setIsDatePickerVisible] = useState(false);
  const handleInputClick = () => {
    setIsDatePickerVisible(true);
  };

  const handleDatePickerChange = (event) => {
    // setSelectedDate(event.target.value);
    setIsDatePickerVisible(false);
  };
  return (
    <div className="w-full h-auto md:h-screen">
      <div className="flex flex-col items-center md:justify-around md:items-center w-full h-auto py-16 bg-[#11120F]">
        {/* <div className="flex flex-col items-start justify-center p-10 md:p-0 w-full md:w-1/3 space-y-5"> */}
        <div className="flex flex-col space-y-3 w-full justify-start items-center px-20">
          <p className="text-[#FBB034] text-lg font-normal font-be-jost-pro w-full text-center md:text-left">
            Join Our Team
          </p>
          <p className="text-white text-3xl font-medium font-be-jost-pro w-full text-center md:text-left">
            Join Us
          </p>
        </div>

        <div className="flex flex-col md:flex-row space-y-10 md:space-y-0 items-center justify-around w-full p-6 md:space-x-4">
          <input
            type="text"
            placeholder="First Name*"
            className="bg-[#11120F] outline-none text-white border-b-2 py-2 px-3 w-full md:w-2/5"
          />
          <input
            type="text"
            placeholder="Last Name*"
            className="bg-[#11120F] outline-none text-white border-b-2 py-2 px-3 w-full md:w-2/5"
          />
        </div>
        <div className="flex flex-col md:flex-row space-y-10 md:space-y-0 items-center justify-around w-full p-6 md:space-x-4">
          <input
            type="email"
            placeholder="Email Id*"
            className="bg-[#11120F] outline-none text-white border-b-2 py-2 px-3 w-full md:w-2/5"
          />
          <input
            type="text"
            placeholder="Mobile Number*"
            className="bg-[#11120F] outline-none text-white border-b-2 py-2 px-3 w-full md:w-2/5"
          />
        </div>
        <div className="flex flex-col md:flex-row space-y-10 md:space-y-0 items-center justify-around w-full p-6 md:space-x-4">
          <input
            type="text"
            placeholder="Role*"
            className="bg-[#11120F] outline-none text-white border-b-2 py-2 px-3 w-full md:w-2/5"
          />
          {isDatePickerVisible ? (
            <input
              type="date"
              placeholder="Start Date"
              className="bg-[#11120F] outline-none text-white border-b-2 py-2 px-3 w-full md:w-2/5"
              onBlur={() => setIsDatePickerVisible(false)}
            />
          ) : (
            <input
              type="text"
              placeholder="Start Date"
              className="bg-[#11120F] outline-none text-white border-b-2 py-2 px-3 w-full md:w-2/5"
              onClick={() => setIsDatePickerVisible(true)}
            />
          )}
        </div>

        <div className="flex md:justify-start justify-center items-center w-full px-20 py-5">
          <button className="bg-[#FBB034] rounded-md py-3 px-3 w-40 font-bold text-base text-[#202125]">
            Apply
          </button>
        </div>

        {/* <div className="flex justify-around w-full p-6">
          <div className="flex flex-col w-2/5 space-y-10">
            <input
              type="text"
              placeholder="First Name*"
              className="bg-[#11120F] outline-none text-white border-b-2 py-2 px-3"
            />
            <input
              type="email"
              placeholder="Email Id*"
              className="bg-[#11120F] outline-none text-white border-b-2 py-2 px-3"
            />
            <input
              type="text"
              placeholder="Role*"
              className="bg-[#11120F] outline-none text-white border-b-2 py-2 px-3"
            />
          </div>
          <div className="flex flex-col w-2/5 space-y-10">
            <input
              type="text"
              placeholder="Last Name*"
              className="bg-[#11120F] outline-none text-white border-b-2 py-2 px-3"
            />
            <input
              type="text"
              placeholder="Mobile Number*"
              className="bg-[#11120F] outline-none text-white border-b-2 py-2 px-3"
            />
            {isDatePickerVisible ? (
              <input
                type="date"
                placeholder="Start Date"
                className="bg-[#11120F] outline-none text-white border-b-2 py-2 px-3"
                onBlur={() => setIsDatePickerVisible(false)}
              />
            ) : (
              <input
                type="text"
                placeholder="Start Date"
                className="bg-[#11120F] outline-none text-white border-b-2 py-2 px-3"
                onClick={() => setIsDatePickerVisible(true)}
              />
            )}
          </div>
        </div> */}

        {/* </div> */}
      </div>

      {/* <Footer /> */}
    </div>
  );
};

export default Carrer;

import React, { useState } from "react";
import { CircularProgress } from "@material-ui/core";
import axios from "axios";

const Carrer = () => {
  const [isDatePickerVisible, setIsDatePickerVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [role, setRole] = useState("");
  const [date, setDate] = useState("");

  const handleInputClick = () => {
    setIsDatePickerVisible(true);
  };

  const handleDatePickerChange = (event) => {
    // setSelectedDate(event.target.value);
    setIsDatePickerVisible(false);
  };

  const handleSubmit = async () => {
    // console.log(fName, lName, email, mobile, role, date);
    if (
      fName.length == 0 ||
      lName.length == 0 ||
      mobile.length == 0 ||
      email.length == 0 ||
      role.length == 0 ||
      date.length == 0
    )
      return;

    setIsLoading(true);

    await axios
      .post(`${process.env.REACT_APP_BASE_URL}/email/career`, {
        fName,
        lName,
        email,
        mobile,
        role,
        date,
      })
      .then((res) => {
        setFName("");
        setLName("");
        setMobile("");
        setEmail("");
        setRole("");
        setDate("");
      })
      .catch((error) => {
        console.log("error", error);
      });
    setIsLoading(false);
  };

  return (
    <div className="w-full h-auto ">
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
            value={fName}
            onChange={(e) => setFName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Last Name*"
            className="bg-[#11120F] outline-none text-white border-b-2 py-2 px-3 w-full md:w-2/5"
            value={lName}
            onChange={(e) => setLName(e.target.value)}
          />
        </div>
        <div className="flex flex-col md:flex-row space-y-10 md:space-y-0 items-center justify-around w-full p-6 md:space-x-4">
          <input
            type="email"
            placeholder="Email Id*"
            className="bg-[#11120F] outline-none text-white border-b-2 py-2 px-3 w-full md:w-2/5"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="text"
            placeholder="Mobile Number*"
            className="bg-[#11120F] outline-none text-white border-b-2 py-2 px-3 w-full md:w-2/5"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
          />
        </div>
        <div className="flex flex-col md:flex-row space-y-10 md:space-y-0 items-center justify-around w-full p-6 md:space-x-4">
          <input
            type="text"
            placeholder="Role*"
            className="bg-[#11120F] outline-none text-white border-b-2 py-2 px-3 w-full md:w-2/5"
            value={role}
            onChange={(e) => setRole(e.target.value)}
          />
          {isDatePickerVisible ? (
            <input
              type="date"
              placeholder="Start Date"
              className="bg-[#11120F] outline-none text-white border-b-2 py-2 px-3 w-full md:w-2/5"
              onBlur={() => setIsDatePickerVisible(false)}
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          ) : (
            <input
              type="text"
              placeholder="Start Date"
              className="bg-[#11120F] outline-none text-white border-b-2 py-2 px-3 w-full md:w-2/5"
              onFocus={() => setIsDatePickerVisible(true)}
              value={date}
            />
          )}
        </div>

        <div className="flex md:justify-start justify-center items-center w-full px-20 py-5">
          <button
            className="bg-[#FBB034] rounded-md py-3 px-3 w-40 font-bold text-base text-[#202125]"
            onClick={handleSubmit}
          >
            Apply
          </button>
        </div>
      </div>

      {isLoading ? (
        <div className="fixed top-0 left-0 bottom-0 right-0 flex items-center justify-center bg-black bg-opacity-30 text-white z-50">
          <CircularProgress
            color="inherit"
            size="7rem"
            className="self-center"
          />
        </div>
      ) : null}
    </div>
  );
};

export default Carrer;

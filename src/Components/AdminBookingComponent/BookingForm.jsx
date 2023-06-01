import React, { useState } from "react";
import "../../index.css";

const BookingForm = ({ setEditBookingForm, editingData }) => {
  const [name, setName] = useState(editingData.name);
  const [services, setServices] = useState(editingData.service);
  const [assignedEmployee, setAssignedEmployee] = useState(
    editingData.assignedEmployee
  );
  const [date, setDate] = useState(editingData.date);
  const [time, setTime] = useState(editingData.time);
  const [amount, setAmount] = useState(editingData.amount);
  const [address, setAddress] = useState(editingData.address);

  const handleUpdate = () => {
    // console.log(date, time);
    setEditBookingForm(false);
  };

  return (
    <div className="flex flex-col space-y-6">
      <div className="flex w-full items-center">
        <span className="font-be-jost-pro font-medium text-white text-sm w-1/6">
          Name:
        </span>
        <input
          type="text"
          placeholder="Name*"
          className="px-2 py-1 bg-[#0c0b0b] border-b-2 border-b-[#E0E0E0] outline-none text-white w-4/6"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="flex w-full items-center">
        <span className="font-be-jost-pro font-medium text-white text-sm w-1/6">
          Services:
        </span>
        <input
          type="text"
          placeholder="Services*"
          className="px-2 py-1 bg-[#0c0b0b] border-b-2 border-b-[#E0E0E0] outline-none text-white w-4/6"
          value={services}
          onChange={(e) => setServices(e.target.value)}
        />
      </div>
      <div className="flex w-full items-center">
        <span className="font-be-jost-pro font-medium text-white text-sm w-1/6">
          Assigned Employee:
        </span>
        <select
          className={`px-2 py-1 bg-[#0c0b0b] border-b-[1px] border-b-[#E0E0E0] outline-none text-white w-4/6`}
          value={assignedEmployee}
          onChange={(e) => setAssignedEmployee(e.target.value)}
        >
          <option value="" disabled hidden>
            Assigned Employee*
          </option>
          <option value="Employee No. 1">Emloyee No. 1</option>
          <option value="Employee No. 2">Emloyee No. 2</option>
          <option value="Employee No. 3">Emloyee No. 3</option>
          <option value="Employee No. 4">Emloyee No. 4</option>
          <option value="Employee No. 5">Emloyee No. 5</option>
          <option value="Yet to assigned">Yet to assigned</option>
        </select>
      </div>
      <div className="flex flex-col lg:flex-row space-y-5 lg:space-y-0 w-full lg:items-center">
        <div className="flex w-full lg:w-1/2 items-center">
          <span className="font-be-jost-pro font-medium text-white text-sm w-1/5 lg:w-1/3    ">
            Date:
          </span>
          <input
            type="date"
            placeholder="Start Date"
            className="bg-[#0c0b0b] outline-none text-white border-b-2 py-2 px-3 w-4/6 md:w-2/5"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
        <div className="flex w-full lg:w-1/2 items-center">
          <span className="font-be-jost-pro font-medium text-white text-sm w-1/5 lg:w-[10%]    ">
            Time:
          </span>
          <input
            type="time"
            placeholder="Start Date"
            className="bg-[#0c0b0b] outline-none text-white border-b-2 py-2 px-3 w-4/6 md:w-[57%]"
            value={time}
            onChange={(e) => setTime(e.target.value)}
          />
        </div>
      </div>
      <div className="flex w-full items-center">
        <span className="font-be-jost-pro font-medium text-white text-sm w-1/6">
          Amount:
        </span>
        <span className="text-white">&#8377;</span>
        <input
          type="text"
          placeholder="Amount*"
          className="px-2 py-1 bg-[#0c0b0b] border-b-2 border-b-[#E0E0E0] outline-none text-white w-4/6 lg:w-[20%]"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </div>
      <div className="flex w-full items-center">
        <span className="font-be-jost-pro font-medium text-white text-sm w-1/6">
          Address:
        </span>
        <input
          type="text"
          placeholder="Address*"
          className="px-2 py-1 bg-[#0c0b0b] border-b-2 border-b-[#E0E0E0] outline-none text-white w-4/6"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
      </div>
      <div className="flex py-16 w-full justify-center items-center">
        <button
          className="px-5 py-2 bg-[#FBB034] font-poppins text-sm font-bold rounded-md"
          onClick={handleUpdate}
        >
          Update Bookings
        </button>
      </div>
    </div>
  );
};

export default BookingForm;

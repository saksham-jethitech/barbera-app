import React, { useState } from "react";
import Sidebar from "./Components/Sidebar";
import Layout from "./Components/Layout";
import "./index.css";
import BookingTable from "./Components/AdminBookingComponent/BookingTable";
import BookingForm from "./Components/AdminBookingComponent/BookingForm";

const tempData = [
  {
    name: "Avengers Black Widow",
    service: ["hair cut"],
    assignedEmployee: "Employee No. 1",
    date: "2023-05-12",
    time: "12:00",
    amount: 300,
    address: "B-31, Galaxy CHS, Bandra, Mumbai ",
  },
  {
    name: "Moonlight",
    service: ["hair cut"],
    assignedEmployee: "Employee No. 2",
    date: "2023-05-12",
    time: "13:00",
    amount: 400,
    address: "B-31, Galaxy CHS, Bandra, Mumbai ",
  },
  {
    name: "Moonlight",
    service: ["hair cut"],
    assignedEmployee: "Yet to assigned",
    date: "2023-05-12",
    time: "13:00",
    amount: 500,
    address: "B-31, Galaxy CHS, Bandra, Mumbai ",
  },
  {
    name: "Grimsby",
    service: ["hair cut"],
    assignedEmployee: "Employee No. 4",
    date: "2023-05-12",
    time: "16:00",
    amount: 300,
    address: "B-31, Galaxy CHS, Bandra, Mumbai ",
  },
  {
    name: "Grimsby",
    service: ["beard"],
    assignedEmployee: "Yet to assigned",
    date: "2023-05-12",
    time: "16:00",
    amount: 200,
    address: "B-31, Galaxy CHS, Bandra, Mumbai ",
  },
  {
    name: "Spider Man",
    service: ["hair", "nails"],
    assignedEmployee: "Employee No. 6",
    date: "2023-05-12",
    time: "18:00",
    amount: 800,
    address: "B-31, Galaxy CHS, Bandra, Mumbai ",
  },
];

const AdminBookings = () => {
  const [data, setData] = useState(tempData);
  const [isUpcomingBooking, setIsUpcomingBooking] = useState(true);
  const [editBookingForm, setEditBookingForm] = useState(false);
  const [editingData, setEditingData] = useState({});

  return (
    <>
      <div className=" h-screen flex">
        <Sidebar />
        <Layout>
          {editBookingForm ? (
            <BookingForm
              setEditBookingForm={setEditBookingForm}
              editingData={editingData}
            />
          ) : (
            <BookingTable
              data={data}
              isUpcomingBooking={isUpcomingBooking}
              setIsUpcomingBooking={setIsUpcomingBooking}
              setEditBookingForm={setEditBookingForm}
              setEditingData={setEditingData}
            />
          )}
        </Layout>
      </div>
    </>
  );
};

export default AdminBookings;

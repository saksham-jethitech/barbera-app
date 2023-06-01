import React from "react";
import DataTable from "../DataTable";

const BookingTable = ({
  data,
  isUpcomingBooking,
  setIsUpcomingBooking,
  setEditBookingForm,
  setEditingData,
}) => {
  const handleEditClick = (row) => {
    setEditBookingForm(true);
    setEditingData(row);
  };
  return (
    <div className="flex flex-col space-y-6">
      <div className="flex text-[#FBB033] items-center font-be-jost-pro text-xl font-bold space-x-3 pt-8 pl-5">
        <p
          className={`${
            isUpcomingBooking ? "bg-white text-[#00395E]" : "text-[#FBB034]"
          }  hover:bg-white hover:text-[#00395E] rounded-sm cursor-pointer text-base px-2 py-1 font-semibold font-be-jost-pro text-center md:text-left`}
          onClick={() => setIsUpcomingBooking(true)}
        >
          Upcoming Bookings
        </p>
        <p
          className={`${
            !isUpcomingBooking ? "bg-white text-[#00395E]" : "text-[#FBB034]"
          }    hover:bg-white hover:text-[#00395E] rounded-sm cursor-pointer text-base px-2 py-1 font-semibold font-be-jost-pro text-center md:text-left`}
          onClick={() => setIsUpcomingBooking(false)}
        >
          Previous Bookings
        </p>
      </div>
      {/* <div className="overflow-x-auto"> */}
      <div>
        {/* <DataTable
      columns={columns}
      data={data}
      fixedHeader
      customStyles={customStyles}
      pagination
    /> */}
        <DataTable>
          <thead>
            <tr>
              <th data-priority="1" className="text-white">
                Name
              </th>
              <th data-priority="2" className="text-white">
                Service
              </th>
              <th data-priority="3" className="text-white">
                Assigned Employee
              </th>
              <th data-priority="4" className="text-white">
                Date/Time
              </th>
              <th data-priority="5" className="text-white">
                Amount
              </th>
              <th data-priority="6" className="text-white">
                Addresses
              </th>
              {isUpcomingBooking && (
                <th data-priority="9" className="text-white">
                  Actions
                </th>
              )}
            </tr>
          </thead>
          <tbody>
            {/* <tr> */}
            {data.map((product) => {
              const [hours, minutes] = product.time.split(":");
              const dateObj = new Date();
              dateObj.setHours(hours);
              dateObj.setMinutes(minutes);

              const formatter = new Intl.DateTimeFormat("en-US", {
                hour: "numeric",
                minute: "numeric",
                hour12: true,
              });

              const formattedTime = formatter.format(dateObj);

              return (
                <tr className="border-b-2 border-b-[#E0E0E0]">
                  <td className="text-white w-[10%] px-1 border-b-[1px] border-b-[#E0E0E0]">
                    {product.name}
                  </td>
                  <td className="w-[8%] border-b-[1px] border-b-[#E0E0E0]">
                    <div className=" flex justify-center w-3/5 space-x-1">
                      {product.service.map((word) => (
                        <span className="uppercase text-xs font-medium text-black bg-[#FBB033] rounded-2xl px-2 py-1">{`${word}`}</span>
                      ))}
                    </div>
                  </td>
                  <td className="text-white w-[7%] text-center border-b-[1px] border-b-[#E0E0E0]">{`${product.assignedEmployee}`}</td>
                  <td className="text-white w-[7%] text-center border-b-[1px] border-b-[#E0E0E0]">{`${product.date} ${formattedTime}`}</td>
                  <td className="text-white w-[7%] text-center border-b-[1px] border-b-[#E0E0E0]">{`₹  ${product.amount}`}</td>
                  <td className="text-white w-[7%] text-center border-b-[1px] border-b-[#E0E0E0]">{`${product.address}`}</td>

                  {isUpcomingBooking && (
                    <td className="w-[10%] text-center px-2 border-b-[1px] border-b-[#E0E0E0]">
                      <div className="flex flex-col lg:flex-row space-y-2 lg:space-y-0 items-center justify-center h-full lg:space-x-2">
                        <button
                          className="rounded-md bg-white py-2 px-3 text-black text-sm font-medium"
                          onClick={() => handleEditClick(product)}
                        >
                          Edit
                        </button>
                        <button className="rounded-md bg-white py-2 px-3 text-black text-sm font-medium">
                          Delete
                        </button>
                      </div>
                    </td>
                  )}
                </tr>
              );
            })}
          </tbody>
        </DataTable>
      </div>
    </div>
  );
};

export default BookingTable;

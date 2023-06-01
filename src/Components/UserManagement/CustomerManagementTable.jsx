import React, { useState } from "react";
import DataTable from "../DataTable";

const CustomerManagementTable = ({ data }) => {
  const [editForm, setEditForm] = useState(false);
  return (
    <>
      <div>
        <DataTable>
          <thead>
            <tr>
              <th data-priority="1" className="text-white">
                Name
              </th>
              <th data-priority="2" className="text-white">
                Mobile Number
              </th>
              <th data-priority="3" className="text-white">
                Address
              </th>
              <th data-priority="4" className="text-white">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {/* <tr> */}
            {data.map((row) => {
              return (
                <tr className="border-b-2 border-b-[#E0E0E0]">
                  <td className="text-white w-[10%] px-1 border-b-[1px] border-b-[#E0E0E0]">
                    {row.name}
                  </td>
                  <td className="text-white w-[7%] text-center border-b-[1px] border-b-[#E0E0E0]">{`${row.mobileNumber}`}</td>
                  <td className="text-white w-[7%] text-center border-b-[1px] border-b-[#E0E0E0]">{`${row.address}`}</td>

                  <td className="w-[10%] text-center px-2 border-b-[1px] border-b-[#E0E0E0]">
                    <div className="flex flex-col lg:flex-row space-y-2 lg:space-y-0 items-center justify-center h-full lg:space-x-2">
                      <button className="rounded-md bg-white py-2 px-3 text-black text-sm font-medium">
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </DataTable>
      </div>
    </>
  );
};

export default CustomerManagementTable;

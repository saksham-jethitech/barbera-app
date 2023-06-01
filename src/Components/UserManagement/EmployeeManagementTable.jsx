import React, { useState } from "react";
import DataTable from "../DataTable";
import AddEmployeeForm from "./AddEmployeeForm";
import EditEmployeeForm from "./EditEmployeeForm";

const EmployeeManagementTable = ({
  data,
  addEmployee,
  setAddEmployee,
  editForm,
  setEditForm,
  editData,
  setEditData,
}) => {
  // const [editForm, setEditForm] = useState(false);

  const handleEditClick = (data) => {
    setEditData(data);

    setEditForm(true);
  };

  return (
    <>
      {addEmployee ? (
        <AddEmployeeForm setAddEmployee={setAddEmployee} />
      ) : editForm ? (
        <EditEmployeeForm setEditForm={setEditForm} editData={editData} />
      ) : (
        <div>
          <DataTable>
            <thead>
              <tr>
                <th data-priority="1" className="text-white">
                  Name
                </th>
                <th data-priority="2" className="text-white">
                  Inventory
                </th>
                <th data-priority="3" className="text-white">
                  Amount
                </th>
                <th data-priority="4" className="text-white">
                  Mobile Number
                </th>
                <th data-priority="5" className="text-white">
                  Active
                </th>
                <th data-priority="6" className="text-white">
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
                    <td className="w-[14%] text-center border-b-[1px] border-b-[#E0E0E0]">
                      {row.inventory.map((obj) => (
                        <p className="text-white mb-2">{obj.inventory}</p>
                      ))}
                    </td>
                    <td className="w-[8%] text-center border-b-[1px] border-b-[#E0E0E0]">
                      {row.inventory.map((obj) => (
                        <p className="text-white">{`x${obj.amount}`}</p>
                      ))}
                    </td>
                    <td className="text-white w-[7%] text-center border-b-[1px] border-b-[#E0E0E0]">{`${row.mobileNumber}`}</td>
                    <td className="text-white w-[7%] text-center border-b-[1px] border-b-[#E0E0E0]">
                      {row.active ? <img src="/Assets/active.png" /> : null}
                    </td>

                    <td className="w-[10%] text-center px-2 border-b-[1px] border-b-[#E0E0E0]">
                      <div className="flex flex-col lg:flex-row space-y-2 lg:space-y-0 items-center justify-center h-full lg:space-x-2">
                        <button className="rounded-md bg-white py-2 px-3 text-black text-sm font-medium">
                          Track
                        </button>
                        <button
                          className="rounded-md bg-white py-2 px-3 text-black text-sm font-medium"
                          onClick={() => handleEditClick(row)}
                        >
                          Edit
                        </button>
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
      )}
    </>
  );
};

export default EmployeeManagementTable;

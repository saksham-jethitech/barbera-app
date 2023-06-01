import React, { useState } from "react";
import DataTable from "../DataTable";
import AddPromoModal from "./AddPromoModal";

const CodeManagementTable = ({ data, setEditForm, setEditData }) => {
  const [openModal, setOpenModal] = useState(false);

  const handleEditClick = (data) => {
    setEditData(data);
    setEditForm(true);
  };

  return (
    <div className="flex flex-col space-y-6">
      <div className="flex items-center justify-between pt-8 pl-5">
        <p className="font-be-jost-pro text-2xl font-bold text-[#FBB033] ">
          Promo Code Management
        </p>
        <button
          className="px-5 py-2 rounded-md text-[#FBB033] border border-[#FBB033] font-be-jost-pro font-medium text-sm"
          onClick={() => setOpenModal(true)}
        >
          Add Promo Code
        </button>
      </div>
      <div>
        <DataTable>
          <thead>
            <tr>
              <th data-priority="1" className="text-white">
                Name
              </th>
              <th data-priority="2" className="text-white">
                Type
              </th>
              <th data-priority="3" className="text-white">
                % OFF
              </th>
              <th data-priority="4" className="text-white">
                PROMO Code
              </th>
              <th data-priority="5" className="text-white">
                Actions
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
                  <td className="text-white w-[10%] px-1 border-b-[1px] border-b-[#E0E0E0]">
                    {row.type}
                  </td>
                  <td className="text-white w-[7%] text-center border-b-[1px] border-b-[#E0E0E0]">{`${row.off}`}</td>
                  <td className="text-white w-[7%] text-center border-b-[1px] border-b-[#E0E0E0]">{`${row.promoCode}`}</td>

                  <td className="w-[10%] text-center px-2 border-b-[1px] border-b-[#E0E0E0]">
                    <div className="flex flex-col lg:flex-row space-y-2 lg:space-y-0 items-center justify-center h-full lg:space-x-2">
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
      {openModal && <AddPromoModal setShowModal={setOpenModal} />}
    </div>
  );
};

export default CodeManagementTable;

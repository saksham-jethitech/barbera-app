import React from "react";
import DataTable from "../DataTable";
import "../../index.css";

const ServiceTable = ({ data, setOpenServiceForm }) => {
  return (
    <div className="flex flex-col space-y-6">
      <div className="flex justify-center xl:justify-between   text-[#FBB033] items-center font-be-jost-pro text-xl font-bold space-x-3 pt-8 pl-5">
        <p className="font-be-jost-pro text-[#FBB033] font-bold text-4xl">
          Services
        </p>
        <button
          className="border border-[#FBB033] bg-black text-[#FBB033] font-be-jost-pro font-medium text-sm rounded-md px-10 py-2"
          onClick={() => setOpenServiceForm(true)}
        >
          Add Services
        </button>
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
                Service Name
              </th>
              <th data-priority="2" className="text-white">
                Category
              </th>
              <th data-priority="3" className="text-white">
                Sub-Category
              </th>
              <th data-priority="4" className="text-white">
                Price
              </th>
              <th data-priority="5" className="text-white">
                Add Image
              </th>
              <th data-priority="6" className="text-white">
                Inventory
              </th>
              <th data-priority="7" className="text-white">
                Amount
              </th>
              <th data-priority="8" className="text-white">
                Desciption
              </th>
              <th data-priority="9" className="text-white">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {/* <tr> */}
            {data.map((product) => {
              return (
                <tr className="border-b-2 border-b-[#E0E0E0]">
                  <td className="text-white w-[10%] px-1 border-b-[1px] border-b-[#E0E0E0]">
                    {product.serviceName}
                  </td>
                  <td className="w-[8%] border-b-[1px] border-b-[#E0E0E0]">
                    <div className="bg-[#FBB033] rounded-2xl px-3 py-1 flex justify-center w-3/5">
                      <p className="uppercase text-xs font-medium text-black ">{`${product.category}`}</p>
                    </div>
                  </td>
                  <td className="w-[8%] border-b-[1px] border-b-[#E0E0E0]">
                    <div className="bg-[#FBB033] rounded-2xl px-3 py-1 flex justify-center w-3/5">
                      <p className="uppercase text-xs font-medium text-black ">{`${product.subCategory}`}</p>
                    </div>
                  </td>
                  <td className="text-white w-[7%] text-center border-b-[1px] border-b-[#E0E0E0]">{`₹  ${product.price}`}</td>
                  <td className="text-white text-center w-[9%] border-b-[1px] border-b-[#E0E0E0]">
                    {product.image}
                  </td>
                  <td className="w-[14%] text-center border-b-[1px] border-b-[#E0E0E0]">
                    {product.inventory.map((obj) => (
                      <p className="text-white mb-2">{obj.item}</p>
                    ))}
                  </td>
                  <td className="w-[8%] text-center border-b-[1px] border-b-[#E0E0E0]">
                    {product.inventory.map((obj) => (
                      <p className="text-white">{`x${obj.amount}`}</p>
                    ))}
                  </td>
                  <td className="text-white w-[22%] border-b-[1px] border-b-[#E0E0E0]">
                    {product.description}
                  </td>
                  <td className="w-[10%] text-center px-2 border-b-[1px] border-b-[#E0E0E0]">
                    <div className="flex flex-col lg:flex-row space-y-2 lg:space-y-0 items-center justify-center h-full lg:space-x-2">
                      <button className="rounded-md bg-white py-2 px-3 text-black text-sm font-medium">
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
    </div>
  );
};

export default ServiceTable;

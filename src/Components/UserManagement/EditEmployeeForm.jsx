import React, { useState, useRef } from "react";
import { IoMdCloudUpload } from "react-icons/io";
import { AiOutlineDelete } from "react-icons/ai";
import "../../index.css";

const EditEmployeeForm = ({ setEditForm, editData }) => {
  // const [name, setName] = useState("");
  // const [mobileNumber, setMobileNumber] = useState("");
  // const [inventoryList, setInventoryList] = useState([
  //   { inventory: "", amount: "" },
  // ]);

  const [name, setName] = useState(editData.name);
  const [mobileNumber, setMobileNumber] = useState(editData.mobileNumber);
  const [inventoryList, setInventoryList] = useState(editData.inventory);

  const [govtIdImage, setGovtIdImage] = useState("");

  const govtId = useRef(null);

  const handleGovtIdUpload = (event) => {
    const file = event.target.files[0];
    setGovtIdImage(file);
  };

  const handleBrowseGovtIdClick = () => {
    govtId.current.click();
  };

  const handleAdd = () => {
    setEditForm(false);
  };

  const handleInventoryChange = (index, event) => {
    const { name, value } = event.target;
    const updatedList = [...inventoryList];
    updatedList[index][name] = value;
    setInventoryList(updatedList);
  };

  const handleRemoveRow = (index) => {
    const updatedList = [...inventoryList];
    updatedList.splice(index, 1);
    setInventoryList(updatedList);
  };

  const handleAddRow = () => {
    setInventoryList([...inventoryList, { inventory: "", amount: "" }]);
  };

  return (
    // <div>lefhwekjh</div>
    <div className="flex flex-col space-y-10">
      <h3 className="font-be-jost-pro font-bold text-2xl text-[#FBB033]">
        Add Employee
      </h3>

      <div className="flex flex-col lg:flex-row space-y-5 lg:space-y-0 items-center lg:items-end w-5/6">
        <span className="font-be-jost-pro font-medium text-white text-sm w-[15%]">
          Name:
        </span>
        <input
          type="text"
          placeholder="Name*"
          className="px-2 py-1 bg-[#0c0b0b] border-b-2 border-b-[#E0E0E0] outline-none text-white w-5/6"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="flex flex-col lg:flex-row space-y-5 lg:space-y-0 items-center lg:items-end w-5/6">
        <span className="font-be-jost-pro font-medium text-white text-sm w-[15%]">
          Mobile Number:
        </span>
        <div className="flex items-end w-full px-4">
          <span className="py-1 border-b-2 border-b-[#E0E0E0] text-[#8aa3af]">
            +91
          </span>
          <input
            type="text"
            placeholder="Mobile Number*"
            className="px-2 py-1 bg-[#0c0b0b] border-b-2 border-b-[#E0E0E0] outline-none text-white w-full"
            value={mobileNumber}
            onChange={(e) => setMobileNumber(e.target.value)}
          />
        </div>
      </div>

      <div className="flex flex-col lg:flex-row space-y-5 lg:space-y-0 items-center lg:items-end w-5/6">
        <span className="font-be-jost-pro font-medium text-white text-sm w-[15%]">
          Inventory:
        </span>
        <div className="flex flex-col space-y-2 lg:space-y-8">
          {inventoryList.map((inventory, index) => {
            return (
              <div className="flex space-x-2 lg:space-x-8" key={index}>
                <select
                  className={`px-2 py-1 bg-[#0c0b0b] border-b-[1px] border-b-[#E0E0E0] outline-none ${
                    inventory.inventory === ""
                      ? " text-[#9A9A9A]"
                      : "text-white"
                  } w-1/2 lg:w-[25%]`}
                  value={inventory.inventory}
                  onChange={(e) => handleInventoryChange(index, e)}
                  name="inventory"
                >
                  <option value="" disabled hidden>
                    Inventory*
                  </option>
                  <option value="Hair Cutting Kit">Hair Cutting Kit</option>
                  <option value="Hair Colour Kit">Hair Colour Kit</option>
                  <option value="Beard Kit">Beard Kit</option>
                </select>
                <div className="flex items-center">
                  <span
                    className="text-[#FBB033] font-be-jost-pro text-base font-normal cursor-pointer"
                    onClick={handleAddRow}
                  >
                    {`Add Inventory +  `}
                  </span>
                  {inventoryList.length !== 1 && (
                    <AiOutlineDelete
                      className="text-[#FBB033] text-2xl cursor-pointer"
                      onClick={() => handleRemoveRow(index)}
                    />
                  )}
                </div>
                <input
                  type="text"
                  placeholder="Amount*"
                  className="px-2 py-1 bg-[#0c0b0b] border-b-[1px] border-b-[#E0E0E0] outline-none text-white w-1/3"
                  value={inventory.amount}
                  onChange={(event) => handleInventoryChange(index, event)}
                  name="amount"
                />
              </div>
            );
          })}
        </div>
      </div>

      <div className="flex flex-col lg:flex-row space-y-5 lg:space-y-0 items-center lg:items-end w-5/6">
        <span className="font-be-jost-pro font-medium text-white text-sm w-[15%]">
          Government Id:
        </span>
        <div className="flex items-center w-full lg:w-1/2">
          <input
            id="govt-id"
            type="file"
            ref={govtId}
            className="hidden"
            onChange={handleGovtIdUpload}
          />
          <input
            type="text"
            placeholder="Government Id*"
            disabled={true}
            className="w-1/2 px-2 py-1 bg-[#0c0b0b] border-b-[1px] border-b-[#E0E0E0] outline-none text-white"
          />
          <span className="ml-3 mr-2 font-be-jost-pro text-[#FBB033] font-normal text-base cursor-pointer">
            View
          </span>
        </div>
      </div>
      {/* <div className="flex flex-col lg:flex-row space-y-10 lg:space-y-0 w-full lg:items-center lg:w-4/5"> */}

      {/* <div className="flex items-center w-full lg:w-1/2">
          <input
            id="vehicle-id"
            type="file"
            ref={vehicleId}
            className="hidden"
            onChange={handleVehicleIdUpload}
          />
          <input
            type="text"
            placeholder="Vehicle Id*"
            disabled={true}
            className="w-1/2 px-2 py-1 bg-[#0c0b0b] border-b-[1px] border-b-[#E0E0E0] outline-none text-white"
          />
          <p className="ml-3 mr-2 font-be-jost-pro text-[#FBB033] font-normal text-base cursor-pointer">
            Upload ID
          </p>
          <IoMdCloudUpload
            className="text-[#FBB033] text-3xl"
            onClick={handleBrowseVehicleIdClick}
          />
        </div> */}
      {/* </div> */}

      {/* <div className="flex items-center">
        <input
          id="license"
          type="file"
          ref={license}
          className="hidden"
          onChange={handleLicenseUpload}
        />
        <input
          type="text"
          placeholder="License*"
          disabled={true}
          className="w-3/5 lg:w-1/5 px-2 py-1 bg-[#0c0b0b] border-b-[1px] border-b-[#E0E0E0] outline-none text-white"
        />
        <p className="ml-3 mr-2 font-be-jost-pro text-[#FBB033] font-normal text-base cursor-pointer">
          Upload ID
        </p>
        <IoMdCloudUpload
          className="text-[#FBB033] text-3xl"
          onClick={handleBrowseLicenseClick}
        />
      </div> */}

      <div className="flex py-16 w-full justify-center items-center">
        <button
          className="px-5 py-2 bg-[#FBB034] font-poppins text-sm font-bold rounded-md"
          onClick={handleAdd}
        >
          Add Employee
        </button>
      </div>
    </div>
  );
};

export default EditEmployeeForm;

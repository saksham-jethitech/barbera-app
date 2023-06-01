import React, { useState, useRef } from "react";
import { IoMdCloudUpload } from "react-icons/io";
import { AiOutlineDelete } from "react-icons/ai";
import "../../index.css";

const ServiceForm = ({ setOpenServiceForm }) => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [subCategory, setSubCategory] = useState("");
  const [image, setImage] = useState(null);
  const [inventoryList, setInventoryList] = useState([
    { inventory: "", amount: "" },
  ]);
  const [description, SetDesciption] = useState("");

  const fileInputRef = useRef(null);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    setImage(file);
  };

  const handleBrowseClick = () => {
    fileInputRef.current.click();
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

  const handleSubmit = () => {
    setOpenServiceForm(false);
    console.log(name, price, category, subCategory, inventoryList, description);
  };

  const subCategoryClass = subCategory ? "text-white" : " text-[#9A9A9A]";
  const categoryClass = category ? "text-white" : " text-[#9A9A9A]";

  return (
    <div className="flex flex-col py-3 px-2 space-y-5">
      <h3 className="text-[#FBB033] font-be-jost-pro font-bold text-2xl">
        Add Service
      </h3>
      <div className="w-full flex flex-col space-y-8">
        <input
          type="text"
          placeholder="Name*"
          className="px-2 py-1 bg-[#0c0b0b] border-b-[1px] border-b-[#E0E0E0] outline-none text-white"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Price*"
          className="px-2 py-1 bg-[#0c0b0b] border-b-[1px] border-b-[#E0E0E0] outline-none text-white"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <select
          placeholder="Category*"
          className={`px-2 py-1 bg-[#0c0b0b] border-b-[1px] border-b-[#E0E0E0] outline-none ${categoryClass}`}
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="" disabled hidden>
            Category*
          </option>
          <option value="men">Men</option>
          <option value="women">Women</option>
        </select>
        <select
          className={`px-2 py-1 bg-[#0c0b0b] border-b-[1px] border-b-[#E0E0E0] outline-none ${subCategoryClass}`}
          value={subCategory}
          onChange={(e) => setSubCategory(e.target.value)}
        >
          <option value="" disabled selected hidden>
            Sub-Category*
          </option>
          <option value="hair">hair</option>
          <option value="beard">beard</option>
          <option value="spa">spa</option>
          <option value="nail">nail</option>
        </select>
        <div className="flex items-center">
          <input
            id="image-upload"
            type="file"
            ref={fileInputRef}
            className="hidden"
            onChange={handleImageUpload}
          />
          <input
            type="text"
            placeholder="Upload Image*"
            disabled={true}
            className="w-4/5 px-2 py-1 bg-[#0c0b0b] border-b-[1px] border-b-[#E0E0E0] outline-none text-white"
          />
          <IoMdCloudUpload
            className="text-[#9A9A9A] text-3xl"
            onClick={handleBrowseClick}
          />
          <p className="ml-3 font-be-jost-pro text-[#FBB033] font-normal text-base cursor-pointer">
            Mark as Primary
          </p>
        </div>
        {/* <div className="w-full"> */}
        {inventoryList.map((inventory, index) => {
          return (
            <div className="flex space-x-2 lg:space-x-8" key={index}>
              <select
                className={`px-2 py-1 bg-[#0c0b0b] border-b-[1px] border-b-[#E0E0E0] outline-none ${
                  inventory.inventory === "" ? " text-[#9A9A9A]" : "text-white"
                } w-1/2 lg:w-[25%]`}
                value={inventory.inventory}
                onChange={(e) => handleInventoryChange(index, e)}
                name="inventory"
              >
                <option value="" disabled hidden>
                  Inventory*
                </option>
                <option value="Hair Cutting Kit">Hair Cutting Kit</option>
                <option value="Hair Color Kit">Hair Color Kit</option>
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

        <input
          type="text"
          placeholder="Description*"
          className="px-2 py-1 bg-[#0c0b0b] border-b-[1px] border-b-[#E0E0E0] outline-none text-white"
          value={description}
          onChange={(e) => SetDesciption(e.target.value)}
        />
        <div className="flex items-center justify-center">
          <button
            className="bg-[#FBB034] text-[#202125] py-2 px-6 rounded-md font-poppins text-sm font-bold"
            onClick={handleSubmit}
          >
            Add Service
          </button>
        </div>
        {/* </div> */}
      </div>
    </div>
  );
};

export default ServiceForm;

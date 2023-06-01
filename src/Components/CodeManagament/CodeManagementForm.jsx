import React, { useState } from "react";
import "../../index.css";

const CodeManagementForm = ({ setEditCodeManagementForm, editData }) => {
  // const [name, setName] = useState("");
  // const [type, setType] = useState("");
  // const [off, setOff] = useState("");
  // const [promoCode, setPromoCode] = useState("");

  const [name, setName] = useState(editData.name);
  const [type, setType] = useState(editData.type);
  const [off, setOff] = useState(editData.off);
  const [promoCode, setPromoCode] = useState(editData.promoCode);

  const handleUpdate = () => {
    setEditCodeManagementForm(false);
  };

  return (
    <div className="flex flex-col space-y-6">
      <h3 className="font-be-jost-pro font-bold text-2xl text-[#FBB033]">
        Edit Promo Code
      </h3>
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
          Type:
        </span>
        <input
          type="text"
          placeholder="Type*"
          className="px-2 py-1 bg-[#0c0b0b] border-b-2 border-b-[#E0E0E0] outline-none text-white w-4/6"
          value={type}
          onChange={(e) => setType(e.target.value)}
        />
      </div>
      <div className="flex w-full items-center">
        <span className="font-be-jost-pro font-medium text-white text-sm w-1/6">
          % OFF:
        </span>
        <input
          type="text"
          placeholder="% OFF*"
          className="px-2 py-1 bg-[#0c0b0b] border-b-2 border-b-[#E0E0E0] outline-none text-white w-4/6"
          value={off}
          onChange={(e) => setOff(e.target.value)}
        />
      </div>
      <div className="flex w-full items-center">
        <span className="font-be-jost-pro font-medium text-white text-sm w-1/6">
          PROMO Code:
        </span>
        <input
          type="text"
          placeholder="PROMO Code*"
          className="px-2 py-1 bg-[#0c0b0b] border-b-2 border-b-[#E0E0E0] outline-none text-white w-4/6"
          value={promoCode}
          onChange={(e) => setPromoCode(e.target.value)}
        />
      </div>
      <div className="flex py-16 w-full justify-center items-center">
        <button
          className="px-5 py-2 bg-[#FBB034] font-poppins text-sm font-bold rounded-md"
          onClick={handleUpdate}
        >
          Update Promo Code
        </button>
      </div>
    </div>
  );
};

export default CodeManagementForm;

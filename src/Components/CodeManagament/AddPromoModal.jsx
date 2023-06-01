import React, { useState } from "react";

const AddPromoModal = ({ setShowModal }) => {
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [off, setOff] = useState("");
  const [promoCode, setPromoCode] = useState("");
  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-1/2 my-6 mx-auto max-w-3xl">
          {/*content*/}
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-black outline-none focus:outline-none p-8">
            {/*header*/}
            <div className="flex flex-col items-center justify-center">
              <div
                className="w-full flex items-center justify-end cursor-pointer text-white"
                onClick={() => setShowModal(false)}
              >
                <p className="w-6 h-6">×</p>
              </div>
              <div className="w-full flex items-center justify-center p-5 rounded-t">
                <h3 className="text-xl font-normal font-be-jost-pro text-[#FBB034]">
                  Add PromoCode
                </h3>
              </div>
            </div>
            <div className="flex flex-col w-full items-center justify-center space-y-8">
              <div className="flex flex-col w-full items-center space-y-5">
                <input
                  type="text"
                  placeholder="Name*"
                  className="px-2 py-1 bg-black border-b-2 border-b-[#E0E0E0] outline-none text-white w-5/6"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <input
                  type="text"
                  placeholder="Type*"
                  className="px-2 py-1 bg-black border-b-2 border-b-[#E0E0E0] outline-none text-white w-5/6"
                  value={type}
                  onChange={(e) => setType(e.target.value)}
                />
                <input
                  type="text"
                  placeholder="% OFF*"
                  className="px-2 py-1 bg-black border-b-2 border-b-[#E0E0E0] outline-none text-white w-5/6"
                  value={off}
                  onChange={(e) => setOff(e.target.value)}
                />
                <input
                  type="text"
                  placeholder="PROMO Code*"
                  className="px-2 py-1 bg-black border-b-2 border-b-[#E0E0E0] outline-none text-white w-5/6"
                  value={promoCode}
                  onChange={(e) => setPromoCode(e.target.value)}
                />
              </div>

              <div className="flex justify-center items-center space-x-5 w-1/2">
                <button
                  className="w-2/5 bg-[#FBB034] p-2 rounded-md text-[#191919] font-be-jost-pro font-semibold text-base"
                  onClick={() => setShowModal(false)}
                >
                  Add Promo Code
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  );
};

export default AddPromoModal;

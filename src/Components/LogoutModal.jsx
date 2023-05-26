import React from "react";

const LogoutModal = ({ setShowModal }) => {
  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-1/3 my-6 mx-auto max-w-3xl">
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
                  Logout
                </h3>
              </div>
            </div>
            <div className="flex flex-col w-full items-center justify-center space-y-5">
              <div className="flex flex-col w-full items-center justify-center space-y-2">
                <p className="font-be-jost-pro font-light text-lg text-white opacity-80">
                  Are you sure you want to logout?
                </p>
              </div>

              <div className="flex justify-center items-center space-x-5 w-1/2">
                <button className="w-2/5 bg-black border border-[#FBB034] text-[#FBB034] p-2 rounded-md">
                  Logout
                </button>
                <button
                  className="w-2/5 bg-[#FBB034] text-black p-2 rounded-md"
                  onClick={() => setShowModal(false)}
                >
                  No
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

export default LogoutModal;

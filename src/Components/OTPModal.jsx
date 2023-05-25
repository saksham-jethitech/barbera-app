import React, { useState, useEffect } from "react";

const OTPModal = ({ setShowModal, number }) => {
  const [counter, setCounter] = useState(60);
  const [isDisabled, setIsDisabled] = useState(true);

  useEffect(() => {
    if (counter > 0) {
      const timer = setTimeout(() => setCounter(counter - 1), 1000);
      return () => clearTimeout(timer);
    } else {
      setIsDisabled(false);
    }
  }, [counter]);

  const handleClick = () => {
    setCounter(60);
    setIsDisabled(true);
  };

  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-2/5 my-6 mx-auto max-w-3xl">
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
                  Enter OTP
                </h3>
              </div>
            </div>
            <div className="flex flex-col w-full items-center justify-center space-y-5">
              <div className="flex flex-col w-full items-center justify-center space-y-2">
                <p className="font-be-jost-pro font-light text-lg text-white opacity-80">
                  We have sent an 6 digit OTP on
                </p>
                <p className="font-be-jost-pro font-medium text-xl text-white opacity-80">{`+91 ${number}`}</p>
              </div>

              <div className="flex justify-center space-x-4">
                <input
                  type="text"
                  className="outline-none rounded-3xl w-5 border border-[#ffffff40] bg-black text-white p-1"
                  maxLength="1"
                />
                <input
                  type="text"
                  className="outline-none rounded-3xl w-5 border border-[#ffffff40] bg-black text-white p-1"
                  maxLength="1"
                />
                <input
                  type="text"
                  className="outline-none rounded-3xl w-5 border border-[#ffffff40] bg-black text-white p-1"
                  maxLength="1"
                />
                <input
                  type="text"
                  className="outline-none rounded-3xl w-5 border border-[#ffffff40] bg-black text-white p-1"
                  maxLength="1"
                />
                <input
                  type="text"
                  className="outline-none rounded-3xl w-5 border border-[#ffffff40] bg-black text-white p-1"
                  maxLength="1"
                />
                <input
                  type="text"
                  className="outline-none rounded-3xl w-5 border border-[#ffffff40] bg-black text-white p-1"
                  maxLength="1"
                />
              </div>
              <div className="flex justify-center items-center space-x-5 w-1/2">
                {isDisabled ? (
                  <button
                    className="w-2/5 bg-black border border-[#FBB034] text-[#FBB034] p-2 rounded-md"
                    disabled={true}
                  >
                    {`Resend   ${counter}`}
                  </button>
                ) : (
                  <button
                    className="w-2/5 bg-[#FBB034] text-black p-2 rounded-md"
                    onClick={handleClick}
                  >
                    Resend
                  </button>
                )}
                <button className="w-2/5 bg-[#FBB034] text-black p-2 rounded-md">
                  Verify
                </button>
              </div>
            </div>
            {/* <div className="relative p-6 flex-auto">
              <p className="my-4 text-slate-500 text-lg leading-relaxed">
                I always felt like I could do anything. That’s the main thing
                people are controlled by! Thoughts- their perception of
                themselves! They're slowed down by their perception of
                themselves. If you're taught you can’t do anything, you won’t do
                anything. I was taught I could do everything.
              </p>
            </div>
            <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
              <button
                className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={() => setShowModal(false)}
              >
                Close
              </button>
              <button
                className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={() => setShowModal(false)}
              >
                Save Changes
              </button>
            </div> */}
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  );
};

export default OTPModal;

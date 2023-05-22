import React from "react";
import Footer from "./Components/Footer";

const GetApp = () => {
  return (
    <div className="w-full h-auto ">
      <div className="flex flex-col md:flex-row items-center md:justify-around md:items-center w-full h-3/5 h-auto py-6 bg-[#11120F]">
        <div className="flex flex-col items-start justify-center p-10 md:p-0 w-full md:w-1/3 space-y-5">
          <p className="text-[#FBB034] text-lg font-normal font-be-jost-pro w-full text-center md:text-left">
            Get an App
          </p>
          <p className="text-[#9A9A9A] text-xl font-normal font-be-jost-pro">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy{" "}
          </p>
          <div className="flex flex-col w-full pt-14 items-center md:items-start">
            <p className="text-white text-3xl font-normal">Download App From</p>
            <div className="flex sm:space-x-3 mt-4 flex-col sm:flex-row space-y-3 sm:space-y-0">
              <button className="flex items-center justify-center w-36 bg-black rounded-md">
                <img src="/Assets/playstore.png" />
                <div className="flex flex-col p-2">
                  <p className="uppercase text-white text-[9px] font-normal font-be-vietnam-pro">
                    {" "}
                    get it on{" "}
                  </p>
                  <p className="text-white text-sm font-medium font-be-vietnam-pro tracking-wider">
                    Google Play
                  </p>
                </div>
              </button>
              <button className="flex items-center justify-center w-36 bg-black rounded-md">
                <img src="/Assets/apple.png" />
                <div className="flex flex-col p-2">
                  <p className=" text-white text-[9px] font-normal font-be-vietnam-pro">
                    Download on the
                  </p>
                  <p className="text-white text-sm font-medium font-be-vietnam-pro tracking-widest">
                    App Store
                  </p>
                </div>
              </button>
            </div>
          </div>
        </div>
        <img src="/Assets/Mobile-icon.png" />
      </div>

      {/* <Footer /> */}
    </div>
  );
};

export default GetApp;

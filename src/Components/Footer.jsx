import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const handleClick = () => {
    // setAllLinksToInactive();
    window.scroll(0, 0);
  };

  return (
    <>
      <div className="h-[30%] bg-[#202125] w-full flex flex-col md:flex-row space-y-5 md:space-y-0 items-center justify-around p-2 md:p-8">
        <div className="flex flex-col justify-center items-center w-full md:w-1/5 h-full space-y-4">
          <img src="/Assets/logo.png" />
          <p className="font-be-jost-pro text-sm font-normal text-white opacity-60 w-auto md:w-40">
            B 35, Some street adderess, Mumbai
          </p>
        </div>
        <div className="w-1/2 md:w-1/5 h-full flex flex-col items-center md:items-start space-y-6">
          <p className="text-white font-be-jost-pro text-sm font-medium text-center">
            Working days / 08:00 - 20:00
          </p>
          <p className="text-white font-be-jost-pro text-sm font-medium text-center">
            Saturday / 08:00 - 20:00
          </p>
          <p className="text-white font-be-jost-pro text-sm font-medium text-center">
            Sunday / CLOSED
          </p>
        </div>
        <div className="w-1/2 md:w-1/5 h-full flex flex-col items-center md:items-start space-y-6">
          <Link
            to="/terms&conditions"
            className="text-white font-be-jost-pro text-sm font-medium text-center"
            onClick={handleClick}
          >
            Terms & Conditions
          </Link>
          <Link
            to="/privacy"
            className="text-white font-be-jost-pro text-sm font-medium text-center"
            onClick={handleClick}
          >
            Privacy Policy
          </Link>
          <Link
            to="/cookie"
            className="text-white font-be-jost-pro text-sm font-medium text-center"
            onClick={handleClick}
          >
            Cookie Policy
          </Link>
        </div>

        <div className="w-1/2 md:w-1/5 h-full">
          <div className="flex flex-col w-full items-center ">
            <p className="text-white text-3xl font-normal opacity-60 text-center">
              Download App From
            </p>
            <div className="flex flex-col lg:flex-row space-y-3 lg:space-y-0 lg:space-x-3 mt-4">
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
      </div>

      <div className="h-[10%] bg-[#11120F] w-full flex flex-col md:flex-row space-y-3 md:space-y-0 py-2 justify-between px-12 items-center">
        <p className="text-white font-be-jost-pro text-base font-medium text-center">
          © 2023 Barbera. All rights reserved. Developed by{" "}
          <b>Jethi Tech Solutions</b>
        </p>
        <div className="flex space-x-3">
          <img src="/Assets/instagram.png" />
          <img src="/Assets/facebook.png" />
          <img src="/Assets/twitter.png" />
          <img src="/Assets/linkedin.png" />
        </div>
      </div>
    </>
  );
};

export default Footer;

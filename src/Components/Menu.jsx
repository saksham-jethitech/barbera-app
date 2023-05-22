import React from "react";

const Menu = ({ title, price }) => {
  return (
    <div className="flex flex-col w-full items-start justify-center">
      <div className="flex justify-center items-center w-full">
        <div className="w-[80%] md:w-4/5 dot-leaders">
          <p className="text-white text-xl">{title}</p>
          <span className="dot-line "></span>
        </div>
        <div className="w-[15%] sm:w-[12%] md:w-1/5">
          <p className="text-white">
            ₹ <span className="text-[#FBB034] text-xl">{price}</span>
          </p>
        </div>
      </div>
      <p className="text-[#9A9A9A] font-be-jost-pro text-xs text-center md:text-left w-full">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
      </p>
    </div>
  );
};

export default Menu;

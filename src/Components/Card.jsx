import React from "react";

const Card = ({ title }) => {
  return (
    <div className="w-full md:w-[30%] flex flex-col rounded-lg bg-[#202125] items-center justify-center py-16 px-5 space-y-3 m-3 ">
      <img src="/Assets/scissors.png" className="w-14" />
      <h4 className="text-white text-xl font-normal font-be-jost-pro">
        {title}
      </h4>
      <p className="text-white  text-base font-extralight text-center">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy{" "}
      </p>
    </div>
  );
};

export default Card;

import React from "react";

const ImageCard = ({ imageName, name, role, isYellow = false }) => {
  return (
    <div
      className={`${
        isYellow ? "bg-[#FBB034]" : "bg-[#11120F]"
      } w-4/5 md:w-1/5 flex flex-col items-center justify-center py-5 space-y-3 rounded-lg`}
    >
      <img src={`/Assets/${imageName}.png`} className="w-5/6" />
      <p
        className={`font-be-jost-pro font-normal text-lg text-center ${
          isYellow ? "text-black" : "text-white"
        } `}
      >
        {name}
      </p>
      <p
        className={`font-be-jost-pro font-normal text-sm ${
          isYellow ? "text-black" : "text-[#FBB033]"
        }`}
      >
        {role}
      </p>
    </div>
  );
};

export default ImageCard;

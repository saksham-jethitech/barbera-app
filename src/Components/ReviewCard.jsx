import React from "react";

const ReviewCard = ({ primaryBg }) => {
  return (
    <div
      className={`flex flex-col ${
        primaryBg == "yellow" ? "bg-[#FBB033]" : "bg-[#11120F]"
      } rounded-lg w-11/12 md:w-1/4 py-4 px-14 items-center space-y-3`}
    >
      <img src="/Assets/profileImage.png" className="w-9" />
      <div className="flex w-full justify-center items-center space-x-4">
        <img
          src={`/Assets/${
            primaryBg == "yellow" ? "blackStar" : "goldStar"
          }.png`}
        />
        <img
          src={`/Assets/${
            primaryBg == "yellow" ? "blackStar" : "goldStar"
          }.png`}
        />
        <img
          src={`/Assets/${
            primaryBg == "yellow" ? "blackStar" : "goldStar"
          }.png`}
        />
        <img
          src={`/Assets/${
            primaryBg == "yellow" ? "blackStar" : "goldStar"
          }.png`}
        />
        <img
          src={`/Assets/${
            primaryBg == "yellow" ? "blackStar" : "goldStar"
          }.png`}
        />
      </div>
      <p
        className={`font-be-jost-pro font-normal text-xs italic text-center ${
          primaryBg == "yellow" ? "text-black" : "text-[#9A9A9A]"
        } `}
      >
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy{" "}
      </p>
      <p
        className={`font-be-jost-pro font-normal text-lg text-center ${
          primaryBg == "yellow" ? "text-black" : "text-white"
        }`}
      >
        Scott Headerson
      </p>
      <p
        className={`font-be-jost-pro font-normal text-sm ${
          primaryBg == "yellow" ? "text-black" : "text-[#FBB033]"
        }  `}
      >
        Customer
      </p>
    </div>
  );
};

export default ReviewCard;

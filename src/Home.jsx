import React from "react";
import Services from "./Services";
import GetApp from "./GetApp";
import ReviewCard from "./Components/ReviewCard";

const Home = () => {
  return (
    <div className="w-full h-auto">
      <div className="flex flex-col space-y-5 md:space-y-0 md:flex-row items-end lg:items-center justify-between w-full min-h-[60] pt-5 bg-[#11120F] ">
        <div className="w-full md:w-1/2 flex flex-col px-5 space-y-6 py-5">
          <p className="text-[#FBB034] text-lg font-normal font-be-jost-pro w-full text-center lg:text-left">
            Welcome To Barbera
          </p>
          <h3 className="font-poppins text-5xl font-bold text-white text-center lg:text-left">
            We Will Give You An Impeccable Look
          </h3>
          <p className="font-poppins text-xl font-light text-[#9A9A9A] w-full lg:w-1/2">
            You will leave lookin sharp, relaxed and ready to take on the world,
            with that swagger in your stride.
          </p>
          <button className="bg-[#FBB034] w-full  lg:w-2/5 py-3 rounded-md font-bold">
            Book An Appointment
          </button>
        </div>
        <div className="w-full md:w-[45%] flex justify-end ">
          <img src="/Assets/homepage-1.png" className="m-0 " />
        </div>
      </div>

      <div className="flex flex-col-reverse md:flex-row items-center justify-around w-full min-h-[60] py-16 px-3 md:px-0 bg-[#202125] ">
        <img
          src="/Assets/homepage-2.png"
          className="w-full md:w-1/2 lg:w-1/3 mt-16 md:mt-0"
        />
        <div className="flex flex-col items-start justify-center w-full md:w-1/3 space-y-6">
          <p className="text-[#FBB034] text-lg font-normal font-be-jost-pro w-full text-center md:text-left">
            About Us
          </p>
          <p className="font-be-jost-profont-normal text-base text-[#9A9A9A]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </p>
          <button className="bg-[#FBB034] w-full md:w-2/5 py-3 rounded-md font-bold">
            Learn More
          </button>
        </div>
      </div>

      <Services />

      <div className="flex flex-col items-center justify-center w-full min-h-[60] py-16 bg-[#202125] space-y-10">
        <div className="flex flex-col items-center justify-end space-y-5 w-full px-2 md:px-4 md:w-2/5 lg:w-[25%]">
          <h3 className="font-be-jost-pro text-3xl font-semibold text-white">
            Our <span className="text-[#FBB034]">Clients</span>
          </h3>
          <p className="text-[#9A9A9A] font-be-jost-pro text-xl font-normal text-center">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
        </div>
        <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 space-x-0 items-center justify-center md:space-x-10 w-full">
          {/* <div className="flex flex-col bg-[#11120F] rounded-md w-1/4 py-4 px-14 items-center space-y-3">
            <img src="/Assets/profileImage.png" className="w-9" />
            <div className="flex w-full justify-center items-center space-x-4">
              <img src="/Assets/goldStar.png" />
              <img src="/Assets/goldStar.png" />
              <img src="/Assets/goldStar.png" />
              <img src="/Assets/goldStar.png" />
              <img src="/Assets/goldStar.png" />
            </div>
            <p className="font-be-jost-pro font-normal text-xs italic text-center text-[#9A9A9A]">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy{" "}
            </p>
            <p className="font-be-jost-pro font-normal text-lg text-white ">
              Scott Headerson
            </p>
            <p className="font-be-jost-pro font-normal text-sm text-[#FBB033] ">
              Customer
            </p>
          </div> */}
          <ReviewCard primaryBg={"black"} />
          <ReviewCard primaryBg={"yellow"} />
          <ReviewCard primaryBg={"black"} />
        </div>
      </div>

      <div className="flex items-center justify-center w-full min-h-[60] py-5 bg-[#11120F] ">
        <div className="flex flex-col items-center justify-end space-y-5 w-full px-2 md:px-4 md:w-2/5 lg:w-[25%]">
          <h3 className="font-be-jost-pro text-3xl font-semibold text-white">
            Install our <span className="text-[#FBB034]">App</span>
          </h3>
          <p className="text-[#9A9A9A] font-be-jost-pro text-xl font-normal text-center">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
        </div>
      </div>
      <GetApp />
    </div>
  );
};

export default Home;

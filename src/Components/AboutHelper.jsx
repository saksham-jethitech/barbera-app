import React from "react";

const AboutHelper = ({ isAbout = false }) => {
  return (
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
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.
        </p>
        <button className="bg-[#FBB034] w-full lg:w-2/5 py-3 rounded-md font-bold">
          {isAbout ? "Book An Appointment" : "Learn More"}
        </button>
      </div>
    </div>
  );
};

export default AboutHelper;

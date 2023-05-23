import React from "react";
import AboutHelper from "./Components/AboutHelper";
import ImageCard from "./Components/ImageCard";

const About = () => {
  return (
    <div className="w-full h-auto">
      <AboutHelper isAbout={true} />
      <div className="flex flex-col md:flex-row space-y-10 md:space-y-0 items-center justify-around w-full min-h-[60] py-16 bg-[#11120F]">
        <div className="flex flex-col items-center justify-center space-y-3 w-1/6">
          <p className="font-be-jost-pro font-bold text-6xl text-white">6+</p>
          <p className="font-be-jost-pro font-semibold text-xl text-[#FBB034] text-center">
            Years of Experience
          </p>
        </div>
        <div className="flex flex-col items-center justify-center space-y-3 w-1/6">
          <p className="font-be-jost-pro font-bold text-6xl text-white">15+</p>
          <p className="font-be-jost-pro font-semibold text-xl text-[#FBB034] text-center">
            Professionals
          </p>
        </div>
        <div className="flex flex-col items-center justify-center space-y-3 w-1/6">
          <p className="font-be-jost-pro font-bold text-6xl text-white">100+</p>
          <p className="font-be-jost-pro font-semibold text-xl text-[#FBB034] text-center">
            Happy Clients
          </p>
        </div>
        <div className="flex flex-col items-center justify-center space-y-3 w-1/6">
          <p className="font-be-jost-pro font-bold text-6xl text-white">40+</p>
          <p className="font-be-jost-pro font-semibold text-xl text-[#FBB034] text-center">
            Lorem Ipsum
          </p>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center w-full min-h-[60] py-16 bg-[#202125] space-y-10">
        <div className="flex flex-col items-center justify-end  space-y-3 w-full px-2 md:px-4 md:w-2/5 lg:w-[25%]">
          <h3 className="font-be-jost-pro text-3xl font-semibold text-white text-center">
            Meet Our <span className="text-[#FBB034]">Professionals</span>
          </h3>
          <p className="text-[#9A9A9A] font-be-jost-pro text-xl font-normal text-center">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
        </div>
        <div className="flex flex-col md:flex-row space-y-10 md:space-y-0 justify-center md:space-x-10 items-center w-full">
          <ImageCard
            imageName={"image-1"}
            name={"Scott Headerson"}
            role={"Facial Specialist"}
          />
          <ImageCard
            imageName={"image-2"}
            name={"Richard Lewis"}
            role={"Hair Specialist"}
          />
          <ImageCard
            imageName={"image-3"}
            name={"Robert Cooper"}
            role={"Hair Specialist"}
            isYellow={true}
          />
          <ImageCard
            imageName={"image-4"}
            name={"Edward Cullen"}
            role={"Hair Stylist"}
          />
        </div>
      </div>

      <div className="flex flex-col items-center justify-center w-full min-h-[60] py-16 bg-[#11120F] space-y-10">
        <div className="flex flex-col items-center justify-end  space-y-3 w-full px-2 md:px-4 md:w-2/5 lg:w-[25%]">
          <h3 className="font-be-jost-pro text-3xl font-semibold text-white text-center">
            Latest Photo <span className="text-[#FBB034]">Gallery</span>
          </h3>
          <p className="text-[#9A9A9A] font-be-jost-pro text-xl font-normal text-center">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-center space-y-10 md:space-y-0 md:space-x-10 items-center w-full">
          <img src="/Assets/gallery-1.png" className="w-4/5 md:w-[25%]" />
          <img src="/Assets/gallery-2.png" className="w-4/5 md:w-[25%]" />
          <img src="/Assets/gallery-3.png" className="w-4/5 md:w-[25%]" />
        </div>
      </div>
    </div>
  );
};

export default About;

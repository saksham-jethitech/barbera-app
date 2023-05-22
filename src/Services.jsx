import React from "react";
import Card from "./Components/Card";
import Menu from "./Components/Menu";

const Services = () => {
  return (
    <div className="w-full h-auto">
      <div className="flex flex-col items-center md:justify-around md:items-center w-full min-h-[60] py-16 bg-[#11120F] space-y-7">
        <div className="flex flex-col items-center justify-end  space-y-3 w-full px-2 md:px-4 md:w-2/5 lg:w-[25%]">
          <h3 className="font-be-jost-pro text-3xl font-semibold text-white">
            Popular <span className="text-[#FBB034]">Services</span>
          </h3>
          <p className="text-[#9A9A9A] font-be-jost-pro text-xl font-normal text-center">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
        </div>
        <div className="flex justify-center items-center flex-wrap">
          <Card title={"Hair Styling"} />
          <Card title={"Beard Trim"} />
          <Card title={"Hair Color"} />
          <Card title={"Cleaning Facial"} />
          <Card title={"Body Massage"} />
          <Card title={"Stylish Shave"} />
        </div>
        <div className="flex flex-col items-center justify-end space-y-3 w-full px-2 md:px-0 md:w-2/5 lg:w-[22%]">
          <h3 className="font-be-jost-pro text-3xl font-semibold text-white">
            Services <span className="text-[#FBB034]">Menu</span>
          </h3>
          <p className="text-[#9A9A9A] font-be-jost-pro text-xl font-normal text-center">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center w-full space-x-0 md:space-x-2 space-y-5 md:space-y-0">
          <div className="flex flex-col w-full md:w-4/12 items-center justify-center space-y-5">
            <Menu title={"Hair Styling"} price={200} />
            <Menu title={"Hair Washing"} price={400} />
            <Menu title={"Body Massage"} price={500} />
            <Menu title={"Thai Massage"} price={300} />
          </div>
          <div className="flex flex-col w-full md:w-4/12 items-center justify-center space-y-5">
            <Menu title={"Beauty Spa"} price={400} />
            <Menu title={"Stylish Shaving"} price={400} />
            <Menu title={"Hair Colouring"} price={500} />
            <Menu title={"Moustache Trim"} price={300} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;

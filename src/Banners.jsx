import React, { useState } from "react";
import Layout from "./Components/Layout";
import Sidebar from "./Components/Sidebar";
import UploadBannerModal from "./Components/AdminBanner/UploadBannerModal";

const Banners = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className=" h-screen flex">
      <Sidebar />
      <Layout>
        <div className="flex flex-col">
          <p
            className={` text-[#FBB034] rounded-sm cursor-default text-2xl px-2 py-1 font-normal font-be-jost-pro text-center md:text-left`}
          >
            Current Banners
          </p>
          <div className="flex justify-between items-center flex-wrap w-[90%] lg:w-4/5">
            <img
              src="/Assets/banner-1.png"
              className="w-full lg:w-[45%] my-4 mx-3"
            />
            <img
              src="/Assets/banner-1.png"
              className="w-full lg:w-[45%] my-4 mx-3"
            />
            <img
              src="/Assets/banner-1.png"
              className="w-full lg:w-[45%] my-4 mx-3"
            />
            <img
              src="/Assets/banner-1.png"
              className="w-full lg:w-[45%] my-4 mx-3"
            />
          </div>
          <button
            className="mt-10 lg:ml-3 text-[#FBB033] font-be-jost-pro font-medium text-sm border border-[#FBB033] rounded-md py-2 px-3 w-full lg:w-[10%]"
            onClick={() => setShowModal(true)}
          >
            Upload Banner
          </button>
        </div>
      </Layout>
      {showModal && <UploadBannerModal setShowModal={setShowModal} />}
    </div>
  );
};

export default Banners;

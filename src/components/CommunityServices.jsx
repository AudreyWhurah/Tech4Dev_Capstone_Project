import React from "react";

const CommunityServices = () => {
  return (
    <section className="mt-20">
      <div className="flex justify-evenly space-x-2">
        <div className=" bg-[#FFFFFF] p-2 rounded-xl shadow-md">
          <div className=" flex flex-col items-center text-center">
            <img
              src="/images/community_service_1.png"
              alt=""
              className="w-[223px] h-[181px]"
            />
            <img
              src="/images/community_service_4.png"
              alt=""
              className="w-16 h-16 mt-2"
            />
            <h3 className="mt-4 font-normal font-josefin_sans text-3xl leading-9 text-main_dark text-wrap w-1/2">
              Survivor stories
            </h3>
          </div>
        </div>
        <div className=" bg-[#FFFFFF] p-2 rounded-xl shadow-md">
          <div className=" flex flex-col items-center text-center">
            <img
              src="/images/community_service_2.png"
              alt=""
              className="w-[223px] h-[181px]"
            />
            <img
              src="/images/community_service_5.png"
              alt=""
              className="w-16 h-16 mt-2"
            />
            <h3 className="mt-4 font-normal font-josefin_sans text-3xl leading-9 text-main_dark text-wrap w-1/2">
              Education hub
            </h3>
          </div>
        </div>
        <div className=" bg-[#FFFFFF] p-2 rounded-xl shadow-md">
          <div className=" flex flex-col items-center text-center">
            <img
              src="/images/community_service_3.png"
              alt=""
              className="w-[223px] h-[181px]"
            />
            <img
              src="/images/community_service_6.png"
              alt=""
              className="w-16 h-16 mt-2"
            />
            <h3 className="mt-4 font-normal font-josefin_sans text-3xl leading-9 text-main_dark text-wrap w-1/2">
              Community chat
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunityServices;

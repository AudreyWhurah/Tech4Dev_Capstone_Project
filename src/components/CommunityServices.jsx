import React from "react";

const CommunityServices = () => {
  return (
    <section className="mt-20">
      <div className="flex flex-col md:flex-row justify-evenly items-center space-y-6 md:space-y-0 md:space-x-2">
        <div className="bg-white p-4 rounded-xl shadow-md flex flex-col items-center text-center">
          <img
            src="/images/community_service_1.png"
            alt="Survivor stories"
            className="w-full max-w-[223px] h-auto"
          />
          <img
            src="/images/community_service_4.png"
            alt="Survivor stories icon"
            className="w-16 h-16 mt-2"
          />
          <h3 className="mt-4 font-normal font-josefin_sans text-xl md:text-3xl leading-tight md:leading-9 text-main_dark w-full md:w-1/2">
            Survivor stories
          </h3>
        </div>
        <div className="bg-white p-4 rounded-xl shadow-md flex flex-col items-center text-center">
          <img
            src="/images/community_service_2.png"
            alt="Education hub"
            className="w-full max-w-[223px] h-auto"
          />
          <img
            src="/images/community_service_5.png"
            alt="Education hub icon"
            className="w-16 h-16 mt-2"
          />
          <h3 className="mt-4 font-normal font-josefin_sans text-xl md:text-3xl leading-tight md:leading-9 text-main_dark w-full md:w-1/2">
            Education hub
          </h3>
        </div>
        <div className="bg-white p-4 rounded-xl shadow-md flex flex-col items-center text-center">
          <img
            src="/images/community_service_3.png"
            alt="Community chat"
            className="w-full max-w-[223px] h-auto"
          />
          <img
            src="/images/community_service_6.png"
            alt="Community chat icon"
            className="w-16 h-16 mt-2"
          />
          <h3 className="mt-4 font-normal font-josefin_sans text-xl md:text-3xl leading-tight md:leading-9 text-main_dark w-full md:w-1/2">
            Community chat
          </h3>
        </div>
      </div>
    </section>
  );
};

export default CommunityServices;

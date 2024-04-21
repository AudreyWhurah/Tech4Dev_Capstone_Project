import React from "react";

const HeroThree = () => {
  return (
    <section className="bg-hero_bg bg-cover bg-no-repeat w-full">
      <div className="mt-32 md:mt-[200px] flex flex-col items-center space-y-10 md:space-y-[100px]">
        <div className="flex items-center px-4">
          <h2 className="text-main_text_4 font-bold font-cardo text-2xl md:text-4xl leading-snug md:leading-[76.8px] p-3 text-center">
            You could be the change to someone’s story
          </h2>
        </div>
        <div className="flex flex-col md:flex-row w-full justify-around px-4">
          <div className="flex flex-col space-y-6 items-center">
            <img
              src="/images/hero3_1.png"
              alt="Our Mission"
              className="w-48 md:w-[290px] h-auto md:h-[284px] rounded-full"
            />
            <h5 className="text-main_text_4 font-normal text-lg md:text-2xl leading-6 md:leading-9 cursor-pointer">
              Our Mission
            </h5>
          </div>
          <div className="flex flex-col space-y-6 items-center">
            <img
              src="/images/hero3_2.png"
              alt="The Journey so far"
              className="w-48 md:w-[290px] h-auto md:h-[284px] rounded-full"
            />
            <h5 className="text-main_text_4 font-normal text-lg md:text-2xl leading-6 md:leading-9 cursor-pointer">
              The Journey so far
            </h5>
          </div>
          <div className="flex flex-col space-y-6 items-center">
            <img
              src="/images/hero3_3.png"
              alt="Our Vision"
              className="w-48 md:w-[290px] h-auto md:h-[284px] rounded-full"
            />
            <h5 className="text-main_text_4 font-normal text-lg md:text-2xl leading-6 md:leading-9 cursor-pointer">
              Our Vision
            </h5>
          </div>
        </div>
        <div className="flex justify-center w-full  items-center mb-10 px-4">
          <button className="md:w-[250px] h-12 md:h-[65px] p-3 rounded-lg bg-main_text_4 text-main_dark font-josefin_sans font-normal text-lg md:text-xl text-center ">
            Become a volunteer
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroThree;

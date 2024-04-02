import React from "react";

const HeroThree = () => {
  return (
    <section className="bg-hero_bg bg-cover bg-no-repeat">
      <div className="mt-[200px] flex flex-col items-center space-y-[100px]">
        <div className="flex items-center">
          <h2 className="text-main_text_4 font-bold font-cardo text-4xl leading-[76.8px] p-3">
            You could be the change to someone’s story
          </h2>
        </div>
        <div className="flex w-full justify-around">
          <div className="flex flex-col space-y-6 items-center">
            <img
              src="/images/hero3_1.png"
              alt=""
              className="w-[290px] h-[284px] rounded-full"
            />
            <h5 className="text-main_text_4 font-normal text-2xl leading-9 cursor-pointer">
              Our Mission
            </h5>
          </div>
          <div className="flex flex-col space-y-6 items-center">
            <img
              src="/images/hero3_2.png"
              alt=""
              className="w-[290px] h-[284px] rounded-full"
            />
            <h5 className="text-main_text_4 font-normal text-2xl leading-9 cursor-pointer">
              The Journey so far
            </h5>
          </div>
          <div className="flex flex-col space-y-6 items-center">
            <img
              src="/images/hero3_3.png"
              alt=""
              className="w-[290px] h-[284px] rounded-full"
            />
            <h5 className="text-main_text_4 font-normal text-2xl leading-9 cursor-pointer">
              Our Vision
            </h5>
          </div>
        </div>
        <div>
          <div className="flex w-full items-center mb-10">
            <button className="w-[250px] h-[65px] p-3 rounded-lg bg-main_text_4 text-main_dark font-josefin_sans font-normal text-xl ">
              Become a volunteer
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroThree;

import React from "react";

const Hero = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between mt-20">
      <div className="flex flex-col justify-start w-full md:w-3/5">
        <h1 className="font-normal font-fugaz_one text-5xl md:text-7xl text-main_dark leading-tight md:leading-[96px]">
          Discover the{" "}
          <span className="text-main_text_3 font-fugaz_one">
            power of shared healing
          </span>
        </h1>
        <p className="w-full md:w-4/5 text-main_dark font-normal font-josefin_sans text-xl md:text-2xl leading-9 md:leading-10 mt-5">
          EmpowerCare is a safe space designed to support you on your healing
          journey. Our app connects you with qualified counselors and provides
          access to valuable resources, all from the comfort of your phone.
        </p>
        <div className="flex flex-wrap items-center gap-x-4 gap-y-4 md:gap-x-16 w-full md:w-4/5 mt-5">
          <button className="bg-main_dark text-main_text rounded-md w-full md:w-[216px] h-12 md:h-[65px] px-4 md:p-1 font-josefin_sans font-medium text-lg md:text-xl">
            Empower care
          </button>
          <button className="text-main_dark border-main_dark border rounded-md w-full md:w-[216px] h-12 md:h-[65px] px-4 md:p-1 font-josefin_sans font-medium text-lg md:text-xl">
            Donate
          </button>
        </div>
      </div>
      <div className="w-full md:w-2/5 flex justify-center md:justify-end mt-10 md:mt-0">
        <img
          src="/images/hero.jpeg"
          alt="hero"
          className="hidden md:flex md:w-[386px] md:h-[477px] rounded-t-md md:rounded-t-[96px]"
        />
      </div>
    </div>
  );
};

export default Hero;

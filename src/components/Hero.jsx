import React from "react";

const Hero = () => {
  return (
    <div className="flex justify-between mt-20">
      <div className="flex flex-col justify-start w-3/5">
        <h1 className="font-normal font-fugaz_one text-7xl text-main_dark leading-[96px]">
          Discover the{" "}
          <span className="text-main_text_3 font-fugaz_one">
            power of shared healing
          </span>
        </h1>
        <p className="w-4/5 text-main_dark font-normal font-josefin_sans text-2xl leading-10 mt-5">
          EmpowerCare is a safe space designed to support you on your healing
          journey. Our app connects you with qualified counselors and provides
          access to valuable resources, all from the comfort of your phone.
        </p>
        <div className="flex items-center gap-x-16 w-4/5  mt-5">
          <div>
            <button className="bg-main_dark text-main_text rounded-md w-[216px] h-[65px] p-1 font-josefin_sans font-medium text-xl">
              Empower care
            </button>
          </div>
          <div>
            <button className=" text-main_dark border-main_dark border rounded-md w-[216px] h-[65px] p-1 font-josefin_sans font-medium text-xl">
              Donate
            </button>
          </div>
        </div>
      </div>
      <div className="w-2/5 flex justify-end">
        <img
          src="/images/hero.jpeg"
          alt="hero"
          className="w-[386px] h-[477px] rounded-t-[96px] "
        />
      </div>
    </div>
  );
};

export default Hero;

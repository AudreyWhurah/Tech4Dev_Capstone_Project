import React from "react";

const HeroTwo = () => {
  return (
    <section>
      <div className="w-full flex mt-20">
        <div className="w-1/2">
          <div className="relative">
            <img
              src="/images/hero2_1.jpeg"
              alt="hero two"
              className="absolute top-0 w-[240px] h-[300px] rounded-[60px]"
            />
            <img
              src="/images/hero2_2.jpeg"
              alt="hero two"
              className="absolute top-0 left-[300px] w-[240px] h-[300px] rounded-[60px] z-40"
            />
            <img
              src="/images/hero2_3.jpeg"
              alt="hero two"
              className="absolute top-[200px] left-[150px]  w-[240px] h-[300px] rounded-[60px]"
            />
          </div>
        </div>
        <div className="w-1/2">
          <h2 className="font-bold font-cardo text-6xl text-main_dark leading-[76.8px]">
            Find strength.
          </h2>
          <h2 className="font-bold font-cardo text-6xl text-main_text_3 leading-[76.8px]">
            Find support.
          </h2>
          <h2 className="font-bold font-cardo text-6xl text-main_dark leading-[76.8px]">
            Find EmpowerCare.
          </h2>
          <p className="text-main_dark font-josefin_sans text-3xl leading-[39.2px]  ">
            You're not alone in fighting for justice. EmpowerCare empowers you
            to help.
          </p>
          <ul className="flex justify-start space-x-10 mt-3 marker:text-main_dark list-disc">
            <li className="font-bold font-josefin_sans text-3xl leading-[39.2px] text-main_dark">
              Counselors
            </li>
            <li className="font-bold font-josefin_sans text-3xl leading-[39.2px] text-main_dark">
              Advocates
            </li>
            <li className="font-bold font-josefin_sans text-3xl leading-[39.2px] text-main_dark">
              NGOs
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default HeroTwo;

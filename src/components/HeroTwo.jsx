import React from "react";

const HeroTwo = () => {
  return (
    <section className="mt-20">
      <div className="flex flex-col md:flex-row w-full">
        <div className="relative w-full md:w-1/2 mb-10 md:mb-0">
          <div className="flex justify-center md:block">
            <img
              src="/images/hero2_1.jpeg"
              alt="hero two"
              className="w-48 h-60 md:w-[240px] md:h-[300px] rounded-[60px] md:absolute md:top-0 md:left-0"
            />
            <img
              src="/images/hero2_2.jpeg"
              alt="hero two"
              className="w-48 h-60 md:w-[240px] md:h-[300px] rounded-[60px] md:absolute md:top-0 md:left-[300px]"
            />
            <img
              src="/images/hero2_3.jpeg"
              alt="hero two"
              className="w-48 h-60 md:w-[240px] md:h-[300px] rounded-[60px] md:absolute md:top-[200px] md:left-[150px]"
            />
          </div>
        </div>
        <div className="w-full md:w-1/2">
          <h2 className="font-bold font-cardo text-4xl md:text-6xl text-main_dark leading-tight md:leading-[76.8px]">
            Find strength.
          </h2>
          <h2 className="font-bold font-cardo text-4xl md:text-6xl text-main_text_3 leading-tight md:leading-[76.8px]">
            Find support.
          </h2>
          <h2 className="font-bold font-cardo text-4xl md:text-6xl text-main_dark leading-tight md:leading-[76.8px]">
            Find EmpowerCare.
          </h2>
          <p className="text-main_dark font-josefin_sans text-xl md:text-3xl leading-snug md:leading-[39.2px]">
            You're not alone in fighting for justice. EmpowerCare empowers you
            to help.
          </p>
          <ul className="flex flex-wrap justify-center md:justify-start gap-5 md:space-x-10 mt-3 list-disc">
            <li className="font-bold font-josefin_sans text-xl md:text-3xl leading-snug md:leading-[39.2px] text-main_dark">
              Counselors
            </li>
            <li className="font-bold font-josefin_sans text-xl md:text-3xl leading-snug md:leading-[39.2px] text-main_dark">
              Advocates
            </li>
            <li className="font-bold font-josefin_sans text-xl md:text-3xl leading-snug md:leading-[39.2px] text-main_dark">
              NGOs
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default HeroTwo;

import React from "react";

const Footer = () => {
  return (
    <div className="w-full bg-main_text_4 mt-10">
      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 p-6 md:pl-20 md:py-12">
          <div className="flex flex-col justify-start">
            <div className="mb-10 flex justify-center md:justify-start">
              <div className="flex items-center">
                <img
                  src="/images/logo.png"
                  alt="app logo"
                  className="h-[80px] w-[80px]"
                />
                <h3 className="px-2 font-cardo font-bold text-main_dark leading-10 text-2xl md:text-4xl">
                  EmpowerCare
                </h3>
              </div>
            </div>
            <div className="text-center md:text-left font-normal text-main_dark font-josefin_sans text-xl md:text-2xl">
              <h2>Get our monthly newsletter</h2>
            </div>
            <div className="mt-5 mb-3 mx-auto md:mx-0 w-1/2 md:w-2/3">
              <input
                type="text"
                placeholder="email address"
                className="w-full p-2 outline outline-1 rounded-lg outline-main_dark focus:outline-main_dark bg-main_text_4 border-border border-main_dark placeholder:text-main_dark placeholder:font-normal placeholder:text-lg md:placeholder:text-xl"
              />
            </div>
            <div className="flex justify-center md:justify-start">
              <button className="w-[178px] h-[48px] p-3 rounded-lg text-main_text_4 bg-main_dark font-josefin_sans font-normal text-lg">
                subscribe
              </button>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2 p-6 md:px-20 md:py-12">
          <div>
            <ul className="flex flex-wrap justify-center md:justify-around space-x-2 md:space-x-10 mt-3 text-center">
              <li className="font-normal font-josefin_sans text-xl md:text-2xl my-2">
                <a href="/#">About us</a>
              </li>
              <li className="font-normal font-josefin_sans text-xl md:text-2xl my-2">
                <a href="/#">Support</a>
              </li>
              <li className="font-normal font-josefin_sans text-xl md:text-2xl my-2">
                <a href="/#">Donate</a>
              </li>
              <li className="font-normal font-josefin_sans text-xl md:text-2xl my-2">
                <a href="/#">Event</a>
              </li>
            </ul>
            <div className="flex justify-center md:justify-start mt-10 mb-8">
              <h2 className="font-bold underline font-cardo text-2xl md:text-4xl">
                Follow Us
              </h2>
            </div>
            <div className="flex justify-center space-x-5 mt-3">
              {["youtube", "twitter", "meta", "instagram"].map((platform) => (
                <div
                  key={platform}
                  className="w-[55px] h-[55px] rounded-full flex justify-center p-1 items-center border-2 border-main_dark"
                >
                  <img
                    src={`/images/socials/${platform}.png`}
                    alt={platform}
                    className="w-8 h-6"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

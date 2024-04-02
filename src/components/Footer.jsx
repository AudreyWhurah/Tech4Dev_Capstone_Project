import React from "react";

const Footer = () => {
  return (
    <div className="w-full bg-main_text_4 mt-10">
      <div className="flex">
        <div className="w-1/2 pl-20 py-12">
          <div className="flex flex-col justify-start">
            <div className="mb-10">
              <div className="flex items-center  w-2/6">
                <img
                  src="/images/logo.png"
                  alt="app logo"
                  className="h-[80px] w-[80px]"
                />
                <div>
                  <h3 className=" px-2 font-cardo font-bold text-main_dark leading-10 text-4xl">
                    EmpowerCare
                  </h3>
                </div>
              </div>
            </div>

            <div className="font-normal text-main_dark font-josefin_sans text-2xl ">
              <h2>Get our monthly newsletter</h2>
            </div>
            <div>
              <div className="w-2/3 mt-5 mb-3">
                <input
                  type="text"
                  placeholder="email address"
                  className=" w-full p-2 outline outline-1 rounded-lg outline-main_dark focus:outline-main_dark bg-main_text_4 border-border border-main_dark placeholder:text-main_dark placeholder:font-normal placeholder:text-xl "
                />
              </div>
            </div>
            <div>
              <button className="w-[178px] h-[48px] p-3 rounded-lg text-main_text_4 bg-main_dark font-josefin_sans font-normal text-lg ">
                subscribe
              </button>
            </div>
          </div>
        </div>
        <div className="w-1/2">
          <div className="px-20 py-12">
            <div>
              <div>
                <ul className="flex w-full justify-around space-x-10 mt-3 marker:text-main_dark list-disc">
                  <li className="font-normal font-josefin_sans text-2xl ">
                    <a href="/#">About us</a>
                  </li>
                  <li className="font-normal font-josefin_sans text-2xl ">
                    <a href="/#">Support </a>
                  </li>
                  <li className="font-normal font-josefin_sans text-2xl ">
                    <a href="/#">Donate</a>
                  </li>
                  <li className="font-normal font-josefin_sans text-2xl ">
                    <a href="/#">Event</a>
                  </li>
                </ul>
              </div>
            </div>
            <div>
              <div className="flex w-full justify-center items-center mt-10 mb-8">
                <h2 className="font-bold underline font-cardo text-4xl ">
                  Follow Us
                </h2>
              </div>
            </div>
            <div className="flex justify-center mx-auto w-2/3 ">
              <div className="flex justify-around space-x-5 mt-3">
                <div className="w-[55px] h-[55px] rounded-full flex justify-center p-1 items-center border-2 border-main_dark  ">
                  <img
                    src="/images/socials/youtube.png"
                    alt=""
                    className="w-8 h-6 "
                  />
                </div>
                <div className="w-[55px] h-[55px] rounded-full flex justify-center p-1 items-center border-2 border-main_dark  ">
                  <img
                    src="/images/socials/twitter.png"
                    alt=""
                    className="w-8 h-6 "
                  />
                </div>
                <div className="w-[55px] h-[55px] rounded-full flex justify-center p-1 items-center border-2 border-main_dark  ">
                  <img
                    src="/images/socials/meta.png"
                    alt=""
                    className="w-8 h-6 "
                  />
                </div>
                <div className="w-[55px] h-[55px] rounded-full flex justify-center p-1 items-center border-2 border-main_dark  ">
                  <img
                    src="/images/socials/instagram.png"
                    alt=""
                    className="w-8 h-6 "
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

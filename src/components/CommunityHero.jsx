import React from "react";

const CommunityHero = () => {
  return (
    <section className="bg-hero_bg_2 bg-cover bg-no-repeat h-[556px] md:h-[556px] relative mt-5">
      <div className="bg-main_hero absolute top-0 w-full opacity-30 h-full"></div>
      <div className="flex flex-col w-full md:w-2/3 h-full justify-center items-center m-auto text-center px-4">
        <div className="font-cardo text-main_text_4">
          <h2 className="font-bold text-3xl md:text-5xl leading-snug md:leading-[57.6px]">
            EmpowerCare Community
          </h2>
          <h5 className="font-normal text-xl md:text-3xl mt-5">
            Share, learn, and care with the EmpowerCare community
          </h5>
          <div className="border-2 border-main_text_4 flex flex-row rounded-full justify-between items-center mt-10 md:mt-20 px-4">
            <svg
              className="text-main_text_4 w-5 h-5"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.0349 9.36139C10.7874 8.4505 11.2626 7.28218 11.2626 5.99505C11.2626 3.10396 8.90619 0.747528 6.0151 0.747528C3.12401 0.747528 0.767578 3.10396 0.767578 5.99505C0.767578 8.88614 3.12401 11.2426 6.0151 11.2426C7.28243 11.2426 8.47055 10.7871 9.38144 10.0149L13.4606 14.0941C13.5597 14.1931 13.6785 14.2327 13.7973 14.2327C13.9161 14.2327 14.0349 14.1931 14.1339 14.0941C14.3121 13.9158 14.3121 13.599 14.1339 13.4208L10.0349 9.36139ZM5.9953 10.2921C3.61906 10.2921 1.69827 8.37129 1.69827 5.99505C1.69827 3.61882 3.61906 1.69802 5.9953 1.69802C8.37154 1.69802 10.2923 3.61882 10.2923 5.99505C10.2923 8.37129 8.37154 10.2921 5.9953 10.2921Z"
                fill="#FBF2FF"
              />
            </svg>
            <input
              type="text"
              placeholder="search"
              className="w-full p-2 placeholder:text-main_dark placeholder:font-normal placeholder:text-lg bg-transparent focus:outline-none bg-main_light opacity-5"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunityHero;

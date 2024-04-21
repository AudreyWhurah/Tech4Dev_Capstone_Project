import React from "react";

const Progress = () => {
  return (
    <section className="mt-10">
      <div>
        <div className="flex justify-center mx-auto w-3/5 mb-6 px-6">
          <h2 className="text-main_dark font-cardo font-bold text-3xl md:text-5xl leading-[57.6px] text-center ">
            The change we want to see in the world
          </h2>
        </div>
        <div>
          <div className="flex flex-col md:flex-row w-full justify-between space-x-10 items-center space-y-10 md:space-y-0">
            <div className="md:w-1/3 w-3/5 border-[3px] border-main_text_3 rounded-t-[96px] px-5 pt-5">
              <div className=" border-[3px] border-main_text_3 rounded-t-[64px]  -mb-[2px]">
                <div className="flex flex-col items-center w-full  space-y-10">
                  <h2 className="text-8xl font-cardo font-bold leading-[76.8px] text-main_dark mt-6">
                    $M1+
                  </h2>
                  <div className="w-3/4 flex justify-center items-center mx-auto">
                    <p className="font-josefin_sans font-normal text-2xl flex text-center items-center ">
                      People with financial support
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:w-1/3 w-3/5 border-[3px] border-main_text_3 rounded-t-[96px] px-5 pt-5">
              <div className=" border-[3px] border-main_text_3 rounded-t-[64px]  -mb-[2px]">
                <div className="flex flex-col items-center w-full  space-y-10">
                  <h2 className="text-8xl font-cardo font-bold leading-[76.8px] text-main_dark mt-6">
                    1K+
                  </h2>
                  <div className="w-3/4 flex justify-center items-center mx-auto">
                    <p className="font-josefin_sans font-normal text-2xl flex text-center items-center ">
                      Advocates and NGOs in our support mission
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:w-1/3 w-3/5 border-[3px] border-main_text_3 rounded-t-[96px] px-5 pt-5">
              <div className=" border-[3px] border-main_text_3 rounded-t-[64px]  -mb-[2px]">
                <div className="flex flex-col items-center w-full  space-y-10">
                  <h2 className="text-8xl font-cardo font-bold leading-[76.8px] text-main_dark mt-6">
                    M1+
                  </h2>
                  <div className="w-3/4 flex justify-center items-center mx-auto">
                    <p className="font-josefin_sans font-normal text-2xl flex text-center items-center ">
                      resources for marginalized persons
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Progress;

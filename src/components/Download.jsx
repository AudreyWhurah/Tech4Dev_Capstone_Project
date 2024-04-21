import React from "react";

const Download = () => {
  return (
    <div className="mt-20">
      <div className="bg-main_dark w-full md:rounded-[40px] rounded-lg flex flex-col md:flex-row h-auto md:h-[314px] overflow-hidden">
        <div className="w-full md:w-2/3 flex flex-col items-center justify-center p-8 md:p-16">
          <h2 className="font-cardo font-bold text-2xl md:text-4xl text-main_text_4 text-center">
            Healing starts here. Download EmpowerCare today.
          </h2>
        </div>
        <div className="w-full md:w-1/3 flex justify-center md:justify-end items-center p-4">
          <img
            src="/images/download.png"
            alt="Download EmpowerCare"
            className="max-w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default Download;

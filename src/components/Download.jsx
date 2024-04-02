import React from "react";

const Download = () => {
  return (
    <div className="mt-20">
      <div className="bg-main_dark w-full rounded-[40px] flex h-[314px]">
        <div className="w-2/3 ">
          <div className="flex flex-col items-center justify-center h-full px-16">
            <h2 className="font-cardo font-bold text-4xl text-main_text_4">
              Healing starts here. Download EmpowerCare today.
            </h2>
          </div>
        </div>
        <div className="w-1/3">
          <img
            src="/images/download.png"
            alt="download"
            className="w-[361px] h-[347.25px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Download;

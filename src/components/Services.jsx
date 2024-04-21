import React from "react";

const Services = () => {
  return (
    <section className="mt-20">
      <div className="flex flex-col justify-center text-center font-cardo text-main_dark mb-4 mx-auto px-4">
        <h2 className="font-bold text-2xl md:text-4xl leading-snug md:leading-[57.6px] px-6">
          Lend a hand in creating a world where healing is possible for all.
        </h2>
        <h3 className="font-normal font-josefin_sans text-xl md:text-2xl leading-7 md:leading-9 -mt-2">
          Donate to support a cause
        </h3>
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center space-x-0 md:space-x-2">
        {[
          {
            image: "/images/service_1.png",
            title: "Medical services",
          },
          {
            image: "/images/service_2.png",
            title: "Legal services",
          },
          {
            image: "/images/service_3.png",
            title: "Financial services",
          },
        ].map((service, index) => (
          <div key={index} className="w-2/4">
            <div className="bg-main_text_2 pt-8 px-8 rounded-3xl m-2">
              <div className="flex flex-col items-center text-center">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-[180px] md:w-[223px] h-auto"
                />
                <h3 className="mt-4 font-normal font-josefin_sans text-2xl leading-9 text-main_dark">
                  {service.title}
                </h3>
                <svg
                  className="text-main_dark mt-2"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17 12H3"
                    stroke="#3C005A"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M21.6427 11.7856L18.2116 9.72696C17.6784 9.40703 17 9.79112 17 10.413V13.587C17 14.2089 17.6784 14.593 18.2116 14.273L21.6427 12.2144C21.8045 12.1173 21.8045 11.8827 21.6427 11.7856Z"
                    fill="#3C005A"
                  />
                </svg>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;

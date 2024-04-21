import React from "react";
import Post from "./Post";
const communityData = [
  {
    image: "community_image_1.jpeg",
    message:
      "After several years of consistent pursuit to fight off the stigma that comes with been a marginalized person, I met with a counselor last week who has helped me reshape my journey and life in short ",
  },
  {
    image: "community_image_2.jpeg",
    message:
      "After several years of consistent pursuit to fight off the stigma that comes with been a marginalized person, I met with a counselor last week who has helped me reshape my journey and life in short ",
  },
  {
    image: "community_image_3.jpeg",
    message:
      "After several years of consistent pursuit to fight off the stigma that comes with been a marginalized person, I met with a counselor last week who has helped me reshape my journey and life in short ",
  },
  {
    image: "community_image_4.jpeg",
    message:
      "After several years of consistent pursuit to fight off the stigma that comes with been a marginalized person, I met with a counselor last week who has helped me reshape my journey and life in short ",
  },
];
const JoinCommunity = () => {
  return (
    <section className="mt-10">
      <div>
        <div className="md:w-1/2 w-full mb-12">
          <h2 className="font-bold font-cardo md:text-6xl text-5xl md:leading-[76.8px] text-wrap text-main_dark">
            Join our Community to share your story
          </h2>
        </div>
        <div>
          <div className="flex flex-row space-x-6 overflow-x-scroll no-scrollbar ">
            {communityData.map((post, index) => {
              return <Post post={post} key={index} />;
            })}
          </div>
        </div>
        <div className="flex w-full  justify-center items-center mt-10">
          <button className="md:w-[320px] md:h-[76px] md:p-3 p-4 rounded-2xl md:rounded-lg text-main_text_4 bg-main_dark font-josefin_sans font-normal text-xl ">
            Join now
          </button>
        </div>
      </div>
    </section>
  );
};

export default JoinCommunity;

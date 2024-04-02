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
];
const communityDataTwo = [
  {
    image: "community_image_4.jpeg",
    message:
      "After several years of consistent pursuit to fight off the stigma that comes with been a marginalized person, I met with a counselor last week who has helped me reshape my journey and life in short ",
  },
  {
    image: "community_image_5.jpeg",
    message:
      "After several years of consistent pursuit to fight off the stigma that comes with been a marginalized person, I met with a counselor last week who has helped me reshape my journey and life in short ",
  },
  {
    image: "community_image_6.jpeg",
    message:
      "After several years of consistent pursuit to fight off the stigma that comes with been a marginalized person, I met with a counselor last week who has helped me reshape my journey and life in short ",
  },
];
const CommunityPost = () => {
  return (
    <section className="mt-20 mb-20">
      <div className=" mb-12">
        <h2 className="font-bold font-cardo text-5xl leading-[52.8px] text-wrap text-main_dark">
          Most Popular Community Chats
        </h2>
      </div>
      <div>
        <div className="flex flex-row space-x-6 overflow-x-scroll no-scrollbar ">
          {communityData.map((post, index) => {
            return <Post post={post} key={index} />;
          })}
        </div>
      </div>
      <div className="mt-12">
        <div className="flex flex-row space-x-6 overflow-x-scroll no-scrollbar ">
          {communityDataTwo.map((post, index) => {
            return <Post post={post} key={index} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default CommunityPost;

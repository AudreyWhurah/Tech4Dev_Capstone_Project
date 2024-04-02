import React from "react";

const Post = ({ post }) => {
  return (
    <div>
      <div className="relative w-[502px]">
        <img
          src={`/images/${post.image}`}
          alt=""
          className="w-[502px] h-[540px] object-cover  rounded-t-[25px] rounded-r-[48px] rounded-b-[25px] rounded-l-[48px]"
        />
        <div className="absolute top-5 flex w-full justify-between  mx-auto px-10">
          <div className="flex ">
            <img
              src={`/images/community_image.jpeg`}
              alt=""
              className="w-[41.18px] h-[39.97px] rounded-full"
            />
            <h6 className="text-main_text_4 ml-5 font-semibold text-xl">
              Lamar
            </h6>
          </div>
          <p className="font-Josefin_sans text-sm text-main_text_4 font-normal">
            posted 2 hrs ago
          </p>
        </div>
        <div className="absolute top-[350px] bg-main_text rounded-lg mx-10 ">
          <p className="text-main_text_5 font-josefin_sans font-bold text-lg ">
            {post.message}...
            <span className="text-main_text_6 font-josefin_sans font-bold text-xl">
              Read more
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Post;

import React from "react";
import Nav from "./Nav";
import Footer from "./Footer";
import CommunityPost from "./CommunityPost";
import CommunityHero from "./CommunityHero";
import CommunityServices from "./CommunityServices";

const Community = () => {
  return (
    <div>
      <div className="max-w-[1278px] mx-auto">
        <Nav isHome={false} />
      </div>
      <CommunityHero />
      <div className="max-w-[1278px] mx-auto">
        <CommunityServices />
        <CommunityPost />
      </div>

      <Footer />
    </div>
  );
};

export default Community;

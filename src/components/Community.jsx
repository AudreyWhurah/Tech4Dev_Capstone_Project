import React from "react";
import Nav from "./Nav";
import Footer from "./Footer";
import CommunityPost from "./CommunityPost";
import CommunityHero from "./CommunityHero";
import CommunityServices from "./CommunityServices";

const Community = () => {
  return (
    <div>
      <div className="container mx-auto w-full px-4 sm:px-6 lg:px-8">
        <Nav isHome={false} />
      </div>
      <CommunityHero />
      <div className="container mx-auto w-full px-4 sm:px-6 lg:px-8">
        <CommunityServices />
        <CommunityPost />
      </div>

      <Footer />
    </div>
  );
};

export default Community;

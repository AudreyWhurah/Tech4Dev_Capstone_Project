import React from "react";
import Nav from "./Nav";
import Hero from "./Hero";
import HeroTwo from "./HeroTwo";
import HeroThree from "./HeroThree";
import Progress from "./Progress";
import Services from "./Services";
import JoinCommunity from "./JoinCommunity";
import Download from "./Download";
import Footer from "./Footer";

const Home = () => {
  return (
    <div>
      <div className="max-w-[1278px] mx-auto">
        <Nav isHome={true} />
        <Hero />
        <HeroTwo />
        <HeroThree />
        <Progress />
        <Services />
        <JoinCommunity />
        <Download />
      </div>
      <Footer />
    </div>
  );
};

export default Home;

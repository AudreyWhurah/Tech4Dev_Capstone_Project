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
    <>
      <div className="container mx-auto w-full px-4 sm:px-6 lg:px-8">
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
    </>
  );
};

export default Home;

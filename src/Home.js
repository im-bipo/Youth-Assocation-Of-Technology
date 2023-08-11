import React from "react";
import WellWishers from "./component/home/Slider/WellWishers";
import CommunityPartners from "./component/home/Slider/CommunityPartners";
import HeroLander from "./component/home/HeroLander";
import Intro from "./component/home/Intro";

function Home() {
  return (
    <>
      <HeroLander/>
      <Intro/>
      <WellWishers />
      <CommunityPartners />
    </>
  );
}

export default Home;

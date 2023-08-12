import React from "react";
import WellWishers from "./component/home/Slider/WellWishers";
import CommunityPartners from "./component/home/Slider/CommunityPartners";
import HeroLander from "./component/home/HeroLander";
import Intro from "./component/home/Intro";
import AboutUs from "./component/home/AboutUs";
import FeaturedEvents from "./component/home/FeaturedEvents";

function Home() {
  return (
    <>
      <HeroLander/>
      <Intro/>
      <AboutUs/>
      <FeaturedEvents/>
      <WellWishers />
      <CommunityPartners />
    </>
  );
}

export default Home;

import React from "react";
import WellWishers from "./component/home/Slider/WellWishers";
import CommunityPartners from "./component/home/Slider/CommunityPartners";
import HeroLander from "./component/home/HeroLander";
import Intro from "./component/home/Intro";
import AboutUs from "./component/home/AboutUs";
import FeaturedEvents from "./component/home/FeaturedEvents";
import MessageAdmin from "./component/home/MessageAdmin";

function Home() {
  document.title ="CSIT BMC"
  return (
    <>
      <HeroLander/>
      <Intro/>
      <AboutUs/>
      <FeaturedEvents/>
      <WellWishers />
      <MessageAdmin/>
      <CommunityPartners />
    </>
  );
}

export default Home;

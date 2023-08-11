import React from "react";
import WellWishers from "./component/home/Slider/WellWishers";
import CommunityPartners from "./component/home/Slider/CommunityPartners";
import HeroLander from "./component/home/HeroLander";

function Home() {
  return (
    <>
    <div>
      <HeroLander/>
    </div>
     
      <WellWishers />
      
      <CommunityPartners />
    </>
  );
}

export default Home;

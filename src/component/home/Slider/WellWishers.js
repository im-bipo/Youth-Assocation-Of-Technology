import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import Wisher from "./Wisher";

function WellWishers() {
  const [wishers, setwishers] = useState([]);
  useEffect(() => {
    getWishers();
  }, []);
  const getWishers = async () => {
    const res = await fetch(
      "https://csit-asc-default-rtdb.firebaseio.com/wellWishers.json"
    );
    const data = await res.json();
    setwishers(data);
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    
  };
  return (
    <>
      <div className="">
        <h2 className="pt-[3.7rem] font-semibold text-center text-[1.4rem] text-primary">
          Our Well wishers
          <hr className="border-secondary m-auto border-[1.9px] w-36 rounded-3xl" />
        </h2>
        <div className="overflow-hidden py-2 cursor-pointer ">
          <Slider {...settings}>
            {wishers.map((wisher) => (
              <div key={wisher.id}>
                <Wisher Name={wisher.Name} Post={wisher.Post} testimony={wisher.testimony} img={wisher.img}/>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
}

export default WellWishers;

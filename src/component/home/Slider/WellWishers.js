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
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };
  return (
    <>
      <div className="">
        <h2 className="pt-5 font-bold text-center text-secondary ">
          Our Well wishers
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

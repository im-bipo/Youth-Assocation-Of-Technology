import React from "react";
import aboutImg from "../../assets/img/aboutImg.png";

function AboutUs() {
  return (
    <>
        <div className="bg-[#EDF3FB] desktop:flex">
          <img src={aboutImg} alt="CSIT Assocation BMC" className="desktop:w-[45%] object-cover p-1 desktop:m-5 rounded-xl"/>
          <div className="p-5 desktop:p-14">
          <h2 className="text-center text-secondary font-semibold text-2xl py-2 desktop:text-left">
            About Us
          </h2>
          <div className=" m-auto w-[90%] desktop:m-0 desktop:w-[80%] desktop:text-lg">
            <p className="py-1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reiciendis praesentium dicta nemo dolores itaque magnam quo aut
              non, assumenda harum nulla ducimus qui porro voluptatibus debitis
              veritatis impedit voluptate molestias.
            </p>
            <p className="py-1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reiciendis praesentium dicta nemo dolores itaque magnam quo aut
              non, assumenda harum nulla ducimus qui porro voluptatibus debitis
              veritatis impedit voluptate molestias.
            </p>
            <p className="py-1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reiciendis praesentium dicta nemo dolores itaque magnam quo aut
              non, assumenda harum nulla ducimus qui porro voluptatibus debitis
              veritatis impedit voluptate molestias.
            </p>
          </div>
          </div>
      </div>
    </>
  );
}

export default AboutUs;

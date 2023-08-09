import React from "react";
import Tilt from "react-parallax-tilt";
import Logo from "./component/home/Logo";
import aboutImg from "./assets/image/aboutimg.JPG";
import WellWishers from "./component/home/Slider/WellWishers";
import CommunityPartners from "./component/home/Slider/CommunityPartners";

import Typewriter from "typewriter-effect";

function Home() {
  return (
    <>
      <div className=" py-10 bg-blue-950 flex-col tablet:flex-row flex justify-center tablet:pt-[5rem] tablet:mt-[2rem] ">
        <div className="text-center  items-center tablet:w-1/3 tablet:relative tablet:pt-14 tablet:text-left tablet:pl-10">
          <h3 className="font-semibold text-white tablet:py-2">WELCOME TO</h3>
          <h1 className="font-bold text-white text-2xl">
            CSIT ASSOCATION OF BMC
          </h1>
          <div className="pt-5">
            <div className=" hidden tablet:flex">
              <div className="bg-white w-fit py-1 mx-1 px-2 rounded-lg font-medium">
                Events
              </div>
              <div className="bg-white w-fit mx-1 py-1 px-2 rounded-lg font-medium">
                Resources
              </div>
              </div>
              <div className="text-white p-1 text-xl pt-5 h-28">
              <Typewriter
                options={{
                  strings: ["We are <br/>Non-Political", "We are Technoligical","We are <br/>Non-profit","We are community"],
                  autoStart: true,
                  loop: true,
                }}
                />
                </div>
          </div>
        </div>
        <div className="flex justify-center items-center tablet:w-2/3">
          <Logo />
        </div>
      </div>
      <div className="px-5 py-2 bg-gray-100">
        <h4 className="py-3 text-rose-500 font-bold text-center">About Us</h4>
        <Tilt tiltMaxAngleX={8} tiltMaxAngleY={8}>
          <div>
            <img
              src={aboutImg}
              alt="CSIT-BMC-7TH GENERAL MEETING"
              className="rounded-md pb-2 overflow-hidden cursor-crosshair"
            />
          </div>
        </Tilt>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
          cupiditate ipsa distinctio incidunt eos, dolores ad at maxime pariatur
          ipsum?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
          consequatur consequuntur fugiat architecto sit suscipit eveniet est
          quasi. Qui fuga eius beatae non suscipit consequuntur, id ut, ducimus
          rerum exercitationem perspiciatis. Quae repellat reiciendis officiis
          vero impedit dicta eius quia?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
          nobis aliquam velit esse modi expedita itaque hic ullam officiis
          iusto, vel fugiat tempore quaerat laudantium necessitatibus
          reprehenderit cum quo. Repudiandae.
        </p>
      </div>
      <WellWishers />
      
      <CommunityPartners />
    </>
  );
}

export default Home;

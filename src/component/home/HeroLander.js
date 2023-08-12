import React from "react";
import "./HeroLander.css";
import event from '../../assets/img/event.png'
import Typewriter from "typewriter-effect";
import { NavLink } from "react-router-dom";
function HeroLander() {
  return (
    <>
      <div className="flex">
        <div className="bg-hero h-fit tablet:h-[35rem]  pt-28 w-[100%] tablet:w-1/2 desktop:h-[42rem] desktop:pt-52 desktop:pl-36">
          <h2 className="text-secondary font-extrabold text-l text-center desktop:text-left ">
            GREETINGS FROM
          </h2>
          <h1 className="text-primary font-extrabold text-[2rem]  text-center w-[85%] m-auto py-5 desktop:text-left desktop:m-0 desktop:text-[2.5rem] desktop:pb-0 desktop:pt-2">
            CSIT ASSOCATION OF <br />
            BMC
          </h1>
          <p className="text-center desktop:text-left">Creating World bit by bit</p>
          <NavLink to={'/events'}>
            <button className=" hidden tablet:flex tablet:m-auto tablet:mt-5 desktop:mx-0 p-3 text-white rounded-lg my-5 bg-primary ">
            <img src={event} alt="event" className="pr-2" />
            Events
            </button>
          </NavLink>
          <div className="flex justify-center items-center 
          pb-10
          desktop:block pt-36 desktop:pt-16 desktop:font-medium">
            <Typewriter
              options={{
                strings: [
                  "We are Non-Political",
                  "We are Technoligical",
                  "We are Non-profit",
                  "We are community",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </div>
        </div>
          <div className="hidden w-1/2 pt-20 p-5 justify-center items-center tablet:flex">
            <div className="hero-pic w-[100%] h-[100%] rounded-sm">

            </div>
          </div>
      </div>
    </>
  );
}

export default HeroLander;

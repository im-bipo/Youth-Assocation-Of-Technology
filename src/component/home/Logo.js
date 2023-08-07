import React, { useEffect, useRef } from "react";
import anime from "animejs";
import logo from "../../assets/image/img.png";
// import logo from "../../assets/image/lggo.png";
import "./logo.css";

function Logo() {
  const waveRefs = [useRef(null), useRef(null), useRef(null)];

  const handleMouseEnter = (index) => {
    const wave = waveRefs[index].current;

    anime({
      targets: wave,
      translateX: [
        { value: 10, duration: 1500 },
        { value: -10, duration: 1500 },
        { value: 0, duration: 1500 },
      ],
      translateY: [
        { value: 10, duration: 1500 },
        { value: -10, duration: 1500 },
        { value: 0, duration: 1500 },
      ],
      rotate: [
        { value: 20, duration: 1500 },
        { value: -20, duration: 1500 },
        { value: 0, duration: 1500 },
      ],
      scale: [
        { value: 1.1, duration: 1500 },
        { value: 1, duration: 1500 },
      ],
    });
  };

  const handleMouseLeave = (index) => {
    const wave = waveRefs[index].current;

    anime({
      targets: wave,
      translateX: 0,
      translateY: 0,
      rotate: 0,
      scale: 1,
      duration: 2000,
    });
  };

  useEffect(() => {
    const animations = waveRefs.map((waveRef, index) => {
      const wave = waveRef.current;

      return anime({
        targets: wave,
        translateX: [
          { value: 5, duration: 1500 },
          { value: -5, duration: 1500 },
          { value: 0, duration: 1500 },
        ],
        translateY: [
          { value: 5, duration: 1500 },
          { value: -5, duration: 1500 },
          { value: 0, duration: 1500 },
        ],
        rotate: [
          { value: 5, duration: 1500 },
          { value: -5, duration: 1500 },
          { value: 0, duration: 1500 },
        ],
        loop: true,
        direction: "alternate",
        autoplay: true,
        delay: index * 500,
      });
    });

    waveRefs.forEach((waveRef, index) => {
      const wave = waveRef.current;

      wave.addEventListener("mouseenter", () => handleMouseEnter(index));
      wave.addEventListener("mouseleave", () => handleMouseLeave(index));

      animations[index].play();
    });
    // eslint-disable-next-line
  }, [waveRefs]);

  return (
    
    <div className="w-[24rem] h-[24rem] overflow-hidden">
      <div className="rotate-[-36deg] cursor-pointer">
        <div
          ref={waveRefs[0]}
          className="left-[9rem] top-[2rem]  relative w-[10rem] h-[15rem] rounded-[10rem] bg-gradient-to-r from-blue-500 to-blue-800"
          style={{ transformOrigin: "center center 0" }}>
        </div>
      </div>
      <div className="cursor-pointer">
        <div
          ref={waveRefs[1]}
          className="left-[6rem] rotate90 top-[-6rem] w-[10rem] h-[15rem] rounded-[10rem] bg-gradient-to-t from-purple-500 to-pink-800 relative"
          style={{ transformOrigin: "center center 0" }}>
        </div>
      </div>
      <div className="rotate-[12deg] cursor-pointer">
        <div
          ref={waveRefs[2]}
          className="box-2 left-[-2rem] top-[-26rem] flex justify-center items-center w-[10rem] h-[15rem] rounded-[10rem] bg-gradient-to-tl from-yellow-400 to-orange-600 relative"
          style={{ transformOrigin: "center center 0" }}>
        <img
          src={logo}
          alt=""
          className="csit-logo relative w-[14rem] z-10 cursor-pointer hover:scale-[1.1] transition-transform"/>

        </div>
      </div>
    </div>
  );
}

export default Logo;

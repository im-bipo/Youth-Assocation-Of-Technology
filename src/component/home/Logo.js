import React, { useEffect, useRef } from 'react';
import anime from 'animejs';
import logo from "../../data/image/img.png";
import './logo.css'

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
        direction: 'alternate',
        autoplay: true,
        delay: index * 500,
      });
    });

    waveRefs.forEach((waveRef, index) => {
      const wave = waveRef.current;
      
      wave.addEventListener('mouseenter', () => handleMouseEnter(index));
      wave.addEventListener('mouseleave', () => handleMouseLeave(index));
      
      animations[index].play();
    });

    return () => {
      waveRefs.forEach((waveRef, index) => {
        const wave = waveRef.current;
        wave.removeEventListener('mouseenter', () => handleMouseEnter(index));
        wave.removeEventListener('mouseleave', () => handleMouseLeave(index));
      });
    };
     // eslint-disable-next-line
  }, [waveRefs]);

  return (
    <div className='w-1/2 relative '>
      <div className='rotate-[-36deg] cursor-pointer'>

      <div
        ref={waveRefs[0]}
        className='box-1 wave bg-[#62D0FF]'
        style={{ transformOrigin: 'center center 0' }}
        ></div>
        </div>
  <div className='rotate-[90deg] cursor-pointer'>

      <div
        ref={waveRefs[1]}
        className='box-3 wave bg-[#9E62FF]'
        style={{ transformOrigin: 'center center 0' }}
        ></div>
        </div>
  <div className='rotate-[12deg] cursor-pointer'>

      <div
        ref={waveRefs[2]}
        className='box-2 wave bg-[#FCFF62]'
        style={{ transformOrigin: 'center center 0' }}
        ></div>
        </div>
      
      <div>
        <img src={logo} alt="" className='csit-logo z-10 relative cursor-pointer hover:scale-[1.03] transition-transform'  />
      </div>
    </div>
  );
}

export default Logo;

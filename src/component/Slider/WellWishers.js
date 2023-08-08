import React from 'react'
import Slider from 'react-slick';
import { useLoaderData } from 'react-router-dom';

function WellWishers() {
const wishers = useLoaderData()

    const settings = {
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
      };
  return (
    <>
    <div className=''>
    <h2 className='pt-5 font-bold text-center text-secondary '>Our Well wishers</h2>
    <div className='overflow-hidden py-2 cursor-pointer'>
    <Slider {...settings}>
      {wishers.map((wisher) => (
        <div key={wisher.id} className='flex'>
          <div className='flex justify-center items-center flex-col'>
          <img src={wisher.img} alt={wisher.Name} className='w-[5rem] h-[5rem] rounded-[50%] object-cover' />
          <h4 className='text-secondary font-medium pt-2'>{wisher.Name}</h4>
          <h3 className='font-semibold'>{wisher.Post}</h3>
          </div>
          <div>
          <p className='p-5 text-[.9rem]'>
          <svg  viewBox="0 0 512 512" className="quoteIcon inline-block fill-secondary mx-1" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M464 256h-80v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8c-88.4 0-160 71.6-160 160v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zm-288 0H96v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8C71.6 32 0 103.6 0 192v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z"></path></svg>
            {wisher.testimony}</p>
          </div>
        </div>
      ))}
    </Slider>
      </div>
      </div>
    </>
  )
}

export default WellWishers

//loader 
export const WellWishersLoader = async ()=>{
  const res = await fetch('https://csit-asc-default-rtdb.firebaseio.com/wellWishers.json')
  return res.json()
}
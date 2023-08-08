import React from 'react'
import Logo from './component/home/Logo'
import aboutImg from './assets/image/aboutimg.JPG'
import WellWishers from './component/Slider/WellWishers';
import CommunityPartners from './component/Slider/CommunityPartners';


function Home() {
    return (
      <>
      <div className='text-center py-10'>
      <h3 className='font-semibold'>WELCOME TO</h3>
      <h1 className='font-bold text-2xl'>CSIT ASSOCATION OF BMC</h1>
      </div>
      <div className='flex justify-center items-center'>
        <Logo/>
      </div>
      <div className='px-5 py-2 bg-gray-100'>
        <h4 className='py-3 text-rose-500 font-bold text-center'>About Us</h4>
        <img src={aboutImg} alt="CSIT-BMC-7TH GENERAL MEETING" className='rounded-md pb-2 overflow-hidden'/>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet cupiditate ipsa distinctio incidunt eos, dolores ad at maxime pariatur ipsum?</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum consequatur consequuntur fugiat architecto sit suscipit eveniet est quasi. Qui fuga eius beatae non suscipit consequuntur, id ut, ducimus rerum exercitationem perspiciatis. Quae repellat reiciendis officiis vero impedit dicta eius quia?</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat nobis aliquam velit esse modi expedita itaque hic ullam officiis iusto, vel fugiat tempore quaerat laudantium necessitatibus reprehenderit cum quo. Repudiandae.</p>
      </div>
      <WellWishers/>
      <CommunityPartners/>
      </>
    );
  }
  

export default Home
import React from 'react'
import Logo from './component/home/Logo'


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
      <div className='p-5'>
        <h4 className='text-red-500 py-1 font-medium'>About Us</h4>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet cupiditate ipsa distinctio incidunt eos, dolores ad at maxime pariatur ipsum?</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum consequatur consequuntur fugiat architecto sit suscipit eveniet est quasi. Qui fuga eius beatae non suscipit consequuntur, id ut, ducimus rerum exercitationem perspiciatis. Quae repellat reiciendis officiis vero impedit dicta eius quia?</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat nobis aliquam velit esse modi expedita itaque hic ullam officiis iusto, vel fugiat tempore quaerat laudantium necessitatibus reprehenderit cum quo. Repudiandae.</p>
      </div>
      </>
    );
  }
  

export default Home
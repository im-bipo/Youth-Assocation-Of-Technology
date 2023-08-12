import React, { useState,useEffect } from 'react'
import { Link } from 'react-router-dom'

function FeaturedEvents() {
  const [RecentEvents, setRecentEvents] = useState([])
  useEffect(() => {
  getData();
  }, [])
  const getData= async()=>
  {
    const response = await fetch ('https://csit-asc-default-rtdb.firebaseio.com/recentEvent.json')
    const data = await response.json()
    setRecentEvents(data)
  }
  console.log(RecentEvents)
  
  return (
    <>
    <div className='desktop:bg-gray-200 desktop:h-[40rem] m-0'>
    <div className='bg-primary m-5 mt-0 rounded-xl flex justify-center flex-wrap tablet:flex-col tablet:items-center desktop:flex-row desktop:items-start desktop:h-[20rem] desktop:mb-[20rem] py-10 desktop:pt-5'>
      <h2 className='text-white text-center pb-10 font-semibold text-xl w-[100%]'>
        Featured Events
        <hr className='w-32 border-[1.5px] border-secondary m-auto' />
      </h2>
      {RecentEvents.map((item)=>(
        <div key={item.id} className='bg-white flex flex-wrap justify-start items-center w-[80%] tablet:w-[60vw] tablet:max-w-[40rem] desktop:w-[20%] desktop:mx-14 rounded-lg my-5 cursor-pointer' >
          <Link to={item.link}>
      <img src={item.img} alt={item.name} className='rounded-t-lg'/>
      <div className='w-[100%] flex justify-end '>
      <h4 className='bg-green-500 px-2 rounded-lg relative right-1 text-white bottom-8 w-fit'>{item.status}</h4>
      </div>
      <div className='p-5 pt-0'>
      <h3 className='text-xl font-semibold text-primary'>{item.title}</h3>
      <p className='text-primary text-sm'>{item.decs}</p>
      <p className='w-fit text-sm font-medium text-secondary pt-2'>View
        <hr className='border-primary relative left-2 w-[70%] border'/>
      </p>
      </div>
          </Link>
    </div>
      ))}
    </div>
      </div>
    </>
  )
}

export default FeaturedEvents
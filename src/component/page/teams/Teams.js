import React from 'react'
import { Link, useLoaderData } from 'react-router-dom'
function Teams() {
  document.title="CSIT BMC | TEAM MEMBERS"
const members = useLoaderData()
  return (
    <>
    <div className='flex flex-wrap gap-5 justify-center my-5 '>
    {members.map((item)=>(
      <div key={item.id} className='p-3 w-[11rem] bg-gray-100 hover:bg-gray-200'>
        <Link to={`member/${item.id}/${item.name}`}>
          <img src={item.img} alt="{item.name}" className='pb-2 rounded-sm h-[10rem] w-[10rem] object-cover' />
        <h1 className='font-medium text-[.9rem] text-primary'>{item.name}</h1>
        <h2 className='text-[.7rem]'>{item.post}</h2>
        </Link>
      </div>
    ))}
    </div>
    </>
  )
}

export default Teams

export const TeamLoader = async() => {
    const res = await fetch('https://csit-asc-default-rtdb.firebaseio.com/Members.json')
    return res.json()
}
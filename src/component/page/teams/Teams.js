import React from 'react'
import { Link, useLoaderData } from 'react-router-dom'
function Teams() {
const members = useLoaderData()
  return (
    <>
    <div>Teams Members</div>
    <div className='flex flex-wrap'>
    {members.map((item)=>(
      <div key={item.id} className='p-5 w-[40%] m-5 bg-gray-200'>
        <Link to={`member/${item.id}/${item.name}`}>
        <h1>{item.name}</h1>
        <h1>{item.post}</h1>
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
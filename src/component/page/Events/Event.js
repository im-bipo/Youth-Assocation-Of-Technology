import React from 'react'
import { Link, useLoaderData } from 'react-router-dom'
function Event() {
  const EventData = useLoaderData()
  console.log(EventData)
  return (
    <>
    <div>
      this is events
    </div>
    {EventData.map((item)=>(
      <div key={item.id}>
      <Link to={`${item.id}`}>
        <div className=' bg-gray-200 p-20 m-5'>
      <h2 >{item.title}</h2>
      <p>{item.status}</p>
        </div>
      </Link>
      </div>
    ))}
    </>
  )
}

export default Event

export const EventLoader = async () =>{
  const response = await fetch ('https://csit-asc-default-rtdb.firebaseio.com/events/.json')
  return response.json()
}
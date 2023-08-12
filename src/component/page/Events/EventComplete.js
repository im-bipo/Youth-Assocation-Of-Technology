import React from 'react'
import { Link } from 'react-router-dom'

function EventComplete(props) {
    const Data = props.data 
  return (<>
    <div>EventComplete</div>
    <div className='p-20 flex justify-center items-center gap-6 flex-col'>
  <img src={Data.img} alt="not availabel"  className='w-52'/>
    <h2>Title: {Data.title}</h2>
    <p>Description: {Data.decs}</p>
    <p>status: This event is ended
        <Link to={'#link'} className='underline text-blue-500 px-1'>click</Link>
    </p>
    </div>
  </>
  )
}

export default EventComplete
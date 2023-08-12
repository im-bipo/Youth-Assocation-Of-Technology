import React from 'react'

function UpCommingEvent(props) {
    const Data = props.data 
  return (<>
    <div>UpCommingEvent</div>
    <div className='p-20 flex justify-center items-center gap-6 flex-col'>
        <img src={Data.img} alt="not availabel"  className='w-52'/>
    <h2>Title: {Data.title}</h2>
    <p>Description: {Data.decs}</p>
    <div>
    <label>Are you intrested: </label>
    <input type='text' className='bg-cyan-200'/>
    </div>
    <p>status: {Data.status}</p>
    </div>
  </>
  )
}

export default UpCommingEvent
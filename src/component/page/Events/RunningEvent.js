import React from 'react'

function RunningEvent(props) {
    const Data = props.data 
  return (<>
    <div>RunningEvent</div>
    <div className='p-20 flex justify-center items-center gap-6 flex-col'>
  <img src={Data.img} alt="not availabel"  className='w-52'/>
    <h2>Title: {Data.title}</h2>
    <p>Description: {Data.decs}</p>
    <p>status: {Data.status}</p>
    <div>
    {/* <iframe title={Data.title} src={`${Data.formLink}/viewform?embedded=true`} width="640" height="735">Loading…</iframe> */}
    </div>
    </div>
  </>
  )
}

export default RunningEvent
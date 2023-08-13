import React from 'react'
import "./Event.css";
function EventHeader(props) {
  return (
    <div className="heroEventBg p-10">
    <h1 className="text-secondary text-center pt-10 font-bold text-2xl">
    {props.title}
    </h1>
    <h2 className="m-auto w-[60%] text-center font-bold my-2 text-primary">
        {props.subtitle}
        <br/>
     {props.eventTitle}
    </h2>
  </div>
  )
}

export default EventHeader
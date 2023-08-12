import React from 'react'
import { useLoaderData } from 'react-router-dom'
import UpCommingEvent from './UpCommingEvent'
import RunningEvent from './RunningEvent'
import EventComplete from './EventComplete'

function EventDetails() {
    const eList = useLoaderData() //Event List
    let render = null
     switch (eList.status){
        case "Upcoming Event":
            render = <UpCommingEvent data={eList}/>
            break;
        case "Running":
            render = <RunningEvent data={eList}/>
            break;
        default:
            render = <EventComplete data={eList}/>
            break;
     }
  return (
    <>
    <div>EventDetails</div>
    {render}
    </>
  )
}

export default EventDetails

export const EventDetailsLoader = async ({params}) => {
    const {eventNo} = params
    const response = await fetch('https://csit-asc-default-rtdb.firebaseio.com/events/'+ eventNo +'.json')
    return response.json()
}
import React from 'react'
import MemberSocialAccount from './MemberSocialAccount'
import { useLoaderData } from 'react-router-dom'
function TeamsDetails() {
    const member = useLoaderData()
  return (
    <div className="p-44">
        <img src={member.img} alt={member.name} className='w-[20rem]'/>
        <h1>
            {member.name}
        </h1>
        <p>
            {member.message}
        </p>
<div>
    <MemberSocialAccount social={member.social}/>
</div>
            
    </div>
  )
}

export default TeamsDetails

export const TeamsDetailsLoader = async ({params}) =>{
    // eslint-disable-next-line
    const {idNo,name} = params
    const response = await fetch ('https://csit-asc-default-rtdb.firebaseio.com/Members/'+idNo+'.json')
    return response.json()
}
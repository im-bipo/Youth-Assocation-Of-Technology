import React from 'react'
import logo from '../../assets/image/img.png'
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <div className='flex items-center w-[100%] fixed shadow-md bg-gray-200 z-[100]'>
      <div className='w-1/6 pl-10'>
        <img src={logo} alt="CSIT-BMC" className='w-16'/>
        </div>
      <div className='w-5/6 flex justify-end space-x-5 pr-16 font-medium text-primary desktop:text-purple-600'>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/events'>Events</NavLink>
        <NavLink to='/resources'>Resources</NavLink>
        <NavLink to='/projects'>Projects</NavLink>
        <NavLink to='/contact'>Contact</NavLink>
      </div>
    </div>
  )
}

export default Navbar
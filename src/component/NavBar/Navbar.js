import React from 'react'
import logo from '../../assets/image/imgLight.png'
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <div className='flex items-center w-[100%] fixed shadow-md bg-gray-700 z-[100]'>
      <div className='w-1/6 pl-10'>
        <img src={logo} alt="CSIT-BMC" className='w-16'/>
        </div>
      <div className='w-5/6 flex justify-end space-x-5 pr-16 text-white font-medium'>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/about'>About</NavLink>
        <NavLink to='/contact'>Contact</NavLink>
        <NavLink to='/projects'>Projects</NavLink>
      </div>
    </div>
  )
}

export default Navbar
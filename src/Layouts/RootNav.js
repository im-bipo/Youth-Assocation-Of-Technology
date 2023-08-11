import React, { useState, useEffect } from 'react'
import {Outlet } from 'react-router-dom'
import Navbar from '../component/NavBar/Navbar'
import SmNav from '../component/NavBar/SmNav'

function RootNav() {

  const [Width, setTheWidth] = useState(window.innerWidth)

  useEffect(() => {

    const WidthUpdate = () => {
      setTheWidth(window.innerWidth)
    }

    window.addEventListener('resize', WidthUpdate)

    return () => {
      window.removeEventListener('resize', WidthUpdate)
    }
  }, [Width])

  return (
    <>
     {Width < 650 ? (
          <>
          <div className='pb-14'>
            <Outlet/>
          </div>
            <SmNav/>
          </>
        ) : (
          <>
          <Navbar/>
          <div className='pt-20'>
          <Outlet/>
          </div>
          </>
        )}
    </>
  )
}

export default RootNav
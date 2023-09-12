import React from 'react'
import SectionHeader from '../component/SectionHeader'
import { Outlet } from 'react-router-dom'

function TeamLayout() {
  return (
    <>
    <SectionHeader 
    title = "LINE-UP'S"
    subtitle="CSIT ASSOCATION OF BMC"
    />
    <Outlet/>
    </>
    
  )
}

export default TeamLayout
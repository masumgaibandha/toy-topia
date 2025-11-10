import React from 'react'
import { Outlet } from 'react-router'
import Navbar from '../component/Navbar'
import Footer from '../pages/Footer'

const MainLayout = () => {
  return (
    <>
    <Navbar/>
      <Outlet />
    <Footer/>
    </>
  )
}

export default MainLayout
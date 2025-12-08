import React from 'react'
import Navbar from '../GeneralComponents/Navbar'
import { Outlet } from 'react-router-dom'
import TopNavbar from '../GeneralComponents/TopNavbar'

function MainLayout() {
  return <>
    <TopNavbar />
    <Navbar />
    <Outlet />
  </>
}

export default MainLayout

import React from 'react'
import Navbar from '../components/Navbar'
import MainFooter from '../components/MainFooter'
import { Outlet } from 'react-router-dom'

function MainLayout() {
  return <>
    <Navbar />
    <Outlet />
    <MainFooter />
</>
}

export default MainLayout

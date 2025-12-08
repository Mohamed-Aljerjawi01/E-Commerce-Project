import React from 'react'
import TopNavbar from './GeneralComponents/TopNavbar'
import Navbar from './GeneralComponents/Navbar'
import { RouterProvider } from 'react-router-dom'
import router from './Route'

function App() {
  return <>
    <RouterProvider router={router} />
  </>
}

export default App

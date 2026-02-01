import Footer from '../GeneralComponents/Footer'
import Navbar from '../GeneralComponents/Navbar'
import TopNavbar from '../GeneralComponents/TopNavbar'
import { Outlet } from 'react-router-dom'

function MainLayout() {
  return <>
    <TopNavbar />
    <Navbar />
    <Outlet />
    <Footer />
  </>
}

export default MainLayout

import React from 'react'
import { Outlet } from 'react-router-dom'
import LoginFooter from '../components/LoginFooter'

function LoginLayout() {
  return <>
    <Outlet />
    <LoginFooter />
  </>
}

export default LoginLayout

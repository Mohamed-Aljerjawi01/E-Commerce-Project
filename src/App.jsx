import React from 'react'
import TopNavbar from './GeneralComponents/TopNavbar'
import Navbar from './GeneralComponents/Navbar'
import { RouterProvider } from 'react-router-dom'
import router from './Route'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { AuthContextProvider } from './Context/MyContext'

function App() {
  const queryClient = new QueryClient()

  return <>
    <QueryClientProvider client={queryClient}>
      <AuthContextProvider>
        <RouterProvider router={router} />
      </AuthContextProvider>
    </QueryClientProvider>
  </>
}

export default App

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
      
    {/* ********** Start Lecture Sixteen ********** */}
      <AuthContextProvider>
    {/* ********** End Lecture Sixteen ********** */}

        <RouterProvider router={router} />

    {/* ********** Start Lecture Sixteen ********** */}
      </AuthContextProvider>
    {/* ********** End Lecture Sixteen ********** */}

    </QueryClientProvider>
  </>
}

export default App

// قمنا بجعل المكون RouterProvider
// بداخل المكون AuthContextProvider
// وذلك لأنني أريد إرسال تلك البيانات المرجعة من الفنكشن AuthContextProvider
// والتي هي بداخل الملف MyContext
// لجميع المكونات الموجودة بداخل ال router

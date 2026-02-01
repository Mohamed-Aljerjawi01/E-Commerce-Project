import { RouterProvider } from 'react-router-dom'
import router from './Route'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
// import { AuthContextProvider } from './Context/MyContext'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import DirectionManage from './LanguageSettings/DirectionManage';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material';
import getTheme from './Theme';
import { useAuthStore } from './Store/MyStore';

function App() {
  const mode = useAuthStore(state=> state.mode);

  const queryClient = new QueryClient()

  return <>
    <QueryClientProvider client={queryClient}>
      <DirectionManage />
      <ReactQueryDevtools />
      {/* <AuthContextProvider> */}
      <ThemeProvider theme={getTheme(mode)}>
        <CssBaseline />
        <RouterProvider router={router} />
      </ThemeProvider>
      {/* </AuthContextProvider> */}
    </QueryClientProvider>
  </>
}

export default App

// قمنا بجعل المكون RouterProvider
// بداخل المكون AuthContextProvider
// وذلك لأنني أريد إرسال تلك البيانات المرجعة من الفنكشن AuthContextProvider
// والتي هي بداخل الملف MyContext
// لجميع المكونات الموجودة بداخل ال router

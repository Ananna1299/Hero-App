import { createBrowserRouter } from 'react-router'
import MainLayout from '../Layouts/MainLayout'
import ErrorPage from '../Pages/ErrorPage'
import Home from '../Pages/Home'
import Apps from '../Pages/Apps'
import Installation from '../Pages/Installation'


// named export
const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    hydrateFallbackElement: <p>Loading...</p>,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: '/App',
        element: <Apps />,
      },
      {
        path: '/installation',
        element: <Installation />,
      },
      
    ],
  },
  
])

export default router

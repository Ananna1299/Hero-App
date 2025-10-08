import { createBrowserRouter } from 'react-router'
import MainLayout from '../Layouts/MainLayout'
import ErrorPage from '../Pages/ErrorPage'
import Home from '../Pages/Home'
import Apps from '../Pages/Apps'
import Installation from '../Pages/Installation'
import AppDetails from '../Pages/AppDetails'


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
        path: '/app',
        element: <Apps />,
      },
      {
        path: '/installation',
        element: <Installation />,
      },
      {
        path:'/app/:id',
        element:<AppDetails/>

      }
      
    ],
  },
  
])

export default router

import {createHashRouter, Navigate} from "react-router-dom"
import React from 'react'

const Layout = React.lazy(() => import('@/views/Layout'))
const NotFound = React.lazy(() => import('@/components/NotFound'))
const Home = React.lazy(() => import('@/views/Home'))
const Entire = React.lazy(() => import('@/views/Entire'))

const router = createHashRouter([
  {
    path: "/",
    element: <Navigate to={"/home"}/>
  },
  {
    path: '/',
    element: <Layout/>,
    children: [
      {
        path: 'home',
        element: <Home/>
      },
      {
        path: 'entire',
        element: <Entire/>
      }
    ]
  },
  {
    path: '*',
    element: <NotFound/>
  }
])

export default router
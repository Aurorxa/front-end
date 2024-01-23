import {createBrowserRouter} from "react-router-dom"
import React from 'react'

const Layout = React.lazy(() => import('@/views/Layout'))
const NotFound = React.lazy(() => import('@/components/NotFound'))
const Month = React.lazy(() => import('@/views/Layout/Month'))
const Year = React.lazy(() => import('@/views/Layout/Year'))
const New = React.lazy(() => import('@/views/New'))

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout/>,
    children: [
      {
        index: true,
        element: <Month/>
      },
      {
        path: 'year',
        element: <Year/>
      }
    ]
  },
  {
    path: '/new',
    element: <New/>
  },
  {
    path: '*',
    element: <NotFound/>
  }
])

export default router
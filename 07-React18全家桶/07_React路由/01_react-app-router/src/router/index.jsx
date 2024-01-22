import Home from "@/components/Home";
import About from "@/components/About";
import News from "@/components/News";
import Message from "@/components/Message";
import React from "react";
import {createHashRouter, Navigate} from "react-router-dom"
import NotFound from "@/components/NotFound"
import Layout from "@/components/Layout"
import NewsDetail from "@/components/NewsDetail";
import MessageDetail from "@/components/MessageDetail"

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
        path: "home",
        element: <Home/>
      },
      {
        path: "about",
        element: <About/>,
        children: [
          {
            path: "news",
            element: <News/>,
            children: [
              {
                path: "newsDetail/:id/:title/:content",
                element: <NewsDetail/>
              }
            ]
          },
          {
            path: "message",
            element: <Message/>,
            children: [
              {
                path: "messageDetail",
                element: <MessageDetail/>
              }
            ]
          }
        ]
      },
    ]
  },
  {
    path: "*",
    element: <NotFound/>
  },
])

export default router
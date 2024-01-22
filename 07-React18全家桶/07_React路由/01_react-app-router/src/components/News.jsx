import React, {memo, useState} from 'react'
import {NavLink, Outlet} from "react-router-dom";

function News() {
  const [message] = useState("我是 News 组件");
  const [news] = useState([
    {id: '001', title: '标题001', content: '内容001'},
    {id: '002', title: '标题002', content: '内容002'},
    {id: '003', title: '标题003', content: '内容003'},
    {id: '004', title: '标题004', content: '内容004'},
  ])
  return (
    <div>
      <h2>{message}</h2>
      {
        news.map(item => {
          return (
            <div key={item.id}>
              <NavLink to={`newsDetail/${item.id}/${item.title}/${item.content}`}>{item.title}</NavLink>
            </div>
          )
        })
      }
      <hr/>
      {/* 三级路由出口 */}
      <Outlet/>
    </div>
  )
}


export default memo(News)
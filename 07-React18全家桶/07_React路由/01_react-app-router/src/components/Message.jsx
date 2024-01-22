import React, {memo, useState} from 'react'
import {NavLink, Outlet, useNavigate} from "react-router-dom"


function Message() {
  const [message] = useState("我是 Message 组件")
  const [messages] = useState([
    {id: '001', title: '标题001', content: '内容001'},
    {id: '002', title: '标题002', content: '内容002'},
    {id: '003', title: '标题003', content: '内容003'},
  ])
  
  const navigate = useNavigate()
  
  const showDetail = ({id, title, content}) => {
    navigate("messageDetail", {
      state: {id, title, content},
      replace: false
    })
  }
  
  return (
    <div>
      <h2>{message}</h2>
      {
        messages.map(item => {
          return (
            <div key={item.id}>
              <NavLink
                to="messageDetail"
                state={{
                  id: item.id,
                  title: item.title,
                  content: item.content,
                }}
              >
                {item.title}
              </NavLink>
              <button onClick={() => showDetail(item)}>查看详情</button>
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

export default memo(Message)
import React, {memo} from 'react'
import {useLocation} from "react-router-dom"

function MessageDetail() {
  
  const {state: {id, title, content}} = useLocation()
  
  return (
    <div>
      <h2>消息内容详情</h2>
      <div>
        <p>消息编号: {id}</p>
        <p>消息标题: {title}</p>
        <p>消息内容: {content}</p>
      </div>
    </div>
  )
}

export default memo(MessageDetail)
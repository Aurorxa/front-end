import React, {memo} from 'react'
import {useParams} from "react-router-dom"

function NewsDetail() {
  
  const {id, title, content} = useParams()
  
  return (
    <div>
      <h2>新闻内容详情</h2>
      <div>
        <p>新闻编号: {id}</p>
        <p>新闻标题: {title}</p>
        <p>新闻内容: {content}</p>
      </div>
    </div>
  )
}

export default memo(NewsDetail)
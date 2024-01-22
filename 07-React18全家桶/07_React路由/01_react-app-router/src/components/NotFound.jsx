import React, {memo, useState} from 'react'

function NotFound() {
  const [message] = useState("我是 NotFound 组件");
  return (
    <div>
      <h2>{message}</h2>
    </div>
  )
}

export default memo(NotFound)
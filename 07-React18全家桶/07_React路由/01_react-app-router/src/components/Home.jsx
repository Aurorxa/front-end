import React, {memo, useState} from 'react'

function Home() {
  const [message] = useState("我是 Home 组件");
  return (
    <div>
      <h2>{message}</h2>
    </div>
  )
}

export default memo(Home)
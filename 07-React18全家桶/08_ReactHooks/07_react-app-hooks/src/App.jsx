import {memo, useState} from "react"

import {useCommonContext} from "@/hooks";

function App() {
  const [message] = useState("我是 App 组件")
  const [theme, token] = useCommonContext()
  
  return (
    <div>
      <div style={{background: theme?.background, padding: '20px'}}>
        <h2>{message}</h2>
        <h3>{token?.username}</h3>
      </div>
    </div>
  )
}

export default memo(App)
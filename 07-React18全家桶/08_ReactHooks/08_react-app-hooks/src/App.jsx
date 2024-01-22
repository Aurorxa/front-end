import {memo, useState} from "react"
import {useScrollPosition} from "@/hooks"

function App() {
  const [message] = useState("我是 App 组件")
  
  const [scrollX, scrollY] = useScrollPosition()
  
  return (
    <div>
      <div style={{background: 'pink', padding: '20px', height: '3000px', width: '2000px'}}>
        <h2>{message}</h2>
        <h3 style={{
          position: 'fixed'
        }}>X: {scrollX} - Y: {scrollY}</h3>
      </div>
    </div>
  )
}

export default memo(App)
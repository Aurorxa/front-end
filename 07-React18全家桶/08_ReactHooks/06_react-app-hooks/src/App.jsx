import {memo, useState} from "react"
import Counter from "@/components/Counter"
import HelloWorld from "@/components/HelloWorld"

function App() {
  const [message] = useState("我是 App 组件")
  const [show, setShow] = useState(true)
  
  return (
    <div>
      <div style={{background: 'pink', padding: '20px'}}>
        <h2>{message}</h2>
        <button onClick={() => setShow(!show)}>切换</button>
        <div style={{background: 'skyblue', padding: '20px', marginTop: '20px'}}>
          {show && <Counter/>}
        </div>
        <div style={{background: 'orange', padding: '20px', marginTop: '20px'}}>
          {show && <HelloWorld/>}
        </div>
      </div>
    </div>
  )
}

export default memo(App)
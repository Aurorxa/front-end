import {useState} from "react"
import {useLoggingLifeCycle} from "@/hooks";

function Counter() {
  const [message] = useState("我是 Counter 组件")
  const [count, setCount] = useState(0)
  
  useLoggingLifeCycle("Counter")
  return (
    <div>
      <h2>{message}</h2>
      <h2>当前计数为：{count}</h2>
      <button onClick={() => setCount(count + 1)}>点击+1</button>
    </div>
  )
}

export default Counter
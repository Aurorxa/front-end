import {memo, useState} from "react"

function CounterFunction() {
  
  const [count, setCount] = useState(0)
  
  return (
    <div>
      <h2>当前计数为：{count}</h2>
      <button onClick={() => setCount(count + 1)}>点我+1</button>
    </div>
  )
}

export default memo(CounterFunction)
import {memo, useState} from "react"

function Counter() {
  const [count, setCount] = useState(0)
  
  const increment = () => {
    setCount(count + 1)
  }
  
  return (
    <div>
      <h3>当前计数为：{count}</h3>
      <button onClick={increment}>点我+1</button>
    </div>
  )
}

export default memo(Counter)
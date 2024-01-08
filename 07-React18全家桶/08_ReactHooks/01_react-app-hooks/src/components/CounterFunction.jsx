import {memo, useEffect, useState} from "react"

function CounterFunction() {
  
  const [count, setCount] = useState(0)
  
  useEffect(() => {
    document.title = `函数式组件：点击了 ${count} 次`
  })
  
  
  return (
    <div>
      <h2>函数式组件，当前计数为：{count}</h2>
      <button onClick={() => setCount(count + 1)}>点我+1</button>
    </div>
  )
}

export default memo(CounterFunction)
import {memo, useMemo, useState} from "react"

function calculateTotal(num) { // 计算和
  let total = 0;
  for (let i = 0; i < num; i++) {
    total += i;
  }
  console.log('calculateTotal')
  return total;
}

function App() {
  const [count, setCount] = useState(0)
  
  const result = useMemo(() => {
    return calculateTotal(100)
  }, [])
  
  return (
    <div>
      <div style={{background: 'pink'}}>
        <h2>当前计数为：{count}</h2>
        <h3>计算结果：{result}</h3>
        <button onClick={() => setCount(count + 1)}>点我+1</button>
      </div>
    </div>
  )
}

export default memo(App)


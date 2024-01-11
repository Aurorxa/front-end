import {forwardRef, memo, useImperativeHandle, useRef, useState} from "react"


const Counter = memo(forwardRef((props, ref) => {
  const [message] = useState("我是 Counter 组件")
  const [count, setCount] = useState(0)
  
  const handleClick = () => {
    setCount(count + 1)
  }
  
  useImperativeHandle(ref, () => {
    return {
      handleClick: handleClick
    }
  }, [handleClick])
  
  return (
    <div ref={ref}>
      <h2>{message}</h2>
      <h2>当前计数为：{count}</h2>
      <button onClick={handleClick}>点击+1</button>
    </div>
  )
}))

function App() {
  const [message] = useState("我是 App 组件")
  const counterRef = useRef(null)
  
  
  const handleClick = () => {
    counterRef.current.handleClick()
  }
  
  return (
    <div>
      <div style={{background: 'pink', padding: '20px'}}>
        <h2>{message}</h2>
        <button onClick={handleClick}>点我+1</button>
        <div style={{background: 'skyblue', padding: '20px', marginTop: '20px'}}>
          <Counter ref={counterRef}/>
        </div>
      </div>
    </div>
  )
}

export default memo(App)
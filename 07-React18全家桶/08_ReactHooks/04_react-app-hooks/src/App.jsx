import {memo, useCallback, useState} from "react"


const IncrementButton = memo(function (props) {
  const [message] = useState("我是 IncrementButton 组件")
  const {increment} = props
  console.log('IncrementButton')
  return (
    <div>
      <h2>{message}</h2>
      <button onClick={increment}>点我+1</button>
    </div>
  )
})

function App() {
  const [count, setCount] = useState(0)
  const [message, setMessage] = useState("我是 App 组件")
  
  const increment = useCallback(
    () => {
      setCount(count + 1)
    },
    [count],
  );
  
  const changeMessage = (event) => {
    console.log('App changeMessage')
    setMessage(Math.random().toString())
  }
  
  console.log('App')
  
  return (
    <div>
      <div style={{background: 'pink'}}>
        <h2>{message}</h2>
        <h3>当前计数为：{count}</h3>
        <button onClick={increment}>点我+1</button>
        <button onClick={changeMessage}>点我修改message</button>
      </div>
      <div style={{background: 'skyblue'}}>
        <IncrementButton increment={increment}/>
      </div>
    </div>
  )
}

export default memo(App)


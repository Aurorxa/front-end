import React from 'react'
import Counter from "@/components/Counter"
import CounterContext from "@/context/CounterContext";

class App extends React.Component {
  
  state = {
    message: '我是 App 组件',
    count: 100
  }
  
  render() {
    const {message, count} = this.state
    console.log('App', this)
    return (
      <div style={{backgroundColor: 'pink', width: "500px", padding: '5px', border: "1px solid black"}}>
        <h2>{message}</h2>
        <h3>当前计数为：<span style={{color: 'red'}}>{count}</span></h3>
        {/* 在 App 组件中，将 count 传递下去，因为 App 组件是生产者 */}
        <CounterContext.Provider value={count}>
          <Counter/>
        </CounterContext.Provider>
      </div>
    )
  }
  
}

export default App
import React from 'react'
import CounterContext from "@/context/CounterContext";

class Counter extends React.Component {
  
  
  state = {
    message: '我是 Counter 组件'
  }
  
  increment(num) {
  
  }
  
  render() {
    const {message} = this.state
    console.log('Counter', this)
    return (
      <div style={{backgroundColor: 'skyblue', padding: '5px', border: "1px solid black"}}>
        <h2>{message}</h2>
        {/* 通过 Context.Consumer 获取 */}
        <CounterContext.Consumer>
          {value => (<h2>当前计数为：{value} </h2>)}
        </CounterContext.Consumer>
        <button onClick={() => this.increment(1)}>点我+1</button>
        <button onClick={() => this.increment(5)}>点我+5</button>
        <button onClick={() => this.increment(10)}>点我+10</button>
      </div>
    )
  }
}

export default Counter
import React from 'react'
import emitter from '@/utils/mitts'

class Counter extends React.Component {
  
  state = {
    message: '我是 Counter 组件'
  }
  
  increment(num) {
    // 发送数据
    emitter.emit('counter', num)
  }
  
  render() {
    const {message} = this.state
    return (
      <div style={{backgroundColor: 'skyblue', padding: '5px', border: "1px solid black"}}>
        <h2>{message}</h2>
        <button onClick={() => this.increment(1)}>点我+1</button>
        <button onClick={() => this.increment(5)}>点我+5</button>
        <button onClick={() => this.increment(10)}>点我+10</button>
      </div>
    )
  }
}

export default Counter
import React from 'react'
import Counter from "@/components/Counter"
import emitter from '@/utils/mitts'

class App extends React.Component {
  
  state = {
    message: '我是 App 组件',
    count: 100
  }
  
  render() {
    const {message, count} = this.state
    return (
      <div style={{backgroundColor: 'pink', width: "500px", padding: '5px', border: "1px solid black"}}>
        <h2>{message}</h2>
        <h3>当前计数为：<span style={{color: 'red'}}>{count}</span></h3>
        <Counter/>
      </div>
    )
  }
  
  componentDidMount() {
    // 监听事件
    emitter.on('counter', (num) => {
      // 更新数据
      this.setState({
        count: this.state.count + num
      })
    })
  }
  
  componentWillUnmount() {
    emitter.all.clear()
  }
}

export default App
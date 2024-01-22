import React from 'react'
import {flushSync} from "react-dom";

class App extends React.Component {
  
  state = {
    message: 'Hello React'
  }
  
  change() {
    
    flushSync(() => {
      // 第二个参数传入回调函数
      this.setState({message: "Hello React18"}, () => {
        // 可以获取数据更新在之后的结果
        console.log('change', this.state.message) // change Hello React18
      })
    })
 
    console.log(this.state.message) // Hello React18
  }
  
  render() {
    return (
      <div>
        <h2>{this.state.message}</h2>
        <button onClick={() => this.change()}>改变文本</button>
      </div>
    )
  }
}

export default App
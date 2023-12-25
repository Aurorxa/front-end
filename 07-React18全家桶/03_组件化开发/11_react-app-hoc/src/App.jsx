import React, {PureComponent} from 'react'
import {Modal} from "@/components/Modal"
import '@/App.css'
import {createPortal} from "react-dom";

class App extends PureComponent {
  
  state = {
    message: '我是 App 组件',
  }
  
  showModal() {
    createPortal(<Modal/>, document.querySelector('body'))
  }
  
  render() {
    return (
      <div className="container">
        <div className="content">
          <h2>{this.state.message}</h2>
          <button onClick={() => this.showModal()}>点我，显示模态框</button>
        </div>
      </div>
    )
  }
}

// 使用高阶组件
export default App
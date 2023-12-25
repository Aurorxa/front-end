import React, {PureComponent} from 'react'
import Cart from "@/components/Cart"

class App extends PureComponent {
  
  state = {
    message: '我是 App 组件',
  }
  render() {
    return (
      <div style={{backgroundColor: 'pink', padding: '10px', width: '500px'}}>
        <h2>{this.state.message}</h2>
        <Cart/>
      </div>
    )
  }
}

// 使用高阶组件
export default App
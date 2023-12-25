import React, {PureComponent} from 'react'
import Profile from "@/components/Profile"
import Home from "@/components/Home"
import About from "@/components/About"

class App extends PureComponent {
  
  state = {
    message: '我是 App 组件'
  }
  
  render() {
    const {message} = this.state;
    return (
      <div style={{backgroundColor: 'pink',padding: '10px',width: '500px'}}>
        <h2>{message}</h2>
        <Home name={"home"}/>
        <Profile name={"profile"}/>
        <About/>
      </div>
    )
  }
}

// 使用高阶组件
export default App
import React, {PureComponent} from 'react'
import {AppWrapper} from "@/App.style"
import Home from "@/components/Home";


class App extends PureComponent {
  
  state = {
    message: '我是 App 组件',
  }
  
  render() {
    const {message} = this.state
    return (
      <AppWrapper>
        <div className="appWrapper-title">{message}</div>
        <Home/>
      </AppWrapper>
    )
  }
}

export default App
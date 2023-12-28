import React, {PureComponent} from 'react'
import {AppWrapper, Button, NewButton} from "@/App.style"


class App extends PureComponent {
  
  state = {
    message: '我是 App 组件',
  }
  
  render() {
    return (
      <AppWrapper>
        <Button>正常的按钮</Button>
        <NewButton>新的按钮</NewButton>
      </AppWrapper>
    )
  }
}

export default App
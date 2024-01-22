import React, {PureComponent} from 'react'
import '@/App.css'
import Home from "@/components/Home"

class App extends PureComponent {
  
  state = {
    message: '我是 App 组件'
  }
  
  
  render() {
    const {message} = this.state
    return (
      <div className={"app"} style={{background: 'pink',padding:'5px'}}>
        <h2>{message}</h2>
        <div className="title">我是 App 组件中的标题</div>
        <Home/>
      </div>
    )
  }
}

export default App
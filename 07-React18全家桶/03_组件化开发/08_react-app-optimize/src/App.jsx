import React, {PureComponent} from 'react'
import Header from "@/components/Header"
import Main from "@/components/Main"
import Footer from "@/components/Footer"

class App extends PureComponent {
  
  constructor(props) {
    super(props);
    this.state = {
      message: "我是 App 组件",
      count: 1
    }
  }
  
  add() {
    const {count} = this.state
    this.setState({count: count + 1})
  }
  
  render() {
    const {message, count} = this.state
    console.log('App render')
    return (
      <div style={{backgroundColor: 'pink', width: "500px", padding: '5px', border: "1px solid black"}}>
        <h2>{message}</h2>
        <h2>当前计数为：{count}</h2>
        <button onClick={() => this.add()}>+1</button>
        <Header/>
        <Main/>
        <Footer/>
      </div>
    )
  }
}

export default App
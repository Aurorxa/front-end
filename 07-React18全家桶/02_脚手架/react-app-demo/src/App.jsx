import React from 'react'
import logo from '@/logo.svg'

class App extends React.Component{
  
  state = {
    message: 'Hello React'
  }
  
  render() {
    return (
      <div>
        <h2>{this.state.message}</h2>
        <img src={logo} alt="哈哈"/>
      </div>
    )
  }
}

export default App
import React from 'react'

class App extends React.Component{
  
  state = {
    message: 'Hello React'
  }
  
  render() {
    return (
      <div>
        <h2>{this.state.message}</h2>
      </div>
    )
  }
}

export default App
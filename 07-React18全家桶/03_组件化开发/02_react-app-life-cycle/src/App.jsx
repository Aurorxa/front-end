import React from 'react'
import Clock from "@/components/Clock"


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isShow: true
    }
  }
  
  change() {
    this.setState({
      isShow: !this.state.isShow
    })
  }
  
  render() {
    const {isShow} = this.state
    console.log(this)
    return (
      <div>
        <button onClick={() => this.change()}>切换</button>
        {isShow && <Clock/>}
      </div>
    )
  }
  
  
}

export default App
import React, {PureComponent} from 'react'

class App extends PureComponent {
  
  state = {
    isHot: true,
    backgroundColor: 'red'
  }
  
  change() {
    this.setState({
      isHot: !this.state.isHot,
      backgroundColor: this.state.isHot ? 'green' : 'red'
    })
  }
  
  render() {
    const {isHot, backgroundColor} = this.state
    return (
      <div>
        <button onClick={() => this.change()}>
          切换天气
        </button>
        <h1>今天天气{isHot ? <span style={{backgroundColor}}>炎热</span> :
          <span style={{backgroundColor}}>凉爽</span>}</h1>
      </div>
    )
  }
}

export default App
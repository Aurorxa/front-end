import {PureComponent} from "react"

class CounterClass extends PureComponent {
  
  state = {
    count: 0
  }
  
  add() {
    this.setState({
      count: this.state.count + 1
    })
  }
  
  render() {
    const {count} = this.state
    return (
      <div>
        <h2>类式组件，当前计数为：{count}</h2>
        <button onClick={() => this.add()}>点我+1</button>
      </div>
    )
  }
}

export default CounterClass
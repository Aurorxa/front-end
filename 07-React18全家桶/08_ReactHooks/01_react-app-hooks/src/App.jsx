import React, {PureComponent} from 'react'
import CounterClass from "@/components/CounterClass"
import CounterFunction from "@/components/CounterFunction"

class App extends PureComponent {
  
  state = {}
  
  render() {
    return (
      <div>
        <div style={{background: 'pink', padding: "20px"}}>
          <CounterClass/>
        </div>
        <div style={{background: 'skyblue', padding: "20px"}}>
          <CounterFunction/>
        </div>
      </div>
    )
  }
}

export default App


import React, {PureComponent} from 'react'
import Counter from "@/components/Counter"
import Home from "@/components/Home"

class App extends PureComponent {
  
  render() {
    return (
      <div>
        <div style={{background: "pink", padding: '10px', width: '500px'}}>
          <Counter/>
        </div>
        <div style={{background: "skyblue", padding: '10px', width: '500px'}}>
          <Home/>
        </div>
      </div>
    )
  }
}

export default App
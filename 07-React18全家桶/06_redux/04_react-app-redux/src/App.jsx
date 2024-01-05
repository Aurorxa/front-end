import React, {PureComponent} from 'react'
import Home from "@/components/Home"

class App extends PureComponent {
  
  state = {}
  
  render() {
    return (
      <div>
        <div style={{background: "pink", padding: '10px', width: '500px'}}>
          {/*<Counter/>*/}
        </div>
        <div style={{background: "skyblue", padding: '10px', width: '500px'}}>
          {/*<Banner/>*/}
        </div>
        <div style={{background: "orange", padding: '10px', width: '500px'}}>
          <Home/>
        </div>
      </div>
    )
  }
}

export default App
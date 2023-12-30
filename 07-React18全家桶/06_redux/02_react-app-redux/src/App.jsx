import React, {PureComponent} from 'react'
import Counter from "@/components/Counter";

class App extends PureComponent {
  
  render() {
    return (
      <div>
        <div style={{background: "pink", padding: '10px', width: '500px'}}>
          <Counter/>
        </div>
      </div>
    )
  }
}

export default App
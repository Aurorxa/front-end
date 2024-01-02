import React, {PureComponent} from 'react'
import Counter from "@/components/Counter"
import Banner from "@/components/Banner"

class App extends PureComponent {
  
  state = {}
  
  render() {
    return (
      <div>
        <div style={{background: "pink", padding: '10px', width: '500px'}}>
          <Counter/>
        </div>
        <div style={{background: "skyblue", padding: '10px', width: '500px'}}>
          <Banner/>
        </div>
      </div>
    )
  }
}

export default App
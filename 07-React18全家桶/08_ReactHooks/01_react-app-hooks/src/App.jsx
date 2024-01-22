import React, {PureComponent} from 'react'
import ClockFunction from "@/components/ClockFunction"

class App extends PureComponent {
  
  state = {
    isClassShow: true,
    isFunctionShow: true,
  }
  
  render() {
    const {isClassShow, isFunctionShow} = this.state
    return (
      <div>
        <div style={{background: 'skyblue', padding: "20px"}}>
          {isFunctionShow && <ClockFunction/>}
        </div>
      </div>
    )
  }
}

export default App


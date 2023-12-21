import React from 'react'
import Tabs from "@/components/Tabs";

class App extends React.Component {
  
  state = {
    titles: ['流行', '新款', '精选'],
    tabIndex: 0
  }
  
  activeTabIndex(index){
    this.setState({
      tabIndex: index
    })
  }
  
  render() {
    const {titles, tabIndex} = this.state
    return (
      <div style={{padding: '20px'}}>
        <Tabs titles={titles} tabClick={(index) => this.activeTabIndex(index)}/>
        <h2>{titles[tabIndex]}</h2>
      </div>
    )
  }
}

export default App
import React from 'react'
import '@/components/Tabs.css'

class Tabs extends React.Component {
  
  state = {
    currentIndex: 0
  }
  
  itemClick(index){
    this.setState({
      currentIndex: index
    })
    
    const {tabClick} = this.props
    tabClick(index)
  }
  
  render() {
    const {titles} = this.props
    const {currentIndex} = this.state
    return (
      <div>
        <ul className="tabs">
          {
            titles.map((item, index) => <li key={index} className={currentIndex === index ? 'active' : ''} onClick={() => this.itemClick(index)}>
              <span className="text">{item}</span>
            </li>)
          }
        </ul>
      </div>
    )
  }
}

export default Tabs
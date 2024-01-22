import React from 'react'
import '@/components/NavBar.css'

class Navbar extends React.Component {
  
  state = {
    message: '我是 NavBar 组件'
  }
  
  render() {
    console.log('Navbar', this, this.state.message, this.props)
    const {titles,itemType} = this.props
    return (
      <div className={"nav-bar"}>
        <div className="left">{itemType(titles[0])}</div>
        <div className="center">{itemType(titles[1])}</div>
        <div className="right">{itemType(titles[2])}</div>
      </div>
    )
  }
}

export default Navbar
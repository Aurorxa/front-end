import React, {PureComponent} from 'react'

class Header extends PureComponent {
  
  constructor(props) {
    super(props);
    this.state = {
      message: "我是 Header 组件"
    }
  }
  
  render() {
    const {message} = this.state
    console.log('Header render')
    return (
      <div style={{backgroundColor: 'skyblue', padding: '5px', border: "1px solid black"}}>
        <h2>{message}</h2>
      </div>
    )
  }
  
}

export default Header
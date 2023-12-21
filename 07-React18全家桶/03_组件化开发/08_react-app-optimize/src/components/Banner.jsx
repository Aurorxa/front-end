import React, {PureComponent} from 'react'

class Banner extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      message: "我是 Banner 组件"
    }
  }
  
  render() {
    const {message} = this.state
    console.log('Banner render')
    return (
      <div style={{backgroundColor: 'mediumseagreen', padding: '5px', marginBottom: '20px', border: "1px solid black"}}>
        <h2>{message}</h2>
      </div>
    )
  }
  
}

export default Banner
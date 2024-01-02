import React, {PureComponent} from 'react'

class Banner extends PureComponent {
  
  state = {
    message: '我是 Banner 组件',
  }
  
  render() {
    const {message} = this.state
    return (
      <div>
        <h2>{message}</h2>
      </div>
    )
  }
}

export default Banner
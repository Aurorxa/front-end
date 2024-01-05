import React, {PureComponent} from 'react'


class Home extends PureComponent {
  
  state = {
    message: '我是 Home 组件 '
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

export default Home
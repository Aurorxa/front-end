import React, {PureComponent} from 'react'


class About extends PureComponent {
  
  state = {
    message: '我是 About 组件 '
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

export default About
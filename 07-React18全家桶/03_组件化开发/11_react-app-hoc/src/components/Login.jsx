import React, {Component} from 'react'

class Login extends Component {
  
  state = {
    message: '我是 Cart 组件',
  }
  render() {
    return (
      <div style={{backgroundColor: 'saddlebrown', padding: '10px'}}>
        <h2>请登录</h2>
      </div>
    )
  }
}

export default Login
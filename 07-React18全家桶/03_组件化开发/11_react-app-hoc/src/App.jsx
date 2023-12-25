import React, {PureComponent} from 'react'
import Cart from "@/components/Cart"

class App extends PureComponent {
  
  state = {
    message: '我是 App 组件',
    isLogin: false
  }
  
  btnLogin() {
    localStorage.setItem('token', 'token')
    this.setState({
      isLogin: true
    })
  }
  
  btnLogout() {
    localStorage.removeItem('token')
    this.setState({
      isLogin: false
    })
  }
  
  render() {
    const {isLogin} = this.state
    return (
      <div style={{backgroundColor: 'pink', padding: '10px', width: '500px'}}>
        <h2>{this.state.message}</h2>
        {!isLogin ? <button onClick={() => this.btnLogin()}>登录</button> :
          <button onClick={() => this.btnLogout()}>注销</button>}
        <Cart/>
      </div>
    )
  }
}

// 使用高阶组件
export default App
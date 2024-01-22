import React from 'react'

class App extends React.PureComponent {
  
  usernameRef = null;
  passwordRef = null;
  
  handleSubmit(event) {
    event.preventDefault()
    const {usernameRef, passwordRef} = this
    console.log('handleSubmit', usernameRef.value, passwordRef.value)
  }
  
  render() {
    return (
      <div>
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <div>
            {/* 非受控组件中，通过 ref 获取 DOM 节点上表单的数据 */}
            <label htmlFor="username">
              用户名：<input type="text" id="username" ref={el => this.usernameRef = el}
                           defaultValue={"admin"}/>
            </label>
          </div>
          <div>
            {/* 非受控组件中，通过 ref 获取 DOM 节点上表单的数据 */}
            <label htmlFor="password">
              密码：<input type="password" id="password" ref={el => this.passwordRef = el}
                          />
            </label>
          </div>
         
          <input type="submit" value="登录"/>
        </form>
      </div>
    )
  }
}

export default App
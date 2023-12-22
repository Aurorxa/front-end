import React from 'react'

class App extends React.PureComponent {
  
  state = { // ① state 中维护表单数据
    username: '',
    password: '',
    agree: true
  }
  
  handleSubmit(event) {
    // 阻止表单自动提交
    event.preventDefault()
    const {username, password} = this.state
    console.log('handleSubmit', username, password)
  }
  
  // 处理输入
  handleInput(e) {
    const name = e.target.name
    // value 需要判断下，是否是 checkbox ？如果是，就取 checked ；否则，取 value
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value
    console.log('handleInput', name, value)
    this.setState({
      [name]: value
    })
  }
  
  render() {
    const {username, password, agree} = this.state
    return (
      <div>
        {/* ② onSubmit 中阻止表单自动提交，并在对应的事件处理函数中获取 state 中的数据，然后使用 Ajax 提交到服务器中 */}
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <div>
            <label htmlFor="username">
              {/* ③ 通过 value 获取 state 中维护的数据，这样显示的值就始终是 this.state.username，这就使得 React 中的 state 成为唯一的数据源 */}
              {/* ③ 一旦用户输入数据，将自动执行 onChange 事件，这样我们就可以编写逻辑，将数据更新到 React 中的 state 中*/}
              用户名：<input type="text" name="username" id="username" value={username}
                            onChange={(e) => this.handleInput(e)}/>
            </label>
          </div>
          <div>
            <label htmlFor="password">
              密码：<input type="password" name="password" id="password" value={password}
                          onChange={(e) => this.handleInput(e)}/>
            </label>
          </div>
          <div>
            <label htmlFor="agree">
              同意：<input type="checkbox" name="agree" id="agree" checked={agree}
                          onChange={(e) => this.handleInput(e)}/>
            </label>
          </div>
          <input type="submit" value="登录"/>
        </form>
      </div>
    )
  }
}

export default App
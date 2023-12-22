import React from 'react'

class App extends React.PureComponent {
  
  state = {
    username: '',
    password: '',
    agree: true,
    hobbies: [
      {value: 'eat', text: '吃饭', isChecked: false},
      {value: 'sleep', text: '睡觉', isChecked: false},
      {value: 'play', text: '玩游戏', isChecked: true},
    ]
  }
  
  handleSubmit(event) {
    event.preventDefault()
    const {username, password, agree, hobbies} = this.state
    console.log('handleSubmit', username, password, agree, hobbies)
  }
  
  // 处理常规输入
  handleInput(e) {
    const name = e.target.name
    this.setState({
      [name]: e.target.value
    })
  }
  
  /* 处理单选 checkbox */
  handleAgree(e) {
    this.setState({
      agree: e.target.checked
    })
  }
  
  /* 处理多选 checkbox */
  handleHobbies(e, index) {
    const hobbies = [...this.state.hobbies]
    hobbies[index].isChecked = e.target.checked
    this.setState({
      hobbies
    })
  }
  
  render() {
    const {username, password, agree, hobbies} = this.state
    return (
      <div>
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <div>
            <label htmlFor="username">
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
          {/* 兴趣 */}
          <div>
            兴趣：
            {
              hobbies.map((hobby, index) => (
                <label htmlFor={hobby.value} key={index}>
                  <input type="checkbox" name={hobby.value} id={hobby.value} checked={hobby.isChecked}
                         onChange={(e) => this.handleHobbies(e, index)}/>
                  <span>{hobby.text}</span>
                </label>
              ))
            }
          </div>
          {/* 单选 */}
          <div>
            <label htmlFor="agree">
              同意：<input type="checkbox" name="agree" id="agree" checked={agree}
                          onChange={(e) => this.handleAgree(e)}/>
            </label>
          </div>
          <input type="submit" value="登录"/>
        </form>
      </div>
    )
  }
}

export default App
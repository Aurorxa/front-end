import React, {PureComponent} from 'react'
import Home from "@/components/Home"
import ThemeContext, {themes} from "@/context/themeContext"

class App extends PureComponent {
  
  state = {
    message: '我是 App 组件',
    theme: themes.light
  }
  
  changeTheme() {
    this.setState(state => ({
      theme: state.theme === themes.dark ? themes.light : themes.dark,
    }));
  }
  
  render() {
    return (
      <div style={{backgroundColor: 'pink', padding: '10px', width: '500px'}}>
        <h2>{this.state.message}</h2>
        <button onClick={() => this.changeTheme()}>切换主题</button>
        <ThemeContext.Provider value={this.state.theme}>
          <Home/>
        </ThemeContext.Provider>
      </div>
    )
  }
}

// 使用高阶组件
export default App
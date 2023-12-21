import React from 'react'
import Navbar from "@/components/NavBar";

class App extends React.Component {
  
  state = {
    message: '我是App组件',
    titles: ['返回', '标题', '搜索']
  }
  
  render() {
    const {titles} = this.state
    console.log('App', this, this.state.message)
    return (
      <div>
        {/* 在 NavBar 组件通过 props 传递 React 元素 */}
        <Navbar titles={titles} itemType={(item) => <button>{item}</button>}></Navbar>
      </div>
    )
  }
}

export default App
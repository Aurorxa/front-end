import React from 'react'

class App extends React.Component{
  
  state = {
    message: 'Hello React'
  }
  
  render() {
    // ① 返回 React 元素：通过 JSX 编写的代码就会被编译成 React.createElement ，所以返回的就是一个 React 元素。
    // return <h2>{this.state.message}</h2>
    // ② 返回数组或 fragments：这样可以返回多个元素。
    // return ["abc","cba", <h1>我是h1元素</h1>, <h2>我是h2元素</h2>]
    // ④ 字符串或数值类型：它们在 DOM 中会被渲染为文本节点。
    // return "abc"
    return "abc"
  }
}

export default App
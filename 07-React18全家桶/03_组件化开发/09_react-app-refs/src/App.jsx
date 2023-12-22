import React from 'react'

class App extends React.Component {
  
  state = {
    message: 'Hello React'
  }
  
  // ① 定义一个 Ref 变量
  h2Ref = null
  
  getH2Dom() {
    /* ③ 在 this 身上获取即可 */
    console.log('h2',this.h2Ref)
  }
  
  render() {
    return (
      <div>
        {/* ② 在 ref 中传入一个回调函数，该函数会在 DOM 被挂载的时候回调，并将当前元素作为参数，传入进来 */}
        <h2 ref={el => this.h2Ref = el}>{this.state.message}</h2>
        <button onClick={() => this.getH2Dom()}>获取 h2 元素</button>
      </div>
    )
  }
}

export default App
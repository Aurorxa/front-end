import React from 'react'
import '@/App.css'
import {CSSTransition} from "react-transition-group"

class App extends React.PureComponent{
  
  state = {
    message: '我是 App 组件',
    isShow: true
  }
  
  h2Ref = React.createRef()
  
  change(){
    this.setState({
      isShow:!this.state.isShow
    })
  }
  
  render() {
    const {isShow} = this.state
    console.log(this.h2Ref.current)
    return (
      <div>
        <button onClick={() => this.change()}>切换</button>
        {/*
          `in`：通过 `in` 属性触发进入或退出的状态；换言之，和 React 中的 state 对应。
            如果 in 为 `true` 时，则触发进入状态，会添加 `-enter`、`-enter-active` 的 class 开始执行动画，当动画执行结束后，会移除两个 class， 并且添加 `-enter-done` 的class；
            当 in 为 `false`时，则触发退出状态，会添加 `-exit`、`-exit-active` 的 class 开始执行动画，当动画执行结束后，会移除两个 class，并 且添加 `-enter-done` 的 class；
          `unmountOnExit`：退出后卸载组件。
          `classNames`：动画 class 的名称。
          `timeout`：过渡动画的事件。
          `appear`：是否在初次进入添加动画，需要和 `in` 同时为 true。
        */}
        <CSSTransition in={isShow} nodeRef={this.h2Ref} classNames="h2" timeout={2000} unmountOnExit appear>
          <h2 ref={this.h2Ref}>{this.state.message}</h2>
        </CSSTransition>
      </div>
    )
  }
}

export default App
import React, {createRef, PureComponent} from 'react'
import './App.css'
import {CSSTransition, TransitionGroup} from "react-transition-group"

class App extends PureComponent {
  
  state = {
    nums: [
      {id: 0, num: 0, nodeRef: createRef()},
      {id: 1, num: 1, nodeRef: createRef()},
      {id: 2, num: 2, nodeRef: createRef()},
      {id: 3, num: 3, nodeRef: createRef()},
      {id: 4, num: 4, nodeRef: createRef()},
      {id: 5, num: 5, nodeRef: createRef()},
    ]
  }
  
  add() {
    const nums = [...this.state.nums]
    nums.push({
      id: this.state.nums.length,
      num: this.state.nums.length,
      nodeRef: createRef()
    })
    this.setState({nums})
  }
  
  render() {
    const {nums} = this.state
    return (
      <div>
        <button onClick={() => this.add()}>增加</button>
        <TransitionGroup component="ul">
          {
            nums.map(({id,num,nodeRef}) => {
              return (
                <CSSTransition key={id} timeout={1000} classNames="item" nodeRef={nodeRef}>
                  <li key={id} ref={nodeRef}>{num}</li>
                </CSSTransition>
              )
            })
          }
        </TransitionGroup>
      
      </div>
    )
  }
}

export default App
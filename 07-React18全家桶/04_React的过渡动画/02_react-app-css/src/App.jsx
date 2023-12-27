import React, {createRef, PureComponent} from 'react'
import Register from "@/components/Regsiter"
import Login from "@/components/Login"
import {CSSTransition, SwitchTransition} from "react-transition-group"
import '@/App.css'

class App extends PureComponent {
  
  state = {
    isLogin: true
  }
  
  login2RegisterRef = createRef()
  
  render() {
    const {isLogin} = this.state
    return (
      <div>
        <button onClick={() => this.setState({isLogin: !isLogin})}>切换</button>
        <SwitchTransition mode="out-in">
          <CSSTransition key={isLogin} timeout={500} classNames={"fade"} nodeRef={this.login2RegisterRef}>
              <div style={{marginTop: '20px'}} ref={this.login2RegisterRef}>
                {isLogin ? <Login/> : <Register/>}
              </div>
          </CSSTransition>
        </SwitchTransition>
      </div>
    )
  }
}

export default App
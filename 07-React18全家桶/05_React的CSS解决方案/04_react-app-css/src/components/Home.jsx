import React, {PureComponent} from 'react'
import {HomeWrapper} from "@/components/Home.style"


class Home extends PureComponent {
  
  state = {
    message: '我是 Home 组件',
  }
  
  render() {
    const {message} = this.state
    return (
      <HomeWrapper>
        <div className="homeWrapper-title ">{message}</div>
      </HomeWrapper>
    )
  }
}

export default Home
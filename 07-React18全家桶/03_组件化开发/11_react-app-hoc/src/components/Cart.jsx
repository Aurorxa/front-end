import React, {Component} from 'react'
import {withLogin} from "@/hoc/withLogin"

class Cart extends Component {
  
  state = {
    message: '我是 Cart 组件',
  }
  
  render() {
    return (
      <div style={{backgroundColor: 'skyblue', padding: '10px'}}>
        <h2>购物车</h2>
      </div>
    )
  }
}

export default withLogin(Cart)
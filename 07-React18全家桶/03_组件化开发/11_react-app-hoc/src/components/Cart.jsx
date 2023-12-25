import React, {Component} from 'react'
import {withComputeTime} from "@/hoc/withComputeTime";

class Cart extends Component {
  
  state = {
    message: '我是 Cart 组件',
    list: [1, 2, 3, 4, 5, 6, 7],
  }
  
  render() {
    return (
      <div style={{backgroundColor: 'skyblue', padding: '10px'}}>
        <h2>购物车</h2>
        <ul>
          {
            this.state.list.map((item, index) => {
              return <li key={index}>{item}</li>
            })
          }
        </ul>
      </div>
    )
  }
}

export default withComputeTime(Cart)
import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import {addCountAction, subCountAction} from "@/store/counter"

class Counter extends PureComponent {
  
  state = {
    message: '我是 Counter 组件',
  }
  
  render() {
    const {message} = this.state
    console.log('Counter props', this.props)
    const {count, add, sub} = this.props
    return (
      <div>
        <div className={"counter"}>
          <h2>{message}</h2>
          <h3>当前计数为：{count}</h3>
          <button onClick={() => add(1)}>点我+1</button>
          <button onClick={() => sub(1)}>点我-1</button>
        </div>
      </div>
    )
  }
}

// connect(fn1,fn2) 函数的返回值是高阶组件
// 其中， fn1 是将 state 映射到 props 上，通常命名为 mapStateToProps
// 其中，fn2 是将 dispatch 映射到 props 上，通常命名为 mapDispatchToProps

const mapStateToProps = (state) => ({
  count: state.counter.count // 注意：此处是通过 state.counter.count 获取数据了
})

const mapDispatchToProps = (dispatch) => ({
  add: (num) => dispatch(addCountAction(num)),
  sub: (num) => dispatch(subCountAction(num))
})

export default connect(mapStateToProps, mapDispatchToProps)(Counter)
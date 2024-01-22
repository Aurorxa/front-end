import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import {addCountAction, subCountAction} from "@/store/actionCreators"

class Home extends PureComponent {
  
  state = {
    message: '我是 Home 组件',
  }
  
  render() {
    const {message} = this.state
    console.log('Home props', this.props)
    const {count, add, sub} = this.props
    return (
      <div>
        <h2>{message}</h2>
        <h3>当前计数为：{count}</h3>
        <button onClick={() => add(1)}>点我+1</button>
        <button onClick={() => add(5)}>点我+5</button>
        <button onClick={() => add(10)}>点我+10</button>
        <button onClick={() => sub(1)}>点我-1</button>
        <button onClick={() => sub(5)}>点我-5</button>
        <button onClick={() => sub(10)}>点我-10</button>
      </div>
    )
  }
}

// connect(fn1,fn2) 函数的返回值是高阶组件
// 其中， fn1 是将 state 映射到 props 上，通常命名为 mapStateToProps
// 其中，fn2 是将 dispatch 映射到 props 上，通常命名为 mapDispatchToProps

const mapStateToProps = (state) => ({
  count: state.count
})

const mapDispatchToProps = (dispatch) => ({
  add: (num) => dispatch(addCountAction(num)),
  sub: (num) => dispatch(subCountAction(num))
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)
import {PureComponent} from "react"
import {connect} from "@/hoc"
import {decrement, increment} from "@/store/counter"

class Home extends PureComponent {
  
  state = {
    message: '我是 Home 组件',
  }
  
  render() {
    const {message} = this.state
    console.log('Home', this.props)
    const {count, add, sub} = this.props
    return (
      <div>
        <h2>{message}</h2>
        <h3>当前计数为：{count}</h3>
        <button onClick={() => add(1)}>点我+1</button>
        <button onClick={() => sub(1)}>点我-1</button>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  count: state.counter.count
})

const mapDispatchToProps = (dispatch) => ({
  add: (num) => dispatch(increment(num)),
  sub: (num) => dispatch(decrement(num))
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)
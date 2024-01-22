import {memo, useReducer} from "react"

const initialState = {count: 0} // 初始化 state

function reducer(state, action) { // reducer
  switch (action.type) {
    case "increment":
      return {count: state.count + 1}
    case "decrement":
      return {count: state.count - 1}
    case "incrementByAmount":
      return {count: state.count + action.payload}
    default:
      return state
  }
}

function Counter() {
  
  const [state, dispatch] = useReducer(reducer, initialState);
  
  return (
    <div>
      <h3>当前计数为：{state.count}</h3>
      <button onClick={() => dispatch({type: 'increment'})}>点我+1</button>
      <button onClick={() => dispatch({type: 'decrement'})}>点我-1</button>
      <button onClick={() => dispatch({type: 'incrementByAmount', payload: 5})}>点我+5</button>
    </div>
  )
}

export default memo(Counter)
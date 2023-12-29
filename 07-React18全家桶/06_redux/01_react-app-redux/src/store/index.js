import {createStore} from "redux"

// 初始化的 state
const initialState = {
  count: 0
}

/**
 * 定义 reducer 纯函数
 * @param state 当前的 state
 * @param action 本次需要更新的 action
 * @return store 中存储的 state
 */
const reducer = (state = initialState, action) => {
  console.log('reducer', state, action)
  switch (action.type) {
    case 'INCREMENT':
      const newRes = {
        ...state,
        count: state.count + action.payload
      }
      console.log('newRes', newRes)
      return newRes
    case 'DECREMENT':
      return {
        ...state,
        count: state.count - action.payload
      }
    default: {
      return state
    }
  }
}

const store = createStore(reducer)

export default store
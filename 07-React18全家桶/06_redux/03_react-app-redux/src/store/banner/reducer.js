import * as ActionTypes from './constant'

// 初始化的 state
const initialState = {
  banners: []
}

/**
 * 定义 reducer 纯函数
 * @param state 当前的 state.js
 * @param action 本次需要更新的 action
 * @return store 中存储的 state.js
 */
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.ADD_BANNER:
      return {
        ...state,
        banners: action.payload
      }
    default: {
      return state
    }
  }
}

export default reducer
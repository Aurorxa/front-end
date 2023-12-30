import * as ActionTypes from './constant'
// 初始化的 state
const initialState = {
  count: 0,
  banners: []
}
/**
 * 定义 reducer 纯函数
 * @param state 当前的 state
 * @param action 本次需要更新的 action
 * @return store 中存储的 state
 */
export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.ADD_COUNTER:
      const newRes = {
        ...state,
        count: state.count + action.payload
      }
      console.log('newRes', newRes)
      return newRes
    case ActionTypes.SUB_COUNTER:
      return {
        ...state,
        count: state.count - action.payload
      }
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
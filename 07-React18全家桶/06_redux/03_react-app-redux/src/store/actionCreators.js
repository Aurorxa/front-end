import * as ActionTypes from './constant'

/**
 * 添加计数器
 * @param payload
 * @returns {{payload, type: string}} 返回 Action
 */
export const addCountAction = (payload) => ({
  type: ActionTypes.ADD_COUNTER,
  payload
})

/**
 * 减少计数器
 * @param payload
 * @returns {{payload, type: string}} 返回 Action
 * */
export const subCountAction = (payload) => ({
  type: ActionTypes.SUB_COUNTER,
  payload
})

/**
 * 添加轮播图
 * @param payload
 * @returns {{payload, type: string}}
 */
export const addBannerAction = (payload) => ({
  type: ActionTypes.ADD_BANNER,
  payload
})

/**
 * 异步添加轮播图
 */
export const addAsyncBannerAction = () => {
  return (dispatch, getState) => {
    console.log('addAsyncBannerAction', getState())
    setTimeout(() => {
      dispatch(addBannerAction(["banner1", "banner2", "banner3", "banner4"]))
    }, 2000)
  }
}

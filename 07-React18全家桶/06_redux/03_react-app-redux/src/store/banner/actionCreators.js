import * as ActionTypes from './constant'

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
    // 执行异步逻辑操作
    console.log('addAsyncBannerAction', getState())
    setTimeout(() => {
      dispatch(addBannerAction(["banner1", "banner2", "banner3", "banner4"]))
    }, 2000)
  }
}

import {createSlice} from "@reduxjs/toolkit"

export const addAsyncBanner = () => {
  return (dispatch, getState) => {
    // 执行异步逻辑操作
    console.log('addAsyncBannerAction', getState())
    setTimeout(() => {
      dispatch(addBanner(["banner1", "banner2", "banner3", "banner4"]))
    }, 2000)
  }
}

const bannerSlice = createSlice({
  name: 'banner',
  initialState: {
    banners: [],
  },
  reducers: { // 同步
    addBanner(state, action) {
      state.banners = action.payload
    }
  }
})


export const {addBanner} = bannerSlice.actions
export default bannerSlice.reducer
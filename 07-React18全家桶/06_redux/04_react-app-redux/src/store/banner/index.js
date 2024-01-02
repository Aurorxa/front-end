import {createAsyncThunk, createSlice} from "@reduxjs/toolkit"

export const fetchAsyncBannerAction = createAsyncThunk('banner/fetchAsyncBanner', async () => {
  return await new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(["banner1", "banner2", "banner3", "banner4"])
    }, 1000)
  })
})

const bannerSlice = createSlice({
  name: 'banner',
  initialState: {
    banners: []
  },
  reducers: {
    addBanner(state, action) {
      state.banners.push(action?.payload)
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAsyncBannerAction.fulfilled, (state, action) => {
        state.banners = action.payload
      })
  }
})


export const {addBanner} = bannerSlice.actions
export default bannerSlice.reducer
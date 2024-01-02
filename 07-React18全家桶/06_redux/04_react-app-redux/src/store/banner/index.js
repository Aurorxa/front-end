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
    banners: [],
    status: 'idle', // status: 'idle' | 'loading' | 'succeeded' | 'failed'
    loading: false,
    error: null //  error: string | null
  },
  reducers: { // 同步
    addBanner(state, action) {
      state.banners.push(action?.payload)
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAsyncBannerAction.pending, (state) => {
        state.status = 'loading'
        state.loading = true
      })
      .addCase(fetchAsyncBannerAction.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.loading = false
        state.banners = action.payload
      })
      .addCase(fetchAsyncBannerAction.rejected, (state, action) => {
        state.status = 'failed'
        state.loading = false
        state.error = action?.error?.message
      })
  }
})


export const {addBanner} = bannerSlice.actions
export default bannerSlice.reducer
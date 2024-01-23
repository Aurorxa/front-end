import {configureStore} from "@reduxjs/toolkit"
import CommonReducer from "@/store/common"

const store = configureStore({
  reducer: {
    common: CommonReducer
  },
  devTools: process.env.NODE_ENV !== 'production'
})

export default store
import {configureStore} from "@reduxjs/toolkit"
import CommonReducer from "@/store/common"

const store = configureStore({
  reducer: {
    common: CommonReducer
  }
})

export default store
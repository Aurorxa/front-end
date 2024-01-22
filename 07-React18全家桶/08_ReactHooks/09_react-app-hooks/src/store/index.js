import {configureStore} from "@reduxjs/toolkit";
import counterReducer from "@/store/counter"
import bannerReducer from "@/store/banner"

const store = configureStore({
  reducer: {
    counter: counterReducer,
    banner: bannerReducer
  }
})

export default store
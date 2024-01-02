import {configureStore} from "@reduxjs/toolkit"
import counterReducer from "./counter"
import bannerReducer from "./banner"

// 通过 configureStore 创建 store 对象
const store = configureStore({
  reducer: {
    counter: counterReducer,
    banner: bannerReducer
  },
  devTools: true // 开启 Redux DevTools ，默认为 true
})

export default store
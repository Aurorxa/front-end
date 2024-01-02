import {configureStore} from "@reduxjs/toolkit"
import counterReducer from "./counter"

// 通过 configureStore 创建 store 对象
const store = configureStore({
  reducer: {
    counter: counterReducer
  },
  devTools: true // 开启 Redux DevTools ，默认为 true
})

export default store
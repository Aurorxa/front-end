import {configureStore} from "@reduxjs/toolkit"
import HomeReducer from '@/store/home'

const store = configureStore({
  reducer: {
    home: HomeReducer
  }
})

export default store
import {configureStore} from "@reduxjs/toolkit"
import postReducer from "@/store/post"
import userReducer from '@/store/user'

const store = configureStore({
  reducer: {
    post: postReducer,
    user: userReducer
  }
})

export default store

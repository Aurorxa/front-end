import bannerReducer from "@/store/banner"
import counterReducer from "@/store/counter"
import {combineReducers} from "redux";

// 合并 reducer
const combination = combineReducers({
  counter: counterReducer,
  banner: bannerReducer
})

export default combination
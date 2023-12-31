import {applyMiddleware, createStore} from "redux"
import thunkMiddleware from "redux-thunk"
import {reducer} from "@/store/reducers"

// 创建 Store 对象
const store = createStore(reducer, applyMiddleware(thunkMiddleware))

export default store
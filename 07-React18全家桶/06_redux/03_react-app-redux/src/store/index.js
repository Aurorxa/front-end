import {applyMiddleware, createStore} from "redux"
import {thunk} from "redux-thunk"
import {composeWithDevTools} from '@redux-devtools/extension'
import {reducer} from "@/store/reducers"

// 创建 Store 对象
const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)))

export default store
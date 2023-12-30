import {createStore} from "redux"
import {reducer} from "@/store/reducers"

// 创建 Store 对象
const store = createStore(reducer)

export default store
import {applyMiddleware, createStore} from "redux"
import {thunk} from "redux-thunk"
import {composeWithDevToolsDevelopmentOnly} from '@redux-devtools/extension'
import combination from "@/store/reducers"

const composeEnhancers = composeWithDevToolsDevelopmentOnly({
  trace: true // 跟踪源码
});

// 创建 Store 对象
const store = createStore(combination, composeEnhancers(applyMiddleware(thunk)))

export default store
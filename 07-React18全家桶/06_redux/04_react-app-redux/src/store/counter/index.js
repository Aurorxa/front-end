import {createSlice} from "@reduxjs/toolkit"

const counterSlice = createSlice({
  name: 'counter', // 用户标记的 slice 的名称
  initialState: { // 初始化值
    count: 0
  },
  reducers: { // 相当于之前的 reducer 函数，即 reducer(state=initialState,action) {}；是对象类型，可以添加很多函数
    increment(state, action) { // 相当于之前的 case 语句
      return {
        ...state,
        count: state.count + action.payload
      }
    },
    decrement: (state, action) => { // 相当于之前的 case 语句
      return {
        ...state,
        count: state.count - action.payload
      }
    }
  }
})

export const {increment, decrement} = counterSlice.actions
export default counterSlice.reducer




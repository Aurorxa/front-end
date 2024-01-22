import React, {memo, useState} from 'react'
import {useDispatch, useSelector} from "react-redux"
import {decrement, increment} from "@/store/counter"

function Counter() {
  const [message] = useState("我是 Counter 组件")
  const count = useSelector(state => state.counter.count)
  const dispatch = useDispatch()
  
  
  console.log('Counter 渲染了')
  
  return (
    <div>
      <h2>{message}</h2>
      <h3>当前计数为：{count}</h3>
      <button onClick={() => dispatch(increment(1))}>点我+1</button>
      <button onClick={() => dispatch(decrement(1))}>点我-1</button>
    </div>
  )
}

export default memo(Counter)
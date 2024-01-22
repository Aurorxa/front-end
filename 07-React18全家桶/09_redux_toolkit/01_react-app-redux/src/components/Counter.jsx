import {memo, useState} from "react"
import {useDispatch, useSelector} from "react-redux"
import {decrement, increment, incrementByAmount, reset} from "@/store/counter"

function Counter() {
  const count = useSelector((state) => state.counter.count)
  const dispatch = useDispatch()
  
  const [incrementAmount, setIncrementAmount] = useState(0)
  
  const addValue = Number(incrementAmount) || 0
  
  const resetAll = () => {
    setIncrementAmount(0)
    dispatch(reset())
  }
  
  return (
    <div>
      <h2>当前计数为：{count}</h2>
      <div style={{margin: '10px 0'}}>
        <button onClick={() => dispatch(increment())}>点我+1</button>
        <button onClick={() => dispatch(decrement())}>点我-1</button>
      </div>
      <div>
        <input type="text" value={addValue} onChange={(e) => setIncrementAmount(Number(e.target.value))}/>
      </div>
      <div>
        <button onClick={() => dispatch(incrementByAmount(addValue))}>点我+n</button>
        <button onClick={() => resetAll()}>重置</button>
      </div>
    </div>
  )
}

export default memo(Counter)
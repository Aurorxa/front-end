import React, {memo, useEffect, useState} from "react";

function ClockFunction() {
  const [count, setCount] = useState(0)
  
  useEffect(() => {
    console.log(`修改 title ${count}`)
  }, [count])
  
  useEffect(() => {
    console.log("网络请求")
  }, []);
  
  function increment() {
    console.log(this)
    setCount(count + 1)
  }
  
  console.log("increment函数被创建");
  
  return (
    <div>
      <h2>当前计数为：{count}</h2>
      <button onClick={increment}>点我+1</button>
    </div>
  )
}

export default memo(ClockFunction)
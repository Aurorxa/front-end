import {useState} from "react"
import {useLoggingLifeCycle} from "@/hooks";

function HelloWorld() {
  const [message] = useState("我是 HelloWorld 组件")
  
  useLoggingLifeCycle("HelloWorld")
  return (
    <div>
      <h2>{message}</h2>
    </div>
  )
}

export default HelloWorld
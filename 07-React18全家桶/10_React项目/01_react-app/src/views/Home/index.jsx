import React, {memo, useEffect} from "react"
import request from "@/services/request"

function Home() {
  useEffect(() => {
    request.get("/home/highscore").then(result => {
      console.log('@@@', result)
    })
  }, []);
  
  return (
    <div>
      我是 Home 组件
    </div>
  )
}

export default memo(Home)
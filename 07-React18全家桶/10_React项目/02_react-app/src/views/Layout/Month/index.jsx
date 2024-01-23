import React, {memo} from "react"
import {NavBar} from "antd-mobile"

function Month() {
  
  return (
    <div >
      <NavBar backArrow={false}>标题</NavBar>
    </div>
  )
}

export default memo(Month)
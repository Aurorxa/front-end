import React, {memo} from "react"
import {NavBar, Toast} from "@nutui/nutui-react";

function Month() {
  
  return (
    <div>
      <NavBar>
        <span onClick={(e) => Toast.show("标题")}>
        月度收支
        </span>
      </NavBar>
    </div>
  )
}

export default memo(Month)
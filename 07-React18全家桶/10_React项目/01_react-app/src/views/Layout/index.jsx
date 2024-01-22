import React, {memo} from "react"
import {Outlet} from "react-router-dom";

function Layout() {
  return (
    <div>
      <div className={"header"}>
        我是头部
      </div>
      <div className={"content"}>
        <Outlet/>
      </div>
      <div className={"footer"}>
        我是底部
      </div>
    </div>
  )
}

export default memo(Layout)
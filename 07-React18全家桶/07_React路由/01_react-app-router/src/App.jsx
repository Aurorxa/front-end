import React, {memo} from 'react'
import {Outlet} from "react-router-dom";

function App() {
  
  return (
    <div>
      {/* 一级路由出口 */}
      <Outlet/>
    </div>
  )
}

export default memo(App)
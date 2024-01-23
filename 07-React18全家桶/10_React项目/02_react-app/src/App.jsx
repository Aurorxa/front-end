import React, {memo} from 'react'
import {Outlet} from "react-router-dom";

function App() {
  
  return (
    <div>
      <Outlet/>
    </div>
  )
}

export default memo(App)
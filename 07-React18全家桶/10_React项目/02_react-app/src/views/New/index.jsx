import React, {memo} from "react"
import {NavBar} from "antd-mobile"
import {useNavigate} from "react-router-dom"

function New() {
  const navigate = useNavigate()
  const back = () => {
    navigate(-1)
  }
  
  return (
    <div>
      <NavBar back='返回' onBack={back}>
        标题
      </NavBar>
    </div>
  )
}

export default memo(New)
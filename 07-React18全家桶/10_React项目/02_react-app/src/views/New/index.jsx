import React, {memo} from "react"
import {useNavigate} from "react-router-dom"
import {ArrowLeft} from "@nutui/icons-react"
import {NavBar, Toast} from "@nutui/nutui-react"

function New() {
  const navigate = useNavigate()
  const back = () => {
    navigate(-1)
  }
  
  return (
    <div>
      <NavBar
        back={
          <>
            <ArrowLeft color="#979797"/>
            返回
          </>
        }
        onBackClick={back}
      >
        <span onClick={(e) => Toast.show("标题")}>
        新增订单
        </span>
      </NavBar>
    </div>
  )
}

export default memo(New)
import React, {memo, useEffect} from "react"
import {Outlet, useNavigate} from "react-router-dom"
import {useDispatch} from "react-redux";
import {fetchBillList} from "@/store/common"
import {Calendar, Find, ZoomIn} from "@nutui/icons-react";
import {Tabbar} from "@nutui/nutui-react";

function Layout() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  
  useEffect(() => {
    dispatch(fetchBillList())
  }, [dispatch])
  
  
  return (
    <div>
      <Outlet/>
      <Tabbar fixed onSwitch={(value) => {
        switch (value) {
          case 0:
            navigate("/")
            break
          case 1:
            navigate("/new")
            break
          case 2:
            navigate("/year")
            break
          default:
            break
        }
      }}>
        <Tabbar.Item title="月度账单" icon={<Calendar width={20} height={20}/>}/>
        <Tabbar.Item title="记账" icon={<ZoomIn width={20} height={20}/>}/>
        <Tabbar.Item title="年度账单" icon={<Find width={20} height={20}/>}/>
      </Tabbar>
    </div>
  )
}

export default memo(Layout)
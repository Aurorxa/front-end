import React, {memo, useEffect} from "react"
import {Outlet, useNavigate} from "react-router-dom"
import {
  AddCircleOutline,
  BillOutline,
  CalculatorOutline,
} from 'antd-mobile-icons'
import {TabBar} from "antd-mobile";
import {useDispatch} from "react-redux";
import {fetchBillList} from "@/store/common"
import {LayoutWrapper} from "@/views/Layout/index.style"

function Layout() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  
  useEffect(() => {
    dispatch(fetchBillList())
  }, [dispatch])
  
  const tabs = [
    {
      key: '/',
      title: '月度账单',
      icon: <BillOutline/>,
    },
    {
      key: '/new',
      title: '记账',
      icon: <AddCircleOutline/>,
    },
    {
      key: '/year',
      title: '年度账单',
      icon: <CalculatorOutline/>,
    }
  ]
  
  const handleChange = (value) => {
    if(value){
      navigate(value)
    }
  }
  
  return (
    <LayoutWrapper>
      <div className={"container"}>
        <Outlet/>
      </div>
      <div className={"footer"}>
        <TabBar onChange={value => handleChange(value)}>
          {
            tabs.map(item => {
              return <TabBar.Item key={item.key} icon={item.icon} title={item.title}></TabBar.Item>
            })
          }
        </TabBar>
      </div>
    </LayoutWrapper>
  )
}

export default memo(Layout)
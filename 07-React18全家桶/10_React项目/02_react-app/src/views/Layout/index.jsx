import React, {memo, useEffect} from "react"
import {Outlet} from "react-router-dom"
import {
  AppOutline,
  MessageOutline,
  UnorderedListOutline,
  UserOutline,
} from 'antd-mobile-icons'
import {TabBar} from "antd-mobile";
import {useDispatch} from "react-redux";
import {fetchBillList} from "@/store/common"

function Layout() {
  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(fetchBillList())
  },[dispatch])
  
  const tabs = [
    {
      key: '/home',
      title: '首页',
      icon: <AppOutline/>,
    },
    {
      key: '/todo',
      title: '待办',
      icon: <UnorderedListOutline/>,
    },
    {
      key: '/message',
      title: '消息',
      icon: <MessageOutline/>,
    },
    {
      key: '/me',
      title: '我的',
      icon: <UserOutline/>,
    },
  ]
  
  return (
    <div>
      <Outlet/>
      <TabBar>
        {
          tabs.map(item => (
            <TabBar.Item key={item.key} icon={item.icon} title={item.title}></TabBar.Item>)
          )
        }
      </TabBar>
    </div>
  )
}

export default memo(Layout)
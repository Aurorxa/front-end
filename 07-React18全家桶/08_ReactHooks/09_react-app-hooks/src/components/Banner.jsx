import React, {memo, useState} from 'react'
import {useDispatch, useSelector} from "react-redux"
import {addAsyncBanner} from "@/store/banner"

function Banner() {
  const [message] = useState("我是 Banner 组件");
  
  const banners = useSelector(state => state.banner.banners)
  
  const dispatch = useDispatch()
  
  console.log('Banner 渲染了')
  
  return (
    <div>
      <h2>{message}</h2>
      <button onClick={() => dispatch(addAsyncBanner())}>异步获取数据</button>
      <h3>轮播图的数据：</h3>
      <ul>
        {
          banners && banners.map((item, index) => {
            return (<li key={index}>{item}</li>)
          })
        }
      </ul>
    </div>
  )
}

export default memo(Banner)
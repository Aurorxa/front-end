import React, {memo} from "react";
import {NavLink, Outlet, useNavigate} from "react-router-dom";

function Layout() {
  
  const navigate = useNavigate()
  
  const back = () => {
    navigate(-1)
  }
  
  const go = () => {
    navigate(1)
  }
  
  return (
    <div>
      
      <div className="row">
        <div className="col-xs-offset-2 col-xs-8">
          <div className="page-header">
            <h2>React Router Demo</h2>
            <button onClick={() => back()}>后退</button>
            <button onClick={() => go()}>前进</button>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-xs-2 col-xs-offset-2">
          <div className="list-group">
            {/* 原生 HTML 中，靠 <a> 标签跳转不同的页面 */}
            {/*
                <a className="list-group-item" href="./about.html">About</a>
                <a className="list-group-item active" href="./home.html">Home</a>
              */}
            {/* 在 React 中，靠路由链接实现切换组件 --- 编写路由链接 */}
            <NavLink className="list-group-item" to="/home">Home</NavLink>
            <NavLink className="list-group-item" to="/about" end>About</NavLink>
          </div>
        </div>
        <div className="col-xs-6">
          <div className="panel">
            <div className="panel-body">
              {/* 二级路由渲染出口 */}
              <Outlet/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default memo(Layout)
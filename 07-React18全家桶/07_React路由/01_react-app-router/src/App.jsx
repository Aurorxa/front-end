import React, {PureComponent} from 'react'
import {Navigate, NavLink, Route, Routes} from "react-router-dom"
import Home from "@/components/Home"
import '@/App.css'
import About from "@/components/About"

class App extends PureComponent {
  
  state = {}
  
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-xs-offset-2 col-xs-8">
            <div className="page-header"><h2>React Router Demo</h2></div>
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
              <NavLink className="list-group-item" to="/about">About</NavLink>
            </div>
          </div>
          <div className="col-xs-6">
            <div className="panel">
              <div className="panel-body">
                {/*
                  注册路由的映射关系：path ==> Component
                */}
                <Routes>
                  <Route path={"/"} element={<Navigate to={"/home"}/>}></Route>
                  <Route path={"/home"} element={<Home/>}></Route>
                  <Route path={"/about"} element={<About/>}></Route>
                </Routes>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
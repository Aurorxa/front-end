import React, {memo, useState} from 'react'
import {NavLink, Outlet} from "react-router-dom";

function About() {
  const [message] = useState("我是 About 组件");
  return (
    <div>
      <h2>{message}</h2>
      <div>
        <ul className={"nav nav-tabs"}>
          <li>
            <NavLink className="list-group-item" to="/about/news">News</NavLink>
          </li>
          <li>
            <NavLink className="list-group-item" to="/about/message">Message</NavLink>
          </li>
        </ul>
        <Outlet/>
      </div>
    </div>
  )
}

export default memo(About)
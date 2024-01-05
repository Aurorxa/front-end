import React, {PureComponent} from 'react'
import {withRouter} from "@/hoc/withRouter"

class Home extends PureComponent {
  
  state = {
    message: '我是 Home 组件 '
  }
  
  render() {
    const {router: {navigate}} = this.props
    const {message} = this.state
    return (
      <div>
        <h2>{message}</h2>
        <button onClick={() => navigate("/about")}>跳转到 About 页面</button>
      </div>
    )
  }
}

export default withRouter(Home)
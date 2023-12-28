import React, {PureComponent} from 'react'
import HomeStyle from '@/components/Home.module.css'

class Home extends PureComponent {
  
  state = {
    message: '我是 Home 组件'
  }
  
  
  render() {
    const {message} = this.state
    return (
      <div className={"home"} style={{background: 'skyblue',padding:'5px'}}>
        <h2>{message}</h2>
        <div className={HomeStyle.title}>我是 Home 组件中的标题</div>
      </div>
    )
  }
}

export default Home
import React, {PureComponent} from 'react'
import {connect} from "@/hoc"
import {addAsyncBanner} from "@/store/banner"

class Banner extends PureComponent {
  
  state = {
    message: '我是 Banner 组件',
  }
  
  render() {
    const {message} = this.state
    console.log('Banner', this.props)
    const {banners, addBanner} = this.props
    return (
      <div>
        <h2>{message}</h2>
        <button onClick={() => addBanner()}>异步获取数据</button>
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
}

const mapStateToProps = (state) => ({
  banners: state.banner.banners
})

const mapDispatchToProps = (dispatch) => ({
  addBanner: () => dispatch(addAsyncBanner()),
})
export default connect(mapStateToProps, mapDispatchToProps)(Banner)
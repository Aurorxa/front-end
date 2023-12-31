import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import {addBannerAction} from "@/store/actionCreators"

class Banner extends PureComponent {
  
  state = {
    message: '我是 Banner 组件',
  }
  
  render() {
    const {message} = this.state
    console.log('Banner props', this.props)
    const {banners} = this.props
    return (
      <div>
        <div className={"banner"}>
          <h2>{message}</h2>
          <h3>轮播图的数据：</h3>
          <ul>
            {
              banners.map((item, index) => {
                return (<li key={index}>{item}</li>)
              })
            }
          </ul>
        </div>
      </div>
    )
  }
  
  componentDidMount() {
    setTimeout(() => {
      const {add} = this.props
      add(["banner1", "banner2", "banner3", "banner4"])
    }, 2000)
  }
}

// connect(fn1,fn2) 函数的返回值是高阶组件
// 其中， fn1 是将 state 映射到 props 上，通常命名为 mapStateToProps
// 其中，fn2 是将 dispatch 映射到 props 上，通常命名为 mapDispatchToProps

const mapStateToProps = (state) => ({
  banners: state.banners
})

const mapDispatchToProps = (dispatch) => ({
  add: (banners) => dispatch(addBannerAction(banners)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Banner)
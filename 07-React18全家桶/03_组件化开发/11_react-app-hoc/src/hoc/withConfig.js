import {PureComponent} from "react"

// 给一些需要特殊数据的组件，注入 props
export function withConfig(WrappedComponent, config) {
  class HocComponent extends PureComponent {
    render() {
      return <WrappedComponent {...this.props} {...config}/>
    }
  }
  
  HocComponent.displayName = `Hoc(${WrappedComponent.displayName || WrappedComponent.name})`
  
  return HocComponent
  
}


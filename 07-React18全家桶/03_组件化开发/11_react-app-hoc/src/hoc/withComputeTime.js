import {PureComponent} from "react";

export function withComputeTime(WrappedComponent) {
  
  class HocComponent extends PureComponent {
    
    constructor(props) {
      super(props)
      this.beingTime = new Date().getTime()
    }
    
    componentDidMount() {
      const componentName = WrappedComponent.displayName || WrappedComponent.name || 'Component';
      let renderTime = new Date().getTime() - this.beingTime
      console.log('渲染时间：', `${componentName} => ${renderTime} 毫秒`)
    }
    
    render() {
      return <WrappedComponent {...this.props} />
    }
  }
  
  HocComponent.displayName = `Hoc(${WrappedComponent.displayName || WrappedComponent.name})`
  
  return HocComponent
  
}
import {PureComponent} from "react"
import {StoreContext} from "./StoreContext"

/**
 * connect
 * @param mapStateToProps 函数
 * @param mapDispatchToProps 函数
 * @returns function(*): NewComponent
 */
export function connect(mapStateToProps, mapDispatchToProps) {
  // 高阶组件
  function fn(WrappedComponent) {
    class NewComponent extends PureComponent {
      
      static contextType = StoreContext
      
      constructor(props, context) {
        super(props, context);
        this.state = this.context.getState()
      }
      
      componentDidMount() {
        this.unSubscribe = this.context.subscribe(() => {
          this.setState(this.context.getState())
        })
      }
      
      componentWillUnmount() {
        this.unSubscribe()
      }
      
      render() {
        console.log('NewComponent', this)
        console.log('connect context', this.context)
        const stateObj = mapStateToProps(this.context.getState())
        console.log('connect state', stateObj)
        const dispatchObj = mapDispatchToProps(this.context.dispatch)
        console.log('connect dispatchObj', dispatchObj)
        return (
          <WrappedComponent {...this.props} {...stateObj} {...dispatchObj}></WrappedComponent>
        )
      }
    }
    
    return NewComponent
    
  }
  
  return fn
}


import React, {PureComponent} from 'react'

class ProductList extends PureComponent {
  
  constructor(props) {
    super(props);
    this.state = {
      message: "我是 ProductList 组件"
    }
  }
  
  render() {
    const {message} = this.state
    console.log('ProductList render')
    return (
      <div style={{backgroundColor: 'lightsalmon', padding: '5px', border: "1px solid black"}}>
        <h2>{message}</h2>
      </div>
    )
  }
  
}

export default ProductList
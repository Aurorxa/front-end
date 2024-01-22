import React, {forwardRef} from 'react'

const HelloWorld = forwardRef(function HelloWorld(props, ref) {
  
  const [message] = React.useState('我是 HelloWorld 组件')
  
  return (
    <div style={{backgroundColor: 'skyblue', padding: '5px'}}>
      <h2 ref={ref}>{message}</h2>
    </div>
  )
})

class App extends React.PureComponent {
  
  state = {
    message: '我是 App 组件'
  }
  
  helloWorldRef = React.createRef()
  
  render() {
    const {message} = this.state
    return (
      <div style={{backgroundColor: 'pink', padding: '5px', width: '500px'}}>
        <h2>{message}</h2>
        <button onClick={() => console.log(this.helloWorldRef.current)}
                style={{marginBottom: '5px'}}>
          访问 HelloWorld 组件的 h2 元素
        </button>
        <HelloWorld ref={this.helloWorldRef}/>
      </div>
    )
  }
}

export default App
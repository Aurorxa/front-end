import React from "react"

class Clock extends React.Component {
  
  constructor(props) {
    super(props)
    this.state = {
      date: new Date()
    }
  }
  
  render() {
    const {date} = this.state
    console.log(`Clock ${date.toLocaleString()}`)
    return (
      <div>{date.toLocaleString()}</div>
    )
  }
  
  componentDidMount() { // 创建定时器
    this.timer = setInterval(() => {
      this.setState({
        date: new Date()
      })
    }, 1000)
  }
  
  componentWillUnmount() { // 清除定时器
    clearInterval(this.timer)
  }
  
}

export default Clock

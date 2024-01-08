import React from "react"

class ClockClass extends React.PureComponent {
  
  constructor(props) {
    super(props)
    this.state = {
      date: new Date(),
      count: 0
    }
  }
  
  render() {
    const {date} = this.state
    console.log(`ClockClass ${date.toLocaleString()}`)
    return (
      <div>{date.toLocaleString()}</div>
    )
  }
  
  componentDidMount() {
    // 创建定时器
    this.timer = setInterval(() => {
      this.setState({
        date: new Date()
      })
    }, 1000)
    // 修改标题
    document.title = `当前计数 ${this.state?.count} `;
  }
  
  componentDidUpdate(prevProps, prevState, snapshot) {
    // 修改标题
    document.title = `当前计数 ${this.state?.count} `;
  }
  
  componentWillUnmount() {
    // 清除定时器
    clearInterval(this.timer)
  }
  
}

export default ClockClass
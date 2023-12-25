import React, {PureComponent} from 'react'
import Modal from "@/components/Modal"
import '@/App.css'

class App extends PureComponent {
  
  state = {
    message: '我是 App 组件',
    isShowModal: false,
  }
  
  showModal() {
    this.setState({
      isShowModal: true,
    })
  }
  
  closeModal() {
    this.setState({
      isShowModal: false,
    })
  }
  
  render() {
    const {isShowModal} = this.state
    return (
      <div >
        <h2>{this.state.message}</h2>
        <button onClick={() => this.showModal()}>点我，显示模态框</button>
        <div className={`${isShowModal ? 'modal-open' : ''}`}>
          {
            isShowModal && (<Modal>
              <div>
                <div>
                  <label htmlFor="username">
                    用户名：<input type="text" id="username" defaultValue={""}/>
                  </label>
                </div>
                <div>
                  <label htmlFor="password">
                    密码：<input type="password" id="password" defaultValue={""}/>
                  </label>
                </div>
              </div>
              <div>
                <button onClick={() => this.closeModal()}>关闭模态框</button>
              </div>
            </Modal>)
          }
        </div>
      </div>
    
    )
  }
}

// 使用高阶组件
export default App
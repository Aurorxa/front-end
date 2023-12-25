import {PureComponent} from "react"

export class Modal extends PureComponent {
  render() {
    return (
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        margin: 'auto',
        width: '300px',
        height: '300px',
        backgroundColor: 'rgba(0,0,0,0.5)',
        zIndex: 10000,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        <button>关闭模态框</button>
      </div>
    )
  }
}